"use client";

import { QueryStringExampleComponent } from "@/src/component/next-router/QueryString";
import { useParams, useRouter } from "next/navigation";
import { BreadCrumb } from "primereact/breadcrumb";

export default function Page() {
  const { id } = useParams();
  const router = useRouter();
  const userID = decodeURIComponent(String(id ?? "").replace(/\+/g, " "));

  if (!id) {
    return <div>Invalid or missing user id</div>;
  }
  const items = [
    {
      label: "Courses",
      command: () => router.push("/"),
    },
    {
      label: "Next.js Router example",
      command: () => router.push("/next-router"),
    },
    {
      label: `router function push vs replace`,
      command: () => router.push(`/next-router/user/${userID}`),
    },
    {
      label: `Query String Example`,
    },
  ];

  const home = {
    label: "Home",
    command: () => router.push("/"),
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 to-cyan-100 to-indigo-100 min-h-screen">
      <BreadCrumb model={items} home={home} className="my-4" />
      <QueryStringExampleComponent userID={userID} />
    </div>
  );
}
