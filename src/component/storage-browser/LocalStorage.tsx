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

export const LocalStorageExample = () => {
  const [key, setKey] = useState("myKey");
  const [value, setValue] = useState("");
  const [readKey, setReadKey] = useState("myKey");
  const [readValue, setReadValue] = useState<string | null>(null);
  const [allItems, setAllItems] = useState<StorageItem[]>([]);

  // Set item in localStorage
  const setLocalStorageItem = () => {
    if (key && value) {
      localStorage.setItem(key, value);
      setValue("");
      refreshAllItems();
    }
  };

  // Get item from localStorage
  const getLocalStorageItem = () => {
    const item = localStorage.getItem(readKey);
    setReadValue(item);
  };

  // Remove item from localStorage
  const removeLocalStorageItem = (itemKey: string) => {
    localStorage.removeItem(itemKey);
    refreshAllItems();
    if (itemKey === readKey) {
      setReadValue(null);
    }
  };

  // Clear all localStorage
  const clearAllLocalStorage = () => {
    localStorage.clear();
    refreshAllItems();
    setReadValue(null);
  };

  // Refresh all items
  const refreshAllItems = () => {
    const items: StorageItem[] = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key) {
        const value = localStorage.getItem(key);
        if (value) {
          items.push({ key, value });
        }
      }
    }
    setAllItems(items);
  };

  // Save complex object example
  const saveComplexObject = () => {
    const user = {
      name: "John Doe",
      email: "john@example.com",
      preferences: {
        theme: "dark",
        language: "en",
      },
    };
    localStorage.setItem("userProfile", JSON.stringify(user));
    refreshAllItems();
  };

  // Load complex object example
  const loadComplexObject = () => {
    const userStr = localStorage.getItem("userProfile");
    if (userStr) {
      const user = JSON.parse(userStr);
      setReadKey("userProfile");
      setReadValue(JSON.stringify(user, null, 2));
    }
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
        onClick={() => removeLocalStorageItem(rowData.key)}
      />
    );
  };

  return (
    <div className="space-y-6">
      <Message
        className="mb-4"
        severity="info"
        text="localStorage provides persistent storage with no expiration date. Data remains even after closing the browser. Maximum storage is typically 5-10MB. Perfect for storing user preferences and application state."
      />

      <TerminalUI name="LocalStorage" fileName="LocalStorage.tsx">
        <pre className="text-sm leading-relaxed">
          <code>
            <span className="text-gray-500">{"// Store simple value"}</span>
            {"\n"}
            <span className="text-blue-300">localStorage</span>.
            <span className="text-yellow-300">setItem</span>(
            <span className="text-green-400">&quot;theme&quot;</span>,{" "}
            <span className="text-green-400">&quot;dark&quot;</span>);
            {"\n\n"}
            <span className="text-gray-500">{"// Store complex object"}</span>
            {"\n"}
            <span className="text-pink-400">const</span>{" "}
            <span className="text-blue-300">user</span> = {"{ "}
            <span className="text-blue-300">name</span>:{" "}
            <span className="text-green-400">&quot;John&quot;</span>,{" "}
            <span className="text-blue-300">email</span>:{" "}
            <span className="text-green-400">&quot;john@example.com&quot;</span>
            {" };\n"}
            <span className="text-blue-300">localStorage</span>.
            <span className="text-yellow-300">setItem</span>(
            <span className="text-green-400">&quot;user&quot;</span>,{" "}
            <span className="text-yellow-300">JSON</span>.
            <span className="text-yellow-300">stringify</span>(
            <span className="text-blue-300">user</span>));
            {"\n\n"}
            <span className="text-gray-500">{"// Read value"}</span>
            {"\n"}
            <span className="text-pink-400">const</span>{" "}
            <span className="text-blue-300">theme</span> ={" "}
            <span className="text-blue-300">localStorage</span>.
            <span className="text-yellow-300">getItem</span>(
            <span className="text-green-400">&quot;theme&quot;</span>);
            {"\n\n"}
            <span className="text-gray-500">{"// Read and parse object"}</span>
            {"\n"}
            <span className="text-pink-400">const</span>{" "}
            <span className="text-blue-300">userStr</span> ={" "}
            <span className="text-blue-300">localStorage</span>.
            <span className="text-yellow-300">getItem</span>(
            <span className="text-green-400">&quot;user&quot;</span>);{"\n"}
            <span className="text-pink-400">const</span>{" "}
            <span className="text-blue-300">userData</span> ={" "}
            <span className="text-yellow-300">JSON</span>.
            <span className="text-yellow-300">parse</span>(
            <span className="text-blue-300">userStr</span>);
            {"\n\n"}
            <span className="text-gray-500">{"// Remove item"}</span>
            {"\n"}
            <span className="text-blue-300">localStorage</span>.
            <span className="text-yellow-300">removeItem</span>(
            <span className="text-green-400">&quot;theme&quot;</span>);
            {"\n\n"}
            <span className="text-gray-500">{"// Clear all"}</span>
            {"\n"}
            <span className="text-blue-300">localStorage</span>.
            <span className="text-yellow-300">clear</span>();
            {"\n\n"}
            <span className="text-gray-500">{"// Get number of items"}</span>
            {"\n"}
            <span className="text-pink-400">const</span>{" "}
            <span className="text-blue-300">count</span> ={" "}
            <span className="text-blue-300">localStorage</span>.
            <span className="text-blue-300">length</span>;{"\n\n"}
            <span className="text-gray-500">{"// Get key by index"}</span>
            {"\n"}
            <span className="text-pink-400">const</span>{" "}
            <span className="text-blue-300">key</span> ={" "}
            <span className="text-blue-300">localStorage</span>.
            <span className="text-yellow-300">key</span>(
            <span className="text-orange-400">0</span>);
          </code>
        </pre>
      </TerminalUI>

      {/* Set Item Section */}
      <Card title="Set LocalStorage Item" className="mb-4">
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
            onClick={setLocalStorageItem}
            className="w-full"
          />
        </div>
      </Card>

      {/* Read Item Section */}
      <Card title="Read LocalStorage Item" className="mb-4">
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
            onClick={getLocalStorageItem}
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

      {/* Complex Object Example */}
      <Card title="Complex Object Example" className="mb-4">
        <div className="flex flex-col gap-4">
          <p className="text-gray-600">
            Store and retrieve complex objects using JSON.stringify() and
            JSON.parse()
          </p>
          <div className="flex gap-2">
            <Button
              label="Save User Profile"
              icon="pi pi-save"
              onClick={saveComplexObject}
              className="flex-1"
            />
            <Button
              label="Load User Profile"
              icon="pi pi-download"
              onClick={loadComplexObject}
              className="flex-1"
              severity="secondary"
            />
          </div>
        </div>
      </Card>

      {/* All Items Table */}
      <Card title="All LocalStorage Items">
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
              onClick={clearAllLocalStorage}
              className="flex-1"
            />
          </div>

          <DataTable
            value={allItems}
            paginator
            rows={5}
            emptyMessage="No items in localStorage"
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
