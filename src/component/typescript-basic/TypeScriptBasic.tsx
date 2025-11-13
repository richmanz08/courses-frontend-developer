"use client";

import React from "react";
import { TerminalUI } from "../ui/TerminalUI";

interface TypeScriptBasicProps {
  title: string;
}

interface IUserData {
  id: number; // 0, 1, -2, 1.23
  name: string; // 'Alice', 'Bob', '',
  phone?: string; // optional
  role: UserRole; // UserRole.ADMIN, UserRole.USER
  status: Status; // 'active', 'inactive', 'pending'
  address: IAddress;
  loginLog: LoginLog[];
}

enum UserRole {
  ADMIN = "admin",
  USER = "user",
}

interface LoginLog {
  date: string;
  ipAddress: string;
}

interface IAddress {
  street: string;
  city: string;
  zipCode: string | number;
}

type Status = "active" | "inactive" | "pending";

export const TypeScriptBasicComponent: React.FC<TypeScriptBasicProps> = ({
  title,
}) => {
  const user: IUserData = {
    id: 1,
    name: "Alice",
    role: UserRole.ADMIN,
    status: "active",
    address: {
      street: "123 Main St",
      city: "Wonderland",
      zipCode: "12345",
    },
    loginLog: [{ date: "2023-01-01", ipAddress: "192.168.1.1" }],
  };
  return (
    <div className="p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-slate-800 mb-2">🎯 {title}</h1>
          <p className="text-gray-600">
            ตัวอย่างการใช้งาน TypeScript พื้นฐาน - Interface, Enum, Union Types
          </p>
        </div>
      </div>
      <TerminalUI fileName="TypeScriptBasic.tsx" name="TypeScript">
        <div className="mb-6">
          <h3 className="text-green-400 font-bold mb-3">
            📝 Type Definitions:
          </h3>
          <div className="text-sm">
            {/* interface TypeScriptBasicProps */}
            <div className="mb-4">
              <span className="text-blue-400">interface</span>{" "}
              <span className="text-teal-400">TypeScriptBasicProps</span>{" "}
              <span className="text-gray-400">{"{"}</span>
              <div className="pl-4">
                <span className="text-blue-300">title</span>
                <span className="text-gray-400">:</span>{" "}
                <span className="text-teal-300">string</span>
                <span className="text-gray-400">;</span>
              </div>
              <span className="text-gray-400">{"}"}</span>
            </div>

            {/* interface IUserData */}
            <div className="mb-4">
              <span className="text-blue-400">interface</span>{" "}
              <span className="text-teal-400">IUserData</span>{" "}
              <span className="text-gray-400">{"{"}</span>
              <div className="pl-4">
                <div>
                  <span className="text-blue-300">id</span>
                  <span className="text-gray-400">:</span>{" "}
                  <span className="text-teal-300">number</span>
                  <span className="text-gray-400">;</span>{" "}
                  <span className="text-gray-500">{"// 0, 1, -2, 1.23"}</span>
                </div>
                <div>
                  <span className="text-blue-300">name</span>
                  <span className="text-gray-400">:</span>{" "}
                  <span className="text-teal-300">string</span>
                  <span className="text-gray-400">;</span>{" "}
                  <span className="text-gray-500">
                    {"// 'Alice', 'Bob', ''"}
                  </span>
                </div>
                <div>
                  <span className="text-blue-300">phone</span>
                  <span className="text-yellow-400">?</span>
                  <span className="text-gray-400">:</span>{" "}
                  <span className="text-teal-300">string</span>
                  <span className="text-gray-400">;</span>{" "}
                  <span className="text-gray-500">{/* optional */}</span>
                </div>
                <div>
                  <span className="text-blue-300">role</span>
                  <span className="text-gray-400">:</span>{" "}
                  <span className="text-teal-400">UserRole</span>
                  <span className="text-gray-400">;</span>{" "}
                  <span className="text-gray-500">
                    {/* UserRole.ADMIN, UserRole.USER */}
                  </span>
                </div>
                <div>
                  <span className="text-blue-300">status</span>
                  <span className="text-gray-400">:</span>{" "}
                  <span className="text-teal-400">Status</span>
                  <span className="text-gray-400">;</span>{" "}
                  <span className="text-gray-500">
                    {"// 'active', 'inactive', 'pending'"}
                  </span>
                </div>
                <div>
                  <span className="text-blue-300">address</span>
                  <span className="text-gray-400">:</span>{" "}
                  <span className="text-teal-400">IAddress</span>
                  <span className="text-gray-400">;</span>
                </div>
                <div>
                  <span className="text-blue-300">loginLog</span>
                  <span className="text-gray-400">:</span>{" "}
                  <span className="text-teal-400">LoginLog</span>
                  <span className="text-gray-400">[];</span>
                </div>
              </div>
              <span className="text-gray-400">{"}"}</span>
            </div>

            {/* enum UserRole */}
            <div className="mb-4">
              <span className="text-blue-400">enum</span>{" "}
              <span className="text-teal-400">UserRole</span>{" "}
              <span className="text-gray-400">{"{"}</span>
              <div className="pl-4">
                <div>
                  <span className="text-blue-300">ADMIN</span>{" "}
                  <span className="text-gray-400">=</span>{" "}
                  <span className="text-orange-300">&quot;admin&quot;</span>
                  <span className="text-gray-400">,</span>
                </div>
                <div>
                  <span className="text-blue-300">USER</span>{" "}
                  <span className="text-gray-400">=</span>{" "}
                  <span className="text-orange-300">&quot;user&quot;</span>
                  <span className="text-gray-400">,</span>
                </div>
              </div>
              <span className="text-gray-400">{"}"}</span>
            </div>

            {/* interface LoginLog */}
            <div className="mb-4">
              <span className="text-blue-400">interface</span>{" "}
              <span className="text-teal-400">LoginLog</span>{" "}
              <span className="text-gray-400">{"{"}</span>
              <div className="pl-4">
                <div>
                  <span className="text-blue-300">date</span>
                  <span className="text-gray-400">:</span>{" "}
                  <span className="text-teal-300">string</span>
                  <span className="text-gray-400">;</span>
                </div>
                <div>
                  <span className="text-blue-300">ipAddress</span>
                  <span className="text-gray-400">:</span>{" "}
                  <span className="text-teal-300">string</span>
                  <span className="text-gray-400">;</span>
                </div>
              </div>
              <span className="text-gray-400">{"}"}</span>
            </div>

            {/* interface IAddress */}
            <div className="mb-4">
              <span className="text-blue-400">interface</span>{" "}
              <span className="text-teal-400">IAddress</span>{" "}
              <span className="text-gray-400">{"{"}</span>
              <div className="pl-4">
                <div>
                  <span className="text-blue-300">street</span>
                  <span className="text-gray-400">:</span>{" "}
                  <span className="text-teal-300">string</span>
                  <span className="text-gray-400">;</span>
                </div>
                <div>
                  <span className="text-blue-300">city</span>
                  <span className="text-gray-400">:</span>{" "}
                  <span className="text-teal-300">string</span>
                  <span className="text-gray-400">;</span>
                </div>
                <div>
                  <span className="text-blue-300">zipCode</span>
                  <span className="text-gray-400">:</span>{" "}
                  <span className="text-teal-300">string</span>{" "}
                  <span className="text-blue-400">|</span>{" "}
                  <span className="text-teal-300">number</span>
                  <span className="text-gray-400">;</span>
                </div>
              </div>
              <span className="text-gray-400">{"}"}</span>
            </div>

            {/* type Status */}
            <div className="mb-4">
              <span className="text-blue-400">type</span>{" "}
              <span className="text-teal-400">Status</span>{" "}
              <span className="text-gray-400">=</span>{" "}
              <span className="text-orange-300">&quot;active&quot;</span>{" "}
              <span className="text-blue-400">|</span>{" "}
              <span className="text-orange-300">&quot;inactive&quot;</span>{" "}
              <span className="text-blue-400">|</span>{" "}
              <span className="text-orange-300">&quot;pending&quot;</span>
              <span className="text-gray-400">;</span>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-4 flex flex-col">
          <div>
            <h3 className="text-yellow-400 font-bold mb-3">
              📦 User Data Example:
            </h3>
            <pre>{JSON.stringify(user, null, 2)}</pre>
          </div>
          <div>
            <div className="bg-gray-800 p-4 rounded-lg shadow-md">
              <h4 className="text-lg font-bold mb-2">User Information</h4>
              <p>
                <span className="text-blue-300">Name:</span> {user.name}
              </p>
              <p>
                <span className="text-blue-300">Role:</span> {user.role}
              </p>
              <p>
                <span className="text-blue-300">Address:</span>{" "}
                {user.address.street}, {user.address.city},{" "}
                {user.address.zipCode}
              </p>
            </div>
          </div>
        </div>
      </TerminalUI>
    </div>
  );
};
