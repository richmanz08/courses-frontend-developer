import { Button } from "primereact/button";
import React, { useState, useCallback } from "react";
import { TerminalUI } from "../../ui/TerminalUI";
import { InputText } from "primereact/inputtext";

// Child component ที่ใช้ memo
interface ChildButtonProps {
  onClick: () => void;
  label: string;
}

const ChildButton = ({ onClick, label }: ChildButtonProps) => {
  console.log(`🔄 ${label} rendered!`);

  return (
    <div className="p-4 bg-gray-800 rounded">
      <div className="flex items-center justify-between mb-2">
        <span className="text-white font-semibold">{label}</span>
        <span className="text-xs text-yellow-400">
          (Check console for render logs)
        </span>
      </div>
      <Button onClick={onClick} className="w-full" severity="success">
        Click me
      </Button>
      <p className="text-xs text-gray-500 mt-2">
        💡 เปิด Console (F12) เพื่อดู render logs
      </p>
    </div>
  );
};

// before useCallback

export const BeforeUseCallBack: React.FC = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  const onClick = () => {
    console.log("Clicked from BeforeUseCallBack");
  };

  console.log("🔵 Render BeforeUseCallBack");

  return (
    <TerminalUI name="❌ Without useCallback" fileName="UseCallBack.tsx">
      <div className="space-y-4">
        <div>
          <h1 className="text-red-400 text-xl font-bold mb-2">
            ❌ Without useCallback
          </h1>
          <p className="text-gray-400 text-sm mb-3">
            Function ถูกสร้างใหม่ทุกครั้ง → Child component render ซ้ำแม้ว่า
            props ไม่เปลี่ยน
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-gray-300 text-sm mb-2 block">
              Type here (triggers parent re-render):
            </label>
            <InputText
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="พิมพ์อะไรก็ได้..."
              className="w-full"
            />
          </div>
          <div>
            <label className="text-gray-300 text-sm mb-2 block">
              Parent Counter: {count}
            </label>
            <Button
              onClick={() => setCount(count + 1)}
              severity="info"
              className="w-full"
            >
              Increment Parent
            </Button>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-4">
          <p className="text-yellow-400 text-sm mb-2 font-semibold">
            👇 Child Component (เปิด Console เพื่อดู render logs):
          </p>
          <ChildButton onClick={onClick} label="❌ Child (No useCallback)" />
        </div>
      </div>
    </TerminalUI>
  );
};

// after useCallback
export const AfterUseCallBack: React.FC = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  const onClick = useCallback(() => {
    console.log("Clicked from AfterUseCallBack");
  }, []);

  console.log("🟢 Render AfterUseCallBack");

  return (
    <TerminalUI name="✅ With useCallback" fileName="UseCallBack.tsx">
      <div className="space-y-4">
        <div>
          <h1 className="text-green-400 text-xl font-bold mb-2">
            ✅ With useCallback
          </h1>
          <p className="text-gray-400 text-sm mb-3">
            Function เป็น instance เดียวกันตลอด → Child component ไม่ render ซ้ำ
            (ถ้าใช้กับ memo)
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-gray-300 text-sm mb-2 block">
              Type here (triggers parent re-render):
            </label>
            <InputText
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="พิมพ์อะไรก็ได้..."
              className="w-full"
            />
          </div>
          <div>
            <label className="text-gray-300 text-sm mb-2 block">
              Parent Counter: {count}
            </label>
            <Button
              onClick={() => setCount(count + 1)}
              severity="info"
              className="w-full"
            >
              Increment Parent
            </Button>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-4">
          <p className="text-green-400 text-sm mb-2 font-semibold">
            👇 Child Component (เปิด Console เพื่อดู render logs):
          </p>
          <ChildButton onClick={onClick} label="✅ Child (With useCallback)" />
        </div>
      </div>
    </TerminalUI>
  );
};

export const UseCallBackUseCase: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-blue-900 to-purple-900 p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-white mb-3">
          🎯 useCallback Use Case Demo
        </h1>
        <p className="text-gray-200 mb-4">
          ลองพิมพ์ใน input หรือกด <strong>&quot;Increment Parent&quot;</strong>{" "}
          ใน 2 sections ด้านล่าง
        </p>
        <div className="bg-white/10 p-4 rounded space-y-2 text-sm">
          <p className="text-white font-semibold">📋 วิธีทดสอบ:</p>
          <ol className="text-gray-200 space-y-1 ml-4 list-decimal">
            <li>เปิด Browser Console (F12)</li>
            <li>พิมพ์อะไรก็ได้ใน input box</li>
            <li>สังเกต console logs ว่า Child component render หรือไม่</li>
          </ol>
          <div className="mt-3 pt-3 border-t border-white/20 space-y-1 text-xs text-gray-300">
            <p>
              <span className="text-red-400">❌ Without useCallback:</span>{" "}
              Child render ทุกครั้งที่ parent render
            </p>
            <p>
              <span className="text-green-400">✅ With useCallback:</span> Child
              render แค่ครั้งแรกเท่านั้น
            </p>
          </div>
        </div>
      </div>

      <BeforeUseCallBack />
      <AfterUseCallBack />
    </div>
  );
};
