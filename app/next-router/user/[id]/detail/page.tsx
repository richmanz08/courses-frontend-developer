"use client";

import { QueryStringExampleComponent } from "@/src/component/next-router/QueryString";
import { useParams } from "next/navigation";

export default function Page() {
  const { id } = useParams();
  const userID = decodeURIComponent(String(id ?? "").replace(/\+/g, " "));

  if (!id) {
    return <div>Invalid or missing user id</div>;
  }

  return (
    <div>
      <QueryStringExampleComponent userID={userID} />
    </div>
  );
}
