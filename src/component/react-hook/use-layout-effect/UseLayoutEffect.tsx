"use client";
import { useState, useEffect, useLayoutEffect, useRef } from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { Message } from "primereact/message";
import { Divider } from "primereact/divider";
import { TerminalUI } from "../../ui/TerminalUI";

export const UseLayoutEffectExample = () => {
  // Demo 1: Visual Difference - useEffect vs useLayoutEffect
  const [showBox, setShowBox] = useState(false);
  const [useLayout, setUseLayout] = useState(true);
  const boxRef = useRef<HTMLDivElement>(null);

  // Demo 2: Measuring DOM elements
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const measureRef = useRef<HTMLDivElement>(null);

  // Demo 3: Tooltip positioning
  const [tooltipPosition, setTooltipPosition] = useState({ top: 0, left: 0 });
  const [showTooltip, setShowTooltip] = useState(false);
  const buttonRef = useRef<HTMLDivElement>(null);

  // Demo 4: Scroll position
  const [scrollCount, setScrollCount] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Demo 1: Animate box position
  useEffect(() => {
    if (!useLayout && showBox && boxRef.current) {
      // Simulate heavy calculation
      const start = Date.now();
      while (Date.now() - start < 50) {} // Blocking operation

      boxRef.current.style.transform = "translateX(200px)";
      boxRef.current.style.backgroundColor = "#10b981";
    }
  }, [showBox, useLayout]);

  useLayoutEffect(() => {
    if (useLayout && showBox && boxRef.current) {
      // Simulate heavy calculation
      const start = Date.now();
      while (Date.now() - start < 50) {} // Blocking operation

      boxRef.current.style.transform = "translateX(200px)";
      boxRef.current.style.backgroundColor = "#3b82f6";
    }
  }, [showBox, useLayout]);

  // Demo 2: Measure DOM element with useLayoutEffect
  useLayoutEffect(() => {
    if (measureRef.current) {
      const rect = measureRef.current.getBoundingClientRect();
      setDimensions({
        width: rect.width,
        height: rect.height,
      });
    }
  }, []);

  // Demo 3: Position tooltip using useLayoutEffect
  useLayoutEffect(() => {
    if (showTooltip && buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setTooltipPosition({
        top: rect.top - 50,
        left: rect.left + rect.width / 2,
      });
    }
  }, [showTooltip]);

  // Demo 4: Scroll to bottom with useLayoutEffect
  useLayoutEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [scrollCount]);

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
        useLayoutEffect Hook - คู่มือการใช้งาน
      </h1>

      <Message
        severity="warn"
        text="useLayoutEffect รันหลังจาก DOM update แต่ก่อนที่เบราว์เซอร์จะ paint - เหมาะสำหรับการวัดและแก้ไข DOM ก่อนแสดงผล"
        className="mb-4 w-full"
      />

      {/* What is useLayoutEffect */}
      <Card title="🤔 useLayoutEffect คืออะไร?" className="mb-4">
        <div className="space-y-4">
          <div>
            <h3 className="font-bold text-lg mb-2 text-purple-600">
              📌 คำจำกัดความ
            </h3>
            <p className="text-gray-700 leading-relaxed">
              <strong>useLayoutEffect</strong> เป็น Hook ที่ทำงานเหมือนกับ{" "}
              <code className="bg-gray-100 px-2 py-1 rounded">useEffect</code>{" "}
              แต่จะรัน <strong>synchronously</strong> หลังจาก DOM mutations
              ทั้งหมดเสร็จ แต่ <strong>ก่อนที่เบราว์เซอร์จะ paint</strong>{" "}
              หน้าจอ
            </p>
          </div>

          <div className="bg-gradient-to-r from-purple-50 to-pink-50 border-2 border-purple-200 rounded-lg p-4">
            <h3 className="font-bold text-lg mb-3 text-purple-700">
              ⏱️ Timeline การทำงาน
            </h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <span className="font-semibold">React renders:</span>{" "}
                  <span className="text-gray-600">
                    คำนวณ Virtual DOM และอัพเดท Real DOM
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <span className="font-semibold text-purple-600">
                    useLayoutEffect รัน:
                  </span>{" "}
                  <span className="text-gray-600">
                    รัน synchronously ก่อนที่เบราว์เซอร์จะ paint
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <span className="font-semibold">Browser paints:</span>{" "}
                  <span className="text-gray-600">
                    เบราว์เซอร์วาดหน้าจอให้ผู้ใช้เห็น
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                  4
                </div>
                <div>
                  <span className="font-semibold text-orange-600">
                    useEffect รัน:
                  </span>{" "}
                  <span className="text-gray-600">
                    รัน asynchronously หลังจาก paint เสร็จแล้ว
                  </span>
                </div>
              </div>
            </div>
          </div>

          <TerminalUI
            fileName="UseLayoutEffect.tsx"
            name="useLayoutEffect Syntax"
          >
            <pre className="text-sm leading-relaxed">
              <code>
                <span className="text-pink-400">import</span>
                {" { "}
                <span className="text-yellow-300">useLayoutEffect</span>
                {" } "}
                <span className="text-pink-400">from</span>{" "}
                <span className="text-green-400">&apos;react&apos;</span>
                {";\n\n"}
                <span className="text-yellow-300">useLayoutEffect</span>
                {"(() => {\n  "}
                {/* Code ที่รันก่อนเบราว์เซอร์ paint */}
                {"\n  "}
                {/* เหมาะสำหรับ: DOM measurements, animations, scroll positions */}
                {"\n  \n  "}
                <span className="text-pink-400">return</span>
                {" () => {\n    "}
                {/* Cleanup function */}
                {"\n  };\n}, ["}
                <span className="text-blue-300">dependencies</span>
                {"]);"}
              </code>
            </pre>
          </TerminalUI>
        </div>
      </Card>

      {/* Comparison Table */}
      <Card title="⚖️ useLayoutEffect vs useEffect" className="mb-4">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gradient-to-r from-purple-100 to-pink-100">
                <th className="border border-purple-300 p-3 text-left">
                  ลักษณะ
                </th>
                <th className="border border-purple-300 p-3 text-left bg-purple-200">
                  useLayoutEffect
                </th>
                <th className="border border-purple-300 p-3 text-left bg-blue-200">
                  useEffect
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-3 font-semibold">
                  ⏰ Timing
                </td>
                <td className="border border-gray-300 p-3 bg-purple-50">
                  รันก่อน browser paint (synchronous)
                </td>
                <td className="border border-gray-300 p-3 bg-blue-50">
                  รันหลัง browser paint (asynchronous)
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-3 font-semibold">
                  🚦 Blocking
                </td>
                <td className="border border-gray-300 p-3 bg-purple-50">
                  <span className="text-red-600 font-bold">Blocks</span> browser
                  paint
                </td>
                <td className="border border-gray-300 p-3 bg-blue-50">
                  <span className="text-green-600 font-bold">ไม่ block</span>{" "}
                  browser paint
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-3 font-semibold">
                  👁️ Visual Flicker
                </td>
                <td className="border border-gray-300 p-3 bg-purple-50">
                  <span className="text-green-600">✓</span> ไม่มี flicker (แก้ไข
                  DOM ก่อน paint)
                </td>
                <td className="border border-gray-300 p-3 bg-blue-50">
                  <span className="text-orange-600">⚠️</span> อาจมี flicker
                  (แก้ไข DOM หลัง paint)
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-3 font-semibold">
                  🎯 Use Cases
                </td>
                <td className="border border-gray-300 p-3 bg-purple-50">
                  DOM measurements, animations, tooltips, scroll positions
                </td>
                <td className="border border-gray-300 p-3 bg-blue-50">
                  API calls, subscriptions, logging, analytics
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-3 font-semibold">
                  ⚡ Performance
                </td>
                <td className="border border-gray-300 p-3 bg-purple-50">
                  <span className="text-orange-600">⚠️</span>{" "}
                  อาจทำให้หน้าช้าถ้าใช้ heavy operations
                </td>
                <td className="border border-gray-300 p-3 bg-blue-50">
                  <span className="text-green-600">✓</span> ไม่กระทบ initial
                  paint
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-3 font-semibold">
                  📱 SSR/SSG
                </td>
                <td className="border border-gray-300 p-3 bg-purple-50">
                  <span className="text-red-600">⚠️</span> Warning ใน
                  server-side
                </td>
                <td className="border border-gray-300 p-3 bg-blue-50">
                  <span className="text-green-600">✓</span> ทำงานได้ดีทั้ง
                  client/server
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-4 bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded">
          <p className="text-yellow-700">
            <strong>💡 กฎทั่วไป:</strong> ใช้{" "}
            <code className="bg-white px-2 py-1 rounded">useEffect</code>{" "}
            เป็นค่าเริ่มต้น และเปลี่ยนเป็น{" "}
            <code className="bg-white px-2 py-1 rounded">useLayoutEffect</code>{" "}
            เฉพาะเมื่อเจอปัญหา visual flicker หรือต้องการ DOM measurements
          </p>
        </div>
      </Card>

      {/* Demo 1: Visual Difference */}
      <Card
        title="🎬 Demo 1: Visual Difference (สังเกต Flicker)"
        className="mb-4"
      >
        <p className="mb-3 text-gray-700">
          กดปุ่มแล้วสังเกตความแตกต่าง:{" "}
          <strong className="text-purple-600">useLayoutEffect</strong>{" "}
          จะเคลื่อนที่แบบ smooth ไม่กระตุก ขณะที่{" "}
          <strong className="text-blue-600">useEffect</strong> อาจเห็น flicker
          เล็กน้อย
        </p>

        <div className="bg-gray-100 p-6 rounded-lg mb-4">
          <div className="flex gap-4 mb-4">
            <Button
              label={useLayout ? "ใช้ useLayoutEffect ✓" : "ใช้ useEffect ✓"}
              onClick={() => {
                setShowBox(false);
                setUseLayout(!useLayout);
              }}
              severity={useLayout ? "help" : "info"}
              icon="pi pi-sync"
            />
            <Button
              label="แสดง Box"
              onClick={() => setShowBox(true)}
              severity="success"
              icon="pi pi-play"
            />
            <Button
              label="รีเซ็ต"
              onClick={() => setShowBox(false)}
              severity="secondary"
              icon="pi pi-refresh"
            />
          </div>

          <div className="bg-white p-4 rounded border-2 border-dashed border-gray-300 min-h-[100px] relative">
            {showBox && (
              <div
                ref={boxRef}
                className="w-20 h-20 rounded-lg shadow-lg flex items-center justify-center text-white font-bold transition-transform duration-300"
                style={{
                  backgroundColor: useLayout ? "#3b82f6" : "#10b981",
                }}
              >
                {useLayout ? "Layout" : "Effect"}
              </div>
            )}
          </div>

          <p className="text-sm text-gray-600 mt-3">
            {useLayout ? (
              <span className="text-purple-600">
                🟣 <strong>useLayoutEffect:</strong> Box
                จะเคลื่อนที่ทันทีโดยไม่มี flicker เพราะแก้ไข DOM ก่อน paint
              </span>
            ) : (
              <span className="text-blue-600">
                🔵 <strong>useEffect:</strong> Box อาจมี flicker เล็กน้อย
                เพราะแก้ไข DOM หลัง paint แล้ว
              </span>
            )}
          </p>
        </div>

        <TerminalUI
          fileName="EffectComparison.tsx"
          name="useEffect vs useLayoutEffect"
        >
          <pre className="text-sm leading-relaxed">
            <code>
              {/* ❌ useEffect - อาจเห็น flicker */}
              {"\n"}
              <span className="text-yellow-300">useEffect</span>
              {"(() => {\n  "}
              <span className="text-pink-400">if</span>
              {" ("}
              <span className="text-blue-300">boxRef</span>
              {"."}
              <span className="text-blue-300">current</span>
              {") {\n    "}
              <span className="text-blue-300">boxRef</span>
              {"."}
              <span className="text-blue-300">current</span>
              {"."}
              <span className="text-blue-300">style</span>
              {"."}
              <span className="text-blue-300">transform</span>
              {" = "}
              <span className="text-green-400">
                &apos;translateX(200px)&apos;
              </span>
              {";\n  }\n}, ["}
              <span className="text-blue-300">showBox</span>
              {"]);\n\n"}
              {/* ✅ useLayoutEffect - smooth ไม่มี flicker */}
              {"\n"}
              <span className="text-yellow-300">useLayoutEffect</span>
              {"(() => {\n  "}
              <span className="text-pink-400">if</span>
              {" ("}
              <span className="text-blue-300">boxRef</span>
              {"."}
              <span className="text-blue-300">current</span>
              {") {\n    "}
              <span className="text-blue-300">boxRef</span>
              {"."}
              <span className="text-blue-300">current</span>
              {"."}
              <span className="text-blue-300">style</span>
              {"."}
              <span className="text-blue-300">transform</span>
              {" = "}
              <span className="text-green-400">
                &apos;translateX(200px)&apos;
              </span>
              {";\n  }\n}, ["}
              <span className="text-blue-300">showBox</span>
              {"]);"}
            </code>
          </pre>
        </TerminalUI>
      </Card>

      {/* Demo 2: Measuring DOM */}
      <Card title="📏 Demo 2: Measuring DOM Elements" className="mb-4">
        <p className="mb-3 text-gray-700">
          useLayoutEffect เหมาะสำหรับการวัดขนาด element ก่อนแสดงผล
        </p>

        <div className="bg-gray-100 p-6 rounded-lg mb-4">
          <div
            ref={measureRef}
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-6 rounded-lg shadow-lg"
          >
            <h3 className="text-xl font-bold mb-2">Box ที่ถูกวัดขนาด</h3>
            <p>Content ภายใน box นี้</p>
          </div>

          <div className="mt-4 bg-white p-4 rounded border-2 border-purple-300">
            <p className="font-bold text-purple-600 mb-2">📐 Dimensions:</p>
            <p>
              <strong>Width:</strong>{" "}
              <span className="text-blue-600">
                {dimensions.width.toFixed(2)}px
              </span>
            </p>
            <p>
              <strong>Height:</strong>{" "}
              <span className="text-green-600">
                {dimensions.height.toFixed(2)}px
              </span>
            </p>
          </div>
        </div>

        <TerminalUI
          fileName="MeasureDOM.tsx"
          name="Measuring DOM with useLayoutEffect"
        >
          <pre className="text-sm leading-relaxed">
            <code>
              <span className="text-yellow-300">useLayoutEffect</span>
              {"(() => {\n  "}
              <span className="text-pink-400">if</span>
              {" ("}
              <span className="text-blue-300">measureRef</span>
              {"."}
              <span className="text-blue-300">current</span>
              {") {\n    "}
              <span className="text-pink-400">const</span>{" "}
              <span className="text-blue-300">rect</span>
              {" = "}
              <span className="text-blue-300">measureRef</span>
              {"."}
              <span className="text-blue-300">current</span>
              {"."}
              <span className="text-yellow-300">getBoundingClientRect</span>
              {"();\n    "}
              <span className="text-yellow-300">setDimensions</span>
              {"({\n      "}
              <span className="text-blue-300">width</span>
              {": "}
              <span className="text-blue-300">rect</span>
              {"."}
              <span className="text-blue-300">width</span>
              {",\n      "}
              <span className="text-blue-300">height</span>
              {": "}
              <span className="text-blue-300">rect</span>
              {"."}
              <span className="text-blue-300">height</span>
              {"\n    });\n  }\n}, []); "}
              {/* วัดครั้งเดียวตอน mount */}
            </code>
          </pre>
        </TerminalUI>
      </Card>

      {/* Demo 3: Tooltip Positioning */}
      <Card title="🎯 Demo 3: Tooltip Positioning" className="mb-4">
        <p className="mb-3 text-gray-700">
          useLayoutEffect ช่วยคำนวณตำแหน่ง tooltip ก่อน paint เพื่อไม่ให้เห็น
          tooltip กระโดด
        </p>

        <div className="bg-gray-100 p-6 rounded-lg mb-4 relative min-h-[200px] flex items-center justify-center">
          <div ref={buttonRef}>
            <Button
              label="Hover เพื่อแสดง Tooltip"
              onMouseEnter={() => setShowTooltip(true)}
              onMouseLeave={() => setShowTooltip(false)}
              severity="info"
              icon="pi pi-info-circle"
            />
          </div>

          {showTooltip && (
            <div
              className="fixed bg-gray-800 text-white px-4 py-2 rounded shadow-lg z-50 transform -translate-x-1/2"
              style={{
                top: `${tooltipPosition.top}px`,
                left: `${tooltipPosition.left}px`,
              }}
            >
              <div className="text-sm">✨ Tooltip positioned perfectly!</div>
              <div
                className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full"
                style={{
                  width: 0,
                  height: 0,
                  borderLeft: "6px solid transparent",
                  borderRight: "6px solid transparent",
                  borderTop: "6px solid #1f2937",
                }}
              />
            </div>
          )}
        </div>

        <TerminalUI fileName="TooltipPosition.tsx" name="Tooltip Positioning">
          <pre className="text-sm leading-relaxed">
            <code>
              <span className="text-yellow-300">useLayoutEffect</span>
              {"(() => {\n  "}
              <span className="text-pink-400">if</span>
              {" ("}
              <span className="text-blue-300">showTooltip</span>
              {" && "}
              <span className="text-blue-300">buttonRef</span>
              {"."}
              <span className="text-blue-300">current</span>
              {") {\n    "}
              <span className="text-pink-400">const</span>{" "}
              <span className="text-blue-300">rect</span>
              {" = "}
              <span className="text-blue-300">buttonRef</span>
              {"."}
              <span className="text-blue-300">current</span>
              {"."}
              <span className="text-yellow-300">getBoundingClientRect</span>
              {"();\n    "}
              <span className="text-yellow-300">setTooltipPosition</span>
              {"({\n      "}
              <span className="text-blue-300">top</span>
              {": "}
              <span className="text-blue-300">rect</span>
              {"."}
              <span className="text-blue-300">top</span>
              {" - "}
              <span className="text-orange-400">50</span>
              {",\n      "}
              <span className="text-blue-300">left</span>
              {": "}
              <span className="text-blue-300">rect</span>
              {"."}
              <span className="text-blue-300">left</span>
              {" + "}
              <span className="text-blue-300">rect</span>
              {"."}
              <span className="text-blue-300">width</span>
              {" / "}
              <span className="text-orange-400">2</span>
              {"\n    });\n  }\n}, ["}
              <span className="text-blue-300">showTooltip</span>
              {"]); "}
              {/* คำนวณตำแหน่งใหม่เมื่อแสดง tooltip */}
            </code>
          </pre>
        </TerminalUI>
      </Card>

      {/* Demo 4: Scroll Position */}
      <Card title="📜 Demo 4: Auto Scroll to Bottom" className="mb-4">
        <p className="mb-3 text-gray-700">
          useLayoutEffect ช่วย scroll
          ไปยังตำแหน่งที่ต้องการก่อนที่ผู้ใช้จะเห็นหน้าจอ
        </p>

        <div className="bg-gray-100 p-6 rounded-lg mb-4">
          <Button
            label="เพิ่มข้อความ"
            onClick={() => setScrollCount(scrollCount + 1)}
            severity="success"
            icon="pi pi-plus"
            className="mb-3"
          />

          <div
            ref={scrollRef}
            className="bg-white p-4 rounded border-2 border-gray-300 h-40 overflow-y-auto"
          >
            {Array.from({ length: scrollCount + 1 }, (_, i) => (
              <div
                key={i}
                className="p-2 mb-2 bg-purple-100 rounded border border-purple-300"
              >
                ข้อความที่ {i + 1} - Auto scroll ไปข้างล่างทันที
              </div>
            ))}
          </div>

          <p className="text-sm text-gray-600 mt-3">
            💡 สังเกตว่าเมื่อเพิ่มข้อความ scroll bar จะอยู่ล่างสุดเสมอ (ไม่เห็น
            scroll animation)
          </p>
        </div>

        <TerminalUI
          fileName="AutoScroll.tsx"
          name="Auto Scroll with useLayoutEffect"
        >
          <pre className="text-sm leading-relaxed">
            <code>
              <span className="text-yellow-300">useLayoutEffect</span>
              {"(() => {\n  "}
              <span className="text-pink-400">if</span>
              {" ("}
              <span className="text-blue-300">scrollRef</span>
              {"."}
              <span className="text-blue-300">current</span>
              {") {\n    "}
              {/* Scroll to bottom ทันที ก่อนเบราว์เซอร์ paint */}
              {"\n    "}
              <span className="text-blue-300">scrollRef</span>
              {"."}
              <span className="text-blue-300">current</span>
              {"."}
              <span className="text-blue-300">scrollTop</span>
              {" = "}
              <span className="text-blue-300">scrollRef</span>
              {"."}
              <span className="text-blue-300">current</span>
              {"."}
              <span className="text-blue-300">scrollHeight</span>
              {";\n  }\n}, ["}
              <span className="text-blue-300">scrollCount</span>
              {"]); "}
              {/* Scroll เมื่อมีข้อความเพิ่ม */}
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
              ✅ เมื่อไหร่ควรใช้ useLayoutEffect
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>DOM Measurements:</strong> วัดขนาด/ตำแหน่งของ element
              </li>
              <li>
                <strong>Tooltip/Popover Positioning:</strong> คำนวณตำแหน่งแสดงผล
              </li>
              <li>
                <strong>Scroll Positions:</strong> กำหนดตำแหน่ง scroll
                ก่อนแสดงผล
              </li>
              <li>
                <strong>Animation Start State:</strong> ตั้งค่าเริ่มต้น
                animation ก่อน paint
              </li>
              <li>
                <strong>Preventing Visual Flicker:</strong> แก้ไข DOM
                เพื่อป้องกันภาพกระตุก
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-red-600 mb-2">
              ❌ เมื่อไหร่ไม่ควรใช้ useLayoutEffect
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>API Calls:</strong> ใช้ useEffect แทน (async operations)
              </li>
              <li>
                <strong>Event Subscriptions:</strong> ใช้ useEffect แทน
                (ไม่จำเป็นต้อง sync)
              </li>
              <li>
                <strong>Heavy Computations:</strong> จะทำให้หน้าช้า ใช้
                useEffect หรือ useMemo แทน
              </li>
              <li>
                <strong>Logging/Analytics:</strong> ใช้ useEffect แทน (ไม่กระทบ
                UI)
              </li>
              <li>
                <strong>State Updates ธรรมดา:</strong> ใช้ useEffect เพียงพอแล้ว
              </li>
            </ul>
          </div>

          <div className="bg-blue-50 p-4 rounded">
            <h3 className="text-lg font-bold text-blue-600 mb-2">
              💡 เคล็ดลับการใช้งาน
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                เริ่มด้วย <code>useEffect</code> เสมอ เปลี่ยนเป็น{" "}
                <code>useLayoutEffect</code> เมื่อเจอปัญหา
              </li>
              <li>ระวัง performance - useLayoutEffect block browser paint</li>
              <li>
                ใช้ร่วมกับ <code>useRef</code> สำหรับ DOM references
              </li>
              <li>
                ใน Next.js/SSR ต้องเช็ค{" "}
                <code>typeof window !== &apos;undefined&apos;</code>
              </li>
              <li>ใช้ cleanup function เหมือน useEffect</li>
            </ul>
          </div>

          <div className="bg-purple-50 p-4 rounded">
            <h3 className="text-lg font-bold text-purple-600 mb-2">
              🎯 Common Use Cases สรุป
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-purple-700 mb-2">
                  useLayoutEffect
                </h4>
                <ul className="text-sm space-y-1">
                  <li>✓ Read/write DOM measurements</li>
                  <li>✓ Position tooltips/popovers</li>
                  <li>✓ Prevent visual flicker</li>
                  <li>✓ Scroll to position</li>
                  <li>✓ Animation initialization</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-blue-700 mb-2">useEffect</h4>
                <ul className="text-sm space-y-1">
                  <li>✓ Fetch data from API</li>
                  <li>✓ Setup subscriptions</li>
                  <li>✓ Update document title</li>
                  <li>✓ Log analytics</li>
                  <li>✓ Most other side effects</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Syntax Summary */}
      <Card title="📖 สรุปรูปแบบการใช้งาน" className="mb-4">
        <TerminalUI
          fileName="UseLayoutEffectPatterns.tsx"
          name="Common Patterns"
        >
          <pre className="text-sm leading-relaxed">
            <code>
              <span className="text-pink-400">import</span>
              {" { "}
              <span className="text-yellow-300">useLayoutEffect</span>
              {", "}
              <span className="text-yellow-300">useRef</span>
              {" } "}
              <span className="text-pink-400">from</span>{" "}
              <span className="text-green-400">&apos;react&apos;</span>
              {";\n\n"}
              <span className="text-pink-400">function</span>{" "}
              <span className="text-yellow-300">MyComponent</span>
              {"() {\n  "}
              <span className="text-pink-400">const</span>{" "}
              <span className="text-blue-300">elementRef</span>
              {" = "}
              <span className="text-yellow-300">useRef</span>
              {"("}
              <span className="text-orange-400">null</span>
              {");\n\n  "}
              {/* Basic usage */}
              {"\n  "}
              <span className="text-yellow-300">useLayoutEffect</span>
              {"(() => {\n    "}
              {/* Code รันก่อน browser paint */}
              {"\n    "}
              <span className="text-blue-300">console</span>
              {"."}
              <span className="text-yellow-300">log</span>
              {"("}
              <span className="text-green-400">
                &apos;Running before paint&apos;
              </span>
              {");\n    \n    "}
              <span className="text-pink-400">return</span>
              {" () => {\n      "}
              {/* Cleanup */}
              {"\n    };\n  }, []);\n\n  "}
              {/* Measure DOM element */}
              {"\n  "}
              <span className="text-yellow-300">useLayoutEffect</span>
              {"(() => {\n    "}
              <span className="text-pink-400">if</span>
              {" ("}
              <span className="text-blue-300">elementRef</span>
              {"."}
              <span className="text-blue-300">current</span>
              {") {\n      "}
              <span className="text-pink-400">const</span>{" "}
              <span className="text-blue-300">rect</span>
              {" = "}
              <span className="text-blue-300">elementRef</span>
              {"."}
              <span className="text-blue-300">current</span>
              {"."}
              <span className="text-yellow-300">getBoundingClientRect</span>
              {"();\n      "}
              <span className="text-blue-300">console</span>
              {"."}
              <span className="text-yellow-300">log</span>
              {"("}
              <span className="text-green-400">&apos;Width:&apos;</span>
              {", "}
              <span className="text-blue-300">rect</span>
              {"."}
              <span className="text-blue-300">width</span>
              {");\n    }\n  }, []);\n\n  "}
              {/* Position element based on another */}
              {"\n  "}
              <span className="text-yellow-300">useLayoutEffect</span>
              {"(() => {\n    "}
              <span className="text-pink-400">if</span>
              {" ("}
              <span className="text-blue-300">elementRef</span>
              {"."}
              <span className="text-blue-300">current</span>
              {") {\n      "}
              <span className="text-blue-300">elementRef</span>
              {"."}
              <span className="text-blue-300">current</span>
              {"."}
              <span className="text-blue-300">style</span>
              {"."}
              <span className="text-blue-300">top</span>
              {" = "}
              <span className="text-green-400">&apos;100px&apos;</span>
              {";\n      "}
              <span className="text-blue-300">elementRef</span>
              {"."}
              <span className="text-blue-300">current</span>
              {"."}
              <span className="text-blue-300">style</span>
              {"."}
              <span className="text-blue-300">left</span>
              {" = "}
              <span className="text-green-400">&apos;200px&apos;</span>
              {";\n    }\n  }, ["}
              <span className="text-blue-300">dependency</span>
              {"]);\n\n  "}
              <span className="text-pink-400">return</span>
              {" <"}
              <span className="text-blue-300">div</span>{" "}
              <span className="text-blue-300">ref</span>
              {"={"}
              <span className="text-blue-300">elementRef</span>
              {"}>Content</"}
              <span className="text-blue-300">div</span>
              {">;\n}"}
            </code>
          </pre>
        </TerminalUI>
      </Card>

      {/* Warning Box */}
      <div className="bg-red-50 border-2 border-red-300 rounded-lg p-6">
        <div className="flex items-start gap-4">
          <div className="text-4xl">⚠️</div>
          <div>
            <h3 className="text-xl font-bold text-red-700 mb-2">
              คำเตือนสำคัญ
            </h3>
            <ul className="space-y-2 text-red-800">
              <li className="flex gap-2">
                <span>•</span>
                <span>
                  <strong>Performance:</strong> useLayoutEffect จะ block browser
                  rendering ใช้เฉพาะเมื่อจำเป็น
                </span>
              </li>
              <li className="flex gap-2">
                <span>•</span>
                <span>
                  <strong>SSR Warning:</strong> ใน Next.js หรือ SSR จะเห็น
                  warning ให้เช็ค window !== undefined
                </span>
              </li>
              <li className="flex gap-2">
                <span>•</span>
                <span>
                  <strong>Rule of Thumb:</strong> ถ้าไม่แน่ใจ ให้ใช้ useEffect
                  ก่อนเสมอ
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
