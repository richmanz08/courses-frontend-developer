import { TerminalUI } from "../ui/TerminalUI";

export const NextServer = () => {
  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-gray-800">
        Next.js Server Routes + React Query
      </h1>

      {/* API Route */}
      <section className="mb-8 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-gray-700">
          1. สร้าง API Route ใน Next.js
        </h2>
        <p className="text-gray-700 mb-4">
          สร้างไฟล์{" "}
          <code className="bg-gray-100 px-2 py-1 rounded">
            app/api/customers/route.ts
          </code>
          :
        </p>

        <TerminalUI fileName="app/api/customers/route.ts" name="API Endpoint">
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
              __html: `<span style="color: #569cd6">export</span> <span style="color: #569cd6">const</span> <span style="color: #dcdcaa">GET</span> = <span style="color: #569cd6">async</span> () => {
  <span style="color: #569cd6">const</span> <span style="color: #9cdcfe">customers</span> = [
    {
      <span style="color: #9cdcfe">id</span>: <span style="color: #b5cea8">1</span>,
      <span style="color: #9cdcfe">name</span>: <span style="color: #ce9178">"สมชาย เรืองเดช"</span>,
      <span style="color: #9cdcfe">account</span>: <span style="color: #ce9178">"1234-5678-9012"</span>,
      <span style="color: #9cdcfe">balance</span>: <span style="color: #b5cea8">50000</span>
    },
    {
      <span style="color: #9cdcfe">id</span>: <span style="color: #b5cea8">2</span>,
      <span style="color: #9cdcfe">name</span>: <span style="color: #ce9178">"สุนันท์ ชัยสินธุ์"</span>,
      <span style="color: #9cdcfe">account</span>: <span style="color: #ce9178">"1234-5678-9013"</span>,
      <span style="color: #9cdcfe">balance</span>: <span style="color: #b5cea8">75000</span>
    },
    {
      <span style="color: #9cdcfe">id</span>: <span style="color: #b5cea8">3</span>,
      <span style="color: #9cdcfe">name</span>: <span style="color: #ce9178">"นิดา อนุศาสตร์"</span>,
      <span style="color: #9cdcfe">account</span>: <span style="color: #ce9178">"1234-5678-9014"</span>,
      <span style="color: #9cdcfe">balance</span>: <span style="color: #b5cea8">125000</span>
    }
  ];

  <span style="color: #569cd6">return</span> <span style="color: #4ec9b0">Response</span>.<span style="color: #dcdcaa">json</span>(<span style="color: #9cdcfe">customers</span>);
};`,
            }}
          />
        </TerminalUI>
      </section>

      {/* Client Component */}
      <section className="mb-8 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-gray-700">
          2. Client Component พร้อม React Query
        </h2>
        <p className="text-gray-700 mb-4">สร้าง component ดึงข้อมูลลูกค้า:</p>

        <TerminalUI fileName="CustomerList.tsx" name="Component">
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

<span style="color: #569cd6">import</span> { <span style="color: #4ec9b0">useQuery</span> } <span style="color: #569cd6">from</span> <span style="color: #ce9178">"@tanstack/react-query"</span>;

<span style="color: #569cd6">interface</span> <span style="color: #4ec9b0">Customer</span> {
  <span style="color: #9cdcfe">id</span>: <span style="color: #4ec9b0">number</span>;
  <span style="color: #9cdcfe">name</span>: <span style="color: #4ec9b0">string</span>;
  <span style="color: #9cdcfe">account</span>: <span style="color: #4ec9b0">string</span>;
  <span style="color: #9cdcfe">balance</span>: <span style="color: #4ec9b0">number</span>;
}

<span style="color: #569cd6">const</span> <span style="color: #dcdcaa">fetchCustomers</span> = <span style="color: #569cd6">async</span> (): <span style="color: #569cd6">Promise</span>&lt;<span style="color: #4ec9b0">Customer</span>[]&gt; => {
  <span style="color: #569cd6">const</span> <span style="color: #9cdcfe">response</span> = <span style="color: #569cd6">await</span> <span style="color: #4ec9b0">fetch</span>(<span style="color: #ce9178">"/api/customers"</span>);
  <span style="color: #569cd6">if</span> (!response.<span style="color: #9cdcfe">ok</span>) <span style="color: #569cd6">throw</span> <span style="color: #569cd6">new</span> <span style="color: #4ec9b0">Error</span>(<span style="color: #ce9178">"Failed"</span>);
  <span style="color: #569cd6">return</span> response.<span style="color: #dcdcaa">json</span>();
};

<span style="color: #569cd6">export</span> <span style="color: #569cd6">function</span> <span style="color: #dcdcaa">CustomerList</span>() {
  <span style="color: #569cd6">const</span> { <span style="color: #9cdcfe">data</span>, <span style="color: #9cdcfe">isLoading</span>, <span style="color: #9cdcfe">error</span> } = <span style="color: #4ec9b0">useQuery</span>&lt;<span style="color: #4ec9b0">Customer</span>[]&gt;({
    <span style="color: #9cdcfe">queryKey</span>: [<span style="color: #ce9178">"customers"</span>],
    <span style="color: #9cdcfe">queryFn</span>: <span style="color: #dcdcaa">fetchCustomers</span>,
    <span style="color: #9cdcfe">staleTime</span>: <span style="color: #b5cea8">60000</span>,
  });

  <span style="color: #569cd6">if</span> (<span style="color: #9cdcfe">isLoading</span>) <span style="color: #569cd6">return</span> &lt;<span style="color: #4ec9b0">p</span>&gt;Loading...&lt;/<span style="color: #4ec9b0">p</span>&gt;;
  <span style="color: #569cd6">if</span> (<span style="color: #9cdcfe">error</span>) <span style="color: #569cd6">return</span> &lt;<span style="color: #4ec9b0">p</span>&gt;Error loading data&lt;/<span style="color: #4ec9b0">p</span>&gt;;

  <span style="color: #569cd6">return</span> (
    &lt;<span style="color: #4ec9b0">div</span> <span style="color: #9cdcfe">className</span>=<span style="color: #ce9178">"overflow-x-auto"</span>&gt;
      &lt;<span style="color: #4ec9b0">table</span> <span style="color: #9cdcfe">className</span>=<span style="color: #ce9178">"w-full border-collapse border"</span>&gt;
        &lt;<span style="color: #4ec9b0">thead</span> <span style="color: #9cdcfe">className</span>=<span style="color: #ce9178">"bg-gray-200"</span>&gt;
          &lt;<span style="color: #4ec9b0">tr</span>&gt;
            &lt;<span style="color: #4ec9b0">th</span> <span style="color: #9cdcfe">className</span>=<span style="color: #ce9178">"border p-2"</span>&gt;ชื่อลูกค้า&lt;/<span style="color: #4ec9b0">th</span>&gt;
            &lt;<span style="color: #4ec9b0">th</span> <span style="color: #9cdcfe">className</span>=<span style="color: #ce9178">"border p-2"</span>&gt;เลขบัญชี&lt;/<span style="color: #4ec9b0">th</span>&gt;
            &lt;<span style="color: #4ec9b0">th</span> <span style="color: #9cdcfe">className</span>=<span style="color: #ce9178">"border p-2"</span>&gt;จำนวนเงิน&lt;/<span style="color: #4ec9b0">th</span>&gt;
          &lt;/<span style="color: #4ec9b0">tr</span>&gt;
        &lt;/<span style="color: #4ec9b0">thead</span>&gt;
        &lt;<span style="color: #4ec9b0">tbody</span>&gt;
          {<span style="color: #9cdcfe">data</span>?.<span style="color: #dcdcaa">map</span>((<span style="color: #9cdcfe">customer</span>) => (
            &lt;<span style="color: #4ec9b0">tr</span> <span style="color: #9cdcfe">key</span>={<span style="color: #9cdcfe">customer</span>.<span style="color: #9cdcfe">id</span>} <span style="color: #9cdcfe">className</span>=<span style="color: #ce9178">"hover:bg-gray-50"</span>&gt;
              &lt;<span style="color: #4ec9b0">td</span> <span style="color: #9cdcfe">className</span>=<span style="color: #ce9178">"border p-2"</span>&gt;{<span style="color: #9cdcfe">customer</span>.<span style="color: #9cdcfe">name</span>}&lt;/<span style="color: #4ec9b0">td</span>&gt;
              &lt;<span style="color: #4ec9b0">td</span> <span style="color: #9cdcfe">className</span>=<span style="color: #ce9178">"border p-2"</span>&gt;{<span style="color: #9cdcfe">customer</span>.<span style="color: #9cdcfe">account</span>}&lt;/<span style="color: #4ec9b0">td</span>&gt;
              &lt;<span style="color: #4ec9b0">td</span> <span style="color: #9cdcfe">className</span>=<span style="color: #ce9178">"border p-2 text-right"</span>&gt;
                ฿{<span style="color: #9cdcfe">customer</span>.<span style="color: #9cdcfe">balance</span>.<span style="color: #dcdcaa">toLocaleString</span>()}
              &lt;/<span style="color: #4ec9b0">td</span>&gt;
            &lt;/<span style="color: #4ec9b0">tr</span>&gt;
          ))}
        &lt;/<span style="color: #4ec9b0">tbody</span>&gt;
      &lt;/<span style="color: #4ec9b0">table</span>&gt;
    &lt;/<span style="color: #4ec9b0">div</span>&gt;
  );
}`,
            }}
          />
        </TerminalUI>
      </section>

      {/* Architecture Flow */}
      <section className="mb-8 bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">
          3. โครงสร้าง: ข้อมูลไหลอย่างไร?
        </h2>
        <div className="space-y-4 text-gray-700 font-mono">
          <div className="bg-white p-4 rounded border-l-4 border-blue-500">
            <div className="font-bold text-blue-600">Browser (Client)</div>
            <div className="text-sm mt-2">
              CustomerList Component + React Query
            </div>
          </div>
          <div className="text-center text-2xl">
            ↓ fetch(&quot;/api/customers&quot;)
          </div>
          <div className="bg-white p-4 rounded border-l-4 border-green-500">
            <div className="font-bold text-green-600">Next.js Server</div>
            <div className="text-sm mt-2">app/api/customers/route.ts (GET)</div>
          </div>
          <div className="text-center text-2xl">↓ Response.json(customers)</div>
          <div className="bg-white p-4 rounded border-l-4 border-purple-500">
            <div className="font-bold text-purple-600">React Query Cache</div>
            <div className="text-sm mt-2">
              queryKey: [&quot;customers&quot;]
            </div>
          </div>
          <div className="text-center text-2xl">↓ Render Table</div>
          <div className="bg-white p-4 rounded border-l-4 border-orange-500">
            <div className="font-bold text-orange-600">
              UI (ตารางแสดงข้อมูล)
            </div>
            <div className="text-sm mt-2">ชื่อ | เลขบัญชี | จำนวนเงิน</div>
          </div>
        </div>
      </section>
    </div>
  );
};
