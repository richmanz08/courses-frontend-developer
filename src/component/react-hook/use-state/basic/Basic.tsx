import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";
import { Tag } from "primereact/tag";
import { useState } from "react";

export const UseStateBasicExample = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [items, setItems] = useState<string[]>(["Apple", "Banana", "Cherry"]);
  const [newItem, setNewItem] = useState("");

  const handleIncrement = () => setCount(count + 1);
  const handleDecrement = () => setCount(count - 1);
  const handleReset = () => setCount(0);

  // Array handlers
  const handleAddItem = () => {
    if (newItem.trim()) {
      setItems([...items, newItem]);
      setNewItem("");
    }
  };

  const handleRemoveItem = (index: number) => {
    setItems(items.filter((_, i) => i !== index));
  };
  return (
    <div>
      {/* ==================== BASIC EXAMPLES ==================== */}
      <Card className="mb-6">
        <h2 className="text-2xl font-bold text-blue-700 mb-4">
          📚 Basic Examples
        </h2>

        {/* 1. Simple Counter */}
        <div className="mb-6 p-4 bg-gray-50 rounded-lg">
          <h3 className="font-semibold text-gray-800 mb-3">
            1️⃣ Simple Counter
          </h3>
          <div className="flex items-center gap-4">
            <Button
              icon="pi pi-minus"
              onClick={handleDecrement}
              className="p-button-danger"
            />
            <span className="text-3xl font-bold text-blue-600 min-w-[60px] text-center">
              {count}
            </span>
            <Button
              icon="pi pi-plus"
              onClick={handleIncrement}
              className="p-button-success"
            />
            <Button
              label="Reset"
              icon="pi pi-refresh"
              onClick={handleReset}
              className="p-button-warning"
            />
          </div>
          <pre className="mt-3 bg-gray-800 text-white p-3 rounded text-sm overflow-x-auto">
            <code>{`const [count, setCount] = useState(0);
        const handleIncrement = () => setCount(count + 1);`}</code>
          </pre>
        </div>

        {/* 2. String State */}
        <div className="mb-6 p-4 bg-gray-50 rounded-lg">
          <h3 className="font-semibold text-gray-800 mb-3">
            2️⃣ String State (Input)
          </h3>
          <div className="flex flex-col gap-3">
            <InputText
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name..."
              className="w-full"
            />
            <p className="text-gray-600">
              Hello, <strong>{name || "Guest"}</strong>!
            </p>
          </div>
          <pre className="mt-3 bg-gray-800 text-white p-3 rounded text-sm overflow-x-auto">
            <code>{`const [name, setName] = useState("");
        <InputText value={name} onChange={(e) => setName(e.target.value)} />`}</code>
          </pre>
        </div>

        {/* 3. Boolean State */}
        <div className="mb-6 p-4 bg-gray-50 rounded-lg">
          <h3 className="font-semibold text-gray-800 mb-3">
            3️⃣ Boolean State (Toggle)
          </h3>
          <Button
            label={isVisible ? "Hide Content" : "Show Content"}
            icon={isVisible ? "pi pi-eye-slash" : "pi pi-eye"}
            onClick={() => setIsVisible(!isVisible)}
            className="p-button-info"
          />
          {isVisible && (
            <div className="mt-3 p-4 bg-blue-100 border-l-4 border-blue-500 rounded">
              <p className="text-blue-800">🎉 This content is now visible!</p>
            </div>
          )}
          <pre className="mt-3 bg-gray-800 text-white p-3 rounded text-sm overflow-x-auto">
            <code>{`const [isVisible, setIsVisible] = useState(false);
        <Button onClick={() => setIsVisible(!isVisible)} />`}</code>
          </pre>
        </div>

        {/* 4. Array State */}
        <div className="p-4 bg-gray-50 rounded-lg">
          <h3 className="font-semibold text-gray-800 mb-3">
            4️⃣ Array State (List Management)
          </h3>
          <div className="flex gap-2 mb-3">
            <InputText
              value={newItem}
              onChange={(e) => setNewItem(e.target.value)}
              placeholder="Add new fruit..."
              className="flex-1"
              onKeyPress={(e) => e.key === "Enter" && handleAddItem()}
            />
            <Button
              label="Add"
              icon="pi pi-plus"
              onClick={handleAddItem}
              className="p-button-success"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {items.map((item, index) => (
              <Tag
                key={index}
                value={item}
                severity="info"
                icon="pi pi-times"
                className="cursor-pointer"
                onClick={() => handleRemoveItem(index)}
              />
            ))}
          </div>
          <pre className="mt-3 bg-gray-800 text-white p-3 rounded text-sm overflow-x-auto">
            <code>{`const [items, setItems] = useState(["Apple", "Banana"]);
        setItems([...items, newItem]); // Add
        setItems(items.filter((_, i) => i !== index)); // Remove`}</code>
          </pre>
        </div>
      </Card>
    </div>
  );
};
