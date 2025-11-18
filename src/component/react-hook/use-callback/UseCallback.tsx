"use client";
import { useState, useCallback, memo } from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Message } from "primereact/message";
import { Divider } from "primereact/divider";
import { TerminalUI } from "../../ui/TerminalUI";

// Child component ที่ใช้ memo เพื่อป้องกัน re-render
interface CounterButtonProps {
  onIncrement: () => void;
  label: string;
}

const CounterButton = memo(({ onIncrement, label }: CounterButtonProps) => {
  console.log(`🔄 CounterButton "${label}" rendered`);
  return (
    <Button
      label={label}
      onClick={onIncrement}
      severity="success"
      icon="pi pi-plus"
      className="mr-2"
    />
  );
});

CounterButton.displayName = "CounterButton";

// Search component
interface SearchBoxProps {
  onSearch: (term: string) => void;
}

const SearchBox = memo(({ onSearch }: SearchBoxProps) => {
  const [value, setValue] = useState("");
  console.log("🔍 SearchBox rendered");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <InputText
      value={value}
      onChange={handleChange}
      placeholder="ค้นหา..."
      className="w-full"
    />
  );
});

SearchBox.displayName = "SearchBox";

export const UseCallbackExample = () => {
  // Demo 1: useCallback vs regular function
  const [count, setCount] = useState(0);
  const [otherState, setOtherState] = useState(0);

  // ❌ Without useCallback - function ใหม่ทุกครั้งที่ render
  const incrementWithoutCallback = () => {
    setCount((prev) => prev + 1);
  };

  // ✅ With useCallback - function เดิม ถ้า dependencies ไม่เปลี่ยน
  const incrementWithCallback = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []); // Empty deps - function เดิมตลอด

  // Demo 2: useCallback กับ event handlers
  const [items, setItems] = useState<string[]>(["Item 1", "Item 2", "Item 3"]);
  const [newItem, setNewItem] = useState("");

  const handleAddItem = useCallback(() => {
    if (newItem.trim()) {
      setItems((prev) => [...prev, newItem]);
      setNewItem("");
    }
  }, [newItem]); // Re-create เมื่อ newItem เปลี่ยน

  const handleRemoveItem = useCallback((index: number) => {
    setItems((prev) => prev.filter((_, i) => i !== index));
  }, []); // ไม่ต้อง re-create

  // Demo 3: useCallback กับ search
  const [searchResults, setSearchResults] = useState<string[]>([]);

  const handleSearch = useCallback((term: string) => {
    console.log("🔎 Searching for:", term);
    const allProducts = [
      "iPhone 15",
      "MacBook Pro",
      "iPad Air",
      "AirPods",
      "Apple Watch",
    ];
    if (!term) {
      setSearchResults([]);
      return;
    }
    const results = allProducts.filter((product) =>
      product.toLowerCase().includes(term.toLowerCase())
    );
    setSearchResults(results);
  }, []);

  // Demo 4: useCallback กับ API calls (mock)
  const [userData, setUserData] = useState<{ name: string; id: number } | null>(
    null
  );
  const [userId, setUserId] = useState(1);

  const fetchUser = useCallback(async () => {
    console.log("📡 Fetching user:", userId);
    // Mock API call
    await new Promise((resolve) => setTimeout(resolve, 500));
    setUserData({
      id: userId,
      name: `User ${userId}`,
    });
  }, [userId]); // Re-create เมื่อ userId เปลี่ยน

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
        useCallback Hook - คู่มือการใช้งาน
      </h1>

      <Message
        severity="info"
        text="useCallback ใช้สำหรับ memoize functions เพื่อให้ function มี reference เหมือนเดิม และป้องกัน child components re-render โดยไม่จำเป็น"
        className="mb-4 w-full"
      />

      {/* What is useCallback */}
      <Card title="🤔 useCallback คืออะไร?" className="mb-4">
        <div className="space-y-4">
          <div>
            <h3 className="font-bold text-lg mb-2 text-purple-600">
              📌 คำจำกัดความ
            </h3>
            <p className="text-gray-700 leading-relaxed">
              <strong>useCallback</strong> เป็น Hook ที่ใช้สำหรับ{" "}
              <strong>memoize functions</strong> - return function เดิมถ้า
              dependencies ไม่เปลี่ยน ป้องกัน child components re-render
              เมื่อได้รับ function เป็น props
            </p>
          </div>

          <div className="bg-gradient-to-r from-purple-50 to-pink-50 border-2 border-purple-200 rounded-lg p-4">
            <h3 className="font-bold text-lg mb-3 text-purple-700">
              🎯 ความแตกต่างหลัก
            </h3>
            <div className="space-y-3">
              <div className="bg-white p-3 rounded">
                <p className="font-semibold text-blue-600 mb-1">useMemo</p>
                <p className="text-sm text-gray-600">
                  Memoize <strong>ผลลัพธ์</strong> ของการคำนวณ (values)
                </p>
                <code className="text-xs bg-gray-100 px-2 py-1 rounded block mt-1">
                  const value = useMemo(() =&gt; compute(), [deps])
                </code>
              </div>
              <div className="bg-white p-3 rounded">
                <p className="font-semibold text-purple-600 mb-1">
                  useCallback
                </p>
                <p className="text-sm text-gray-600">
                  Memoize <strong>functions</strong> เอง (function reference)
                </p>
                <code className="text-xs bg-gray-100 px-2 py-1 rounded block mt-1">
                  const fn = useCallback(() =&gt; {`{}`}, [deps])
                </code>
              </div>
            </div>
          </div>

          <TerminalUI fileName="UseCallback.tsx" name="useCallback Syntax">
            <pre className="text-sm leading-relaxed">
              <code>
                <span className="text-pink-400">import</span>
                {" { "}
                <span className="text-yellow-300">useCallback</span>
                {" } "}
                <span className="text-pink-400">from</span>{" "}
                <span className="text-green-400">&apos;react&apos;</span>
                {";\n\n"}
                <span className="text-pink-400">const</span>{" "}
                <span className="text-blue-300">memoizedCallback</span>
                {" = "}
                <span className="text-yellow-300">useCallback</span>
                {"(() => {\n  "}
                {/* Function body */}
                {"\n  "}
                <span className="text-yellow-300">doSomething</span>
                {"("}
                <span className="text-blue-300">a</span>
                {", "}
                <span className="text-blue-300">b</span>
                {");\n}, ["}
                <span className="text-blue-300">a</span>
                {", "}
                <span className="text-blue-300">b</span>
                {"]); "}
                {/* Re-create function เมื่อ a หรือ b เปลี่ยน */}
              </code>
            </pre>
          </TerminalUI>
        </div>
      </Card>

      {/* Demo 1: With vs Without useCallback */}
      <Card
        title="🎬 Demo 1: ผลต่างระหว่างมี/ไม่มี useCallback"
        className="mb-4"
      >
        <p className="mb-3 text-gray-700">
          เปิด <strong>Console</strong> แล้วกดปุ่ม &quot;Change Other
          State&quot; - CounterButton ที่ใช้ useCallback จะไม่ re-render
        </p>

        <div className="bg-gray-100 p-6 rounded-lg mb-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="bg-white p-4 rounded border-2 border-red-300">
              <h3 className="font-bold text-red-600 mb-3">
                ❌ Without useCallback
              </h3>
              <CounterButton
                onIncrement={incrementWithoutCallback}
                label="Increment (No Callback)"
              />
              <p className="text-sm text-gray-600 mt-3">
                Function ใหม่ทุกครั้ง → Child re-render
              </p>
            </div>

            <div className="bg-white p-4 rounded border-2 border-green-300">
              <h3 className="font-bold text-green-600 mb-3">
                ✅ With useCallback
              </h3>
              <CounterButton
                onIncrement={incrementWithCallback}
                label="Increment (With Callback)"
              />
              <p className="text-sm text-gray-600 mt-3">
                Function เดิม → Child ไม่ re-render
              </p>
            </div>
          </div>

          <div className="bg-blue-100 p-4 rounded mb-4">
            <p className="font-bold text-lg mb-2">Count: {count}</p>
            <p className="text-sm text-gray-600">
              Other State: {otherState} (ไม่เกี่ยวกับ count)
            </p>
          </div>

          <div className="flex gap-3">
            <Button
              label="Change Other State"
              onClick={() => setOtherState(otherState + 1)}
              severity="secondary"
              icon="pi pi-sync"
            />
            <Button
              label="รีเซ็ต"
              onClick={() => {
                setCount(0);
                setOtherState(0);
              }}
              severity="danger"
              icon="pi pi-times"
            />
          </div>

          <p className="text-sm text-gray-600 mt-3">
            💡 เปิด Console: เมื่อกด &quot;Change Other State&quot; จะเห็นว่า
            CounterButton ที่ใช้ useCallback ไม่ render ใหม่
          </p>
        </div>

        <TerminalUI fileName="WithVsWithout.tsx" name="useCallback Comparison">
          <pre className="text-sm leading-relaxed">
            <code>
              {/* ❌ Function ใหม่ทุกครั้งที่ parent render */}
              {"\n"}
              <span className="text-pink-400">const</span>{" "}
              <span className="text-yellow-300">increment</span>
              {" = () => {\n  "}
              <span className="text-yellow-300">setCount</span>
              {"("}
              <span className="text-blue-300">prev</span>
              {" => "}
              <span className="text-blue-300">prev</span>
              {" + "}
              <span className="text-orange-400">1</span>
              {");\n};\n\n"}
              {/* ✅ Function เดิม (same reference) */}
              {"\n"}
              <span className="text-pink-400">const</span>{" "}
              <span className="text-yellow-300">increment</span>
              {" = "}
              <span className="text-yellow-300">useCallback</span>
              {"(() => {\n  "}
              <span className="text-yellow-300">setCount</span>
              {"("}
              <span className="text-blue-300">prev</span>
              {" => "}
              <span className="text-blue-300">prev</span>
              {" + "}
              <span className="text-orange-400">1</span>
              {");\n}, []); "}
              {/* Empty deps = function ไม่เปลี่ยน */}
              {"\n\n"}
              {/* Child component with React.memo */}
              {"\n"}
              <span className="text-pink-400">const</span>{" "}
              <span className="text-yellow-300">Button</span>
              {" = "}
              <span className="text-yellow-300">memo</span>
              {"(({ "}
              <span className="text-blue-300">onClick</span>
              {" }) => {\n  "}
              {/* จะ re-render เฉพาะเมื่อ onClick reference เปลี่ยน */}
              {"\n  "}
              <span className="text-pink-400">return</span>
              {" <"}
              <span className="text-blue-300">button</span>{" "}
              <span className="text-blue-300">onClick</span>
              {"={"}
              <span className="text-blue-300">onClick</span>
              {"}>Click</"}
              <span className="text-blue-300">button</span>
              {">;\n});"}
            </code>
          </pre>
        </TerminalUI>
      </Card>

      {/* Demo 2: Event Handlers */}
      <Card title="📝 Demo 2: Event Handlers with useCallback" className="mb-4">
        <p className="mb-3 text-gray-700">
          useCallback เหมาะสำหรับ event handlers ที่ส่งลง child components
        </p>

        <div className="bg-gray-100 p-6 rounded-lg mb-4">
          <div className="mb-4">
            <label className="block font-semibold mb-2 text-gray-700">
              ➕ เพิ่ม Item:
            </label>
            <div className="flex gap-2">
              <InputText
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
                placeholder="กรอกชื่อ item..."
                className="flex-1"
                onKeyPress={(e) => e.key === "Enter" && handleAddItem()}
              />
              <Button
                label="Add"
                onClick={handleAddItem}
                severity="success"
                icon="pi pi-plus"
              />
            </div>
          </div>

          <div className="bg-white p-4 rounded">
            <h3 className="font-bold mb-3 text-gray-800">
              📋 Items ({items.length}):
            </h3>
            {items.length === 0 ? (
              <p className="text-gray-500 italic">ยังไม่มี items</p>
            ) : (
              <div className="space-y-2">
                {items.map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center p-3 bg-purple-50 rounded border border-purple-200"
                  >
                    <span className="font-medium">{item}</span>
                    <Button
                      icon="pi pi-trash"
                      onClick={() => handleRemoveItem(index)}
                      severity="danger"
                      size="small"
                      rounded
                      text
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <TerminalUI
          fileName="EventHandlers.tsx"
          name="Event Handlers with useCallback"
        >
          <pre className="text-sm leading-relaxed">
            <code>
              <span className="text-pink-400">const</span>{" "}
              <span className="text-yellow-300">handleAddItem</span>
              {" = "}
              <span className="text-yellow-300">useCallback</span>
              {"(() => {\n  "}
              <span className="text-pink-400">if</span>
              {" ("}
              <span className="text-blue-300">newItem</span>
              {"."}
              <span className="text-yellow-300">trim</span>
              {"()) {\n    "}
              <span className="text-yellow-300">setItems</span>
              {"("}
              <span className="text-blue-300">prev</span>
              {" => [..."}
              <span className="text-blue-300">prev</span>
              {", "}
              <span className="text-blue-300">newItem</span>
              {"]);\n    "}
              <span className="text-yellow-300">setNewItem</span>
              {"("}
              <span className="text-green-400">&apos;&apos;</span>
              {");\n  }\n}, ["}
              <span className="text-blue-300">newItem</span>
              {"]); "}
              {/* Re-create เมื่อ newItem เปลี่ยน */}
              {"\n\n"}
              <span className="text-pink-400">const</span>{" "}
              <span className="text-yellow-300">handleRemoveItem</span>
              {" = "}
              <span className="text-yellow-300">useCallback</span>
              {"(("}
              <span className="text-blue-300">index</span>
              {": "}
              <span className="text-pink-400">number</span>
              {") => {\n  "}
              <span className="text-yellow-300">setItems</span>
              {"("}
              <span className="text-blue-300">prev</span>
              {" => "}
              <span className="text-blue-300">prev</span>
              {"."}
              <span className="text-yellow-300">filter</span>
              {"(("}
              <span className="text-blue-300">_</span>
              {", "}
              <span className="text-blue-300">i</span>
              {") => "}
              <span className="text-blue-300">i</span>
              {" !== "}
              <span className="text-blue-300">index</span>
              {"));\n}, []); "}
              {/* ไม่ต้อง re-create (ใช้ functional update) */}
            </code>
          </pre>
        </TerminalUI>
      </Card>

      {/* Demo 3: Search with useCallback */}
      <Card title="🔍 Demo 3: Search Handler" className="mb-4">
        <p className="mb-3 text-gray-700">
          useCallback ช่วยให้ SearchBox component ไม่ re-render เมื่อไม่จำเป็น
        </p>

        <div className="bg-gray-100 p-6 rounded-lg mb-4">
          <div className="mb-4">
            <label className="block font-semibold mb-2 text-gray-700">
              🔎 ค้นหาสินค้า:
            </label>
            <SearchBox onSearch={handleSearch} />
          </div>

          <div className="bg-white p-4 rounded">
            <h3 className="font-bold mb-3 text-gray-800">
              📦 ผลลัพธ์: {searchResults.length} รายการ
            </h3>
            {searchResults.length === 0 ? (
              <p className="text-gray-500 italic">
                พิมพ์เพื่อค้นหา iPhone, MacBook, iPad...
              </p>
            ) : (
              <div className="space-y-2">
                {searchResults.map((product, index) => (
                  <div
                    key={index}
                    className="p-3 bg-blue-50 rounded border border-blue-200"
                  >
                    <p className="font-semibold text-gray-800">{product}</p>
                  </div>
                ))}
              </div>
            )}
          </div>

          <p className="text-sm text-gray-600 mt-3">
            💡 SearchBox component ใช้ React.memo และรับ onSearch ที่ใช้
            useCallback จึงไม่ re-render เมื่อ parent render
          </p>
        </div>

        <TerminalUI fileName="SearchHandler.tsx" name="Search with useCallback">
          <pre className="text-sm leading-relaxed">
            <code>
              {/* Parent component */}
              {"\n"}
              <span className="text-pink-400">const</span>{" "}
              <span className="text-yellow-300">handleSearch</span>
              {" = "}
              <span className="text-yellow-300">useCallback</span>
              {"(("}
              <span className="text-blue-300">term</span>
              {": "}
              <span className="text-pink-400">string</span>
              {") => {\n  "}
              <span className="text-pink-400">const</span>{" "}
              <span className="text-blue-300">results</span>
              {" = "}
              <span className="text-blue-300">products</span>
              {"."}
              <span className="text-yellow-300">filter</span>
              {"("}
              <span className="text-blue-300">p</span>
              {" =>\n    "}
              <span className="text-blue-300">p</span>
              {"."}
              <span className="text-yellow-300">toLowerCase</span>
              {"()."}
              <span className="text-yellow-300">includes</span>
              {"("}
              <span className="text-blue-300">term</span>
              {"."}
              <span className="text-yellow-300">toLowerCase</span>
              {"())\n  );\n  "}
              <span className="text-yellow-300">setSearchResults</span>
              {"("}
              <span className="text-blue-300">results</span>
              {");\n}, ["}
              <span className="text-blue-300">products</span>
              {"]);\n\n"}
              {/* Child component (memoized) */}
              {"\n"}
              <span className="text-pink-400">const</span>{" "}
              <span className="text-yellow-300">SearchBox</span>
              {" = "}
              <span className="text-yellow-300">memo</span>
              {"(({ "}
              <span className="text-blue-300">onSearch</span>
              {" }) => {\n  "}
              <span className="text-pink-400">const</span>
              {" ["}
              <span className="text-blue-300">value</span>
              {", "}
              <span className="text-yellow-300">setValue</span>
              {"] = "}
              <span className="text-yellow-300">useState</span>
              {"("}
              <span className="text-green-400">&apos;&apos;</span>
              {");\n  \n  "}
              <span className="text-pink-400">const</span>{" "}
              <span className="text-yellow-300">handleChange</span>
              {" = ("}
              <span className="text-blue-300">e</span>
              {") => {\n    "}
              <span className="text-yellow-300">setValue</span>
              {"("}
              <span className="text-blue-300">e</span>
              {"."}
              <span className="text-blue-300">target</span>
              {"."}
              <span className="text-blue-300">value</span>
              {");\n    "}
              <span className="text-yellow-300">onSearch</span>
              {"("}
              <span className="text-blue-300">e</span>
              {"."}
              <span className="text-blue-300">target</span>
              {"."}
              <span className="text-blue-300">value</span>
              {"); "}
              {/* Stable reference */}
              {"\n  };\n  \n  "}
              <span className="text-pink-400">return</span>
              {" <"}
              <span className="text-blue-300">input</span>{" "}
              <span className="text-blue-300">onChange</span>
              {"={"}
              <span className="text-yellow-300">handleChange</span>
              {"} />;\n});"}
            </code>
          </pre>
        </TerminalUI>
      </Card>

      {/* Demo 4: API Calls */}
      <Card title="📡 Demo 4: API Calls with useCallback" className="mb-4">
        <p className="mb-3 text-gray-700">
          useCallback เหมาะสำหรับ API call functions ที่ต้องการ stable reference
        </p>

        <div className="bg-gray-100 p-6 rounded-lg mb-4">
          <div className="mb-4">
            <label className="block font-semibold mb-2 text-gray-700">
              👤 User ID:
            </label>
            <div className="flex gap-2">
              <InputText
                type="number"
                value={userId.toString()}
                onChange={(e) => setUserId(Number(e.target.value))}
                min={1}
                max={10}
                className="w-32"
              />
              <Button
                label="Fetch User"
                onClick={fetchUser}
                severity="info"
                icon="pi pi-download"
              />
            </div>
          </div>

          {userData && (
            <div className="bg-white p-4 rounded border-2 border-green-300">
              <h3 className="font-bold text-green-600 mb-2">✅ User Data:</h3>
              <p>
                <strong>ID:</strong> {userData.id}
              </p>
              <p>
                <strong>Name:</strong> {userData.name}
              </p>
            </div>
          )}

          <p className="text-sm text-gray-600 mt-3">
            💡 fetchUser function ถูก memoize ด้วย useCallback และ re-create
            เฉพาะเมื่อ userId เปลี่ยน
          </p>
        </div>

        <TerminalUI
          fileName="APIWithCallback.tsx"
          name="API Calls with useCallback"
        >
          <pre className="text-sm leading-relaxed">
            <code>
              <span className="text-pink-400">const</span>{" "}
              <span className="text-yellow-300">fetchUser</span>
              {" = "}
              <span className="text-yellow-300">useCallback</span>
              {"("}
              <span className="text-pink-400">async</span>
              {" () => {\n  "}
              <span className="text-blue-300">console</span>
              {"."}
              <span className="text-yellow-300">log</span>
              {"("}
              <span className="text-green-400">&apos;Fetching user:&apos;</span>
              {", "}
              <span className="text-blue-300">userId</span>
              {");\n  "}
              <span className="text-pink-400">const</span>{" "}
              <span className="text-blue-300">response</span>
              {" = "}
              <span className="text-pink-400">await</span>{" "}
              <span className="text-yellow-300">fetch</span>
              {"("}
              <span className="text-green-400">`/api/users/$</span>
              {"{"}
              <span className="text-blue-300">userId</span>
              {"}"}
              <span className="text-green-400">`</span>
              {");\n  "}
              <span className="text-pink-400">const</span>{" "}
              <span className="text-blue-300">data</span>
              {" = "}
              <span className="text-pink-400">await</span>{" "}
              <span className="text-blue-300">response</span>
              {"."}
              <span className="text-yellow-300">json</span>
              {"();\n  "}
              <span className="text-yellow-300">setUserData</span>
              {"("}
              <span className="text-blue-300">data</span>
              {");\n}, ["}
              <span className="text-blue-300">userId</span>
              {"]); "}
              {/* Re-create เมื่อ userId เปลี่ยน */}
              {"\n\n"}
              {/* ใช้กับ useEffect */}
              {"\n"}
              <span className="text-yellow-300">useEffect</span>
              {"(() => {\n  "}
              <span className="text-yellow-300">fetchUser</span>
              {"();\n}, ["}
              <span className="text-yellow-300">fetchUser</span>
              {"]); "}
              {/* fetchUser เป็น dependency ที่ stable */}
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
              ✅ เมื่อไหร่ควรใช้ useCallback
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Props to Memoized Children:</strong> ส่ง function ลง
                child components ที่ใช้ React.memo
              </li>
              <li>
                <strong>useEffect Dependencies:</strong> function ที่ใช้ใน
                useEffect dependencies
              </li>
              <li>
                <strong>Event Handlers:</strong> event handlers ที่ส่งลงหลาย
                levels
              </li>
              <li>
                <strong>Expensive Functions:</strong> functions
                ที่สร้างมีค่าใช้จ่ายสูง (closures ใหญ่)
              </li>
              <li>
                <strong>Custom Hooks:</strong> return functions จาก custom hooks
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-red-600 mb-2">
              ❌ เมื่อไหร่ไม่ควรใช้ useCallback
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Simple Event Handlers:</strong> onClick handlers ธรรมดาๆ
                ที่ไม่ส่งลง memoized children
              </li>
              <li>
                <strong>Every Function:</strong> ไม่ต้องใช้กับทุก function
                (overhead)
              </li>
              <li>
                <strong>No Child Components:</strong> ถ้าไม่มี child components
                รับ function
              </li>
              <li>
                <strong>Premature Optimization:</strong> ใช้ก่อนเจอปัญหา
                performance
              </li>
            </ul>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded">
            <h3 className="font-bold text-yellow-800 mb-2">⚠️ ข้อควรระวัง</h3>
            <ul className="space-y-2 text-yellow-700 text-sm">
              <li>• ต้องใช้ร่วมกับ React.memo ใน child components</li>
              <li>• ระบุ dependencies ครบถ้วน (ESLint exhaustive-deps)</li>
              <li>• Closure issues - ระวัง stale values ใน function body</li>
              <li>• เพิ่ม memory usage เล็กน้อย (เก็บ function reference)</li>
            </ul>
          </div>

          <div className="bg-blue-50 p-4 rounded">
            <h3 className="text-lg font-bold text-blue-600 mb-2">
              💡 เคล็ดลับ
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>
                ใช้ <code>useCallback</code> กับ functions, ใช้{" "}
                <code>useMemo</code> กับ values
              </li>
              <li>
                ควบคู่กับ <code>React.memo</code> เพื่อประสิทธิภาพสูงสุด
              </li>
              <li>ใช้ functional updates เพื่อหลีกเลี่ยง dependencies</li>
              <li>Profile ด้วย React DevTools ก่อนตัดสินใจ optimize</li>
            </ul>
          </div>
        </div>
      </Card>

      {/* Comparison */}
      <Card
        title="⚖️ useCallback vs useMemo vs Regular Function"
        className="mb-4"
      >
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gradient-to-r from-purple-100 to-pink-100">
                <th className="border border-purple-300 p-3 text-left">
                  ลักษณะ
                </th>
                <th className="border border-purple-300 p-3 text-left">
                  Regular Function
                </th>
                <th className="border border-purple-300 p-3 text-left bg-purple-200">
                  useCallback
                </th>
                <th className="border border-purple-300 p-3 text-left bg-blue-200">
                  useMemo
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-3 font-semibold">
                  Memoize
                </td>
                <td className="border border-gray-300 p-3">ไม่ memoize</td>
                <td className="border border-gray-300 p-3 bg-purple-50">
                  Function reference
                </td>
                <td className="border border-gray-300 p-3 bg-blue-50">
                  Return value
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-3 font-semibold">
                  Syntax
                </td>
                <td className="border border-gray-300 p-3">
                  <code className="text-xs">const fn = () =&gt; {`{}`}</code>
                </td>
                <td className="border border-gray-300 p-3 bg-purple-50">
                  <code className="text-xs">
                    useCallback(() =&gt; {`{}`}, [])
                  </code>
                </td>
                <td className="border border-gray-300 p-3 bg-blue-50">
                  <code className="text-xs">useMemo(() =&gt; value, [])</code>
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-3 font-semibold">
                  Use Case
                </td>
                <td className="border border-gray-300 p-3">Simple handlers</td>
                <td className="border border-gray-300 p-3 bg-purple-50">
                  Props to children
                </td>
                <td className="border border-gray-300 p-3 bg-blue-50">
                  Expensive calculations
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-3 font-semibold">
                  Performance
                </td>
                <td className="border border-gray-300 p-3">
                  <span className="text-green-600">✓</span> Fastest
                </td>
                <td className="border border-gray-300 p-3 bg-purple-50">
                  <span className="text-yellow-600">~</span> Slight overhead
                </td>
                <td className="border border-gray-300 p-3 bg-blue-50">
                  <span className="text-yellow-600">~</span> Slight overhead
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Card>

      {/* Syntax Summary */}
      <Card title="📖 สรุปรูปแบบการใช้งาน" className="mb-4">
        <TerminalUI fileName="UseCallbackPatterns.tsx" name="Common Patterns">
          <pre className="text-sm leading-relaxed">
            <code>
              <span className="text-pink-400">import</span>
              {" { "}
              <span className="text-yellow-300">useCallback</span>
              {", "}
              <span className="text-yellow-300">memo</span>
              {" } "}
              <span className="text-pink-400">from</span>{" "}
              <span className="text-green-400">&apos;react&apos;</span>
              {";\n\n"}
              {/* Basic: Simple callback */}
              {"\n"}
              <span className="text-pink-400">const</span>{" "}
              <span className="text-yellow-300">handleClick</span>
              {" = "}
              <span className="text-yellow-300">useCallback</span>
              {"(() => {\n  "}
              <span className="text-blue-300">console</span>
              {"."}
              <span className="text-yellow-300">log</span>
              {"("}
              <span className="text-green-400">&apos;Clicked!&apos;</span>
              {");\n}, []); "}
              {/* ไม่มี dependencies = function เดิมตลอด */}
              {"\n\n"}
              {/* With parameters */}
              {"\n"}
              <span className="text-pink-400">const</span>{" "}
              <span className="text-yellow-300">handleItemClick</span>
              {" = "}
              <span className="text-yellow-300">useCallback</span>
              {"(("}
              <span className="text-blue-300">id</span>
              {": "}
              <span className="text-pink-400">number</span>
              {") => {\n  "}
              <span className="text-blue-300">console</span>
              {"."}
              <span className="text-yellow-300">log</span>
              {"("}
              <span className="text-green-400">&apos;Item clicked:&apos;</span>
              {", "}
              <span className="text-blue-300">id</span>
              {");\n}, []); "}
              {/* ใช้ parameter จาก event */}
              {"\n\n"}
              {/* With dependencies */}
              {"\n"}
              <span className="text-pink-400">const</span>{" "}
              <span className="text-yellow-300">handleSave</span>
              {" = "}
              <span className="text-yellow-300">useCallback</span>
              {"(() => {\n  "}
              <span className="text-yellow-300">saveData</span>
              {"("}
              <span className="text-blue-300">userId</span>
              {", "}
              <span className="text-blue-300">formData</span>
              {");\n}, ["}
              <span className="text-blue-300">userId</span>
              {", "}
              <span className="text-blue-300">formData</span>
              {"]); "}
              {/* Re-create เมื่อ dependencies เปลี่ยน */}
              {"\n\n"}
              {/* With functional update (avoid dependencies) */}
              {"\n"}
              <span className="text-pink-400">const</span>{" "}
              <span className="text-yellow-300">handleIncrement</span>
              {" = "}
              <span className="text-yellow-300">useCallback</span>
              {"(() => {\n  "}
              <span className="text-yellow-300">setCount</span>
              {"("}
              <span className="text-blue-300">prev</span>
              {" => "}
              <span className="text-blue-300">prev</span>
              {" + "}
              <span className="text-orange-400">1</span>
              {"); "}
              {/* ไม่ต้องใส่ count ใน deps */}
              {"\n}, []); "}
              {/* Empty deps */}
              {"\n\n"}
              {/* Pass to memoized child */}
              {"\n"}
              <span className="text-pink-400">const</span>{" "}
              <span className="text-yellow-300">MemoChild</span>
              {" = "}
              <span className="text-yellow-300">memo</span>
              {"(({ "}
              <span className="text-blue-300">onClick</span>
              {" }) => {\n  "}
              <span className="text-pink-400">return</span>
              {" <"}
              <span className="text-blue-300">button</span>{" "}
              <span className="text-blue-300">onClick</span>
              {"={"}
              <span className="text-blue-300">onClick</span>
              {"}>Click</"}
              <span className="text-blue-300">button</span>
              {">;\n});\n\n"}
              <span className="text-pink-400">function</span>{" "}
              <span className="text-yellow-300">Parent</span>
              {"() {\n  "}
              <span className="text-pink-400">const</span>{" "}
              <span className="text-yellow-300">handleClick</span>
              {" = "}
              <span className="text-yellow-300">useCallback</span>
              {"(() => {\n    "}
              {/* Do something */}
              {"\n  }, []);\n  \n  "}
              <span className="text-pink-400">return</span>
              {" <"}
              <span className="text-yellow-300">MemoChild</span>{" "}
              <span className="text-blue-300">onClick</span>
              {"={"}
              <span className="text-yellow-300">handleClick</span>
              {"} />;\n}"}
            </code>
          </pre>
        </TerminalUI>
      </Card>
    </div>
  );
};
