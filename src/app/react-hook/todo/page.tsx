"use client";
import { TodoReactHook } from "@/src/component/react-hook/todo";
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
      label: "React Hook",
      command: () => router.push("/react-hook"),
    },
    { label: "Todo React Hook" },
  ];

  const home = {
    label: "Home",
    command: () => router.push("/"),
  };

  return (
    <div>
      <BreadCrumb model={items} home={home} className="my-4" />
      <TodoReactHook />
    </div>
  );
}
