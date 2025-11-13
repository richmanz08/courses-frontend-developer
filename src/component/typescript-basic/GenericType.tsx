"use client";

import { ResponseData } from "@/src/interface/common";
import { TerminalUI } from "../ui/TerminalUI";

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
    <div className="p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-slate-800 mb-2">
            🔧 Generic Type Examples
          </h1>
          <p className="text-gray-600">
            การใช้งาน Generic Types ใน TypeScript - ResponseData&lt;T&gt;
          </p>
        </div>
      </div>

      {/* Type Definitions */}
      <TerminalUI fileName="GenericType.tsx" name="TypeScript Generic">
        <div className="mb-6">
          <h3 className="text-green-400 font-bold mb-3">
            📝 Generic Type Definition:
          </h3>
          <div className="text-sm mb-4">
            {/* ResponseData<T> Interface */}
            <div className="mb-4">
              <span className="text-gray-500">
                {"//"} T is &quot;Generic Type Parameter&quot;
              </span>
              <div>
                <span className="text-purple-400">export</span>{" "}
                <span className="text-blue-400">interface</span>{" "}
                <span className="text-teal-400">ResponseData</span>
                <span className="text-gray-400">&lt;</span>
                <span className="text-teal-300">T</span>
                <span className="text-gray-400">&gt; {"{"}</span>
              </div>
              <div className="pl-4">
                <div>
                  <span className="text-blue-300">data</span>
                  <span className="text-gray-400">:</span>{" "}
                  <span className="text-teal-300">T</span>
                  <span className="text-gray-400">;</span>
                </div>
                <div>
                  <span className="text-blue-300">message</span>
                  <span className="text-gray-400">:</span>{" "}
                  <span className="text-teal-300">string</span>
                  <span className="text-gray-400">;</span>
                </div>
                <div>
                  <span className="text-blue-300">status</span>
                  <span className="text-gray-400">:</span>{" "}
                  <span className="text-teal-300">number</span>
                  <span className="text-gray-400">;</span>
                </div>
              </div>
              <span className="text-gray-400">{"}"}</span>
            </div>
          </div>

          <div className="bg-blue-900/30 border border-blue-500/30 rounded-lg p-4 mb-4">
            <h4 className="text-blue-300 font-bold mb-2">
              💡 Generic Type คืออะไร?
            </h4>
            <p className="text-gray-300 text-sm mb-2">
              <span className="text-teal-400">ResponseData&lt;T&gt;</span> คือ
              interface ที่รับ Type Parameter{" "}
              <span className="text-teal-300">T</span>
            </p>
            <p className="text-gray-300 text-sm">
              ทำให้เราสามารถใช้ interface เดียวกันกับข้อมูลหลายประเภทได้
            </p>
          </div>

          <h3 className="text-green-400 font-bold mb-3 mt-6">
            📋 Interface Definitions:
          </h3>
          <div className="text-sm">
            {/* IProduceListData */}
            <div className="mb-4">
              <span className="text-blue-400">interface</span>{" "}
              <span className="text-teal-400">IProduceListData</span>{" "}
              <span className="text-gray-400">{"{"}</span>
              <div className="pl-4">
                <div>
                  <span className="text-blue-300">id</span>
                  <span className="text-gray-400">:</span>{" "}
                  <span className="text-teal-300">number</span>
                  <span className="text-gray-400">;</span>
                </div>
                <div>
                  <span className="text-blue-300">name</span>
                  <span className="text-gray-400">:</span>{" "}
                  <span className="text-teal-300">string</span>
                  <span className="text-gray-400">;</span>
                </div>
                <div>
                  <span className="text-blue-300">price</span>
                  <span className="text-gray-400">:</span>{" "}
                  <span className="text-teal-300">number</span>
                  <span className="text-gray-400">;</span>
                </div>
                <div>
                  <span className="text-blue-300">category</span>
                  <span className="text-gray-400">:</span>{" "}
                  <span className="text-teal-300">string</span>
                  <span className="text-gray-400">;</span>
                </div>
                <div>
                  <span className="text-blue-300">inStock</span>
                  <span className="text-gray-400">:</span>{" "}
                  <span className="text-teal-300">boolean</span>
                  <span className="text-gray-400">;</span>
                </div>
              </div>
              <span className="text-gray-400">{"}"}</span>
            </div>

            {/* IUserProfile */}
            <div className="mb-4">
              <span className="text-blue-400">interface</span>{" "}
              <span className="text-teal-400">IUserProfile</span>{" "}
              <span className="text-gray-400">{"{"}</span>
              <div className="pl-4">
                <div>
                  <span className="text-blue-300">userId</span>
                  <span className="text-gray-400">:</span>{" "}
                  <span className="text-teal-300">number</span>
                  <span className="text-gray-400">;</span>
                </div>
                <div>
                  <span className="text-blue-300">username</span>
                  <span className="text-gray-400">:</span>{" "}
                  <span className="text-teal-300">string</span>
                  <span className="text-gray-400">;</span>
                </div>
                <div>
                  <span className="text-blue-300">avatar</span>
                  <span className="text-gray-400">:</span>{" "}
                  <span className="text-teal-300">string</span>
                  <span className="text-gray-400">;</span>
                </div>
                <div>
                  <span className="text-blue-300">memberSince</span>
                  <span className="text-gray-400">:</span>{" "}
                  <span className="text-teal-300">string</span>
                  <span className="text-gray-400">;</span>
                </div>
              </div>
              <span className="text-gray-400">{"}"}</span>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-4 mb-6">
          <h3 className="text-yellow-400 font-bold mb-3">🎯 Usage Examples:</h3>
          <div className="text-sm space-y-4">
            {/* Example 1 */}
            <div>
              <div className="text-purple-300 mb-2">
                {"//"} Example 1: Array of Objects
              </div>
              <div>
                <span className="text-blue-400">const</span>{" "}
                <span className="text-blue-300">mockUpProduceListResponse</span>
                <span className="text-gray-400">:</span>{" "}
                <span className="text-teal-400">ResponseData</span>
                <span className="text-gray-400">&lt;</span>
                <span className="text-teal-400">IProduceListData</span>
                <span className="text-gray-400">[]&gt;</span>
              </div>
            </div>
            {/* Example 2 */}
            <div>
              <div className="text-purple-300 mb-2">
                {"//"} Example 2: Single Object
              </div>
              <div>
                <span className="text-blue-400">const</span>{" "}
                <span className="text-blue-300">userProfileResponse</span>
                <span className="text-gray-400">:</span>{" "}
                <span className="text-teal-400">ResponseData</span>
                <span className="text-gray-400">&lt;</span>
                <span className="text-teal-400">IUserProfile</span>
                <span className="text-gray-400">&gt;</span>
              </div>
            </div>

            {/* Example 3 */}
            <div>
              <div className="text-purple-300 mb-2">
                {"//"} Example 3: Primitive Type
              </div>
              <div>
                <span className="text-blue-400">const</span>{" "}
                <span className="text-blue-300">welcomeResponse</span>
                <span className="text-gray-400">:</span>{" "}
                <span className="text-teal-400">ResponseData</span>
                <span className="text-gray-400">&lt;</span>
                <span className="text-teal-300">string</span>
                <span className="text-gray-400">&gt;</span>
              </div>
            </div>
          </div>
        </div>
      </TerminalUI>

      {/* Example Data Sections */}
      <TerminalUI fileName="GenericType.tsx" name="Array Object Example">
        {/* Example 1 Data */}
        <div className="mb-6">
          <div className="text-emerald-400 text-sm font-semibold mb-2">
            📦 Example 1: ResponseData&lt;IProduceListData[]&gt;
          </div>
          <div>
            <pre>{JSON.stringify(mockUpProduceListResponse.data, null, 2)}</pre>
          </div>
          <div className="bg-gray-800/50 rounded p-3 mb-2">
            <div className="text-xs mb-2">
              <span className="text-gray-400">Status:</span>{" "}
              <span className="text-green-400">
                {mockUpProduceListResponse.status}
              </span>
              <span className="text-gray-400 ml-4">Message:</span>{" "}
              <span className="text-gray-300">
                {mockUpProduceListResponse.message}
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
              {mockUpProduceListResponse.data.map((item) => (
                <div
                  key={item.id}
                  className="bg-gray-700/50 rounded p-2 border border-gray-600"
                >
                  <div className="flex justify-between items-start mb-1">
                    <span className="font-medium text-white text-sm">
                      {item.name}
                    </span>
                    <span
                      className={`px-2 py-0.5 rounded text-xs ${
                        item.inStock
                          ? "bg-green-500/20 text-green-400"
                          : "bg-red-500/20 text-red-400"
                      }`}
                    >
                      {item.inStock ? "In Stock" : "Out"}
                    </span>
                  </div>
                  <p className="text-xs text-gray-400 mb-1">{item.category}</p>
                  <p className="text-sm font-semibold text-emerald-400">
                    ${item.price}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </TerminalUI>
      <TerminalUI fileName="GenericType.tsx" name="Single Object">
        {/* Example 2 Data */}

        <div className="mb-6">
          <div className="text-blue-400 text-sm font-semibold mb-2">
            👤 Example 2: ResponseData&lt;IUserProfile&gt;
          </div>
          <div>
            <pre>{JSON.stringify(userProfileResponse, null, 2)}</pre>
          </div>
          <div className="bg-gray-800/50 rounded p-3 mb-2">
            <div className="text-xs mb-2">
              <span className="text-gray-400">Status:</span>{" "}
              <span className="text-green-400">
                {userProfileResponse.status}
              </span>
              <span className="text-gray-400 ml-4">Message:</span>{" "}
              <span className="text-gray-300">
                {userProfileResponse.message}
              </span>
            </div>
            <div className="flex items-center space-x-3 bg-gray-700/50 rounded p-3 border border-gray-600">
              <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                {userProfileResponse.data.username.charAt(0).toUpperCase()}
              </div>
              <div>
                <h4 className="font-medium text-white text-sm">
                  {userProfileResponse.data.username}
                </h4>
                <p className="text-xs text-gray-400">
                  ID: {userProfileResponse.data.userId} • Member since:{" "}
                  {userProfileResponse.data.memberSince}
                </p>
              </div>
            </div>
          </div>
        </div>
      </TerminalUI>
      <TerminalUI fileName="GenericType.tsx" name="TypeScript Generic">
        {/* Example 3 Data */}
        <div className="mb-4">
          <div className="text-blue-400 text-sm font-semibold mb-2">
            📝 Example 3: ResponseData&lt;string&gt;
          </div>
          <div>
            <pre>{JSON.stringify(welcomeResponse, null, 2)}</pre>
          </div>
          <div className="bg-gray-800/50 rounded p-3">
            <div className="text-xs mb-2">
              <span className="text-gray-400">Status:</span>{" "}
              <span className="text-green-400">{welcomeResponse.status}</span>
              <span className="text-gray-400 ml-4">Message:</span>{" "}
              <span className="text-gray-300">{welcomeResponse.message}</span>
            </div>
            <div className="bg-purple-500/10 border border-purple-500/30 rounded p-3 text-center">
              <p className="text-purple-300 font-medium text-sm">
                &quot;{welcomeResponse.data}&quot;
              </p>
            </div>
          </div>
        </div>
      </TerminalUI>
    </div>
  );
};
