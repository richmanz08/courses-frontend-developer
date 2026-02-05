"use client";
import { GenericTypeExampleComponent } from "@/src/component/typescript-basic/GenericType";
import { InheritanceExampleComponent } from "@/src/component/typescript-basic/Inheritance";
import { TypeScriptBasicComponent } from "@/src/component/typescript-basic/TypeScriptBasic";
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
      label: "TypeScript Basic",
      command: () => router.push("/typescript-basic"),
    },
  ];

  const home = {
    label: "Home",
    command: () => router.push("/"),
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 to-cyan-100 to-indigo-100 min-h-screen">
      <BreadCrumb model={items} home={home} className="bg-inherit" />
      <TypeScriptBasicComponent title="TypeScript Basics" />
      <GenericTypeExampleComponent />
      <InheritanceExampleComponent />
    </div>
  );
}
