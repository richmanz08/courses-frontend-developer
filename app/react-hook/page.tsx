"use client";
import { UseEffectHookExample } from "@/src/component/react-hook/use-effect/UseEffect";
import { UseLayoutEffectExample } from "@/src/component/react-hook/use-layout-effect/UseLayoutEffect";
import { UseStateHookExample } from "@/src/component/react-hook/use-state/UseState";
import { useRouter } from "next/navigation";
import { BreadCrumb } from "primereact/breadcrumb";
import { TabView, TabPanel } from "primereact/tabview";

export default function Page() {
  const router = useRouter();

  const items = [
    {
      label: "Courses",
      command: () => router.push("/"),
    },
    {
      label: "React Hook",
      command: () => router.push("/react-hook"),
    },
  ];

  const home = {
    label: "Home",
    command: () => router.push("/"),
  };

  return (
    <div>
      <BreadCrumb model={items} home={home} className="my-4" />

      <div className="card">
        <TabView>
          <TabPanel header="useState">
            <UseStateHookExample />
          </TabPanel>

          <TabPanel header="useEffect">
            <UseEffectHookExample />
          </TabPanel>

          <TabPanel header="useLayoutEffect">
            <UseLayoutEffectExample />
          </TabPanel>
        </TabView>
      </div>
    </div>
  );
}
