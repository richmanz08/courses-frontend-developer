"use client";
import { useState, useEffect } from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Message } from "primereact/message";
import { Divider } from "primereact/divider";

interface User {
  id: number;
  name: string;
  email: string;
}

export const UseEffectHookExample = () => {
  // ตัวอย่างที่ 1: useEffect แบบไม่มี dependencies (รันทุกครั้งที่ render)
  const [renderCount] = useState(0);

  // ตัวอย่างที่ 2: useEffect แบบมี empty dependency array (รันครั้งเดียวตอน mount)
  const [mountTime] = useState(() => new Date().toLocaleString("th-TH"));

  // ตัวอย่างที่ 3: useEffect ที่ดึงข้อมูลจาก API (Mock)
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);

  // ตัวอย่างที่ 4: useEffect ที่ติดตาม specific dependency
  const [count, setCount] = useState(0);
  // คำนวณ message โดยตรงแทนการใช้ useEffect
  const countMessage =
    count > 0 ? `คุณได้กดปุ่มไปแล้ว ${count} ครั้ง` : "ยังไม่ได้กดปุ่ม";

  // ตัวอย่างที่ 5: useEffect กับ cleanup function
  const [seconds, setSeconds] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  // ตัวอย่างที่ 6: useEffect ที่ติดตาม window resize
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  // ตัวอย่างที่ 7: useEffect กับ localStorage
  const [name, setName] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("userName") || "";
    }
    return "";
  });

  // ตัวอย่างที่ 8: useEffect กับ document title
  const [pageTitle, setPageTitle] = useState("React Hooks");

  // 1. useEffect แบบไม่มี dependencies - DEMO เท่านั้น (ไม่แนะนำในโค้ดจริง)
  useEffect(() => {
    // ตัวอย่างนี้แสดงให้เห็นว่าเกิดอะไรขึ้นเมื่อไม่มี dependencies
    // ในโค้ดจริง ไม่ควรทำแบบนี้!
    console.log(
      "Effect running without dependencies - Render count:",
      renderCount
    );
  });

  // 2. useEffect แบบ empty dependency [] - รันครั้งเดียวตอน mount
  useEffect(() => {
    console.log("Component mounted at:", mountTime);
  }, [mountTime]);

  // 3. useEffect สำหรับ fetch data (mock API call)
  useEffect(() => {
    const fetchUser = async () => {
      setLoading(true);
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const mockUser: User = {
        id: 1,
        name: "สมชาย ใจดี",
        email: "somchai@example.com",
      };
      setUser(mockUser);
      setLoading(false);
    };

    fetchUser();
  }, []);

  // 5. useEffect กับ cleanup function (Timer)
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (isTimerRunning) {
      interval = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    }

    // Cleanup function - รันเมื่อ component unmount หรือก่อน effect รันใหม่
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isTimerRunning]);

  // 6. useEffect สำหรับ window event listeners
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Set initial size
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup - remove event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // 7. useEffect สำหรับเปลี่ยน document title
  useEffect(() => {
    document.title = pageTitle;

    return () => {
      document.title = "Courses Frontend Developer";
    };
  }, [pageTitle]);

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        useEffect Hook - คู่มือการใช้งาน
      </h1>

      <Message
        severity="info"
        text="useEffect ใช้สำหรับจัดการ side effects ในคอมโพเนนต์ เช่น การดึงข้อมูล, การ subscribe, การเปลี่ยนแปลง DOM โดยตรง"
        className="mb-4 w-full"
      />

      {/* ตัวอย่างที่ 1: No Dependencies */}
      <Card title="1. useEffect แบบไม่มี Dependencies" className="mb-4">
        <p className="mb-3">
          <strong>ลักษณะ:</strong> รันทุกครั้งที่คอมโพเนนต์ render
          (ควรระวังการใช้งาน)
        </p>
        <div className="bg-red-50 p-3 rounded border-l-4 border-red-500 mb-3">
          <p className="text-red-700">
            ⚠️ <strong>คำเตือน:</strong> อาจทำให้เกิด infinite loop ได้ หากมีการ
            setState ภายใน useEffect
          </p>
        </div>
        <div className="bg-gray-100 p-4 rounded mb-3">
          <p className="font-bold mb-2">Render Count: {renderCount}</p>
          <p className="text-sm text-gray-600">
            (ตัวเลขนี้จะเพิ่มขึ้นทุกครั้งที่คอมโพเนนต์ render)
          </p>
        </div>
        <div className="bg-gray-800 text-green-400 p-4 rounded font-mono text-sm overflow-x-auto">
          <pre>{`useEffect(() => {
  setRenderCount(prev => prev + 1);
}); // ⚠️ ไม่มี dependency array`}</pre>
        </div>
      </Card>

      {/* ตัวอย่างที่ 2: Empty Dependencies */}
      <Card title="2. useEffect แบบ Empty Dependencies []" className="mb-4">
        <p className="mb-3">
          <strong>ลักษณะ:</strong> รันครั้งเดียวตอน component mount (เหมือน
          componentDidMount)
        </p>
        <div className="bg-blue-50 p-3 rounded border-l-4 border-blue-500 mb-3">
          <p className="text-blue-700">
            ✅ <strong>แนะนำ:</strong> เหมาะสำหรับการ fetch ข้อมูลครั้งแรก หรือ
            setup ค่าเริ่มต้น
          </p>
        </div>
        <div className="bg-gray-100 p-4 rounded mb-3">
          <p className="font-bold">Component mounted at:</p>
          <p className="text-purple-600">{mountTime}</p>
        </div>
        <div className="bg-gray-800 text-green-400 p-4 rounded font-mono text-sm overflow-x-auto">
          <pre>{`useEffect(() => {
  const time = new Date().toLocaleString('th-TH');
  setMountTime(time);
  console.log('Component mounted at:', time);
}, []); // ✅ Empty array = รันครั้งเดียว`}</pre>
        </div>
      </Card>

      {/* ตัวอย่างที่ 3: Fetch Data */}
      <Card title="3. useEffect สำหรับ Fetch Data" className="mb-4">
        <p className="mb-3">
          <strong>ลักษณะ:</strong> ใช้สำหรับดึงข้อมูลจาก API ตอน mount
        </p>
        <div className="bg-gray-100 p-4 rounded mb-3">
          {loading ? (
            <p className="text-blue-600">กำลังโหลดข้อมูล...</p>
          ) : user ? (
            <div>
              <p>
                <strong>ID:</strong> {user.id}
              </p>
              <p>
                <strong>ชื่อ:</strong> {user.name}
              </p>
              <p>
                <strong>Email:</strong> {user.email}
              </p>
            </div>
          ) : null}
        </div>
        <div className="bg-gray-800 text-green-400 p-4 rounded font-mono text-sm overflow-x-auto">
          <pre>{`useEffect(() => {
  const fetchUser = async () => {
    setLoading(true);
    const response = await fetch('/api/user');
    const data = await response.json();
    setUser(data);
    setLoading(false);
  };
  
  fetchUser();
}, []); // ดึงข้อมูลครั้งเดียวตอน mount`}</pre>
        </div>
      </Card>

      {/* ตัวอย่างที่ 4: Specific Dependencies */}
      <Card title="4. useEffect กับ Specific Dependencies" className="mb-4">
        <p className="mb-3">
          <strong>ลักษณะ:</strong> รันเมื่อ dependency ที่กำหนดเปลี่ยนแปลง
        </p>
        <div className="bg-gray-100 p-4 rounded mb-3">
          <div className="flex items-center gap-3 mb-3">
            <Button
              label="เพิ่ม Count"
              onClick={() => setCount((prev) => prev + 1)}
              icon="pi pi-plus"
            />
            <Button
              label="รีเซ็ต"
              onClick={() => setCount(0)}
              severity="secondary"
              icon="pi pi-refresh"
            />
            <span className="font-bold text-xl">Count: {count}</span>
          </div>
          <p className="text-purple-600 font-semibold">{countMessage}</p>
        </div>
        <div className="bg-gray-800 text-green-400 p-4 rounded font-mono text-sm overflow-x-auto">
          <pre>{`useEffect(() => {
  if (count > 0) {
    setCountMessage(\`คุณได้กดปุ่มไปแล้ว \${count} ครั้ง\`);
  } else {
    setCountMessage('ยังไม่ได้กดปุ่ม');
  }
}, [count]); // รันเมื่อ count เปลี่ยน`}</pre>
        </div>
      </Card>

      {/* ตัวอย่างที่ 5: Cleanup Function */}
      <Card title="5. useEffect กับ Cleanup Function" className="mb-4">
        <p className="mb-3">
          <strong>ลักษณะ:</strong> ใช้ return function เพื่อ cleanup (ยกเลิก
          subscriptions, timers, etc.)
        </p>
        <div className="bg-yellow-50 p-3 rounded border-l-4 border-yellow-500 mb-3">
          <p className="text-yellow-700">
            💡 <strong>สำคัญ:</strong> Cleanup function จะรันก่อน effect
            ครั้งถัดไป และตอน unmount
          </p>
        </div>
        <div className="bg-gray-100 p-4 rounded mb-3">
          <div className="flex items-center gap-3 mb-3">
            <Button
              label={isTimerRunning ? "หยุด Timer" : "เริ่ม Timer"}
              onClick={() => setIsTimerRunning(!isTimerRunning)}
              severity={isTimerRunning ? "danger" : "success"}
              icon={isTimerRunning ? "pi pi-pause" : "pi pi-play"}
            />
            <Button
              label="รีเซ็ต"
              onClick={() => {
                setSeconds(0);
                setIsTimerRunning(false);
              }}
              severity="secondary"
              icon="pi pi-refresh"
            />
          </div>
          <p className="text-2xl font-bold text-blue-600">{seconds} วินาที</p>
        </div>
        <div className="bg-gray-800 text-green-400 p-4 rounded font-mono text-sm overflow-x-auto">
          <pre>{`useEffect(() => {
  let interval = null;
  
  if (isTimerRunning) {
    interval = setInterval(() => {
      setSeconds(prev => prev + 1);
    }, 1000);
  }
  
  // Cleanup function
  return () => {
    if (interval) {
      clearInterval(interval);
    }
  };
}, [isTimerRunning]); // รันเมื่อ isTimerRunning เปลี่ยน`}</pre>
        </div>
      </Card>

      {/* ตัวอย่างที่ 6: Window Event Listeners */}
      <Card title="6. useEffect กับ Window Event Listeners" className="mb-4">
        <p className="mb-3">
          <strong>ลักษณะ:</strong> ใช้สำหรับ subscribe/unsubscribe events
        </p>
        <div className="bg-gray-100 p-4 rounded mb-3">
          <p className="font-bold mb-2">ขนาดหน้าต่างปัจจุบัน:</p>
          <p>
            Width:{" "}
            <span className="text-blue-600 font-semibold">
              {windowSize.width}px
            </span>
          </p>
          <p>
            Height:{" "}
            <span className="text-blue-600 font-semibold">
              {windowSize.height}px
            </span>
          </p>
          <p className="text-sm text-gray-600 mt-2">
            (ลองปรับขนาดหน้าต่างเบราว์เซอร์)
          </p>
        </div>
        <div className="bg-gray-800 text-green-400 p-4 rounded font-mono text-sm overflow-x-auto">
          <pre>{`useEffect(() => {
  const handleResize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight
    });
  };
  
  handleResize(); // Set initial
  window.addEventListener('resize', handleResize);
  
  // Cleanup - ลบ event listener
  return () => {
    window.removeEventListener('resize', handleResize);
  };
}, []); // ติดตั้งครั้งเดียวตอน mount`}</pre>
        </div>
      </Card>

      {/* ตัวอย่างที่ 7: Document Title */}
      <Card title="7. useEffect กับ Document Title" className="mb-4">
        <p className="mb-3">
          <strong>ลักษณะ:</strong> ใช้สำหรับเปลี่ยน title ของเบราว์เซอร์
        </p>
        <div className="bg-gray-100 p-4 rounded mb-3">
          <InputText
            value={pageTitle}
            onChange={(e) => setPageTitle(e.target.value)}
            placeholder="กรอก title ใหม่"
            className="w-full"
          />
          <p className="text-sm text-gray-600 mt-2">
            (ดูที่แท็บเบราว์เซอร์ด้านบน title จะเปลี่ยนตาม)
          </p>
        </div>
        <div className="bg-gray-800 text-green-400 p-4 rounded font-mono text-sm overflow-x-auto">
          <pre>{`useEffect(() => {
  document.title = pageTitle;
  
  // Cleanup - คืนค่า title เดิม
  return () => {
    document.title = 'Courses Frontend Developer';
  };
}, [pageTitle]);`}</pre>
        </div>
      </Card>

      <Divider />

      {/* Best Practices Section */}
      <Card title="📚 Best Practices และคำแนะนำ" className="mb-4">
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-bold text-green-600 mb-2">
              ✅ ควรทำ (Do&apos;s)
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>ใช้ dependency array อย่างถูกต้อง:</strong> ระบุ
                dependencies ที่จำเป็นทั้งหมด
              </li>
              <li>
                <strong>Cleanup ให้เรียบร้อย:</strong> return function สำหรับ
                clear timers, subscriptions
              </li>
              <li>
                <strong>แยก useEffect ตามหน้าที่:</strong> แต่ละ useEffect
                ควรทำสิ่งเดียว
              </li>
              <li>
                <strong>ใช้ async function อย่างถูกวิธี:</strong> สร้าง async
                function ภายใน useEffect แล้วเรียกใช้
              </li>
              <li>
                <strong>เช็คเงื่อนไขก่อนทำงาน:</strong> ป้องกัน unnecessary
                effects
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-red-600 mb-2">
              ❌ ไม่ควรทำ (Don&apos;ts)
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>ไม่ควรลืม dependencies:</strong> อาจทำให้ได้ค่าเก่า
                (stale data)
              </li>
              <li>
                <strong>ไม่ควรใส่ object/array โดยตรงใน dependencies:</strong>{" "}
                จะ re-run ทุกครั้ง
              </li>
              <li>
                <strong>
                  ไม่ควรทำ setState ใน useEffect ที่ไม่มี dependencies:
                </strong>{" "}
                infinite loop!
              </li>
              <li>
                <strong>ไม่ควร return Promise จาก useEffect:</strong> ใช้ async
                function ภายในแทน
              </li>
              <li>
                <strong>ไม่ควรลืม cleanup:</strong> อาจเกิด memory leaks
              </li>
            </ul>
          </div>

          <div className="bg-blue-50 p-4 rounded">
            <h3 className="text-lg font-bold text-blue-600 mb-2">
              💡 เคล็ดลับการใช้งาน
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                ใช้ <code>[]</code> เมื่อต้องการให้รันครั้งเดียวตอน mount
                (เหมือน componentDidMount)
              </li>
              <li>
                ใช้ <code>[dep1, dep2]</code> เมื่อต้องการให้รันเมื่อ
                dependencies เปลี่ยน (เหมือน componentDidUpdate)
              </li>
              <li>
                ใช้ cleanup function เมื่อต้องการทำอะไรตอน unmount (เหมือน
                componentWillUnmount)
              </li>
              <li>
                ถ้า effect ทำหลายอย่าง ควรแยกเป็นหลาย useEffect เพื่อความชัดเจน
              </li>
              <li>
                ใช้ ESLint plugin <code>react-hooks/exhaustive-deps</code>{" "}
                เพื่อตรวจสอบ dependencies
              </li>
            </ul>
          </div>

          <div className="bg-purple-50 p-4 rounded">
            <h3 className="text-lg font-bold text-purple-600 mb-2">
              🎯 Common Use Cases
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Data Fetching:</strong> ดึงข้อมูลจาก API ตอน mount
              </li>
              <li>
                <strong>Subscriptions:</strong> Subscribe/Unsubscribe WebSocket,
                Events
              </li>
              <li>
                <strong>Timers:</strong> setTimeout, setInterval พร้อม cleanup
              </li>
              <li>
                <strong>DOM Manipulation:</strong> เปลี่ยนแปลง DOM โดยตรง
                (ถ้าจำเป็น)
              </li>
              <li>
                <strong>Analytics:</strong> ส่งข้อมูล tracking เมื่อหน้าโหลด
              </li>
              <li>
                <strong>Local Storage Sync:</strong> sync state กับ localStorage
              </li>
            </ul>
          </div>
        </div>
      </Card>

      {/* Syntax Summary */}
      <Card title="📖 สรุปรูปแบบการใช้งาน" className="mb-4">
        <div className="bg-gray-800 text-green-400 p-4 rounded font-mono text-sm overflow-x-auto">
          <pre>{`// 1. รันทุกครั้งที่ render (ระวังให้ดี!)
useEffect(() => {
  // code here
});

// 2. รันครั้งเดียวตอน mount
useEffect(() => {
  // code here
}, []);

// 3. รันเมื่อ dependencies เปลี่ยน
useEffect(() => {
  // code here
}, [dep1, dep2]);

// 4. รันพร้อม cleanup
useEffect(() => {
  // setup code
  
  return () => {
    // cleanup code
  };
}, [dependencies]);

// 5. Async inside useEffect
useEffect(() => {
  const fetchData = async () => {
    const data = await fetch('/api/data');
    // handle data
  };
  
  fetchData();
}, []);`}</pre>
        </div>
      </Card>
    </div>
  );
};
