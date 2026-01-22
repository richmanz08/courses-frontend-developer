import { useState } from "react";
import { ResponsiveTabCustom } from "../ui/Tab/Tab";

export const AdvanceStyle: React.FC = () => {
  const [activeKey, setActiveKey] = useState<string>("a");
  return (
    <div className="px-6 bg-gradient-to-br from-blue-50 to-cyan-100 to-indigo-100 min-h-screen pt-24">
      <ResponsiveTabCustom
        tabList={[
          {
            key: "a",
            value: "001",
            label: "Tab A",
            iconsName: "DashboardLayout",
          },
          {
            key: "b",
            value: "002",
            label: "Tab B",
            iconsName: "DashboardLayout",
          },
          {
            key: "c",
            value: "003",
            label: "Tab C",
            iconsName: "DashboardLayout",
          },
          {
            key: "d",
            value: "004",
            label: "Tab D",
            iconsName: "DashboardLayout",
          },
        ]}
        activeKey={activeKey}
        onChange={setActiveKey}
      />
    </div>
  );
};
