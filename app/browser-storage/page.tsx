"use client";

import { CookieExample } from "@/src/component/storage-browser/Cookie";
import { LocalStorageExample } from "@/src/component/storage-browser/LocalStorage";
import { SessionExample } from "@/src/component/storage-browser/Sesstion";
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
          <TabPanel header="Cookie">
            <CookieExample />
          </TabPanel>

          <TabPanel header="Local Storage">
            <LocalStorageExample />
          </TabPanel>

          <TabPanel header="Session Storage">
            <SessionExample />
          </TabPanel>
        </TabView>
      </div>
    </div>
  );
}
