"use client";

import { CustomHook } from "@/src/component/custom-hook/CustomHook";
import { useRouter } from "next/navigation";
import { BreadCrumb } from "primereact/breadcrumb";

export default function Page() {
  const router = useRouter();

  const items = [
    {
      label: "Courses",
      command: () => router.push("/"),
    },
    {
      label: "Next server",
      command: () => router.push("/next-server"),
    },
  ];

  const home = {
    label: "Home",
    command: () => router.push("/"),
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 to-cyan-100 to-indigo-100 min-h-screen">
      <BreadCrumb model={items} home={home} />
      <CustomHook />
    </div>
  );
}
