"use client";

import React from "react";

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

        {/* TypeScript Features Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-blue-100 rounded-lg p-4 text-center">
            <div className="text-2xl mb-2">📋</div>
            <h3 className="font-semibold text-blue-800">Interface</h3>
            <p className="text-sm text-blue-600">กำหนดโครงสร้างข้อมูล</p>
          </div>
          <div className="bg-green-100 rounded-lg p-4 text-center">
            <div className="text-2xl mb-2">📊</div>
            <h3 className="font-semibold text-green-800">Enum</h3>
            <p className="text-sm text-green-600">กำหนดค่าคงที่</p>
          </div>
          <div className="bg-purple-100 rounded-lg p-4 text-center">
            <div className="text-2xl mb-2">🔀</div>
            <h3 className="font-semibold text-purple-800">Union Types</h3>
            <p className="text-sm text-purple-600">หลายประเภทในตัวเดียว</p>
          </div>
        </div>

        {/* User Data Display */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
          <div className="bg-slate-600 text-white p-4">
            <h2 className="text-xl font-semibold">👤 User Profile Data</h2>
            <p className="text-slate-200 text-sm">
              แสดงข้อมูลผู้ใช้ตาม Interface IUserData
            </p>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Basic Info */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-800 border-b pb-2">
                  📝 Basic Information
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">ID:</span>
                    <span className="font-medium text-gray-800">{user.id}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Name:</span>
                    <span className="font-medium text-gray-800">
                      {user.name}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Phone:</span>
                    <span className="font-medium text-gray-800">
                      {user.phone || "Not provided"}
                    </span>
                  </div>
                </div>

                {/* Role & Status */}
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800 mb-3">
                    🏷️ Role & Status
                  </h4>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Role (Enum):</span>
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-medium ${
                          user.role === UserRole.ADMIN
                            ? "bg-red-100 text-red-800"
                            : "bg-blue-100 text-blue-800"
                        }`}
                      >
                        {user.role}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Status (Union):</span>
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-medium ${
                          user.status === "active"
                            ? "bg-green-100 text-green-800"
                            : user.status === "inactive"
                            ? "bg-red-100 text-red-800"
                            : "bg-yellow-100 text-yellow-800"
                        }`}
                      >
                        {user.status}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Address Info */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-800 border-b pb-2">
                  🏠 Address Information
                </h3>
                <div className="bg-blue-50 rounded-lg p-4">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-blue-600">Street:</span>
                      <span className="font-medium text-blue-800">
                        {user.address.street}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-blue-600">City:</span>
                      <span className="font-medium text-blue-800">
                        {user.address.city}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-blue-600">Zip Code:</span>
                      <span className="font-medium text-blue-800">
                        {user.address.zipCode}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Login Log */}
                <div className="bg-green-50 rounded-lg p-4">
                  <h4 className="font-semibold text-green-800 mb-3">
                    📊 Latest Login Log
                  </h4>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-green-600">IP Address:</span>
                      <span className="font-mono text-sm font-medium text-green-800">
                        {user.loginLog[0].ipAddress}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-green-600">Date:</span>
                      <span className="font-medium text-green-800">
                        {user.loginLog[0].date}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Type Definitions Display */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Enum Example */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-orange-600 text-white p-4">
              <h3 className="text-lg font-semibold">📊 Enum Example</h3>
            </div>
            <div className="p-4">
              <h4 className="font-semibold text-gray-800 mb-2">
                UserRole Enum:
              </h4>
              <div className="space-y-2">
                {Object.entries(UserRole).map(([key, value]) => (
                  <div
                    key={key}
                    className="flex justify-between items-center bg-gray-50 p-2 rounded"
                  >
                    <span className="font-mono text-sm">{key}</span>
                    <span className="text-orange-600 font-medium">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Union Type Example */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-purple-600 text-white p-4">
              <h3 className="text-lg font-semibold">🔀 Union Type Example</h3>
            </div>
            <div className="p-4">
              <h4 className="font-semibold text-gray-800 mb-2">
                Status Union Type:
              </h4>
              <div className="space-y-2">
                {(["active", "inactive", "pending"] as Status[]).map(
                  (status) => (
                    <div
                      key={status}
                      className={`p-2 rounded flex justify-between items-center ${
                        user.status === status
                          ? "bg-purple-100 border-2 border-purple-300"
                          : "bg-gray-50"
                      }`}
                    >
                      <span className="font-mono text-sm">{status}</span>
                      {user.status === status && (
                        <span className="text-purple-600 text-sm font-medium">
                          ✓ Current
                        </span>
                      )}
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
