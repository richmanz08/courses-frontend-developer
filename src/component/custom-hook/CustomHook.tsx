import { TerminalUI } from "../ui/TerminalUI";

export const CustomHook = () => {
  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-gray-800">
        Custom Hook - แยก Business Logic
      </h1>

      {/* Concept */}
      <section className="mb-8 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-gray-700">
          1. ความหมาย Custom Hook
        </h2>
        <p className="text-gray-700 mb-4">
          Custom Hook คือ JavaScript function ที่:
        </p>
        <ul className="space-y-3 text-gray-700 list-disc list-inside">
          <li>
            <strong>ใช้ React Hooks</strong> (useState, useEffect, useContext
            เป็นต้น)
          </li>
          <li>
            <strong>เริ่มชื่อด้วย &quot;use&quot;</strong> เพื่อให้ React
            รู้ว่าเป็น Hook
          </li>
          <li>
            <strong>แยก Business Logic</strong> ออกจาก Component
          </li>
          <li>
            <strong>Reusable</strong> - สามารถใช้ซ้ำในหลาย Component ได้
          </li>
        </ul>
      </section>

      {/* Example 1: Simple Counter Hook */}
      <section className="mb-8 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-gray-700">
          2. ตัวอย่าง 1: useCounter Hook
        </h2>
        <p className="text-gray-700 mb-4">
          แยก logic นับเลขออกมาเป็น Custom Hook:
        </p>

        <h3 className="text-lg font-bold mb-3 text-gray-600">
          hooks/useCounter.ts
        </h3>
        <TerminalUI fileName="useCounter.ts" name="Custom Hook">
          <pre
            style={{
              color: "#d4d4d4",
              fontSize: "0.875rem",
              lineHeight: "1.6",
              margin: 0,
              fontFamily: "Fira Code, monospace",
              overflow: "auto",
            }}
            dangerouslySetInnerHTML={{
              __html: `<span style="color: #569cd6">import</span> { <span style="color: #4ec9b0">useState</span> } <span style="color: #569cd6">from</span> <span style="color: #ce9178">"react"</span>;

<span style="color: #569cd6">export</span> <span style="color: #569cd6">function</span> <span style="color: #dcdcaa">useCounter</span>(<span style="color: #9cdcfe">initialValue</span> = <span style="color: #b5cea8">0</span>) {
  <span style="color: #569cd6">const</span> [<span style="color: #9cdcfe">count</span>, <span style="color: #dcdcaa">setCount</span>] = <span style="color: #4ec9b0">useState</span>(<span style="color: #9cdcfe">initialValue</span>);

  <span style="color: #569cd6">const</span> <span style="color: #dcdcaa">increment</span> = () => <span style="color: #dcdcaa">setCount</span>(<span style="color: #9cdcfe">count</span> + <span style="color: #b5cea8">1</span>);
  <span style="color: #569cd6">const</span> <span style="color: #dcdcaa">decrement</span> = () => <span style="color: #dcdcaa">setCount</span>(<span style="color: #9cdcfe">count</span> - <span style="color: #b5cea8">1</span>);
  <span style="color: #569cd6">const</span> <span style="color: #dcdcaa">reset</span> = () => <span style="color: #dcdcaa">setCount</span>(<span style="color: #9cdcfe">initialValue</span>);

  <span style="color: #569cd6">return</span> { <span style="color: #9cdcfe">count</span>, <span style="color: #dcdcaa">increment</span>, <span style="color: #dcdcaa">decrement</span>, <span style="color: #dcdcaa">reset</span> };
}`,
            }}
          />
        </TerminalUI>

        <h3 className="text-lg font-bold mt-6 mb-3 text-gray-600">
          Counter.tsx (ใช้ Hook)
        </h3>
        <TerminalUI fileName="Counter.tsx" name="Component">
          <pre
            style={{
              color: "#d4d4d4",
              fontSize: "0.875rem",
              lineHeight: "1.6",
              margin: 0,
              fontFamily: "Fira Code, monospace",
              overflow: "auto",
            }}
            dangerouslySetInnerHTML={{
              __html: `<span style="color: #ce9178">"use client"</span>;

<span style="color: #569cd6">import</span> { <span style="color: #dcdcaa">useCounter</span> } <span style="color: #569cd6">from</span> <span style="color: #ce9178">"./hooks/useCounter"</span>;

<span style="color: #569cd6">export</span> <span style="color: #569cd6">function</span> <span style="color: #dcdcaa">Counter</span>() {
  <span style="color: #569cd6">const</span> { <span style="color: #9cdcfe">count</span>, <span style="color: #dcdcaa">increment</span>, <span style="color: #dcdcaa">decrement</span>, <span style="color: #dcdcaa">reset</span> } = <span style="color: #dcdcaa">useCounter</span>(<span style="color: #b5cea8">0</span>);

  <span style="color: #569cd6">return</span> (
    &lt;<span style="color: #4ec9b0">div</span> <span style="color: #9cdcfe">className</span>=<span style="color: #ce9178">"p-4"</span>&gt;
      &lt;<span style="color: #4ec9b0">p</span> <span style="color: #9cdcfe">className</span>=<span style="color: #ce9178">"text-2xl"</span>&gt;Count: {<span style="color: #9cdcfe">count</span>}&lt;/<span style="color: #4ec9b0">p</span>&gt;
      &lt;<span style="color: #4ec9b0">button</span> <span style="color: #9cdcfe">onClick</span>={<span style="color: #dcdcaa">increment</span>}&gt;+&lt;/<span style="color: #4ec9b0">button</span>&gt;
      &lt;<span style="color: #4ec9b0">button</span> <span style="color: #9cdcfe">onClick</span>={<span style="color: #dcdcaa">decrement</span>}&gt;-&lt;/<span style="color: #4ec9b0">button</span>&gt;
      &lt;<span style="color: #4ec9b0">button</span> <span style="color: #9cdcfe">onClick</span>={<span style="color: #dcdcaa">reset</span>}&gt;Reset&lt;/<span style="color: #4ec9b0">button</span>&gt;
    &lt;/<span style="color: #4ec9b0">div</span>&gt;
  );
}`,
            }}
          />
        </TerminalUI>
      </section>

      {/* Example 2: useLocalStorage Hook */}
      <section className="mb-8 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-gray-700">
          3. ตัวอย่าง 2: useLocalStorage Hook
        </h2>
        <p className="text-gray-700 mb-4">
          จัดการ localStorage ด้วย Custom Hook:
        </p>

        <h3 className="text-lg font-bold mb-3 text-gray-600">
          hooks/useLocalStorage.ts
        </h3>
        <TerminalUI fileName="useLocalStorage.ts" name="Custom Hook">
          <pre
            style={{
              color: "#d4d4d4",
              fontSize: "0.875rem",
              lineHeight: "1.6",
              margin: 0,
              fontFamily: "Fira Code, monospace",
              overflow: "auto",
            }}
            dangerouslySetInnerHTML={{
              __html: `<span style="color: #569cd6">import</span> { <span style="color: #4ec9b0">useState</span>, <span style="color: #4ec9b0">useEffect</span> } <span style="color: #569cd6">from</span> <span style="color: #ce9178">"react"</span>;

<span style="color: #569cd6">export</span> <span style="color: #569cd6">function</span> <span style="color: #dcdcaa">useLocalStorage</span>&lt;<span style="color: #4ec9b0">T</span>&gt;(<span style="color: #9cdcfe">key</span>: <span style="color: #4ec9b0">string</span>, <span style="color: #9cdcfe">initialValue</span>: <span style="color: #4ec9b0">T</span>) {
  <span style="color: #569cd6">const</span> [<span style="color: #9cdcfe">value</span>, <span style="color: #dcdcaa">setValue</span>] = <span style="color: #4ec9b0">useState</span>&lt;<span style="color: #4ec9b0">T</span>&gt;(<span style="color: #9cdcfe">initialValue</span>);

  <span style="color: #6a9955">// ดึงค่าจาก localStorage เมื่อ mount</span>
  <span style="color: #4ec9b0">useEffect</span>(() => {
    <span style="color: #569cd6">const</span> <span style="color: #9cdcfe">stored</span> = <span style="color: #9cdcfe">localStorage</span>.<span style="color: #dcdcaa">getItem</span>(<span style="color: #9cdcfe">key</span>);
    <span style="color: #569cd6">if</span> (<span style="color: #9cdcfe">stored</span>) <span style="color: #dcdcaa">setValue</span>(<span style="color: #4ec9b0">JSON</span>.<span style="color: #dcdcaa">parse</span>(<span style="color: #9cdcfe">stored</span>));
  }, [<span style="color: #9cdcfe">key</span>]);

  <span style="color: #6a9955">// บันทึกลง localStorage เมื่อค่าเปลี่ยน</span>
  <span style="color: #569cd6">const</span> <span style="color: #dcdcaa">setStoredValue</span> = (<span style="color: #9cdcfe">newValue</span>: <span style="color: #4ec9b0">T</span>) => {
    <span style="color: #dcdcaa">setValue</span>(<span style="color: #9cdcfe">newValue</span>);
    <span style="color: #9cdcfe">localStorage</span>.<span style="color: #dcdcaa">setItem</span>(<span style="color: #9cdcfe">key</span>, <span style="color: #4ec9b0">JSON</span>.<span style="color: #dcdcaa">stringify</span>(<span style="color: #9cdcfe">newValue</span>));
  };

  <span style="color: #569cd6">return</span> [<span style="color: #9cdcfe">value</span>, <span style="color: #dcdcaa">setStoredValue</span>] <span style="color: #569cd6">as</span> <span style="color: #569cd6">const</span>;
}`,
            }}
          />
        </TerminalUI>

        <h3 className="text-lg font-bold mt-6 mb-3 text-gray-600">
          Component ที่ใช้
        </h3>
        <TerminalUI fileName="UserPreference.tsx" name="Component">
          <pre
            style={{
              color: "#d4d4d4",
              fontSize: "0.875rem",
              lineHeight: "1.6",
              margin: 0,
              fontFamily: "Fira Code, monospace",
              overflow: "auto",
            }}
            dangerouslySetInnerHTML={{
              __html: `<span style="color: #ce9178">"use client"</span>;

<span style="color: #569cd6">import</span> { <span style="color: #dcdcaa">useLocalStorage</span> } <span style="color: #569cd6">from</span> <span style="color: #ce9178">"./hooks/useLocalStorage"</span>;

<span style="color: #569cd6">export</span> <span style="color: #569cd6">function</span> <span style="color: #dcdcaa">UserPreference</span>() {
  <span style="color: #569cd6">const</span> [<span style="color: #9cdcfe">theme</span>, <span style="color: #dcdcaa">setTheme</span>] = <span style="color: #dcdcaa">useLocalStorage</span>&lt;<span style="color: #4ec9b0">string</span>&gt;(<span style="color: #ce9178">"theme"</span>, <span style="color: #ce9178">"light"</span>);

  <span style="color: #569cd6">return</span> (
    &lt;<span style="color: #4ec9b0">div</span>&gt;
      &lt;<span style="color: #4ec9b0">p</span>&gt;Current Theme: {<span style="color: #9cdcfe">theme</span>}&lt;/<span style="color: #4ec9b0">p</span>&gt;
      &lt;<span style="color: #4ec9b0">button</span> <span style="color: #9cdcfe">onClick</span>={() => <span style="color: #dcdcaa">setTheme</span>(<span style="color: #ce9178">"dark"</span>)}&gt;
        Dark Mode
      &lt;/<span style="color: #4ec9b0">button</span>&gt;
    &lt;/<span style="color: #4ec9b0">div</span>&gt;
  );
}`,
            }}
          />
        </TerminalUI>
      </section>

      {/* Benefits */}
      <section className="mb-8 bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">
          4. ข้อดีของ Custom Hook
        </h2>
        <ul className="space-y-3 text-gray-700">
          <li className="flex items-start">
            <span className="text-blue-500 mr-3 font-bold">✓</span>
            <span>
              <strong>Reusability:</strong> ใช้ Hook เดียวกันในหลาย Component
              ได้
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-500 mr-3 font-bold">✓</span>
            <span>
              <strong>Separation of Concerns:</strong> แยก logic ออกจาก UI
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-500 mr-3 font-bold">✓</span>
            <span>
              <strong>Testability:</strong> ง่ายต่อการเขียน unit tests
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-500 mr-3 font-bold">✓</span>
            <span>
              <strong>Readability:</strong> Component ดูสะอาดและเข้าใจง่าย
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-500 mr-3 font-bold">✓</span>
            <span>
              <strong>Maintainability:</strong> แก้ไข logic ที่เดียวได้ทั่วทั้ง
              app
            </span>
          </li>
        </ul>
      </section>

      {/* Best Practices */}
      <section className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">
          5. Best Practices
        </h2>
        <ul className="space-y-3 text-gray-700">
          <li className="flex items-start">
            <span className="text-green-600 mr-3 font-bold">1.</span>
            <span>
              <strong>ตั้งชื่อเริ่มด้วย &quot;use&quot;</strong> - useCounter,
              useLocalStorage เป็นต้น
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-green-600 mr-3 font-bold">2.</span>
            <span>
              <strong>return Object หรือ Array</strong> - สะดวกต่อการนำไปใช้
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-green-600 mr-3 font-bold">3.</span>
            <span>
              <strong>ใช้ TypeScript</strong> - ให้ type safety ที่ดี
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-green-600 mr-3 font-bold">4.</span>
            <span>
              <strong>เขียน JSDoc comments</strong> - ช่วยผู้อื่นเข้าใจการใช้งาน
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-green-600 mr-3 font-bold">5.</span>
            <span>
              <strong>หลีกเลี่ยง nested Hooks</strong> - Hooks ต้องอยู่
              top-level
            </span>
          </li>
        </ul>
      </section>
    </div>
  );
};
