/* eslint-disable react/jsx-no-comment-textnodes */
"use client";
import { useState, useMemo } from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Message } from "primereact/message";
import { Divider } from "primereact/divider";
import { Slider } from "primereact/slider";
import { TerminalUI } from "../../ui/TerminalUI";

export const UseMemoExample = () => {
  // Demo 1: Expensive calculation without useMemo
  const [count, setCount] = useState(0);
  const [items, setItems] = useState([1, 2, 3, 4, 5]);

  // Demo 2: Filter with useMemo
  const [searchTerm, setSearchTerm] = useState("");
  const [products] = useState([
    { id: 1, name: "iPhone 15 Pro", price: 45000, category: "Phone" },
    { id: 2, name: "MacBook Pro M3", price: 85000, category: "Laptop" },
    { id: 3, name: "iPad Air", price: 25000, category: "Tablet" },
    { id: 4, name: "AirPods Pro", price: 8900, category: "Audio" },
    { id: 5, name: "Apple Watch Series 9", price: 15900, category: "Watch" },
    { id: 6, name: "Samsung Galaxy S24", price: 35000, category: "Phone" },
    { id: 7, name: "Dell XPS 15", price: 65000, category: "Laptop" },
    { id: 8, name: "Sony WH-1000XM5", price: 13900, category: "Audio" },
  ]);

  // Demo 3: Complex calculation with slider
  const [number, setNumber] = useState(10);
  const [renderCount, setRenderCount] = useState(0);

  // Demo 4: Object reference stability
  const [userInput, setUserInput] = useState("");

  // ❌ Without useMemo - recalculates every render
  const sumWithoutMemo = () => {
    console.log("🔴 Calculating sum WITHOUT useMemo...");
    let sum = 0;
    for (let i = 0; i < items.length; i++) {
      sum += items[i];
    }
    return sum;
  };

  // ✅ With useMemo - only recalculates when items change
  const sumWithMemo = useMemo(() => {
    console.log("🟢 Calculating sum WITH useMemo...");
    let sum = 0;
    for (let i = 0; i < items.length; i++) {
      sum += items[i];
    }
    return sum;
  }, [items]);

  // Demo 2: Filtered products with useMemo
  const filteredProducts = useMemo(() => {
    console.log("🔍 Filtering products with useMemo...");
    if (!searchTerm) return products;
    return products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm, products]);

  // Demo 3: Expensive calculation (factorial)
  const factorial = useMemo(() => {
    console.log("🧮 Calculating factorial with useMemo...");
    const calculateFactorial = (n: number): number => {
      if (n <= 1) return 1;
      // Simulate expensive calculation
      let result = 1;
      for (let i = 2; i <= n; i++) {
        result *= i;
      }
      return result;
    };
    return calculateFactorial(number);
  }, [number]);

  // Demo 4: Memoized object for stable reference
  const userConfig = useMemo(() => {
    console.log("⚙️ Creating userConfig object with useMemo...");
    return {
      name: userInput || "Guest",
      theme: "dark",
      language: "th",
    };
  }, [userInput]); // Only recreate when userInput changes

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
        useMemo Hook - คู่มือการใช้งาน
      </h1>

      <Message
        severity="info"
        text="useMemo ใช้สำหรับ cache ผลลัพธ์ของการคำนวณที่ซับซ้อน เพื่อไม่ให้คำนวณซ้ำทุกครั้งที่ component render"
        className="mb-4 w-full"
      />

      {/* What is useMemo */}
      <Card title="🤔 useMemo คืออะไร?" className="mb-4">
        <div className="space-y-4">
          <div>
            <h3 className="font-bold text-lg mb-2 text-blue-600">
              📌 คำจำกัดความ
            </h3>
            <p className="text-gray-700 leading-relaxed">
              <strong>useMemo</strong> เป็น Hook ที่ใช้สำหรับ{" "}
              <strong>memoization</strong> - บันทึกผลลัพธ์ของการคำนวณและ return
              ค่าเดิมถ้า dependencies ไม่เปลี่ยน ช่วยเพิ่ม performance
              โดยหลีกเลี่ยงการคำนวณซ้ำที่ไม่จำเป็น
            </p>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border-2 border-blue-200 rounded-lg p-4">
            <h3 className="font-bold text-lg mb-3 text-blue-700">
              🎯 Use Cases หลัก
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">✓</span>
                <div>
                  <strong>Expensive Calculations:</strong> การคำนวณที่ซับซ้อน
                  เช่น loop ใหญ่, sorting, filtering
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">✓</span>
                <div>
                  <strong>Reference Stability:</strong> สร้าง object/array ที่มี
                  reference เท่าเดิม
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">✓</span>
                <div>
                  <strong>Derived State:</strong> คำนวณค่าจาก state หลายตัว
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">✓</span>
                <div>
                  <strong>Prevent Re-renders:</strong> ป้องกัน child components
                  re-render โดยไม่จำเป็น
                </div>
              </li>
            </ul>
          </div>

          <TerminalUI fileName="UseMemo.tsx" name="useMemo Syntax">
            <pre className="text-sm leading-relaxed">
              <code>
                <span className="text-pink-400">import</span>
                {" { "}
                <span className="text-yellow-300">useMemo</span>
                {" } "}
                <span className="text-pink-400">from</span>{" "}
                <span className="text-green-400">&apos;react&apos;</span>
                {";\n\n"}
                <span className="text-pink-400">const</span>{" "}
                <span className="text-blue-300">memoizedValue</span>
                {" = "}
                <span className="text-yellow-300">useMemo</span>
                {"(() => {\n  "}
                <span className="text-gray-500">// Expensive calculation</span>
                {"\n  "}
                <span className="text-pink-400">return</span>{" "}
                <span className="text-yellow-300">computeExpensiveValue</span>
                {"("}
                <span className="text-blue-300">a</span>
                {", "}
                <span className="text-blue-300">b</span>
                {");\n}, ["}
                <span className="text-blue-300">a</span>
                {", "}
                <span className="text-blue-300">b</span>
                {"]); "}
                {/* Only recalculate when a or b changes */}
              </code>
            </pre>
          </TerminalUI>
        </div>
      </Card>

      {/* Demo 1: With vs Without useMemo */}
      <Card title="🎬 Demo 1: ผลต่างระหว่างมี/ไม่มี useMemo" className="mb-4">
        <p className="mb-3 text-gray-700">
          เปิด <strong>Console</strong> แล้วกดปุ่ม &quot;Re-render&quot; -
          สังเกตว่า useMemo จะไม่คำนวณใหม่ถ้า items ไม่เปลี่ยน
        </p>

        <div className="bg-gray-100 p-6 rounded-lg mb-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="bg-white p-4 rounded border-2 border-red-300">
              <h3 className="font-bold text-red-600 mb-2">
                ❌ Without useMemo
              </h3>
              <p className="text-2xl font-bold text-gray-800">
                Sum = {sumWithoutMemo()}
              </p>
              <p className="text-sm text-gray-600 mt-2">
                คำนวณทุกครั้งที่ render
              </p>
            </div>

            <div className="bg-white p-4 rounded border-2 border-green-300">
              <h3 className="font-bold text-green-600 mb-2">✅ With useMemo</h3>
              <p className="text-2xl font-bold text-gray-800">
                Sum = {sumWithMemo}
              </p>
              <p className="text-sm text-gray-600 mt-2">
                Cache ค่าไว้ ไม่คำนวณซ้ำ
              </p>
            </div>
          </div>

          <div className="flex gap-3 mb-4">
            <Button
              label="Re-render (Count++)"
              onClick={() => setCount(count + 1)}
              severity="secondary"
              icon="pi pi-refresh"
            />
            <Button
              label="เปลี่ยนค่า Items"
              onClick={() => setItems([...items, items.length + 1])}
              severity="success"
              icon="pi pi-plus"
            />
            <Button
              label="รีเซ็ต"
              onClick={() => {
                setCount(0);
                setItems([1, 2, 3, 4, 5]);
              }}
              severity="danger"
              icon="pi pi-times"
            />
          </div>

          <div className="bg-blue-100 p-3 rounded">
            <p className="text-sm">
              <strong>Current Items:</strong> [{items.join(", ")}]
            </p>
            <p className="text-sm">
              <strong>Render Count:</strong> {count}
            </p>
          </div>
        </div>

        <TerminalUI fileName="WithVsWithout.tsx" name="useMemo Comparison">
          <pre className="text-sm leading-relaxed">
            <code>
              <span className="text-gray-500">
                {/* ❌ คำนวณทุกครั้งที่ render */}
              </span>
              {"\n"}
              <span className="text-pink-400">const</span>{" "}
              <span className="text-blue-300">sum</span>
              {" = () => {\n  "}
              <span className="text-pink-400">let</span>{" "}
              <span className="text-blue-300">result</span>
              {" = "}
              <span className="text-orange-400">0</span>
              {";\n  "}
              <span className="text-blue-300">items</span>
              {"."}
              <span className="text-yellow-300">forEach</span>
              {"("}
              <span className="text-blue-300">item</span>
              {" => "}
              <span className="text-blue-300">result</span>
              {" += "}
              <span className="text-blue-300">item</span>
              {");\n  "}
              <span className="text-pink-400">return</span>{" "}
              <span className="text-blue-300">result</span>
              {";\n};\n\n"}
              <span className="text-gray-500">
                {/* ✅ Cache ค่าไว้ คำนวณใหม่เมื่อ items เปลี่ยน */}
              </span>
              {"\n"}
              <span className="text-pink-400">const</span>{" "}
              <span className="text-blue-300">sum</span>
              {" = "}
              <span className="text-yellow-300">useMemo</span>
              {"(() => {\n  "}
              <span className="text-pink-400">let</span>{" "}
              <span className="text-blue-300">result</span>
              {" = "}
              <span className="text-orange-400">0</span>
              {";\n  "}
              <span className="text-blue-300">items</span>
              {"."}
              <span className="text-yellow-300">forEach</span>
              {"("}
              <span className="text-blue-300">item</span>
              {" => "}
              <span className="text-blue-300">result</span>
              {" += "}
              <span className="text-blue-300">item</span>
              {");\n  "}
              <span className="text-pink-400">return</span>{" "}
              <span className="text-blue-300">result</span>
              {";\n}, ["}
              <span className="text-blue-300">items</span>
              {"]);"}
            </code>
          </pre>
        </TerminalUI>
      </Card>

      {/* Demo 2: Filter/Search */}
      <Card title="🔍 Demo 2: Filter & Search with useMemo" className="mb-4">
        <p className="mb-3 text-gray-700">
          useMemo ช่วย optimize การ filter ข้อมูลจำนวนมาก - จะ filter ใหม่เมื่อ
          searchTerm เปลี่ยนเท่านั้น
        </p>

        <div className="bg-gray-100 p-6 rounded-lg mb-4">
          <div className="mb-4">
            <label className="block font-semibold mb-2 text-gray-700">
              🔎 ค้นหาสินค้า:
            </label>
            <InputText
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="พิมพ์ชื่อสินค้า..."
              className="w-full"
            />
          </div>

          <div className="bg-white p-4 rounded">
            <h3 className="font-bold mb-3 text-gray-800">
              📦 ผลลัพธ์: {filteredProducts.length} รายการ
            </h3>
            <div className="space-y-2">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="flex justify-between items-center p-3 bg-blue-50 rounded border border-blue-200"
                >
                  <div>
                    <p className="font-semibold text-gray-800">
                      {product.name}
                    </p>
                    <p className="text-sm text-gray-600">{product.category}</p>
                  </div>
                  <p className="font-bold text-blue-600">
                    ฿{product.price.toLocaleString()}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <p className="text-sm text-gray-600 mt-3">
            💡 เปิด Console แล้วพิมพ์ค้นหา - จะเห็น log เฉพาะเมื่อ searchTerm
            เปลี่ยน
          </p>
        </div>

        <TerminalUI fileName="FilterSearch.tsx" name="useMemo with Filter">
          <pre className="text-sm leading-relaxed">
            <code>
              <span className="text-pink-400">const</span>{" "}
              <span className="text-blue-300">filteredProducts</span>
              {" = "}
              <span className="text-yellow-300">useMemo</span>
              {"(() => {\n  "}
              <span className="text-blue-300">console</span>
              {"."}
              <span className="text-yellow-300">log</span>
              {"("}
              <span className="text-green-400">
                &apos;🔍 Filtering...&apos;
              </span>
              {");\n  "}
              <span className="text-pink-400">if</span>
              {" (!"}
              <span className="text-blue-300">searchTerm</span>
              {") "}
              <span className="text-pink-400">return</span>{" "}
              <span className="text-blue-300">products</span>
              {";\n  "}
              <span className="text-pink-400">return</span>{" "}
              <span className="text-blue-300">products</span>
              {"."}
              <span className="text-yellow-300">filter</span>
              {"("}
              <span className="text-blue-300">product</span>
              {" =>\n    "}
              <span className="text-blue-300">product</span>
              {"."}
              <span className="text-blue-300">name</span>
              {"."}
              <span className="text-yellow-300">toLowerCase</span>
              {"()."}
              <span className="text-yellow-300">includes</span>
              {"("}
              <span className="text-blue-300">searchTerm</span>
              {"."}
              <span className="text-yellow-300">toLowerCase</span>
              {"())\n  );\n}, ["}
              <span className="text-blue-300">searchTerm</span>
              {", "}
              <span className="text-blue-300">products</span>
              {"]); "}
              {/* Re-filter เมื่อ searchTerm เปลี่ยน */}
            </code>
          </pre>
        </TerminalUI>
      </Card>

      {/* Demo 3: Complex Calculation */}
      <Card
        title="🧮 Demo 3: Expensive Calculation (Factorial)"
        className="mb-4"
      >
        <p className="mb-3 text-gray-700">
          การคำนวณที่ซับซ้อน (factorial) ควรใช้ useMemo เพื่อไม่คำนวณซ้ำ
        </p>

        <div className="bg-gray-100 p-6 rounded-lg mb-4">
          <div className="mb-6">
            <label className="block font-semibold mb-3 text-gray-700">
              🔢 เลือกตัวเลข: <span className="text-blue-600">{number}</span>
            </label>
            <Slider
              value={number}
              onChange={(e) => setNumber(e.value as number)}
              min={1}
              max={20}
              className="w-full"
            />
          </div>

          <div className="bg-white p-6 rounded border-2 border-blue-300">
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Factorial of {number}
            </h3>
            <p className="text-4xl font-bold text-blue-600">
              {factorial.toLocaleString()}
            </p>
          </div>

          <div className="mt-4">
            <Button
              label="Force Re-render"
              onClick={() => setRenderCount(renderCount + 1)}
              severity="secondary"
              icon="pi pi-refresh"
            />
            <p className="text-sm text-gray-600 mt-2">
              Render count: {renderCount} (เปิด Console เพื่อดู log)
            </p>
          </div>
        </div>

        <TerminalUI fileName="Factorial.tsx" name="useMemo with Recursion">
          <pre className="text-sm leading-relaxed">
            <code>
              <span className="text-pink-400">const</span>{" "}
              <span className="text-blue-300">factorial</span>
              {" = "}
              <span className="text-yellow-300">useMemo</span>
              {"(() => {\n  "}
              <span className="text-blue-300">console</span>
              {"."}
              <span className="text-yellow-300">log</span>
              {"("}
              <span className="text-green-400">
                &apos;🧮 Calculating factorial...&apos;
              </span>
              {");\n  "}
              <span className="text-pink-400">const</span>{" "}
              <span className="text-yellow-300">calculate</span>
              {" = ("}
              <span className="text-blue-300">n</span>
              {": "}
              <span className="text-pink-400">number</span>
              {"): "}
              <span className="text-pink-400">number</span>
              {" => {\n    "}
              <span className="text-pink-400">if</span>
              {" ("}
              <span className="text-blue-300">n</span>
              {" <= "}
              <span className="text-orange-400">1</span>
              {") "}
              <span className="text-pink-400">return</span>{" "}
              <span className="text-orange-400">1</span>
              {";\n    "}
              <span className="text-pink-400">return</span>{" "}
              <span className="text-blue-300">n</span>
              {" * "}
              <span className="text-yellow-300">calculate</span>
              {"("}
              <span className="text-blue-300">n</span>
              {" - "}
              <span className="text-orange-400">1</span>
              {");\n  };\n  "}
              <span className="text-pink-400">return</span>{" "}
              <span className="text-yellow-300">calculate</span>
              {"("}
              <span className="text-blue-300">number</span>
              {");\n}, ["}
              <span className="text-blue-300">number</span>
              {"]); "}
              {/* คำนวณใหม่เมื่อ number เปลี่ยนเท่านั้น */}
            </code>
          </pre>
        </TerminalUI>
      </Card>

      {/* Demo 4: Reference Stability */}
      <Card title="🔗 Demo 4: Reference Stability" className="mb-4">
        <p className="mb-3 text-gray-700">
          useMemo ช่วยให้ object/array มี reference เหมือนเดิม - ป้องกัน child
          component re-render
        </p>

        <div className="bg-gray-100 p-6 rounded-lg mb-4">
          <div className="mb-4">
            <label className="block font-semibold mb-2 text-gray-700">
              👤 User Name:
            </label>
            <InputText
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              placeholder="Enter your name..."
              className="w-full"
            />
          </div>

          <div className="bg-white p-4 rounded border-2 border-green-300">
            <h3 className="font-bold text-green-600 mb-3">
              ⚙️ User Config (Memoized Object)
            </h3>
            <pre className="bg-gray-100 p-3 rounded text-sm overflow-x-auto">
              {JSON.stringify(userConfig, null, 2)}
            </pre>
            <p className="text-sm text-gray-600 mt-2">
              💡 Object จะถูกสร้างใหม่เฉพาะเมื่อ userInput เปลี่ยน
            </p>
          </div>
        </div>

        <TerminalUI
          fileName="ReferenceStability.tsx"
          name="useMemo for Object Reference"
        >
          <pre className="text-sm leading-relaxed">
            <code>
              <span className="text-gray-500">
                {/* ❌ สร้าง object ใหม่ทุกครั้งที่ render (reference ใหม่) */}
              </span>
              {"\n"}
              <span className="text-pink-400">const</span>{" "}
              <span className="text-blue-300">userConfig</span>
              {" = {\n  "}
              <span className="text-blue-300">name</span>
              {": "}
              <span className="text-blue-300">userInput</span>
              {" || "}
              <span className="text-green-400">&apos;Guest&apos;</span>
              {",\n  "}
              <span className="text-blue-300">theme</span>
              {": "}
              <span className="text-green-400">&apos;dark&apos;</span>
              {",\n  "}
              <span className="text-blue-300">language</span>
              {": "}
              <span className="text-green-400">&apos;th&apos;</span>
              {"\n};\n\n"}
              <span className="text-gray-500">
                {/* ✅ สร้าง object ใหม่เมื่อ userInput เปลี่ยนเท่านั้น */}
              </span>
              {"\n"}
              <span className="text-pink-400">const</span>{" "}
              <span className="text-blue-300">userConfig</span>
              {" = "}
              <span className="text-yellow-300">useMemo</span>
              {"(() => ({\n  "}
              <span className="text-blue-300">name</span>
              {": "}
              <span className="text-blue-300">userInput</span>
              {" || "}
              <span className="text-green-400">&apos;Guest&apos;</span>
              {",\n  "}
              <span className="text-blue-300">theme</span>
              {": "}
              <span className="text-green-400">&apos;dark&apos;</span>
              {",\n  "}
              <span className="text-blue-300">language</span>
              {": "}
              <span className="text-green-400">&apos;th&apos;</span>
              {"\n}), ["}
              <span className="text-blue-300">userInput</span>
              {"]); "}
              {/* Same reference ถ้า userInput ไม่เปลี่ยน */}
            </code>
          </pre>
        </TerminalUI>
      </Card>

      <Divider />

      {/* Best Practices */}
      <Card title="📚 Best Practices และคำแนะนำ" className="mb-4">
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-bold text-green-600 mb-2">
              ✅ เมื่อไหร่ควรใช้ useMemo
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Expensive Calculations:</strong> การคำนวณที่ใช้เวลานาน
                (loop ใหญ่, sorting, complex math)
              </li>
              <li>
                <strong>Large Lists:</strong> filter, map, reduce ข้อมูลจำนวนมาก
              </li>
              <li>
                <strong>Reference Equality:</strong> ต้องการ stable reference
                สำหรับ dependencies
              </li>
              <li>
                <strong>Child Re-render Prevention:</strong> ส่ง props เป็น
                object/array ลง child component
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-red-600 mb-2">
              ❌ เมื่อไหร่ไม่ควรใช้ useMemo
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Simple Calculations:</strong> การคำนวณง่ายๆ (a + b, x *
                y)
              </li>
              <li>
                <strong>Premature Optimization:</strong> ใช้ก่อนเจอปัญหา
                performance จริง
              </li>
              <li>
                <strong>Every Calculation:</strong> ไม่ต้องใช้ทุกที่ (overhead
                มากกว่าประโยชน์)
              </li>
              <li>
                <strong>Primitive Values:</strong> string, number, boolean
                ธรรมดา
              </li>
            </ul>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded">
            <h3 className="font-bold text-yellow-800 mb-2">⚠️ ข้อควรระวัง</h3>
            <ul className="space-y-2 text-yellow-700 text-sm">
              <li>• useMemo เพิ่ม memory usage (เก็บค่าเก่าไว้ใน cache)</li>
              <li>• ต้องระบุ dependencies ครบถ้วน (ใช้ ESLint plugin)</li>
              <li>
                • React อาจ &quot;ลืม&quot; memoized value บางครั้ง
                (ไม่รับประกัน 100%)
              </li>
              <li>• อย่าใช้ side effects ใน useMemo (ใช้ useEffect แทน)</li>
            </ul>
          </div>

          <div className="bg-blue-50 p-4 rounded">
            <h3 className="text-lg font-bold text-blue-600 mb-2">
              💡 กฎทั่วไป
            </h3>
            <p className="text-gray-700">
              1. <strong>วัด Performance ก่อน</strong> - อย่า optimize
              ก่อนเจอปัญหา
              <br />
              2. <strong>ใช้เมื่อจำเป็น</strong> - การคำนวณซับซ้อนหรือ
              dependencies ที่เปลี่ยนบ่อย
              <br />
              3. <strong>เช็ค Console</strong> - ดูว่าคำนวณกี่ครั้งจริง
              <br />
              4. <strong>Combine กับ useCallback</strong> - ใช้ร่วมกันสำหรับ
              functions
            </p>
          </div>
        </div>
      </Card>

      {/* Performance Comparison */}
      <Card title="⚡ useMemo vs Recalculation Performance" className="mb-4">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gradient-to-r from-blue-100 to-cyan-100">
                <th className="border border-blue-300 p-3 text-left">
                  Scenario
                </th>
                <th className="border border-blue-300 p-3 text-left bg-red-200">
                  Without useMemo
                </th>
                <th className="border border-blue-300 p-3 text-left bg-green-200">
                  With useMemo
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-3 font-semibold">
                  Simple Math (a + b)
                </td>
                <td className="border border-gray-300 p-3 bg-green-50">
                  <span className="text-green-600">✓</span> ดีกว่า (ไม่ต้องใช้)
                </td>
                <td className="border border-gray-300 p-3 bg-red-50">
                  <span className="text-red-600">✗</span> Overhead มากเกินไป
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-3 font-semibold">
                  Filter 100 items
                </td>
                <td className="border border-gray-300 p-3 bg-yellow-50">
                  <span className="text-yellow-600">~</span> OK แต่ไม่ optimal
                </td>
                <td className="border border-gray-300 p-3 bg-green-50">
                  <span className="text-green-600">✓</span> ดีกว่ามาก
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-3 font-semibold">
                  Sort 10,000 items
                </td>
                <td className="border border-gray-300 p-3 bg-red-50">
                  <span className="text-red-600">✗</span> ช้ามาก (sort ทุกครั้ง)
                </td>
                <td className="border border-gray-300 p-3 bg-green-50">
                  <span className="text-green-600">✓</span> เร็วมาก (cache ไว้)
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-3 font-semibold">
                  Complex Calculations
                </td>
                <td className="border border-gray-300 p-3 bg-red-50">
                  <span className="text-red-600">✗</span> Blocking UI
                </td>
                <td className="border border-gray-300 p-3 bg-green-50">
                  <span className="text-green-600">✓</span> Smooth UI
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Card>

      {/* Syntax Summary */}
      <Card title="📖 สรุปรูปแบบการใช้งาน" className="mb-4">
        <TerminalUI
          fileName="UseMemoPatterns.tsx"
          name="Common useMemo Patterns"
        >
          <pre className="text-sm leading-relaxed">
            <code>
              <span className="text-pink-400">import</span>
              {" { "}
              <span className="text-yellow-300">useMemo</span>
              {" } "}
              <span className="text-pink-400">from</span>{" "}
              <span className="text-green-400">&apos;react&apos;</span>
              {";\n\n"}
              {/* Basic: Expensive calculation */}
              {"\n"}
              <span className="text-pink-400">const</span>{" "}
              <span className="text-blue-300">result</span>
              {" = "}
              <span className="text-yellow-300">useMemo</span>
              {"(() => {\n  "}
              <span className="text-pink-400">return</span>{" "}
              <span className="text-yellow-300">expensiveCalculation</span>
              {"("}
              <span className="text-blue-300">a</span>
              {", "}
              <span className="text-blue-300">b</span>
              {");\n}, ["}
              <span className="text-blue-300">a</span>
              {", "}
              <span className="text-blue-300">b</span>
              {"]);\n\n"}
              {/* Filter/Search */}
              {"\n"}
              <span className="text-pink-400">const</span>{" "}
              <span className="text-blue-300">filtered</span>
              {" = "}
              <span className="text-yellow-300">useMemo</span>
              {"(() => {\n  "}
              <span className="text-pink-400">return</span>{" "}
              <span className="text-blue-300">items</span>
              {"."}
              <span className="text-yellow-300">filter</span>
              {"("}
              <span className="text-blue-300">item</span>
              {" => "}
              <span className="text-blue-300">item</span>
              {"."}
              <span className="text-blue-300">active</span>
              {");\n}, ["}
              <span className="text-blue-300">items</span>
              {"]);\n\n"}
              {/* Sort */}
              {"\n"}
              <span className="text-pink-400">const</span>{" "}
              <span className="text-blue-300">sorted</span>
              {" = "}
              <span className="text-yellow-300">useMemo</span>
              {"(() => {\n  "}
              <span className="text-pink-400">return</span>
              {" [..."}
              <span className="text-blue-300">items</span>
              {"]."}
              <span className="text-yellow-300">sort</span>
              {"(("}
              <span className="text-blue-300">a</span>
              {", "}
              <span className="text-blue-300">b</span>
              {") => "}
              <span className="text-blue-300">a</span>
              {"."}
              <span className="text-blue-300">name</span>
              {"."}
              <span className="text-yellow-300">localeCompare</span>
              {"("}
              <span className="text-blue-300">b</span>
              {"."}
              <span className="text-blue-300">name</span>
              {"));\n}, ["}
              <span className="text-blue-300">items</span>
              {"]);\n\n"}
              {/* Object/Array with stable reference */}
              {"\n"}
              <span className="text-pink-400">const</span>{" "}
              <span className="text-blue-300">config</span>
              {" = "}
              <span className="text-yellow-300">useMemo</span>
              {"(() => ({\n  "}
              <span className="text-blue-300">theme</span>
              {": "}
              <span className="text-blue-300">theme</span>
              {",\n  "}
              <span className="text-blue-300">language</span>
              {": "}
              <span className="text-blue-300">lang</span>
              {"\n}), ["}
              <span className="text-blue-300">theme</span>
              {", "}
              <span className="text-blue-300">lang</span>
              {"]);\n\n"}
              {/* Derived state from multiple sources */}
              {"\n"}
              <span className="text-pink-400">const</span>{" "}
              <span className="text-blue-300">totalPrice</span>
              {" = "}
              <span className="text-yellow-300">useMemo</span>
              {"(() => {\n  "}
              <span className="text-pink-400">return</span>{" "}
              <span className="text-blue-300">cartItems</span>
              {"."}
              <span className="text-yellow-300">reduce</span>
              {"(("}
              <span className="text-blue-300">sum</span>
              {", "}
              <span className="text-blue-300">item</span>
              {") => \n    "}
              <span className="text-blue-300">sum</span>
              {" + ("}
              <span className="text-blue-300">item</span>
              {"."}
              <span className="text-blue-300">price</span>
              {" * "}
              <span className="text-blue-300">item</span>
              {"."}
              <span className="text-blue-300">quantity</span>
              {"), "}
              <span className="text-orange-400">0</span>
              {"\n  );\n}, ["}
              <span className="text-blue-300">cartItems</span>
              {"]);"}
            </code>
          </pre>
        </TerminalUI>
      </Card>
    </div>
  );
};
