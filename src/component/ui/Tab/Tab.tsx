import React, { useRef, useEffect, useState } from "react";

import { findIndex, map } from "lodash";

export interface ITabData {
  iconsName?: string;
  value: string;
  label: string;
  key: string;
}

interface ResponsiveTabCustomProps {
  tabList: ITabData[];
  activeKey: string;
  onChange: (value: string) => void;
}

export const ResponsiveTabCustom: React.FC<ResponsiveTabCustomProps> = ({
  activeKey,
  tabList,
  onChange,
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const activeTabRef = useRef<HTMLButtonElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [backgroundStyle, setBackgroundStyle] = useState({
    width: 0,
    left: 0,
  });

  // Calculate active tab index for animation
  const activeTabIndex = findIndex(tabList, (o) => o.key === activeKey);

  // Update background position and size based on active tab
  useEffect(() => {
    const updateBackgroundPosition = () => {
      // Use requestAnimationFrame to ensure smooth updates
      requestAnimationFrame(() => {
        if (activeTabRef.current && scrollContainerRef.current) {
          const activeButton = activeTabRef.current;

          // Use offsetLeft and offsetWidth for more accurate positioning
          // This gives us the position relative to the offsetParent (the container)
          const left = activeButton.offsetLeft;
          const width = activeButton.offsetWidth;

          setBackgroundStyle({
            left: left,
            width: width,
          });

          // Auto scroll to active tab when it changes
          activeButton.scrollIntoView({
            behavior: "smooth",
            block: "nearest",
            inline: "center",
          });
        }
      });
    };

    // Initial update with small delay to ensure DOM is ready
    const initialTimeout = setTimeout(() => {
      updateBackgroundPosition();
    }, 0);

    // Add resize observer to handle window resize
    const resizeObserver = new ResizeObserver(() => {
      updateBackgroundPosition();
    });

    // Add scroll listener to handle scroll position changes
    const handleScroll = () => {
      // Clear previous timeout
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      // Debounce the update to improve performance
      timeoutRef.current = setTimeout(() => {
        updateBackgroundPosition();
      }, 10);
    };

    const currentContainer = scrollContainerRef.current;

    if (currentContainer) {
      resizeObserver.observe(currentContainer);
      currentContainer.addEventListener("scroll", handleScroll);
    }

    // Add window resize listener as additional safety
    window.addEventListener("resize", updateBackgroundPosition);

    return () => {
      // Clear any pending timeouts
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      clearTimeout(initialTimeout);

      resizeObserver.disconnect();
      if (currentContainer) {
        currentContainer.removeEventListener("scroll", handleScroll);
      }
      window.removeEventListener("resize", updateBackgroundPosition);
    };
  }, [activeKey]);

  const mapIconTab = (iconName: string) => {
    // Map iconName to PrimeReact pi-* icon class
    const iconMap: Record<string, string> = {
      DashboardLayout: "pi pi-home",
      UserEditOutlined: "pi pi-user-edit",
      GlobalPosition: "pi pi-globe",
      Guard: "pi pi-shield",
    };
    const iconClass = iconMap[iconName] || "";
    return iconClass ? <i className={iconClass + " text-lg"} /> : <></>;
  };

  const onClickChangeTab = (action: "prev" | "next") => {
    const index = findIndex(tabList, (o) => o.key === activeKey);

    if (action === "prev") {
      if (index <= 0) return;
      onChange(tabList[index - 1].key);
    } else if (action === "next") {
      if (index >= tabList.length - 1) return;
      onChange(tabList[index + 1].key);
    }
  };

  return (
    <div className="relative flex w-full items-center gap-2">
      {/* Left Arrow */}
      <button
        type="button"
        onClick={() => onClickChangeTab("prev")}
        className="absolute left-0 z-10 w-[44px] h-[48px] px-3 text-basegray-350 bg-[#E9ECF1] rounded-8 shadow-md"
      >
        <span className="text-2xl text-amber-500">‹</span>
      </button>

      {/* Scrollable Tabs */}
      <div
        ref={scrollContainerRef}
        className="h-[48px] flex flex-1 gap-2 overflow-x-auto scroll-smooth p-1 mx-[54px] bg-[#E9ECF1] rounded-8 shadow-md justify-start sm:justify-center [&::-webkit-scrollbar]:hidden relative"
        style={{
          scrollbarWidth: "none" /* Firefox */,
          msOverflowStyle: "none" /* Internet Explorer 10+ */,
        }}
      >
        {map(tabList, (dt) => {
          const { value, label, iconsName, key } = dt;
          const isActive = activeKey === key;
          return (
            <button
              key={value}
              ref={isActive ? activeTabRef : null}
              onClick={() => onChange(key)}
              className={`flex items-center gap-2 rounded-8 px-4 py-2 text-sm font-medium whitespace-nowrap transition-colors duration-200 shrink-0 relative z-10`}
            >
              <p
                color={isActive ? "white" : "default"}
                className={`flex items-center gap-2 ${isActive ? "font-bold " : "text-gray-400"}`}
              >
                {mapIconTab(iconsName as string)}
                {label}
              </p>
            </button>
          );
        })}

        {/* Animated Background */}
        {activeTabIndex >= 0 && backgroundStyle.width > 0 && (
          <div
            className="absolute top-1 bottom-1 bg-amber-500 rounded-8 shadow transition-all duration-300 ease-in-out z-0"
            style={{
              width: `${backgroundStyle.width}px`,
              left: `${backgroundStyle.left}px`,
            }}
          />
        )}
      </div>

      {/* Right Arrow */}
      <button
        type="button"
        onClick={() => onClickChangeTab("next")}
        className="absolute right-0 z-10 w-[44px] h-[48px] px-3 text-basegray-350 bg-[#E9ECF1] rounded-8 shadow-md"
      >
        <span className="text-2xl text-amber-500">›</span>
      </button>
    </div>
  );
};
