"use client";
import { UseCallbackExample } from "@/src/component/react-hook/use-callback/UseCallback";
import { UseCallBackUseCase } from "@/src/component/react-hook/use-callback/UseCase";
import { UseEffectHookExample } from "@/src/component/react-hook/use-effect/UseEffect";
import { UseLayoutEffectUseCase } from "@/src/component/react-hook/use-layout-effect/UseCase2";
import { UseLayoutEffectExample } from "@/src/component/react-hook/use-layout-effect/UseLayoutEffect";
import { UseMemoUseCase } from "@/src/component/react-hook/use-memo/UseCase";
import { UseMemoExample } from "@/src/component/react-hook/use-memo/UseMemo";
import { UseRefUseCase } from "@/src/component/react-hook/use-ref/UseCase";
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
          {/* <TabPanel header="useState">
            <UseStateHookExample />
          </TabPanel>

          <TabPanel header="useEffect">
            <UseEffectHookExample />
          </TabPanel> */}

          <TabPanel header="useLayoutEffect">
            {/* <UseLayoutEffectExample /> */}
            <UseLayoutEffectUseCase />
          </TabPanel>

          <TabPanel header="useMemo">
            {/* <UseMemoExample /> */}
            <UseMemoUseCase />
          </TabPanel>

          <TabPanel header="useCallback">
            {/* <UseCallbackExample /> */}
            <UseCallBackUseCase />
          </TabPanel>

          <TabPanel header="useRef">
            {/* <UseRefExample /> */}
            <UseRefUseCase />
          </TabPanel>
        </TabView>
      </div>
    </div>
  );
}
