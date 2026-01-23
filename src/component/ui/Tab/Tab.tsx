import React, { useRef, useEffect, useState } from "react";

import { findIndex, map } from "lodash";
import { ActionButton, ButtonTabControl } from "./ButtonControl.tab";
import { ButtonTab } from "./Button.tab";
import { AnimatedBackground } from "./AnimateBackground.tab";
import { ScrollContainer } from "./ScrollContainer";

export interface ITabData {
  iconName?: string;
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

  // Update background position and size based on active tab
  useEffect(() => {
    const updateBackgroundPosition = () => {
      // Use requestAnimationFrame to ensure smooth updates
      requestAnimationFrame(() => {
        if (activeTabRef.current && scrollContainerRef.current) {
          const activeButton = activeTabRef.current;
          // console.log({activeButton});

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

  const onClickChangeTab = (action: ActionButton) => {
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
      <ButtonTabControl type="prev" onClick={onClickChangeTab} />
      <ScrollContainer ref={scrollContainerRef}>
        {map(tabList, (dt) => {
          const { key, label, iconName } = dt;
          const isActive = activeKey === key;
          return (
            <ButtonTab
              key={key}
              isActive={isActive}
              iconName={iconName}
              label={label}
              onChange={() => onChange(key)}
              activeTabRef={activeTabRef}
              value={key}
            />
          );
        })}

        <AnimatedBackground
          width={backgroundStyle.width}
          left={backgroundStyle.left}
        />
      </ScrollContainer>
      <ButtonTabControl type="next" onClick={onClickChangeTab} />
    </div>
  );
};
