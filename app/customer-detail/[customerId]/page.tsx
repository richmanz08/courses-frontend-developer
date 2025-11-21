"use client";
import { CustomerDetailComponent } from "@/src/component/customer-detail/CustomerDetail";
import { useParams, useRouter } from "next/navigation";
import { BreadCrumb } from "primereact/breadcrumb";

export default function Page() {
  const router = useRouter();
  const { customerId } = useParams();

  const items = [
    {
      label: "Courses",
      command: () => router.push("/"),
    },
    {
      label: "Customer Detail",
      command: () => router.push("/customer-detail"),
    },
  ];

  const home = {
    label: "Home",
    command: () => router.push("/"),
  };

  return (
    <div>
      <BreadCrumb model={items} home={home} className="my-4" />
      <CustomerDetailComponent customerId={String(customerId)} />
    </div>
  );
}
