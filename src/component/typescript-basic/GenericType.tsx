"use client";

import { ResponseData } from "@/src/interface/common";

interface IProduceListData {
  id: number;
  name: string;
  price: number;
  category: string;
  inStock: boolean;
}

interface IUserProfile {
  userId: number;
  username: string;
  avatar: string;
  memberSince: string;
}

export const GenericTypeExampleComponent = () => {
  // Generic Type Example 1: Product List Response
  const mockUpProduceListResponse: ResponseData<IProduceListData[]> = {
    data: [
      { id: 1, name: "Apple", price: 10, category: "Fruits", inStock: true },
      { id: 2, name: "Banana", price: 5, category: "Fruits", inStock: false },
      {
        id: 3,
        name: "Carrot",
        price: 3,
        category: "Vegetables",
        inStock: true,
      },
    ],
    message: "Product list fetched successfully",
    status: 200,
  };

  // Generic Type Example 2: User Profile Response
  const userProfileResponse: ResponseData<IUserProfile> = {
    data: {
      userId: 101,
      username: "john_dev",
      avatar: "https://avatar.example.com/john.jpg",
      memberSince: "2022-01-15",
    },
    message: "User profile loaded",
    status: 200,
  };

  // Generic Type Example 3: Simple String Response
  const welcomeResponse: ResponseData<string> = {
    data: "Welcome to TypeScript Generic Types!",
    message: "Success",
    status: 200,
  };

  return (
    <div className="bg-gradient-to-br from-green-50 to-emerald-100 p-8 rounded-xl shadow-lg">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-emerald-800 mb-2">
            🔧 Generic Type Examples
          </h1>
          <p className="text-gray-600">
            การใช้งาน Generic Types ใน TypeScript - ResponseData&lt;T&gt;
          </p>
        </div>

        {/* Generic Type Explanation */}
        <div className="bg-white rounded-lg p-6 mb-6 border-l-4 border-emerald-500">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            💡 Generic Type คืออะไร?
          </h2>
          <p className="text-gray-600 mb-2">
            <code className="bg-gray-100 px-2 py-1 rounded">
              ResponseData&lt;T&gt;
            </code>
            คือ interface ที่รับ Type Parameter{" "}
            <code className="bg-gray-100 px-2 py-1 rounded">T</code>
          </p>
          <p className="text-gray-600">
            ทำให้เราสามารถใช้ interface เดียวกันกับข้อมูลหลายประเภทได้
          </p>
        </div>

        <div className="grid gap-6">
          {/* Example 1: Array of Objects */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-emerald-600 text-white p-4">
              <h3 className="text-lg font-semibold">
                📦 Example 1: ResponseData&lt;IProduceListData[]&gt;
              </h3>
              <p className="text-emerald-100 text-sm">
                Array of Product Objects
              </p>
            </div>
            <div className="p-4">
              <div className="mb-3">
                <span className="text-sm text-gray-500">Status: </span>
                <span
                  className={`px-2 py-1 rounded-full text-xs font-medium ${
                    mockUpProduceListResponse.status === 200
                      ? "bg-green-100 text-green-800"
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  {mockUpProduceListResponse.status}
                </span>
                <span className="ml-4 text-sm text-gray-600">
                  {mockUpProduceListResponse.message}
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {mockUpProduceListResponse.data.map((item) => (
                  <div
                    key={item.id}
                    className="bg-gray-50 rounded-lg p-3 border"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-medium text-gray-800">{item.name}</h4>
                      <span
                        className={`px-2 py-1 rounded-full text-xs ${
                          item.inStock
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-700"
                        }`}
                      >
                        {item.inStock ? "In Stock" : "Out of Stock"}
                      </span>
                    </div>
                    <p className="text-sm text-gray-500 mb-1">
                      {item.category}
                    </p>
                    <p className="text-lg font-semibold text-emerald-600">
                      ${item.price}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Example 2: Single Object */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-blue-600 text-white p-4">
              <h3 className="text-lg font-semibold">
                👤 Example 2: ResponseData&lt;IUserProfile&gt;
              </h3>
              <p className="text-blue-100 text-sm">Single User Object</p>
            </div>
            <div className="p-4">
              <div className="mb-3">
                <span className="text-sm text-gray-500">Status: </span>
                <span className="px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  {userProfileResponse.status}
                </span>
                <span className="ml-4 text-sm text-gray-600">
                  {userProfileResponse.message}
                </span>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold">
                    {userProfileResponse.data.username.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">
                      {userProfileResponse.data.username}
                    </h4>
                    <p className="text-sm text-gray-500">
                      User ID: {userProfileResponse.data.userId}
                    </p>
                    <p className="text-sm text-gray-500">
                      Member since: {userProfileResponse.data.memberSince}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Example 3: Primitive Type */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-purple-600 text-white p-4">
              <h3 className="text-lg font-semibold">
                📝 Example 3: ResponseData&lt;string&gt;
              </h3>
              <p className="text-purple-100 text-sm">Primitive String Type</p>
            </div>
            <div className="p-4">
              <div className="mb-3">
                <span className="text-sm text-gray-500">Status: </span>
                <span className="px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  {welcomeResponse.status}
                </span>
                <span className="ml-4 text-sm text-gray-600">
                  {welcomeResponse.message}
                </span>
              </div>
              <div className="bg-purple-50 rounded-lg p-4 text-center">
                <p className="text-lg text-purple-800 font-medium">
                  &quot;{welcomeResponse.data}&quot;
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
