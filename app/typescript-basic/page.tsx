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
    <div>
      <BreadCrumb model={items} home={home} className="my-4" />
      <TypeScriptBasicComponent title="TypeScript Basics" />
      <GenericTypeExampleComponent />
      <InheritanceExampleComponent />
    </div>
  );
}
