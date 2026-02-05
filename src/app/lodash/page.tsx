"use client";

import { EveryLodashExample } from "@/src/component/lodash/Every";
import { FilterLodashExample } from "@/src/component/lodash/Filter";
import { FindLodashExample } from "@/src/component/lodash/Find";
import { ForEachLodashExample } from "@/src/component/lodash/ForEach";
import { GetLodashExample } from "@/src/component/lodash/Get";
import { IsEqualLodashExample } from "@/src/component/lodash/IsEqual";
import { MapLodashExample } from "@/src/component/lodash/Map";
import { OmitLodashExample } from "@/src/component/lodash/OmitAndPick";
import { ReduceLodashExample } from "@/src/component/lodash/Reduce";
import { SomeLodashExample } from "@/src/component/lodash/Some";
import { useRouter } from "next/navigation";
import { BreadCrumb } from "primereact/breadcrumb";
import { TabPanel, TabView } from "primereact/tabview";

export default function Page() {
  const router = useRouter();

  const items = [
    {
      label: "Courses",
      command: () => router.push("/"),
    },
    {
      label: "Lodash",
      command: () => router.push("/lodash"),
    },
  ];

  const home = {
    label: "Home",
    command: () => router.push("/"),
  };

  return (
    <div>
      <BreadCrumb model={items} home={home} className="my-4" />
      <TabView>
        <TabPanel header="Get">
          <GetLodashExample />
        </TabPanel>
        <TabPanel header="Map">
          <MapLodashExample />
        </TabPanel>
        <TabPanel header="Filter">
          <FilterLodashExample />
        </TabPanel>
        <TabPanel header="Find">
          <FindLodashExample />
        </TabPanel>
        <TabPanel header="Some">
          <SomeLodashExample />
        </TabPanel>
        <TabPanel header="Every">
          <EveryLodashExample />
        </TabPanel>
        <TabPanel header="ForEach">
          <ForEachLodashExample />
        </TabPanel>
        <TabPanel header="Omit & Pick">
          <OmitLodashExample />
        </TabPanel>

        <TabPanel header="Reduce">
          <ReduceLodashExample />
        </TabPanel>
        <TabPanel header="IsEqual">
          <IsEqualLodashExample />
        </TabPanel>
      </TabView>
    </div>
  );
}
