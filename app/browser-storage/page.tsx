"use client";
import { UseCallbackExample } from "@/src/component/react-hook/use-callback/UseCallback";
import { UseEffectHookExample } from "@/src/component/react-hook/use-effect/UseEffect";
import { UseLayoutEffectExample } from "@/src/component/react-hook/use-layout-effect/UseLayoutEffect";
import { UseMemoExample } from "@/src/component/react-hook/use-memo/UseMemo";
import UseRefExample from "@/src/component/react-hook/use-ref/UseRef";
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
      label: "Browser Storage",
      command: () => router.push("/browser-storage"),
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

          <TabPanel header="useMemo">
            <UseMemoExample />
          </TabPanel>

          <TabPanel header="useCallback">
            <UseCallbackExample />
          </TabPanel>

          <TabPanel header="useRef">
            <UseRefExample />
          </TabPanel>
        </TabView>
      </div>
    </div>
  );
}
