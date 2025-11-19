"use client";

import { TodoLodashFunction } from "@/src/component/lodash/todo";
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
      label: "Lodash",
      command: () => router.push("/lodash"),
    },
    { label: "Todo Lodash Function" },
  ];

  const home = {
    label: "Home",
    command: () => router.push("/"),
  };

  return (
    <div>
      <BreadCrumb model={items} home={home} className="my-4" />
      <TodoLodashFunction />
    </div>
  );
}
