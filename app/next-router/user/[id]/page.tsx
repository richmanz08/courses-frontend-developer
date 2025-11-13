"use client";
import { UserRoutePageExample } from "@/src/component/next-router/UserRoutePage";
import { useParams, useRouter } from "next/navigation";
import { BreadCrumb } from "primereact/breadcrumb";

export default function Page() {
  const { id } = useParams();
  const userID = decodeURIComponent(String(id ?? "").replace(/\+/g, " "));
  const router = useRouter();
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
  ];

  const home = {
    label: "Home",
    command: () => router.push("/"),
  };
  return (
    <div className="bg-gradient-to-br from-blue-50 to-cyan-100 to-indigo-100 min-h-screen">
      <BreadCrumb model={items} home={home} />
      <UserRoutePageExample userID={userID} />
    </div>
  );
}
