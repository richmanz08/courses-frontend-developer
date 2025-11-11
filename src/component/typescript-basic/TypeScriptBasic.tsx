"use client";
import React from "react";
import dayjs from "dayjs";
interface TypeScriptBasicProps {
  title: string;
}

interface IUserData {
  id: number; // 0, 1, -2, 1.23
  name: string; // 'Alice', 'Bob', '',
  phone?: string; // optional
  role: UserRole; // UserRole.ADMIN, UserRole.USER
  status: Status; // 'active', 'inactive', 'pending'
  address: IAddress; // optional
  loginLog: LoginLog[];
}

enum UserRole {
  ADMIN = "admin",
  USER = "user",
}

interface LoginLog {
  date: Date;
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
    loginLog: [{ date: new Date("2023-01-01"), ipAddress: "192.168.1.1" }],
  };
  return (
    <div className="flex flex-col gap-4 bg-gray-700 p-8">
      <h1>
        {title},{user.name}
      </h1>
      {user.role},{user.status},{user.address.street},{user.address.city},
      {user.address.zipCode},{user.loginLog[0].ipAddress},
      {dayjs(user.loginLog[0].date).format("YYYY MMM DD")}
    </div>
  );
};
