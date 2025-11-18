import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";
import { Tag } from "primereact/tag";
import { useState } from "react";
import { TerminalUI } from "../../../ui/TerminalUI";

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
        <div className="mb-6 p-4 bg-gray-50 rounded-lg mb-4">
          <h3 className="font-semibold text-gray-800 mb-3">
            1️⃣ Simple Counter
          </h3>
          <div className="flex items-center gap-4 mb-4">
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
          <TerminalUI fileName="Counter.tsx" name="Simple Counter">
            <pre className="text-sm leading-relaxed">
              <code>
                <span className="text-pink-400">const</span> [
                <span className="text-blue-300">count</span>,{" "}
                <span className="text-blue-300">setCount</span>] ={" "}
                <span className="text-yellow-300">useState</span>(
                <span className="text-orange-400">0</span>);{"\n"}
                <span className="text-pink-400">const</span>{" "}
                <span className="text-yellow-300">handleIncrement</span> = (){" "}
                {`=> `}
                <span className="text-blue-300">setCount</span>(
                <span className="text-blue-300">count</span> +{" "}
                <span className="text-orange-400">1</span>);
              </code>
            </pre>
          </TerminalUI>
        </div>

        {/* 2. String State */}
        <div className="mb-6 p-4 bg-gray-50 rounded-lg">
          <h3 className="font-semibold text-gray-800 mb-3">
            2️⃣ String State (Input)
          </h3>
          <div className="flex flex-col gap-3 mb-4">
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
          <TerminalUI fileName="StringState.tsx" name="String State">
            <pre className="text-sm leading-relaxed">
              <code>
                <span className="text-pink-400">const</span> [
                <span className="text-blue-300">name</span>,{" "}
                <span className="text-blue-300">setName</span>] ={" "}
                <span className="text-yellow-300">useState</span>(
                <span className="text-green-400">&quot;&quot;</span>);{"\n\n"}
                {"<"}
                <span className="text-blue-300">InputText</span>{" "}
                <span className="text-blue-300">value</span>={`{`}
                <span className="text-blue-300">name</span>
                {`} `}
                <span className="text-blue-300">onChange</span>={`{(`}
                <span className="text-blue-300">e</span>) {`=> `}
                <span className="text-blue-300">setName</span>(
                <span className="text-blue-300">e</span>.
                <span className="text-blue-300">target</span>.
                <span className="text-blue-300">value</span>){`} />`}
              </code>
            </pre>
          </TerminalUI>
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
            <div className="mt-3 p-4 bg-blue-100 border-l-4 border-blue-500 rounded mb-4">
              <p className="text-blue-800">🎉 This content is now visible!</p>
            </div>
          )}
          <TerminalUI fileName="BooleanState.tsx" name="Boolean Toggle">
            <pre className="text-sm leading-relaxed">
              <code>
                <span className="text-pink-400">const</span> [
                <span className="text-blue-300">isVisible</span>,{" "}
                <span className="text-blue-300">setIsVisible</span>] ={" "}
                <span className="text-yellow-300">useState</span>(
                <span className="text-orange-400">false</span>);{"\n\n"}
                {"<"}
                <span className="text-blue-300">Button</span>{" "}
                <span className="text-blue-300">onClick</span>={`{() => `}
                <span className="text-blue-300">setIsVisible</span>(!
                <span className="text-blue-300">isVisible</span>){`} />`}
              </code>
            </pre>
          </TerminalUI>
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
          <div className="flex flex-wrap gap-2 mb-4">
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
          <TerminalUI fileName="ArrayState.tsx" name="Array Management">
            <pre className="text-sm leading-relaxed">
              <code>
                <span className="text-pink-400">const</span> [
                <span className="text-blue-300">items</span>,{" "}
                <span className="text-blue-300">setItems</span>] ={" "}
                <span className="text-yellow-300">useState</span>([
                <span className="text-green-400">&quot;Apple&quot;</span>,{" "}
                <span className="text-green-400">&quot;Banana&quot;</span>]);
                {"\n\n"}
                <span className="text-gray-500">{`// Add item`}</span>
                {"\n"}
                <span className="text-blue-300">setItems</span>([...
                <span className="text-blue-300">items</span>,{" "}
                <span className="text-blue-300">newItem</span>]);{"\n\n"}
                <span className="text-gray-500">{`// Remove item`}</span>
                {"\n"}
                <span className="text-blue-300">setItems</span>(
                <span className="text-blue-300">items</span>.
                <span className="text-yellow-300">filter</span>((
                <span className="text-blue-300">_</span>,{" "}
                <span className="text-blue-300">i</span>) {`=> `}
                <span className="text-blue-300">i</span> !=={" "}
                <span className="text-blue-300">index</span>));
              </code>
            </pre>
          </TerminalUI>
        </div>
      </Card>
    </div>
  );
};
