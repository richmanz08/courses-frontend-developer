import { Card } from "primereact/card";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import { Tag } from "primereact/tag";
import { useState } from "react";
interface User {
  id: number;
  name: string;
  email: string;
  role: string;
}

export const IntermediateExample = () => {
  // 5. Object State
  const [user, setUser] = useState<User>({
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    role: "user",
  });

  // 6. Multiple States Management
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    age: 0,
  });
  const handleUpdateUserName = (newName: string) => {
    setUser({ ...user, name: newName });
  };

  const handleUpdateUserRole = (newRole: string) => {
    setUser((prevUser) => ({ ...prevUser, role: newRole }));
  };

  // Form handlers
  const handleFormChange = (field: string, value: string | number) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const roleOptions = [
    { label: "User", value: "user" },
    { label: "Admin", value: "admin" },
    { label: "Manager", value: "manager" },
  ];

  return (
    <Card className="mb-6">
      <h2 className="text-2xl font-bold text-green-700 mb-4">
        🎯 Intermediate Examples
      </h2>

      {/* 5. Object State */}
      <div className="mb-6 p-4 bg-gray-50 rounded-lg">
        <h3 className="font-semibold text-gray-800 mb-3">
          5️⃣ Object State (User Profile)
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">Name</label>
            <InputText
              value={user.name}
              onChange={(e) => handleUpdateUserName(e.target.value)}
              className="w-full"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Role</label>
            <Dropdown
              value={user.role}
              options={roleOptions}
              onChange={(e) => handleUpdateUserRole(e.value)}
              className="w-full"
            />
          </div>
        </div>
        <div className="mt-4 p-4 bg-white rounded border">
          <p>
            <strong>ID:</strong> {user.id}
          </p>
          <p>
            <strong>Name:</strong> {user.name}
          </p>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          <p>
            <strong>Role:</strong> <Tag value={user.role} severity="success" />
          </p>
        </div>
        <pre className="mt-3 bg-gray-800 text-white p-3 rounded text-sm overflow-x-auto">
          <code>{`const [user, setUser] = useState({ id: 1, name: "John", role: "user" });
    setUser({ ...user, name: newName }); // Update specific property`}</code>
        </pre>
      </div>

      {/* 6. Form Data */}
      <div className="p-4 bg-gray-50 rounded-lg">
        <h3 className="font-semibold text-gray-800 mb-3">
          6️⃣ Form State Management
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <InputText
            placeholder="Username"
            value={formData.username}
            onChange={(e) => handleFormChange("username", e.target.value)}
          />
          <InputText
            placeholder="Email"
            value={formData.email}
            onChange={(e) => handleFormChange("email", e.target.value)}
          />
          <InputText
            placeholder="Age"
            type="number"
            value={formData.age.toString()}
            onChange={(e) =>
              handleFormChange("age", parseInt(e.target.value) || 0)
            }
          />
        </div>
        <div className="bg-white p-4 rounded border">
          <pre className="text-sm">{JSON.stringify(formData, null, 2)}</pre>
        </div>
        <pre className="mt-3 bg-gray-800 text-white p-3 rounded text-sm overflow-x-auto">
          <code>{`const [formData, setFormData] = useState({ username: "", email: "", age: 0 });
    setFormData(prev => ({ ...prev, [field]: value }));`}</code>
        </pre>
      </div>
    </Card>
  );
};
