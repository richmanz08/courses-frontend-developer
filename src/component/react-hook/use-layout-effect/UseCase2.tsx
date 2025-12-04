import { Button } from "primereact/button";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { TerminalUI } from "../../ui/TerminalUI";
import { Card } from "primereact/card";

type ScreenSize = "small" | "medium" | "large";
type ButtonSeverity = "success" | "info" | "warning";

export const UseLayoutEffectUseCase: React.FC = () => {
  const [screenSize, setScreenSize] = useState<ScreenSize>("medium");
  const [windowWidth, setWindowWidth] = useState(0);
  const [buttonSeverity, setButtonSeverity] = useState<ButtonSeverity>("info");

  React.useLayoutEffect(() => {
    const updateScreenSize = () => {
      const width = window.innerWidth;
      setWindowWidth(width);
      console.log("Current window width:", width);

      let size: ScreenSize;
      let severity: ButtonSeverity;

      if (width < 768) {
        // Mobile
        size = "small";
        severity = "success";
      } else if (width < 1024) {
        // Tablet
        size = "medium";
        severity = "info";
      } else {
        // Desktop
        size = "large";
        severity = "warning";
      }

      setScreenSize(size);
      setButtonSeverity(severity);
    };

    updateScreenSize();

    window.addEventListener("resize", updateScreenSize);

    // Cleanup function
    return () => {
      window.removeEventListener("resize", updateScreenSize);
    };
  }, []);

  useLayoutEffect(() => {
    // This effect runs after all DOM mutations
    console.log("useLayoutEffect: Screen size updated to", screenSize);
  }, [screenSize]);
  useEffect(() => {
    console.log("useEffect: Screen size updated to", screenSize);
  }, [screenSize]);

  // แสดงข้อมูลตามขนาดหน้าจอ
  const getScreenInfo = () => {
    switch (screenSize) {
      case "small":
        return {
          icon: "📱",
          label: "Mobile (< 768px)",
          color: "text-green-600",
          bgColor: "bg-green-50",
        };
      case "medium":
        return {
          icon: "💻",
          label: "Tablet (768px - 1024px)",
          color: "text-blue-600",
          bgColor: "bg-blue-50",
        };
      case "large":
        return {
          icon: "🖥️",
          label: "Desktop (> 1024px)",
          color: "text-orange-600",
          bgColor: "bg-orange-50",
        };
    }
  };

  const info = getScreenInfo();

  return (
    <div className="p-6 space-y-6">
      <TerminalUI
        name="useLayoutEffect - Screen Size Detection"
        fileName="UseCase2.tsx"
      >
        <div className="space-y-4">
          <h1 className="text-2xl font-bold text-white mb-4">
            🎯 useLayoutEffect Use Case: Screen Size Detection
          </h1>

          <div className="bg-gray-800 p-4 rounded space-y-3">
            <p className="text-gray-300 text-sm">
              ลองปรับขนาดหน้าต่าง browser (resize) แล้วดูการเปลี่ยนแปลง:
            </p>

            {/* Current Screen Info */}
            <div className={`${info.bgColor} p-4 rounded-lg`}>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{info.icon}</span>
                  <div>
                    <p className={`font-bold text-lg ${info.color}`}>
                      {info.label}
                    </p>
                    <p className="text-sm text-gray-600">
                      Current width: {windowWidth}px
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Dynamic Button */}
            <div className="pt-4 border-t border-gray-700">
              <p className="text-gray-300 text-sm mb-3">
                Button severity เปลี่ยนตามขนาดหน้าจอ:
              </p>
              <Button
                severity={buttonSeverity}
                label={`${info.icon} Screen Size: ${screenSize.toUpperCase()}`}
                className="w-full"
                size="large"
              />
            </div>
          </div>

          {/* Code Example */}
          <div className="bg-gray-900 p-4 rounded text-sm">
            <p className="text-green-400 mb-2">💡 Code Example:</p>
            <pre className="text-gray-300 overflow-x-auto">
              <code>{`React.useLayoutEffect(() => {
  const updateScreenSize = () => {
    const width = window.innerWidth;
    
    if (width < 768) {
      setButtonSeverity("success"); // 📱 Mobile
    } else if (width < 1024) {
      setButtonSeverity("info");    // 💻 Tablet
    } else {
      setButtonSeverity("warning"); // 🖥️ Desktop
    }
  };

  updateScreenSize();
  window.addEventListener("resize", updateScreenSize);
  
  return () => {
    window.removeEventListener("resize", updateScreenSize);
  };
}, []);`}</code>
            </pre>
          </div>
        </div>
      </TerminalUI>

      {/* Breakpoint Reference */}
      <Card className="bg-gradient-to-r from-purple-100 to-blue-100">
        <div className="space-y-3">
          <h3 className="font-bold text-lg text-gray-800">
            📏 Breakpoints Reference:
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded shadow-sm">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl">📱</span>
                <span className="font-semibold text-green-600">Small</span>
              </div>
              <p className="text-sm text-gray-600">&lt; 768px</p>
              <Button
                severity="success"
                label="Mobile"
                size="small"
                className="mt-2 w-full"
              />
            </div>

            <div className="bg-white p-4 rounded shadow-sm">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl">💻</span>
                <span className="font-semibold text-blue-600">Medium</span>
              </div>
              <p className="text-sm text-gray-600">768px - 1024px</p>
              <Button
                severity="info"
                label="Tablet"
                size="small"
                className="mt-2 w-full"
              />
            </div>

            <div className="bg-white p-4 rounded shadow-sm">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl">🖥️</span>
                <span className="font-semibold text-orange-600">Large</span>
              </div>
              <p className="text-sm text-gray-600">&gt; 1024px</p>
              <Button
                severity="warning"
                label="Desktop"
                size="small"
                className="mt-2 w-full"
              />
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};
