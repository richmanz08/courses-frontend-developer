import { forEach, isNumber, isUndefined, map } from "lodash";
import React, { useEffect, useRef } from "react";

interface TableCustomUIComponentProps<T> {
  headerTable: ITableCustomUIColumnHeader<T>[];
  datalist: T[];
  activeRow?: T;
  onSelected?: (value: T) => void;
  footerData?: {
    render: (data: T[]) => React.ReactNode;
    sticky?: "right" | "left";
    bgColor?: string;
  }[];
}

export interface ITableCustomUIColumnHeader<T> {
  title: string;
  underTitle?: string;
  customRenderTitle?: React.ReactNode;
  render: (rowItem: T, idx?: number) => React.ReactNode;
  align?: "left" | "right" | "center";
  valueAlign?: "start" | "center" | "end";
  width?: number;
  sticky?: "right" | "left";
  hidden?: boolean;
  highlightText?: boolean;
}

export const TableCustomUIComponent = <T,>({
  headerTable,
  datalist,
  activeRow,
  onSelected,
  footerData,
}: TableCustomUIComponentProps<T>) => {
  const containerTableRef = useRef<HTMLDivElement>(null);
  const tableRef = useRef<HTMLTableElement>(null);

  function checkScrollbar() {
    const container = containerTableRef.current;
    const widthContainer = container?.clientWidth;
    const tableWidth = tableRef.current?.clientWidth;

    if (isNumber(tableWidth) && isNumber(widthContainer)) {
      const leftStickyElements = document.querySelectorAll(".sticky-left-cls");
      const rightStickyElements =
        document.querySelectorAll(".sticky-right-cls");

      if (widthContainer < tableWidth) {
        // Add shadows based on scroll position
        const scrollLeft = container?.scrollLeft || 0;
        const maxScroll = tableWidth - widthContainer;

        // Right shadow for left sticky columns
        forEach(leftStickyElements, function (elem) {
          if (scrollLeft > 0) {
            elem.classList.add("shadow-right");
          } else {
            elem.classList.remove("shadow-right");
          }
        });

        // Left shadow for right sticky columns
        forEach(rightStickyElements, function (elem) {
          if (scrollLeft < maxScroll) {
            elem.classList.add("shadow-left");
          } else {
            elem.classList.remove("shadow-left");
          }
        });
      } else {
        // Remove all shadows if no scroll
        forEach(leftStickyElements, function (elem) {
          elem.classList.remove("shadow-right");
        });
        forEach(rightStickyElements, function (elem) {
          elem.classList.remove("shadow-left");
        });
      }
    }
  }

  useEffect(() => {
    const containerElement = containerTableRef.current;

    const handleScroll = () => checkScrollbar();

    // Initial check
    checkScrollbar();

    // Add event listeners
    window.addEventListener("resize", handleScroll);
    containerElement?.addEventListener("scroll", handleScroll);

    // Cleanup listeners on unmount
    return () => {
      window.removeEventListener("resize", handleScroll);
      containerElement?.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      id="container-table-id"
      ref={containerTableRef}
      className="overflow-x-auto relative rounded-lg w-full"
    >
      <table className="w-full" ref={tableRef} id="table-id">
        <thead>
          <tr className="bg-primary-25">
            {map(headerTable, function (i, idx) {
              const stickyPosition = i.sticky;
              if (i.hidden) return;
              return (
                <th
                  key={`headerCol${idx + 1}`}
                  className={`p-0 ${
                    stickyPosition === "right"
                      ? "sticky right-0 bg-primary-25"
                      : stickyPosition === "left"
                      ? "sticky left-0 bg-primary-25 z-20"
                      : ""
                  }`}
                >
                  <div
                    className={`px-4 py-[12px] flex justify-between items-center gap-2 ${
                      i.width ? `min-w-[${i.width}px]` : ""
                    } ${
                      stickyPosition === "right"
                        ? "sticky-right-cls"
                        : stickyPosition === "left"
                        ? "sticky-left-cls"
                        : ""
                    }`}
                  >
                    {i.customRenderTitle ? (
                      i.customRenderTitle
                    ) : (
                      <div className="flex flex-col w-full">
                        <p
                          color="primary"
                          className={`text-gray-500 text-lg w-full ${
                            i.align ? `text-${i.align}` : ""
                          }`}
                        >
                          {i.title}
                        </p>
                        {i.underTitle && (
                          <p
                            className={`text-gray-500 text-sm mt-1 w-full ${
                              i.align ? `text-${i.align}` : ""
                            }`}
                          >
                            {i.underTitle}
                          </p>
                        )}
                      </div>
                    )}
                  </div>
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {map(datalist, function (row, rowDx) {
            const colorCls = "bg-gray-600";

            return (
              <tr
                key={`trKey${rowDx + 1}`}
                className={`border-b border-primary-50 ${colorCls} ${
                  !isUndefined(onSelected) ? "cursor-pointer" : "cursor-default"
                }`}
                onClick={function () {
                  if (onSelected) onSelected(row);
                }}
              >
                {map(headerTable, function (i, idx) {
                  const stickyPosition = i.sticky;
                  if (i.hidden) return;
                  return (
                    <td
                      key={`cel${idx + 1}`}
                      className={`p-0 h-0 ${
                        stickyPosition === "right"
                          ? `sticky right-0 ${colorCls}`
                          : stickyPosition === "left"
                          ? `sticky left-0 z-20 ${colorCls}`
                          : colorCls
                      }`}
                    >
                      <div
                        className={`px-4 py-[8px] flex items-center min-h-[48px] h-full ${
                          stickyPosition === "right"
                            ? "sticky-right-cls"
                            : stickyPosition === "left"
                            ? "sticky-left-cls"
                            : ""
                        }`}
                      >
                        <span
                          className={`${
                            i.valueAlign
                              ? `flex justify-${i.valueAlign} w-full`
                              : ""
                          } ${
                            i.highlightText
                              ? "text-primary-400 !text-semibold font-semibold text-base"
                              : ""
                          }`}
                        >
                          {i.render(row, rowDx + 1)}
                        </span>{" "}
                      </div>
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
        {footerData && footerData.length > 0 && (
          <tfoot>
            <tr className="bg-white font-medium">
              {map(footerData, function (footer, idx) {
                const stickyPosition = footer.sticky;
                const bgColor = footer.bgColor ? footer.bgColor : "bg-white";
                return (
                  <td
                    key={`footer${idx + 1}`}
                    className={`p-0 ${bgColor} ${
                      stickyPosition === "right"
                        ? "sticky right-0"
                        : stickyPosition === "left"
                        ? "sticky left-0 z-20"
                        : ""
                    }`}
                  >
                    <div
                      className={`px-4 py-[12px] flex items-center min-h-[48px] ${
                        stickyPosition === "right"
                          ? "sticky-right-cls"
                          : stickyPosition === "left"
                          ? "sticky-left-cls"
                          : ""
                      }`}
                    >
                      {footer.render(datalist)}
                    </div>
                  </td>
                );
              })}
            </tr>
          </tfoot>
        )}
      </table>
    </div>
  );
};
