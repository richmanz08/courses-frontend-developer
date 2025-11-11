"use client";
import { UserRoutePageExample } from "@/src/component/next-router/UserRoutePage";
import { useParams } from "next/navigation";

export default function Page() {
  const { id } = useParams();
  const userID = decodeURIComponent(String(id ?? "").replace(/\+/g, " "));

  if (!id || Array.isArray(id)) {
    return <div>Invalid or missing user id</div>;
  }

  return (
    <div>
      <UserRoutePageExample userID={userID} />
    </div>
  );
}
