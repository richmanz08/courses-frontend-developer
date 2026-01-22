import { useState } from "react";
import { ResponsiveTabCustom } from "../ui/Tab/Tab";
import { TerminalUI } from "../ui/TerminalUI";

export const AdvanceStyle: React.FC = () => {
  const [activeKey, setActiveKey] = useState<string>("a");
  return (
    <div className="px-6 bg-gradient-to-br from-blue-50 to-cyan-100 to-indigo-100 min-h-screen">
      <TerminalUI name="Advance Style" fileName="AdvanceStyle.tsx">
        <div className="py-24 px-4">
          <ResponsiveTabCustom
            tabList={[
              {
                key: "a",
                value: "001",
                label: "Facebook",
                iconName: "pi-facebook",
              },
              {
                key: "b",
                value: "002",
                label: "Bitcoin",
                iconName: "pi-bitcoin",
              },
              {
                key: "c",
                value: "003",
                label: "Discord",
                iconName: "pi-discord",
              },
              {
                key: "d",
                value: "004",
                label: "Paypal",
                iconName: "pi-paypal",
              },
            ]}
            activeKey={activeKey}
            onChange={setActiveKey}
          />
        </div>
      </TerminalUI>
    </div>
  );
};
