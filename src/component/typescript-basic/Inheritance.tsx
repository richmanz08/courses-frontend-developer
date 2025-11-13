"use client";

import { TerminalUI } from "../ui/TerminalUI";

// Base Interfaces
interface PersonData {
  id: number;
  name: string;
  email: string;
  phone?: string;
}

interface CarData {
  brand: string;
  model: string;
  year: number;
  color: string;
}

interface InsurancePolicy {
  policyNumber: string;
  coverageAmount: number;
  expiryDate: string; // Changed from Date to string to avoid hydration issues
  provider: string;
}

interface EmploymentData {
  company: string;
  position: string;
  salary: number;
  startDate: string; // Changed from Date to string to avoid hydration issues
}

// Single Inheritance
interface Employee extends PersonData {
  employeeId: string;
  department: string;
}

// Multiple Inheritance
interface CarOwner extends PersonData, CarData, InsurancePolicy {
  licenseNumber: string;
}

// Complex Multiple Inheritance
interface ExecutiveEmployee
  extends PersonData,
    EmploymentData,
    CarData,
    InsurancePolicy {
  executiveLevel: "Junior" | "Senior" | "VP" | "CEO";
  benefits: string[];
}

export const InheritanceExampleComponent = () => {
  // Single Inheritance Example
  const employee: Employee = {
    id: 1,
    name: "Alice Johnson",
    email: "alice@company.com",
    phone: "+1-555-0101",
    employeeId: "EMP001",
    department: "Engineering",
  };

  // Multiple Inheritance Example
  const carOwner: CarOwner = {
    id: 2,
    name: "Bob Smith",
    email: "bob@email.com",
    brand: "Toyota",
    model: "Camry",
    year: 2022,
    color: "Silver",
    policyNumber: "POL-123456",
    coverageAmount: 150000,
    expiryDate: "2024-12-31",
    provider: "SafeDrive Insurance",
    licenseNumber: "DL-789012",
  };

  // Complex Multiple Inheritance Example
  const executive: ExecutiveEmployee = {
    id: 3,
    name: "Carol Executive",
    email: "carol@company.com",
    phone: "+1-555-0103",
    company: "Tech Innovations Inc.",
    position: "Chief Technology Officer",
    salary: 250000,
    startDate: "2020-01-15",
    brand: "BMW",
    model: "X5",
    year: 2023,
    color: "Black",
    policyNumber: "EXEC-987654",
    coverageAmount: 500000,
    expiryDate: "2025-06-30",
    provider: "Premium Auto Insurance",
    executiveLevel: "CEO",
    benefits: [
      "Health Insurance",
      "Stock Options",
      "Company Car",
      "Executive Bonus",
    ],
  };

  return (
    <div className="p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-slate-800 mb-2">
            🏗️ Interface Inheritance Examples
          </h1>
          <p className="text-gray-600">
            การสืบทอด Interface ใน TypeScript - Single & Multiple Inheritance
          </p>
        </div>
      </div>

      <TerminalUI fileName="Inheritance.tsx" name="TypeScript Inheritance">
        <div className="mb-6">
          <h3 className="text-green-400 font-bold mb-3">
            📝 Base Interface Definitions:
          </h3>
          <div className="text-sm space-y-4">
            {/* PersonData */}
            <div>
              <span className="text-blue-400">interface</span>{" "}
              <span className="text-teal-400">PersonData</span>{" "}
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
                  <span className="text-blue-300">email</span>
                  <span className="text-gray-400">:</span>{" "}
                  <span className="text-teal-300">string</span>
                  <span className="text-gray-400">;</span>
                </div>
                <div>
                  <span className="text-blue-300">phone</span>
                  <span className="text-yellow-400">?</span>
                  <span className="text-gray-400">:</span>{" "}
                  <span className="text-teal-300">string</span>
                  <span className="text-gray-400">;</span>
                </div>
              </div>
              <span className="text-gray-400">{"}"}</span>
            </div>

            {/* CarData */}
            <div>
              <span className="text-blue-400">interface</span>{" "}
              <span className="text-teal-400">CarData</span>{" "}
              <span className="text-gray-400">{"{"}</span>
              <div className="pl-4">
                <div>
                  <span className="text-blue-300">brand</span>
                  <span className="text-gray-400">:</span>{" "}
                  <span className="text-teal-300">string</span>
                  <span className="text-gray-400">;</span>
                </div>
                <div>
                  <span className="text-blue-300">model</span>
                  <span className="text-gray-400">:</span>{" "}
                  <span className="text-teal-300">string</span>
                  <span className="text-gray-400">;</span>
                </div>
                <div>
                  <span className="text-blue-300">year</span>
                  <span className="text-gray-400">:</span>{" "}
                  <span className="text-teal-300">number</span>
                  <span className="text-gray-400">;</span>
                </div>
                <div>
                  <span className="text-blue-300">color</span>
                  <span className="text-gray-400">:</span>{" "}
                  <span className="text-teal-300">string</span>
                  <span className="text-gray-400">;</span>
                </div>
              </div>
              <span className="text-gray-400">{"}"}</span>
            </div>

            {/* EmploymentData */}
            <div>
              <span className="text-blue-400">interface</span>{" "}
              <span className="text-teal-400">EmploymentData</span>{" "}
              <span className="text-gray-400">{"{"}</span>
              <div className="pl-4">
                <div>
                  <span className="text-blue-300">company</span>
                  <span className="text-gray-400">:</span>{" "}
                  <span className="text-teal-300">string</span>
                  <span className="text-gray-400">;</span>
                </div>
                <div>
                  <span className="text-blue-300">position</span>
                  <span className="text-gray-400">:</span>{" "}
                  <span className="text-teal-300">string</span>
                  <span className="text-gray-400">;</span>
                </div>
                <div>
                  <span className="text-blue-300">salary</span>
                  <span className="text-gray-400">:</span>{" "}
                  <span className="text-teal-300">number</span>
                  <span className="text-gray-400">;</span>
                </div>
                <div>
                  <span className="text-blue-300">startDate</span>
                  <span className="text-gray-400">:</span>{" "}
                  <span className="text-teal-300">string</span>
                  <span className="text-gray-400">;</span>
                </div>
              </div>
              <span className="text-gray-400">{"}"}</span>
            </div>

            {/* InsurancePolicy */}
            <div>
              <span className="text-blue-400">interface</span>{" "}
              <span className="text-teal-400">InsurancePolicy</span>{" "}
              <span className="text-gray-400">{"{"}</span>
              <div className="pl-4">
                <div>
                  <span className="text-blue-300">policyNumber</span>
                  <span className="text-gray-400">:</span>{" "}
                  <span className="text-teal-300">string</span>
                  <span className="text-gray-400">;</span>
                </div>
                <div>
                  <span className="text-blue-300">coverageAmount</span>
                  <span className="text-gray-400">:</span>{" "}
                  <span className="text-teal-300">number</span>
                  <span className="text-gray-400">;</span>
                </div>
                <div>
                  <span className="text-blue-300">expiryDate</span>
                  <span className="text-gray-400">:</span>{" "}
                  <span className="text-teal-300">string</span>
                  <span className="text-gray-400">;</span>
                </div>
                <div>
                  <span className="text-blue-300">provider</span>
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
          <div className="bg-blue-900/30 border border-blue-500/30 rounded-lg p-4 mb-4">
            <h4 className="text-blue-300 font-bold mb-2">
              💡 Interface Inheritance คืออะไร?
            </h4>
            <p className="text-gray-300 text-sm mb-2">
              การใช้ <span className="text-blue-400">extends</span>{" "}
              เพื่อสืบทอดคุณสมบัติจาก interface อื่น
            </p>
            <p className="text-gray-300 text-sm">
              สามารถสืบทอดจากหลาย interface พร้อมกันได้ (Multiple Inheritance)
            </p>
          </div>

          <h3 className="text-green-400 font-bold mb-3">
            🎯 Inheritance Examples:
          </h3>
          <div className="text-sm space-y-6">
            {/* Example 1: Single Inheritance */}
            <div>
              <div className="text-emerald-400 font-semibold mb-2">
                1️⃣ Single Inheritance
              </div>
              <div className="mb-2">
                <span className="text-blue-400">interface</span>{" "}
                <span className="text-teal-400">Employee</span>{" "}
                <span className="text-blue-400">extends</span>{" "}
                <span className="text-teal-400">PersonData</span>{" "}
                <span className="text-gray-400">{"{"}</span>
                <div className="pl-4">
                  <div>
                    <span className="text-blue-300">employeeId</span>
                    <span className="text-gray-400">:</span>{" "}
                    <span className="text-teal-300">string</span>
                    <span className="text-gray-400">;</span>
                  </div>
                  <div>
                    <span className="text-blue-300">department</span>
                    <span className="text-gray-400">:</span>{" "}
                    <span className="text-teal-300">string</span>
                    <span className="text-gray-400">;</span>
                  </div>
                </div>
                <span className="text-gray-400">{"}"}</span>
              </div>
              <div className="text-gray-500 text-xs pl-4">
                {"//"} สืบทอดคุณสมบัติจาก PersonData (id, name, email, phone)
              </div>
            </div>

            {/* Example 2: Multiple Inheritance */}
            <div>
              <div className="text-orange-400 font-semibold mb-2">
                2️⃣ Multiple Inheritance (3 Interfaces)
              </div>
              <div className="mb-2">
                <span className="text-blue-400">interface</span>{" "}
                <span className="text-teal-400">CarOwner</span>{" "}
                <span className="text-blue-400">extends</span>{" "}
                <span className="text-teal-400">PersonData</span>
                <span className="text-gray-400">,</span>{" "}
                <span className="text-teal-400">CarData</span>
                <span className="text-gray-400">,</span>{" "}
                <span className="text-teal-400">InsurancePolicy</span>{" "}
                <span className="text-gray-400">{"{"}</span>
                <div className="pl-4">
                  <div>
                    <span className="text-blue-300">licenseNumber</span>
                    <span className="text-gray-400">:</span>{" "}
                    <span className="text-teal-300">string</span>
                    <span className="text-gray-400">;</span>
                  </div>
                </div>
                <span className="text-gray-400">{"}"}</span>
              </div>
              <div className="text-gray-500 text-xs pl-4">
                {"//"} สืบทอดจาก 3 interfaces พร้อมกัน
              </div>
            </div>

            {/* Example 3: Complex Multiple Inheritance */}
            <div>
              <div className="text-purple-400 font-semibold mb-2">
                3️⃣ Complex Multiple Inheritance (4 Interfaces)
              </div>
              <div className="mb-2">
                <span className="text-blue-400">interface</span>{" "}
                <span className="text-teal-400">ExecutiveEmployee</span>
                <div className="pl-4">
                  <span className="text-blue-400">extends</span>{" "}
                  <span className="text-teal-400">PersonData</span>
                  <span className="text-gray-400">,</span>
                </div>
                <div className="pl-12">
                  <span className="text-teal-400">EmploymentData</span>
                  <span className="text-gray-400">,</span>
                </div>
                <div className="pl-12">
                  <span className="text-teal-400">CarData</span>
                  <span className="text-gray-400">,</span>
                </div>
                <div className="pl-12">
                  <span className="text-teal-400">InsurancePolicy</span>{" "}
                  <span className="text-gray-400">{"{"}</span>
                </div>
                <div className="pl-4">
                  <div>
                    <span className="text-blue-300">executiveLevel</span>
                    <span className="text-gray-400">:</span>{" "}
                    <span className="text-orange-300">&quot;Junior&quot;</span>{" "}
                    <span className="text-blue-400">|</span>{" "}
                    <span className="text-orange-300">&quot;Senior&quot;</span>{" "}
                    <span className="text-blue-400">|</span>{" "}
                    <span className="text-orange-300">&quot;VP&quot;</span>{" "}
                    <span className="text-blue-400">|</span>{" "}
                    <span className="text-orange-300">&quot;CEO&quot;</span>
                    <span className="text-gray-400">;</span>
                  </div>
                  <div>
                    <span className="text-blue-300">benefits</span>
                    <span className="text-gray-400">:</span>{" "}
                    <span className="text-teal-300">string</span>
                    <span className="text-gray-400">[];</span>
                  </div>
                </div>
                <span className="text-gray-400">{"}"}</span>
              </div>
              <div className="text-gray-500 text-xs pl-4">
                {"//"} สืบทอดจาก 4 interfaces + เพิ่มคุณสมบัติใหม่
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-4">
          <h3 className="text-cyan-400 font-bold mb-3">📦 Data Examples:</h3>

          {/* Example 1: Employee */}
          <div className="mb-6">
            <div className="text-emerald-400 text-sm font-semibold mb-2">
              👤 Example 1: Employee (Single Inheritance)
            </div>
            <div className="bg-gray-800/50 rounded p-4 border border-gray-600">
              {/* PersonData (inherited) */}
              <div className="mb-4 pb-4 border-b border-gray-700">
                <div className="text-xs text-blue-400 font-semibold mb-2 flex items-center gap-2">
                  <span className="bg-blue-500/20 px-2 py-1 rounded">
                    📦 From PersonData
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div>
                    <span className="text-gray-500">id:</span>{" "}
                    <span className="text-white">{employee.id}</span>
                  </div>
                  <div>
                    <span className="text-gray-500">name:</span>{" "}
                    <span className="text-white">{employee.name}</span>
                  </div>
                  <div>
                    <span className="text-gray-500">email:</span>{" "}
                    <span className="text-white">{employee.email}</span>
                  </div>
                  <div>
                    <span className="text-gray-500">phone:</span>{" "}
                    <span className="text-white">{employee.phone}</span>
                  </div>
                </div>
              </div>

              {/* Employee (own properties) */}
              <div>
                <div className="text-xs text-emerald-400 font-semibold mb-2 flex items-center gap-2">
                  <span className="bg-emerald-500/20 px-2 py-1 rounded">
                    ➕ Employee Properties
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div>
                    <span className="text-gray-500">employeeId:</span>{" "}
                    <span className="text-emerald-400 font-semibold">
                      {employee.employeeId}
                    </span>
                  </div>
                  <div>
                    <span className="text-gray-500">department:</span>{" "}
                    <span className="text-emerald-400 font-semibold">
                      {employee.department}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Example 2: CarOwner */}
          <div className="mb-6">
            <div className="text-orange-400 text-sm font-semibold mb-2">
              🚗 Example 2: CarOwner (Multiple Inheritance - 3 Interfaces)
            </div>
            <div className="bg-gray-800/50 rounded p-4 border border-gray-600">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Personal Info - From PersonData */}
                <div className="bg-blue-900/20 border border-blue-500/30 rounded p-3">
                  <h4 className="text-blue-400 font-semibold text-xs mb-2 flex items-center gap-1">
                    <span className="bg-blue-500/30 px-2 py-0.5 rounded">
                      � PersonData
                    </span>
                  </h4>
                  <div className="space-y-1 text-xs">
                    <div>
                      <span className="text-gray-500">id:</span>{" "}
                      <span className="text-white">{carOwner.id}</span>
                    </div>
                    <div>
                      <span className="text-gray-500">name:</span>{" "}
                      <span className="text-white">{carOwner.name}</span>
                    </div>
                    <div>
                      <span className="text-gray-500">email:</span>{" "}
                      <span className="text-white">{carOwner.email}</span>
                    </div>
                  </div>
                </div>

                {/* Car Info - From CarData */}
                <div className="bg-green-900/20 border border-green-500/30 rounded p-3">
                  <h4 className="text-green-400 font-semibold text-xs mb-2 flex items-center gap-1">
                    <span className="bg-green-500/30 px-2 py-0.5 rounded">
                      � CarData
                    </span>
                  </h4>
                  <div className="space-y-1 text-xs">
                    <div>
                      <span className="text-gray-500">brand:</span>{" "}
                      <span className="text-white">{carOwner.brand}</span>
                    </div>
                    <div>
                      <span className="text-gray-500">model:</span>{" "}
                      <span className="text-white">{carOwner.model}</span>
                    </div>
                    <div>
                      <span className="text-gray-500">year:</span>{" "}
                      <span className="text-white">{carOwner.year}</span>
                    </div>
                    <div>
                      <span className="text-gray-500">color:</span>{" "}
                      <span className="text-white">{carOwner.color}</span>
                    </div>
                  </div>
                </div>

                {/* Insurance Info - From InsurancePolicy */}
                <div className="bg-purple-900/20 border border-purple-500/30 rounded p-3">
                  <h4 className="text-purple-400 font-semibold text-xs mb-2 flex items-center gap-1">
                    <span className="bg-purple-500/30 px-2 py-0.5 rounded">
                      � InsurancePolicy
                    </span>
                  </h4>
                  <div className="space-y-1 text-xs">
                    <div>
                      <span className="text-gray-500">policyNumber:</span>{" "}
                      <span className="text-white">
                        {carOwner.policyNumber}
                      </span>
                    </div>
                    <div>
                      <span className="text-gray-500">provider:</span>{" "}
                      <span className="text-white">{carOwner.provider}</span>
                    </div>
                    <div>
                      <span className="text-gray-500">coverageAmount:</span>{" "}
                      <span className="text-green-400">
                        ${carOwner.coverageAmount.toLocaleString()}
                      </span>
                    </div>
                    <div>
                      <span className="text-gray-500">expiryDate:</span>{" "}
                      <span className="text-white">{carOwner.expiryDate}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Own properties */}
              <div className="mt-3 pt-3 border-t border-gray-700">
                <div className="text-xs text-orange-400 font-semibold mb-2 flex items-center gap-2">
                  <span className="bg-orange-500/20 px-2 py-1 rounded">
                    ➕ CarOwner Properties
                  </span>
                </div>
                <div className="text-sm">
                  <span className="text-gray-500">licenseNumber:</span>{" "}
                  <span className="text-orange-400 font-semibold">
                    {carOwner.licenseNumber}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Example 3: Executive */}
          <div className="mb-4">
            <div className="text-purple-400 text-sm font-semibold mb-2">
              ⭐ Example 3: ExecutiveEmployee (Complex Multiple Inheritance - 4
              Interfaces)
            </div>
            <div className="bg-gray-800/50 rounded p-4 border border-gray-600">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mb-4">
                {/* Personal - From PersonData */}
                <div className="bg-blue-900/20 border border-blue-500/30 rounded p-3">
                  <h4 className="text-blue-400 font-semibold text-xs mb-2 flex items-center gap-1">
                    <span className="bg-blue-500/30 px-2 py-0.5 rounded text-[10px]">
                      � PersonData
                    </span>
                  </h4>
                  <div className="space-y-1 text-xs">
                    <div>
                      <span className="text-gray-500">id:</span>{" "}
                      <span className="text-white">{executive.id}</span>
                    </div>
                    <div>
                      <span className="text-gray-500">name:</span>{" "}
                      <span className="text-white">{executive.name}</span>
                    </div>
                    <div>
                      <span className="text-gray-500">email:</span>{" "}
                      <span className="text-white text-[10px]">
                        {executive.email}
                      </span>
                    </div>
                    <div>
                      <span className="text-gray-500">phone:</span>{" "}
                      <span className="text-white">{executive.phone}</span>
                    </div>
                  </div>
                </div>

                {/* Employment - From EmploymentData */}
                <div className="bg-green-900/20 border border-green-500/30 rounded p-3">
                  <h4 className="text-green-400 font-semibold text-xs mb-2 flex items-center gap-1">
                    <span className="bg-green-500/30 px-2 py-0.5 rounded text-[10px]">
                      � EmploymentData
                    </span>
                  </h4>
                  <div className="space-y-1 text-xs">
                    <div>
                      <span className="text-gray-500">company:</span>{" "}
                      <span className="text-white text-[10px]">
                        {executive.company}
                      </span>
                    </div>
                    <div>
                      <span className="text-gray-500">position:</span>{" "}
                      <span className="text-white text-[10px]">
                        {executive.position}
                      </span>
                    </div>
                    <div>
                      <span className="text-gray-500">salary:</span>{" "}
                      <span className="text-green-400">
                        ${executive.salary.toLocaleString()}
                      </span>
                    </div>
                    <div>
                      <span className="text-gray-500">startDate:</span>{" "}
                      <span className="text-white">{executive.startDate}</span>
                    </div>
                  </div>
                </div>

                {/* Car - From CarData */}
                <div className="bg-orange-900/20 border border-orange-500/30 rounded p-3">
                  <h4 className="text-orange-400 font-semibold text-xs mb-2 flex items-center gap-1">
                    <span className="bg-orange-500/30 px-2 py-0.5 rounded text-[10px]">
                      � CarData
                    </span>
                  </h4>
                  <div className="space-y-1 text-xs">
                    <div>
                      <span className="text-gray-500">brand:</span>{" "}
                      <span className="text-white">{executive.brand}</span>
                    </div>
                    <div>
                      <span className="text-gray-500">model:</span>{" "}
                      <span className="text-white">{executive.model}</span>
                    </div>
                    <div>
                      <span className="text-gray-500">year:</span>{" "}
                      <span className="text-white">{executive.year}</span>
                    </div>
                    <div>
                      <span className="text-gray-500">color:</span>{" "}
                      <span className="text-white">{executive.color}</span>
                    </div>
                  </div>
                </div>

                {/* Insurance - From InsurancePolicy */}
                <div className="bg-red-900/20 border border-red-500/30 rounded p-3">
                  <h4 className="text-red-400 font-semibold text-xs mb-2 flex items-center gap-1">
                    <span className="bg-red-500/30 px-2 py-0.5 rounded text-[10px]">
                      � InsurancePolicy
                    </span>
                  </h4>
                  <div className="space-y-1 text-xs">
                    <div>
                      <span className="text-gray-500">policyNumber:</span>{" "}
                      <span className="text-white">
                        {executive.policyNumber}
                      </span>
                    </div>
                    <div>
                      <span className="text-gray-500">provider:</span>{" "}
                      <span className="text-white text-[10px]">
                        {executive.provider}
                      </span>
                    </div>
                    <div>
                      <span className="text-gray-500">coverageAmount:</span>{" "}
                      <span className="text-green-400">
                        ${executive.coverageAmount.toLocaleString()}
                      </span>
                    </div>
                    <div>
                      <span className="text-gray-500">expiryDate:</span>{" "}
                      <span className="text-white">{executive.expiryDate}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Own properties */}
              <div className="mb-3 pb-3 border-b border-gray-700">
                <div className="text-xs text-purple-400 font-semibold mb-2 flex items-center gap-2">
                  <span className="bg-purple-500/20 px-2 py-1 rounded">
                    ➕ ExecutiveEmployee Properties
                  </span>
                </div>
                <div className="text-sm">
                  <span className="text-gray-500">executiveLevel:</span>{" "}
                  <span className="text-purple-400 font-semibold">
                    {executive.executiveLevel}
                  </span>
                </div>
              </div>

              {/* Benefits */}
              <div className="bg-purple-900/20 border border-purple-500/30 rounded p-3">
                <h4 className="text-purple-400 font-semibold text-xs mb-2 flex items-center gap-2">
                  <span className="bg-purple-500/30 px-2 py-0.5 rounded">
                    🎁 benefits (string[])
                  </span>
                </h4>
                <div className="flex flex-wrap gap-2">
                  {executive.benefits.map((benefit, index) => (
                    <span
                      key={index}
                      className="bg-purple-500/20 border border-purple-500/40 text-purple-300 px-2 py-1 rounded text-xs"
                    >
                      {benefit}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </TerminalUI>
    </div>
  );
};
