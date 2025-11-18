"use client";
import { useState, useRef, useEffect } from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Message } from "primereact/message";
import { Divider } from "primereact/divider";
import { TerminalUI } from "../../ui/TerminalUI";

export const UseRefExample = () => {
  // Demo 1: Access DOM elements
  const inputRef = useRef<HTMLInputElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Demo 2: Store mutable values (proper way with state for display)
  const [stateCount, setStateCount] = useState(0);

  // Demo 3: Previous value tracking
  const [count, setCount] = useState(0);
  const previousCountRef = useRef<number | undefined>(undefined);
  const [previousCount, setPreviousCount] = useState<number | undefined>(
    undefined
  );

  // Update previous count after render
  useEffect(() => {
    setPreviousCount(previousCountRef.current);
    previousCountRef.current = count;
  }, [count]);

  // Demo 4: Timer management
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isRunning]);

  // Demo 5: Click counter without re-render
  const clickCountRef = useRef(0);
  const [displayClicks, setDisplayClicks] = useState(0);

  // Demo 6: Scroll position
  const scrollDivRef = useRef<HTMLDivElement>(null);
  const [scrollInfo, setScrollInfo] = useState({ top: 0, height: 0 });

  // Handlers
  const focusInput = () => {
    inputRef.current?.focus();
  };

  const playVideo = () => {
    videoRef.current?.play();
  };

  const pauseVideo = () => {
    videoRef.current?.pause();
  };

  const handleHiddenClick = () => {
    clickCountRef.current++;
    console.log("Hidden clicks:", clickCountRef.current);
  };

  const showHiddenClicks = () => {
    setDisplayClicks(clickCountRef.current);
  };

  const scrollToBottom = () => {
    if (scrollDivRef.current) {
      scrollDivRef.current.scrollTop = scrollDivRef.current.scrollHeight;
    }
  };

  const scrollToTop = () => {
    if (scrollDivRef.current) {
      scrollDivRef.current.scrollTop = 0;
    }
  };

  const updateScrollInfo = () => {
    if (scrollDivRef.current) {
      setScrollInfo({
        top: scrollDivRef.current.scrollTop,
        height: scrollDivRef.current.scrollHeight,
      });
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4 bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
        useRef Hook - คู่มือการใช้งาน
      </h1>

      <Message
        severity="info"
        text="useRef ใช้สำหรับเข้าถึง DOM elements และเก็บค่าที่ไม่ทำให้ component re-render (ใช้ใน event handlers และ effects เท่านั้น - ห้ามใช้ระหว่าง render)"
        className="mb-4 w-full"
      />

      {/* What is useRef */}
      <Card title="🤔 useRef คืออะไร?" className="mb-4">
        <div className="space-y-4">
          <div>
            <h3 className="font-bold text-lg mb-2 text-green-600">
              📌 คำจำกัดความ
            </h3>
            <p className="text-gray-700 leading-relaxed">
              <strong>useRef</strong> เป็น Hook ที่ return object ที่มี property{" "}
              <code className="bg-gray-100 px-2 py-1 rounded">.current</code> -
              ใช้เก็บ mutable value ที่ไม่ทำให้ re-render และใช้อ้างอิง DOM
              elements
            </p>
          </div>

          <Divider />

          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="font-bold text-lg mb-3 text-green-700">
              🎯 ใช้ useRef เมื่อ:
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">✓</span>
                <div>
                  <strong>Access DOM:</strong> อ้างอิง DOM elements เพื่อ focus,
                  scroll, animate
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">✓</span>
                <div>
                  <strong>Store Timers:</strong> เก็บ interval/timeout IDs
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">✓</span>
                <div>
                  <strong>Previous Values:</strong> จำค่าก่อนหน้าของ state
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">✓</span>
                <div>
                  <strong>Non-Visual Data:</strong> เก็บข้อมูลที่ไม่ใช้แสดงใน UI
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-gray-800 text-green-400 p-4 rounded font-mono text-sm overflow-x-auto">
            <pre>{`import { useRef } from 'react';

// สร้าง ref
const myRef = useRef(initialValue);

// ✅ เข้าถึง/เปลี่ยนค่าใน event handler หรือ effect
const handleClick = () => {
  myRef.current = newValue;
  console.log(myRef.current);
};

// ใช้กับ DOM
<input ref={inputRef} />
inputRef.current.focus();

// ❌ ห้าม access/update ref ระหว่าง render (React 19+)
myRef.current++; // ❌ Don't do this during render!
return <div>{myRef.current}</div>; // ❌ Don't do this!`}</pre>
          </div>
        </div>
      </Card>

      {/* Demo 1: DOM Access */}
      <Card title="📝 Demo 1: เข้าถึง DOM Elements" className="mb-4">
        <div className="bg-gray-100 p-6 rounded-lg mb-4">
          <div className="mb-4">
            <label className="block font-semibold mb-2 text-gray-700">
              📝 Input with Ref:
            </label>
            <div className="flex gap-2">
              <InputText
                ref={inputRef}
                placeholder="กดปุ่มเพื่อ focus ที่นี่..."
                className="flex-1"
              />
              <Button
                label="Focus Input"
                icon="pi pi-search"
                onClick={focusInput}
                className="bg-blue-500 hover:bg-blue-600"
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block font-semibold mb-2 text-gray-700">
              🎬 Video Control with Ref:
            </label>
            <video
              ref={videoRef}
              width="100%"
              height="200"
              className="rounded mb-2 bg-black"
            >
              <source
                src="https://www.w3schools.com/html/mov_bbb.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
            <div className="flex gap-2">
              <Button
                label="Play"
                icon="pi pi-play"
                onClick={playVideo}
                className="bg-green-500 hover:bg-green-600"
              />
              <Button
                label="Pause"
                icon="pi pi-pause"
                onClick={pauseVideo}
                className="bg-red-500 hover:bg-red-600"
              />
            </div>
          </div>

          <div className="mt-4 bg-blue-50 border-l-4 border-blue-500 p-3 rounded">
            <p className="text-sm text-blue-800">
              💡 useRef ช่วยให้เราเข้าถึง DOM elements โดยตรง เหมือนใช้
              document.getElementById() แต่แบบ React
            </p>
          </div>
        </div>

        <div className="bg-gray-800 text-green-400 p-4 rounded font-mono text-sm overflow-x-auto">
          <pre>{`const inputRef = useRef<HTMLInputElement>(null);

const focusInput = () => {
  inputRef.current?.focus(); // เข้าถึง DOM และเรียก focus()
};

return <input ref={inputRef} />;`}</pre>
        </div>
      </Card>

      {/* Demo 2: useState vs useRef */}
      <Card title="⚖️ Demo 2: useState vs useRef" className="mb-4">
        <div className="bg-gray-100 p-6 rounded-lg mb-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="bg-white p-6 rounded border-2 border-blue-300">
              <h3 className="font-bold text-blue-600 mb-2">
                📊 State Count (re-render)
              </h3>
              <p className="text-3xl font-bold text-gray-800">{stateCount}</p>
              <p className="text-sm text-gray-600 mt-2">
                ใช้ useState - เปลี่ยนค่าแล้ว re-render ทันที
              </p>
            </div>

            <div className="bg-white p-6 rounded border-2 border-green-300">
              <h3 className="font-bold text-green-600 mb-2">
                🔢 Hidden Ref Count
              </h3>
              <p className="text-3xl font-bold text-gray-800">
                {displayClicks}
              </p>
              <p className="text-sm text-gray-600 mt-2">
                ใช้ useRef - ไม่ re-render จนกว่าจะแสดง
              </p>
            </div>
          </div>

          <div className="flex gap-2 mb-4">
            <Button
              label="Increment State"
              onClick={() => setStateCount((prev) => prev + 1)}
              className="bg-blue-500 hover:bg-blue-600"
              icon="pi pi-plus"
            />
            <Button
              label="Hidden Click (Ref)"
              onClick={handleHiddenClick}
              className="bg-green-500 hover:bg-green-600"
              icon="pi pi-eye-slash"
            />
            <Button
              label="Show Hidden Count"
              onClick={showHiddenClicks}
              className="bg-purple-500 hover:bg-purple-600"
              icon="pi pi-eye"
            />
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-3 rounded">
            <p className="text-sm text-yellow-800">
              💡 <strong>useState</strong> ทำให้ component re-render ทันที |{" "}
              <strong>useRef</strong> เก็บค่าแบบเงียบๆ ไม่ re-render
              <br />
              Open console เพื่อดู log จาก hidden clicks
            </p>
          </div>
        </div>

        <div className="bg-gray-800 text-green-400 p-4 rounded font-mono text-sm overflow-x-auto">
          <pre>{`const [stateCount, setStateCount] = useState(0); // re-render เมื่อเปลี่ยน
const refCount = useRef(0); // ไม่ re-render

// useState - ทำให้ re-render
setStateCount(prev => prev + 1); // ✅ UI อัพเดททันที

// useRef - ไม่ re-render (เหมาะสำหรับ timer, interval, etc.)
const handleClick = () => {
  refCount.current++; // ✅ เปลี่ยนค่าได้ แต่ UI ไม่อัพเดต
  console.log(refCount.current);
};`}</pre>
        </div>
      </Card>

      {/* Demo 3: Previous Value */}
      <Card
        title="⏮️ Demo 3: เก็บค่าก่อนหน้า (Previous Value)"
        className="mb-4"
      >
        <div className="bg-gray-100 p-6 rounded-lg mb-4">
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="bg-white p-6 rounded text-center">
              <p className="text-sm text-gray-600 mb-1">Current Count</p>
              <p className="text-5xl font-bold text-blue-600">{count}</p>
            </div>

            <div className="bg-white p-6 rounded text-center">
              <p className="text-sm text-gray-600 mb-1">Previous Count</p>
              <p className="text-5xl font-bold text-gray-400">
                {previousCount ?? "-"}
              </p>
            </div>
          </div>

          <div className="flex gap-2">
            <Button
              label="Increment"
              onClick={() => setCount((prev) => prev + 1)}
              className="bg-blue-500 hover:bg-blue-600"
              icon="pi pi-plus"
            />
            <Button
              label="Decrement"
              onClick={() => setCount((prev) => prev - 1)}
              className="bg-red-500 hover:bg-red-600"
              icon="pi pi-minus"
            />
            <Button
              label="Reset"
              onClick={() => setCount(0)}
              className="bg-gray-500 hover:bg-gray-600"
              icon="pi pi-refresh"
            />
          </div>

          <div className="mt-4 bg-green-50 border-l-4 border-green-500 p-3 rounded">
            <p className="text-sm text-green-800">
              💡 useRef เหมาะสำหรับเก็บค่าก่อนหน้า เพราะไม่ทำให้ re-render
              เหมือน useState
            </p>
          </div>
        </div>

        <div className="bg-gray-800 text-green-400 p-4 rounded font-mono text-sm overflow-x-auto">
          <pre>{`const [count, setCount] = useState(0);
const previousCountRef = useRef<number | undefined>();
const [previousCount, setPreviousCount] = useState<number | undefined>();

// เก็บค่าก่อนหน้าใน effect
useEffect(() => {
  setPreviousCount(previousCountRef.current); // แสดงค่าก่อนหน้า
  previousCountRef.current = count; // เก็บค่าปัจจุบันไว้
}, [count]);`}</pre>
        </div>
      </Card>

      {/* Demo 4: Timer */}
      <Card title="⏱️ Demo 4: Timer Management" className="mb-4">
        <div className="bg-gray-100 p-6 rounded-lg mb-4">
          <div className="bg-white p-8 rounded text-center mb-4">
            <p className="text-6xl font-bold text-blue-600 mb-2">
              {seconds}
              <span className="text-2xl text-gray-500">s</span>
            </p>
            <p className="text-sm text-gray-600">
              Timer {isRunning ? "กำลังทำงาน" : "หยุดอยู่"}
            </p>
          </div>

          <div className="flex gap-2">
            <Button
              label={isRunning ? "Pause" : "Start"}
              onClick={() => setIsRunning(!isRunning)}
              className={
                isRunning
                  ? "bg-orange-500 hover:bg-orange-600"
                  : "bg-green-500 hover:bg-green-600"
              }
              icon={isRunning ? "pi pi-pause" : "pi pi-play"}
            />
            <Button
              label="Reset"
              onClick={() => {
                setIsRunning(false);
                setSeconds(0);
              }}
              className="bg-red-500 hover:bg-red-600"
              icon="pi pi-refresh"
            />
          </div>

          <div className="mt-4 bg-purple-50 border-l-4 border-purple-500 p-3 rounded">
            <p className="text-sm text-purple-800">
              💡 useRef เหมาะเก็บ interval ID เพราะไม่ต้องการ re-render
              เมื่อเก็บ ID - ใช้ clearInterval ได้ตลอดเวลา
            </p>
          </div>
        </div>

        <div className="bg-gray-800 text-green-400 p-4 rounded font-mono text-sm overflow-x-auto">
          <pre>{`const intervalRef = useRef<NodeJS.Timeout | null>(null);

useEffect(() => {
  if (isRunning) {
    intervalRef.current = setInterval(() => {
      setSeconds(prev => prev + 1);
    }, 1000);
  } else {
    if (intervalRef.current) {
      clearInterval(intervalRef.current); // ✅ เข้าถึง interval ID ได้
    }
  }

  // Cleanup function
  return () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };
}, [isRunning]);`}</pre>
        </div>
      </Card>

      {/* Demo 5: Scroll Control */}
      <Card title="📜 Demo 5: Scroll Control" className="mb-4">
        <div className="bg-gray-100 p-6 rounded-lg mb-4">
          <div
            ref={scrollDivRef}
            onScroll={updateScrollInfo}
            className="bg-white p-4 rounded h-64 overflow-y-scroll mb-4 border-2 border-gray-300"
          >
            <h3 className="font-bold text-lg mb-2">Scrollable Content</h3>
            {Array.from({ length: 50 }, (_, i) => (
              <p key={i} className="py-2 border-b border-gray-200">
                Line {i + 1}: Lorem ipsum dolor sit amet consectetur adipisicing
                elit.
              </p>
            ))}
          </div>

          <div className="bg-white p-4 rounded mb-4">
            <p className="text-sm text-gray-700">
              <strong>Scroll Top:</strong> {scrollInfo.top}px
            </p>
            <p className="text-sm text-gray-700">
              <strong>Scroll Height:</strong> {scrollInfo.height}px
            </p>
          </div>

          <div className="flex gap-2">
            <Button
              label="Scroll to Top"
              onClick={scrollToTop}
              className="bg-blue-500 hover:bg-blue-600"
              icon="pi pi-arrow-up"
            />
            <Button
              label="Scroll to Bottom"
              onClick={scrollToBottom}
              className="bg-green-500 hover:bg-green-600"
              icon="pi pi-arrow-down"
            />
          </div>

          <div className="mt-4 bg-teal-50 border-l-4 border-teal-500 p-3 rounded">
            <p className="text-sm text-teal-800">
              💡 useRef ใช้อ้างอิง DOM เพื่อควบคุม scroll position ได้โดยตรง
            </p>
          </div>
        </div>

        <div className="bg-gray-800 text-green-400 p-4 rounded font-mono text-sm overflow-x-auto">
          <pre>{`const scrollDivRef = useRef<HTMLDivElement>(null);

const scrollToBottom = () => {
  if (scrollDivRef.current) {
    scrollDivRef.current.scrollTop = scrollDivRef.current.scrollHeight;
  }
};

return (
  <div ref={scrollDivRef} onScroll={updateScrollInfo}>
    {/* content */}
  </div>
);`}</pre>
        </div>
      </Card>

      {/* Comparison Table */}
      <Card title="⚖️ useRef vs useState vs let" className="mb-4">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-300 p-3 text-left">ประเภท</th>
                <th className="border border-gray-300 p-3 text-left">useRef</th>
                <th className="border border-gray-300 p-3 text-left">
                  useState
                </th>
                <th className="border border-gray-300 p-3 text-left">
                  let variable
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-3 font-semibold">
                  Re-render
                </td>
                <td className="border border-gray-300 p-3 bg-green-50">
                  ❌ ไม่ทำให้ re-render
                </td>
                <td className="border border-gray-300 p-3 bg-blue-50">
                  ✅ ทำให้ re-render
                </td>
                <td className="border border-gray-300 p-3 bg-red-50">
                  ❌ ไม่ทำให้ re-render
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-3 font-semibold">
                  คงค่าระหว่าง render
                </td>
                <td className="border border-gray-300 p-3 bg-green-50">
                  ✅ คงค่าไว้
                </td>
                <td className="border border-gray-300 p-3 bg-blue-50">
                  ✅ คงค่าไว้
                </td>
                <td className="border border-gray-300 p-3 bg-red-50">
                  ❌ รีเซ็ตทุกครั้งที่ render
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-3 font-semibold">
                  เปลี่ยนค่าได้
                </td>
                <td className="border border-gray-300 p-3 bg-green-50">
                  ✅ .current = newValue (ใน handler/effect เท่านั้น)
                </td>
                <td className="border border-gray-300 p-3 bg-blue-50">
                  ✅ setState(newValue)
                </td>
                <td className="border border-gray-300 p-3 bg-red-50">
                  ✅ variable = newValue
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-3 font-semibold">
                  ใช้เมื่อ
                </td>
                <td className="border border-gray-300 p-3 bg-green-50">
                  DOM access, timers, previous values
                </td>
                <td className="border border-gray-300 p-3 bg-blue-50">
                  ข้อมูลที่แสดงใน UI
                </td>
                <td className="border border-gray-300 p-3 bg-red-50">
                  ค่าชั่วคราวใน function
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-3 font-semibold">
                  Performance
                </td>
                <td className="border border-gray-300 p-3 bg-green-50">
                  ⚡ เร็ว (ไม่ re-render)
                </td>
                <td className="border border-gray-300 p-3 bg-blue-50">
                  🔄 ช้ากว่า (มี re-render)
                </td>
                <td className="border border-gray-300 p-3 bg-red-50">
                  ⚡⚡ เร็วที่สุด (แต่รีเซ็ต)
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-3 font-semibold">
                  React 19 Rules
                </td>
                <td className="border border-gray-300 p-3 bg-green-50">
                  ⚠️ ห้าม access/update ระหว่าง render
                </td>
                <td className="border border-gray-300 p-3 bg-blue-50">
                  ✅ ปลอดภัย
                </td>
                <td className="border border-gray-300 p-3 bg-red-50">
                  ✅ ปลอดภัย
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Card>

      {/* Best Practices */}
      <Card title="✅ Best Practices" className="mb-4">
        <div className="space-y-4">
          <div className="bg-green-50 border-l-4 border-green-500 p-4">
            <h3 className="font-bold text-green-700 mb-2">✅ ควรทำ:</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">1.</span>
                <div>
                  ใช้ useRef สำหรับ DOM references (focus, scroll, animations)
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">2.</span>
                <div>เก็บ timer/interval IDs ใน ref</div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">3.</span>
                <div>
                  Access/update ref.current เฉพาะใน event handlers หรือ effects
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">4.</span>
                <div>ใช้ ref สำหรับค่าก่อนหน้า (previous values)</div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">5.</span>
                <div>Cleanup refs ใน useEffect return function</div>
              </li>
            </ul>
          </div>

          <div className="bg-red-50 border-l-4 border-red-500 p-4">
            <h3 className="font-bold text-red-700 mb-2">❌ ไม่ควรทำ:</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-red-600 mt-1">1.</span>
                <div>
                  ❌ อ่าน/เขียน ref.current ระหว่าง render (React 19+){" "}
                  <code className="bg-gray-100 px-2 py-1 rounded text-sm">
                    myRef.current++
                  </code>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 mt-1">2.</span>
                <div>
                  ❌ แสดง ref.current ใน JSX{" "}
                  <code className="bg-gray-100 px-2 py-1 rounded text-sm">
                    {"{myRef.current}"}
                  </code>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 mt-1">3.</span>
                <div>
                  ❌ ใช้ ref สำหรับข้อมูลที่ต้องแสดงใน UI (ใช้ useState แทน)
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 mt-1">4.</span>
                <div>❌ เก็บค่าที่ต้องการ re-render component ใน ref</div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 mt-1">5.</span>
                <div>❌ ลืม cleanup timers/intervals</div>
              </li>
            </ul>
          </div>
        </div>
      </Card>

      {/* Common Patterns */}
      <Card title="🔨 Common Patterns" className="mb-4">
        <div className="bg-gray-800 text-green-400 p-4 rounded font-mono text-sm overflow-x-auto">
          <pre>{`// 1. DOM Reference
const inputRef = useRef<HTMLInputElement>(null);
inputRef.current?.focus();

// 2. Previous Value
const [value, setValue] = useState(0);
const previousValueRef = useRef<number>();

useEffect(() => {
  previousValueRef.current = value;
}, [value]);

// 3. Timer/Interval
const intervalRef = useRef<NodeJS.Timeout | null>(null);

useEffect(() => {
  intervalRef.current = setInterval(() => {
    // do something
  }, 1000);
  
  return () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };
}, []);

// 4. Mutable Object (but DON'T display it!)
const dataRef = useRef({
  count: 0,
  lastUpdate: Date.now()
});

// Update in handler (NOT during render)
const handleUpdate = () => {
  dataRef.current.count++;
  dataRef.current.lastUpdate = Date.now();
};

// 5. Callback Ref (Advanced)
const callbackRef = useCallback((node: HTMLDivElement | null) => {
  if (node) {
    // Do something with the DOM node
  }
}, []);

<div ref={callbackRef} />`}</pre>
        </div>
      </Card>

      {/* React 19 Warning */}
      <Card title="⚠️ React 19+ Important Rules" className="mb-4">
        <div className="bg-red-50 border-2 border-red-300 p-6 rounded-lg">
          <h3 className="font-bold text-red-700 mb-4 text-lg">
            🚨 ข้อควรระวังสำหรับ React 19
          </h3>

          <div className="space-y-4">
            <div>
              <p className="font-semibold text-gray-800 mb-2">
                ❌ ห้าม access/modify ref ระหว่าง render:
              </p>
              <div className="bg-gray-800 text-red-400 p-3 rounded font-mono text-sm">
                <pre>{`// ❌ ห้ามทำแบบนี้!
function Component() {
  const countRef = useRef(0);
  
  countRef.current++; // ❌ Error: Cannot update ref during render
  
  return <div>{countRef.current}</div>; // ❌ Error: Cannot access ref during render
}`}</pre>
              </div>
            </div>

            <div>
              <p className="font-semibold text-gray-800 mb-2">
                ✅ ทำแบบนี้แทน:
              </p>
              <div className="bg-gray-800 text-green-400 p-3 rounded font-mono text-sm">
                <pre>{`// ✅ ถูกต้อง - ใช้ event handler หรือ effect
function Component() {
  const countRef = useRef(0);
  const [count, setCount] = useState(0);
  
  const handleClick = () => {
    countRef.current++; // ✅ OK - ใน event handler
    console.log(countRef.current);
  };
  
  useEffect(() => {
    countRef.current = count; // ✅ OK - ใน effect
  }, [count]);
  
  return <div>{count}</div>; // ✅ แสดง state แทน ref
}`}</pre>
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded mt-4">
              <p className="text-sm text-yellow-800">
                💡 <strong>เหตุผล:</strong> React 19 บังคับให้ component
                ทำงานแบบ pure function - ห้ามมี side effects ระหว่าง render
                เพื่อให้ Concurrent Features ทำงานได้ถูกต้อง
              </p>
            </div>
          </div>
        </div>
      </Card>

      {/* Summary */}
      <Card title="📚 สรุป useRef" className="mb-4">
        <div className="space-y-4">
          <div className="bg-gradient-to-r from-green-50 to-teal-50 p-6 rounded-lg">
            <h3 className="font-bold text-lg mb-3 text-green-700">
              🎯 useRef เหมาะสำหรับ:
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded shadow-sm">
                <h4 className="font-semibold text-green-600 mb-2">
                  1. DOM Access
                </h4>
                <p className="text-sm text-gray-700">
                  focus, scroll, measure elements, animations
                </p>
              </div>
              <div className="bg-white p-4 rounded shadow-sm">
                <h4 className="font-semibold text-blue-600 mb-2">2. Timers</h4>
                <p className="text-sm text-gray-700">
                  setInterval, setTimeout IDs
                </p>
              </div>
              <div className="bg-white p-4 rounded shadow-sm">
                <h4 className="font-semibold text-purple-600 mb-2">
                  3. Previous Values
                </h4>
                <p className="text-sm text-gray-700">
                  เก็บค่าก่อนหน้าของ state
                </p>
              </div>
              <div className="bg-white p-4 rounded shadow-sm">
                <h4 className="font-semibold text-orange-600 mb-2">
                  4. Non-Visual Data
                </h4>
                <p className="text-sm text-gray-700">
                  ข้อมูลที่ไม่ต้องแสดงใน UI
                </p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
            <p className="text-gray-700 leading-relaxed">
              💡 <strong>กฎสำคัญ:</strong> useRef ไม่ทำให้ component re-render
              เมื่อค่าเปลี่ยน - เหมาะสำหรับเก็บค่าที่ไม่ต้องแสดงใน UI
              <br />
              <strong className="text-red-600">⚠️ React 19+:</strong> ห้าม
              access/modify ref.current ระหว่าง render - ใช้เฉพาะใน event
              handlers และ effects เท่านั้น
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default UseRefExample;
