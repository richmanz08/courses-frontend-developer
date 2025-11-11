"use client";
import { NextRouterBasicExampleComponent } from "@/src/component/next-router/NextRouterBasic";
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
      label: "Next.js Router",
      command: () => router.push("/next-router"),
    },
  ];

  const home = {
    label: "Home",
    command: () => router.push("/"),
  };

  return (
    <div>
      <BreadCrumb model={items} home={home} className="my-4" />
      <NextRouterBasicExampleComponent />
    </div>
  );
}
