"use client";

import { useState, useEffect } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { Message } from "primereact/message";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { TerminalUI } from "../ui/TerminalUI";

interface StorageItem {
  key: string;
  value: string;
}

export const SessionExample = () => {
  const [key, setKey] = useState("sessionKey");
  const [value, setValue] = useState("");
  const [readKey, setReadKey] = useState("sessionKey");
  const [readValue, setReadValue] = useState<string | null>(null);
  const [allItems, setAllItems] = useState<StorageItem[]>([]);

  // Set item in sessionStorage
  const setSessionStorageItem = () => {
    if (key && value) {
      sessionStorage.setItem(key, value);
      setValue("");
      refreshAllItems();
    }
  };

  // Get item from sessionStorage
  const getSessionStorageItem = () => {
    const item = sessionStorage.getItem(readKey);
    setReadValue(item);
  };

  // Remove item from sessionStorage
  const removeSessionStorageItem = (itemKey: string) => {
    sessionStorage.removeItem(itemKey);
    refreshAllItems();
    if (itemKey === readKey) {
      setReadValue(null);
    }
  };

  // Clear all sessionStorage
  const clearAllSessionStorage = () => {
    sessionStorage.clear();
    refreshAllItems();
    setReadValue(null);
  };

  // Refresh all items
  const refreshAllItems = () => {
    const items: StorageItem[] = [];
    for (let i = 0; i < sessionStorage.length; i++) {
      const key = sessionStorage.key(i);
      if (key) {
        const value = sessionStorage.getItem(key);
        if (value) {
          items.push({ key, value });
        }
      }
    }
    setAllItems(items);
  };

  // Save form data example
  const saveFormData = () => {
    const formData = {
      firstName: "Jane",
      lastName: "Smith",
      email: "jane@example.com",
      timestamp: new Date().toISOString(),
    };
    sessionStorage.setItem("formData", JSON.stringify(formData));
    refreshAllItems();
  };

  // Load form data example
  const loadFormData = () => {
    const formDataStr = sessionStorage.getItem("formData");
    if (formDataStr) {
      const formData = JSON.parse(formDataStr);
      setReadKey("formData");
      setReadValue(JSON.stringify(formData, null, 2));
    }
  };

  // Save temporary cart example
  const saveCartExample = () => {
    const cart = {
      items: [
        { id: 1, name: "Product A", price: 29.99, quantity: 2 },
        { id: 2, name: "Product B", price: 49.99, quantity: 1 },
      ],
      total: 109.97,
      sessionId: Date.now(),
    };
    sessionStorage.setItem("cart", JSON.stringify(cart));
    refreshAllItems();
  };

  useEffect(() => {
    refreshAllItems();
  }, []);

  const actionBodyTemplate = (rowData: StorageItem) => {
    return (
      <Button
        icon="pi pi-trash"
        rounded
        outlined
        severity="danger"
        onClick={() => removeSessionStorageItem(rowData.key)}
      />
    );
  };

  return (
    <div className="space-y-6">
      <Message
        className="mb-4"
        severity="info"
        text="sessionStorage stores data for one session only. Data is cleared when the page/tab is closed. Perfect for temporary data like form inputs, shopping carts during checkout, or wizard step data."
      />

      <TerminalUI name="SessionStorage" fileName="SessionStorage.tsx">
        <pre className="text-sm leading-relaxed">
          <code>
            <span className="text-gray-500">
              {"// Store form data temporarily"}
            </span>
            {"\n"}
            <span className="text-pink-400">const</span>{" "}
            <span className="text-blue-300">formData</span> = {"{ "}
            <span className="text-blue-300">firstName</span>:{" "}
            <span className="text-green-400">&quot;Jane&quot;</span>,{" "}
            <span className="text-blue-300">email</span>:{" "}
            <span className="text-green-400">&quot;jane@example.com&quot;</span>
            {" };\n"}
            <span className="text-blue-300">sessionStorage</span>.
            <span className="text-yellow-300">setItem</span>(
            <span className="text-green-400">&quot;formData&quot;</span>,{" "}
            <span className="text-yellow-300">JSON</span>.
            <span className="text-yellow-300">stringify</span>(
            <span className="text-blue-300">formData</span>));
            {"\n\n"}
            <span className="text-gray-500">{"// Read form data"}</span>
            {"\n"}
            <span className="text-pink-400">const</span>{" "}
            <span className="text-blue-300">formDataStr</span> ={" "}
            <span className="text-blue-300">sessionStorage</span>.
            <span className="text-yellow-300">getItem</span>(
            <span className="text-green-400">&quot;formData&quot;</span>);
            {"\n"}
            <span className="text-pink-400">const</span>{" "}
            <span className="text-blue-300">data</span> ={" "}
            <span className="text-yellow-300">JSON</span>.
            <span className="text-yellow-300">parse</span>(
            <span className="text-blue-300">formDataStr</span>);
            {"\n\n"}
            <span className="text-gray-500">{"// Store simple value"}</span>
            {"\n"}
            <span className="text-blue-300">sessionStorage</span>.
            <span className="text-yellow-300">setItem</span>(
            <span className="text-green-400">&quot;currentStep&quot;</span>,{" "}
            <span className="text-green-400">&quot;3&quot;</span>);
            {"\n\n"}
            <span className="text-gray-500">{"// Read value"}</span>
            {"\n"}
            <span className="text-pink-400">const</span>{" "}
            <span className="text-blue-300">step</span> ={" "}
            <span className="text-blue-300">sessionStorage</span>.
            <span className="text-yellow-300">getItem</span>(
            <span className="text-green-400">&quot;currentStep&quot;</span>);
            {"\n\n"}
            <span className="text-gray-500">{"// Remove item"}</span>
            {"\n"}
            <span className="text-blue-300">sessionStorage</span>.
            <span className="text-yellow-300">removeItem</span>(
            <span className="text-green-400">&quot;formData&quot;</span>);
            {"\n\n"}
            <span className="text-gray-500">
              {"// Clear all (cleared on tab close)"}
            </span>
            {"\n"}
            <span className="text-blue-300">sessionStorage</span>.
            <span className="text-yellow-300">clear</span>();
            {"\n\n"}
            <span className="text-gray-500">{"// Check if key exists"}</span>
            {"\n"}
            <span className="text-pink-400">if</span> (
            <span className="text-blue-300">sessionStorage</span>.
            <span className="text-yellow-300">getItem</span>(
            <span className="text-green-400">&quot;formData&quot;</span>) !=={" "}
            <span className="text-orange-400">null</span>) {"{\n"}
            {"  "}
            <span className="text-blue-300">console</span>.
            <span className="text-yellow-300">log</span>(
            <span className="text-green-400">&quot;Form data exists&quot;</span>
            );{"\n"}
            {"}"}
          </code>
        </pre>
      </TerminalUI>

      {/* Set Item Section */}
      <Card title="Set SessionStorage Item" className="mb-4">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="key" className="font-semibold">
              Key
            </label>
            <InputText
              id="key"
              value={key}
              onChange={(e) => setKey(e.target.value)}
              placeholder="Enter key"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="value" className="font-semibold">
              Value
            </label>
            <InputText
              id="value"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder="Enter value"
            />
          </div>

          <Button
            label="Set Item"
            icon="pi pi-plus"
            onClick={setSessionStorageItem}
            className="w-full"
          />
        </div>
      </Card>

      {/* Read Item Section */}
      <Card title="Read SessionStorage Item" className="mb-4">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="readKey" className="font-semibold">
              Key to Read
            </label>
            <InputText
              id="readKey"
              value={readKey}
              onChange={(e) => setReadKey(e.target.value)}
              placeholder="Enter key to read"
            />
          </div>

          <Button
            label="Read Item"
            icon="pi pi-search"
            onClick={getSessionStorageItem}
            className="w-full"
          />

          {readValue !== null && (
            <div className="p-4 bg-gray-100 rounded">
              <p className="font-semibold">Value:</p>
              <pre className="text-gray-700 whitespace-pre-wrap break-all">
                {readValue || "Item not found"}
              </pre>
            </div>
          )}
        </div>
      </Card>

      {/* Use Case Examples */}
      <Card title="Common Use Cases" className="mb-4">
        <div className="flex flex-col gap-4">
          <p className="text-gray-600">
            Try these common sessionStorage use cases:
          </p>
          <div className="flex flex-col gap-2">
            <Button
              label="Save Form Data (Temporary)"
              icon="pi pi-file"
              onClick={saveFormData}
              className="w-full"
            />
            <Button
              label="Load Form Data"
              icon="pi pi-download"
              onClick={loadFormData}
              className="w-full"
              severity="secondary"
            />
          </div>
          <div className="flex flex-col gap-2">
            <Button
              label="Save Shopping Cart (Session)"
              icon="pi pi-shopping-cart"
              onClick={saveCartExample}
              className="w-full"
            />
          </div>
          <Message
            severity="warn"
            text="Tip: Close this tab and reopen it - all sessionStorage data will be gone! This is different from localStorage which persists."
          />
        </div>
      </Card>

      {/* All Items Table */}
      <Card title="All SessionStorage Items">
        <div className="flex flex-col gap-4">
          <div className="flex gap-2">
            <Button
              label="Refresh"
              icon="pi pi-refresh"
              onClick={refreshAllItems}
              className="flex-1"
            />
            <Button
              label="Clear All"
              icon="pi pi-trash"
              severity="danger"
              onClick={clearAllSessionStorage}
              className="flex-1"
            />
          </div>

          <DataTable
            value={allItems}
            paginator
            rows={5}
            emptyMessage="No items in sessionStorage"
          >
            <Column field="key" header="Key" sortable />
            <Column
              field="value"
              header="Value"
              body={(rowData) => (
                <span className="break-all">{rowData.value}</span>
              )}
              sortable
            />
            <Column
              header="Actions"
              body={actionBodyTemplate}
              style={{ width: "100px" }}
            />
          </DataTable>
        </div>
      </Card>
    </div>
  );
};
