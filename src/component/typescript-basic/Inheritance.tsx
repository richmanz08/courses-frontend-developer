"use client";

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
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-indigo-800 mb-2">
            🏗️ Interface Inheritance Examples
          </h1>
          <p className="text-gray-600">
            การสืบทอด Interface ใน TypeScript - Single & Multiple Inheritance
          </p>
        </div>

        {/* Inheritance Explanation */}
        <div className="bg-white rounded-lg p-6 mb-6 border-l-4 border-indigo-500">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            💡 Interface Inheritance คืออะไร?
          </h2>
          <p className="text-gray-600 mb-2">
            การใช้{" "}
            <code className="bg-gray-100 px-2 py-1 rounded">extends</code>
            เพื่อสืบทอดคุณสมบัติจาก interface อื่น
          </p>
          <p className="text-gray-600">
            สามารถสืบทอดจากหลาย interface พร้อมกันได้ (Multiple Inheritance)
          </p>
        </div>

        <div className="grid gap-6">
          {/* Single Inheritance */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-green-600 text-white p-4">
              <h3 className="text-lg font-semibold">
                👤 Single Inheritance: Employee extends PersonData
              </h3>
              <p className="text-green-100 text-sm">
                สืบทอดจาก interface เดียว
              </p>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-800">
                    Employee Info:
                  </h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Name:</span>
                      <span className="font-medium text-gray-500">
                        {employee.name}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Email:</span>
                      <span className="font-medium text-gray-500">
                        {employee.email}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Employee ID:</span>
                      <span className="font-medium text-gray-500">
                        {employee.employeeId}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Department:</span>
                      <span className="font-medium text-gray-500">
                        {employee.department}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="bg-green-50 rounded-lg p-4">
                  <h5 className="font-medium text-green-800 mb-2">
                    Interface Structure:
                  </h5>
                  <pre className="text-sm text-green-700">
                    {`interface Employee extends PersonData {
  employeeId: string;
  department: string;
}`}
                  </pre>
                </div>
              </div>
            </div>
          </div>

          {/* Multiple Inheritance */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-orange-600 text-white p-4">
              <h3 className="text-lg font-semibold">
                🚗 Multiple Inheritance: CarOwner extends PersonData, CarData,
                InsurancePolicy
              </h3>
              <p className="text-orange-100 text-sm">สืบทอดจากหลาย interface</p>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                {/* Personal Info */}
                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-800 text-gray-900 mb-3">
                    👤 Personal Info
                  </h4>
                  <div className="space-y-2 text-sm text-gray-500">
                    <div>
                      <strong>Name:</strong> {carOwner.name}
                    </div>
                    <div>
                      <strong>Email:</strong> {carOwner.email}
                    </div>
                    <div>
                      <strong>License:</strong> {carOwner.licenseNumber}
                    </div>
                  </div>
                </div>

                {/* Car Info */}
                <div className="bg-green-50 rounded-lg p-4">
                  <h4 className="font-semibold text-green-800 mb-3">
                    🚗 Car Info
                  </h4>
                  <div className="space-y-2 text-sm text-gray-500">
                    <div>
                      <strong>Brand:</strong> {carOwner.brand}
                    </div>
                    <div>
                      <strong>Model:</strong> {carOwner.model}
                    </div>
                    <div>
                      <strong>Year:</strong> {carOwner.year}
                    </div>
                    <div>
                      <strong>Color:</strong> {carOwner.color}
                    </div>
                  </div>
                </div>

                {/* Insurance Info */}
                <div className="bg-purple-50 rounded-lg p-4">
                  <h4 className="font-semibold text-purple-800 mb-3">
                    🛡️ Insurance
                  </h4>
                  <div className="space-y-2 text-sm text-gray-500">
                    <div>
                      <strong>Provider:</strong> {carOwner.provider}
                    </div>
                    <div>
                      <strong>Policy:</strong> {carOwner.policyNumber}
                    </div>
                    <div>
                      <strong>Coverage:</strong> $
                      {carOwner.coverageAmount.toLocaleString()}
                    </div>
                    <div>
                      <strong>Expires:</strong> {carOwner.expiryDate}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Complex Multiple Inheritance */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-purple-600 text-white p-4">
              <h3 className="text-lg font-semibold">
                ⭐ Complex Multiple Inheritance: Executive Employee
              </h3>
              <p className="text-purple-100 text-sm">
                สืบทอดจาก 4 interface พร้อมกัน
              </p>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-4">
                {/* Personal */}
                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-800 mb-3">
                    👤 Personal
                  </h4>
                  <div className="space-y-2 text-sm text-gray-500">
                    <div>
                      <strong>Name:</strong> {executive.name}
                    </div>
                    <div>
                      <strong>Email:</strong> {executive.email}
                    </div>
                    <div>
                      <strong>Phone:</strong> {executive.phone}
                    </div>
                  </div>
                </div>

                {/* Employment */}
                <div className="bg-green-50 rounded-lg p-4">
                  <h4 className="font-semibold text-green-800 mb-3">
                    💼 Employment
                  </h4>
                  <div className="space-y-2 text-sm text-gray-500">
                    <div>
                      <strong>Company:</strong> {executive.company}
                    </div>
                    <div>
                      <strong>Position:</strong> {executive.position}
                    </div>
                    <div>
                      <strong>Level:</strong> {executive.executiveLevel}
                    </div>
                    <div>
                      <strong>Salary:</strong> $
                      {executive.salary.toLocaleString()}
                    </div>
                  </div>
                </div>

                {/* Car */}
                <div className="bg-orange-50 rounded-lg p-4">
                  <h4 className="font-semibold text-orange-800 mb-3">
                    🚗 Company Car
                  </h4>
                  <div className="space-y-2 text-sm text-gray-500">
                    <div>
                      <strong>Brand:</strong> {executive.brand}
                    </div>
                    <div>
                      <strong>Model:</strong> {executive.model}
                    </div>
                    <div>
                      <strong>Year:</strong> {executive.year}
                    </div>
                    <div>
                      <strong>Color:</strong> {executive.color}
                    </div>
                  </div>
                </div>

                {/* Insurance */}
                <div className="bg-red-50 rounded-lg p-4">
                  <h4 className="font-semibold text-red-800 mb-3">
                    🛡️ Insurance
                  </h4>
                  <div className="space-y-2 text-sm text-gray-500">
                    <div>
                      <strong>Provider:</strong> {executive.provider}
                    </div>
                    <div>
                      <strong>Policy:</strong> {executive.policyNumber}
                    </div>
                    <div>
                      <strong>Coverage:</strong> $
                      {executive.coverageAmount.toLocaleString()}
                    </div>
                  </div>
                </div>
              </div>

              {/* Benefits */}
              <div className="mt-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-4">
                <h4 className="font-semibold text-purple-800 mb-3">
                  🎁 Executive Benefits
                </h4>
                <div className="flex flex-wrap gap-2 ">
                  {executive.benefits.map((benefit, index) => (
                    <span
                      key={index}
                      className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm"
                    >
                      {benefit}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
