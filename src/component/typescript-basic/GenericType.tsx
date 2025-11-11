"use client";

import { ResponseData } from "@/src/interface/common";

interface IProduceListData {
  id: number;
  name: string;
  price: number;
}

export const GenericTypeExampleComponent = () => {
  const mockUpProduceListResponse: ResponseData<IProduceListData[]> = {
    data: [
      { id: 1, name: "Apple", price: 10 },
      { id: 2, name: "Banana", price: 5 },
    ],
    message: "Produce list fetched successfully",
    status: 200,
  };

  return (
    <div className="flex flex-col gap-4 bg-green-700 p-8">
      {mockUpProduceListResponse.data.map((item) => (
        <div key={item.id}>
          {item.name}: ${item.price}
        </div>
      ))}
    </div>
  );
};
