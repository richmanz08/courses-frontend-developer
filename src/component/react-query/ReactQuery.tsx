import { TerminalUI } from "../ui/TerminalUI";

export const ReactQuery = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-gray-800">React Query</h1>

      {/* Installation */}
      <section className="mb-8 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-gray-700">
          1. การติดตั้ง (Installation)
        </h2>
        <p className="text-gray-700 mb-4">
          ติดตั้ง React Query (TanStack Query) ผ่าน npm หรือ yarn:
        </p>
        <TerminalUI fileName="terminal" name="Installation">
          <code className="text-sm whitespace-pre-wrap">
            <span className="text-green-400">npm install</span>
            <span className="text-white"> @tanstack/react-query</span>
            {`

`}
            <span className="text-gray-500"># หรือ yarn</span>
            {`
`}
            <span className="text-green-400">yarn add</span>
            <span className="text-white"> @tanstack/react-query</span>
          </code>
        </TerminalUI>
      </section>

      {/* Setup Provider */}
      <section className="mb-8 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-gray-700">
          2. Setup QueryClientProvider
        </h2>
        <p className="text-gray-700 mb-4">
          ครอบ application ด้วย QueryClientProvider ใน layout หรือ root
          component:
        </p>

        <h3 className="text-lg font-bold mb-3 text-gray-600">app/layout.tsx</h3>
        <TerminalUI fileName="layout.tsx" name="Setup Provider">
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

<span style="color: #569cd6">import</span> { <span style="color: #4ec9b0">QueryClient</span>, <span style="color: #4ec9b0">QueryClientProvider</span> } <span style="color: #569cd6">from</span> <span style="color: #ce9178">"@tanstack/react-query"</span>;
<span style="color: #569cd6">import</span> { <span style="color: #4ec9b0">ReactNode</span> } <span style="color: #569cd6">from</span> <span style="color: #ce9178">"react"</span>;

<span style="color: #569cd6">const</span> <span style="color: #9cdcfe">queryClient</span> = <span style="color: #569cd6">new</span> <span style="color: #4ec9b0">QueryClient</span>();

<span style="color: #569cd6">export</span> <span style="color: #569cd6">default</span> <span style="color: #569cd6">function</span> <span style="color: #dcdcaa">RootLayout</span>({
  <span style="color: #9cdcfe">children</span>,
}: {
  <span style="color: #9cdcfe">children</span>: <span style="color: #4ec9b0">ReactNode</span>;
}) {
  <span style="color: #569cd6">return</span> (
    &lt;<span style="color: #4ec9b0">html</span> <span style="color: #9cdcfe">lang</span>=<span style="color: #ce9178">"th"</span>&gt;
      &lt;<span style="color: #4ec9b0">body</span>&gt;
        &lt;<span style="color: #4ec9b0">QueryClientProvider</span> <span style="color: #9cdcfe">client</span>={<span style="color: #9cdcfe">queryClient</span>}&gt;
          {<span style="color: #9cdcfe">children</span>}
        &lt;/<span style="color: #4ec9b0">QueryClientProvider</span>&gt;
      &lt;/<span style="color: #4ec9b0">body</span>&gt;
    &lt;/<span style="color: #4ec9b0">html</span>&gt;
  );
}`,
            }}
          />
        </TerminalUI>
      </section>

      {/* useQuery Hook */}
      <section className="mb-8 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-gray-700">
          3. ดึงข้อมูล (useQuery)
        </h2>
        <p className="text-gray-700 mb-4">
          ใช้ useQuery สำหรับดึงข้อมูล (GET):
        </p>

        <TerminalUI fileName="example.tsx" name="useQuery Example">
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
              __html: `<span style="color: #569cd6">import</span> { <span style="color: #4ec9b0">useQuery</span> } <span style="color: #569cd6">from</span> <span style="color: #ce9178">"@tanstack/react-query"</span>;

<span style="color: #6a9955">// ฟังก์ชันดึงข้อมูล</span>
<span style="color: #569cd6">const</span> <span style="color: #dcdcaa">fetchUsers</span> = <span style="color: #569cd6">async</span> () => {
  <span style="color: #569cd6">const</span> <span style="color: #9cdcfe">response</span> = <span style="color: #569cd6">await</span> <span style="color: #4ec9b0">fetch</span>(<span style="color: #ce9178">"https://api.example.com/users"</span>);
  <span style="color: #569cd6">if</span> (!response.<span style="color: #9cdcfe">ok</span>) <span style="color: #569cd6">throw</span> <span style="color: #569cd6">new</span> <span style="color: #4ec9b0">Error</span>(<span style="color: #ce9178">"Failed to fetch users"</span>);
  <span style="color: #569cd6">return</span> response.<span style="color: #dcdcaa">json</span>();
};

<span style="color: #569cd6">export</span> <span style="color: #569cd6">function</span> <span style="color: #dcdcaa">UsersList</span>() {
  <span style="color: #569cd6">const</span> { <span style="color: #9cdcfe">data</span>, <span style="color: #9cdcfe">isLoading</span>, <span style="color: #9cdcfe">isError</span>, <span style="color: #9cdcfe">error</span> } = <span style="color: #4ec9b0">useQuery</span>({
    <span style="color: #9cdcfe">queryKey</span>: [<span style="color: #ce9178">"users"</span>],
    <span style="color: #9cdcfe">queryFn</span>: <span style="color: #dcdcaa">fetchUsers</span>,
    <span style="color: #9cdcfe">staleTime</span>: <span style="color: #b5cea8">1000</span> * <span style="color: #b5cea8">60</span> * <span style="color: #b5cea8">5</span>,
  });

  <span style="color: #569cd6">if</span> (<span style="color: #9cdcfe">isLoading</span>) <span style="color: #569cd6">return</span> &lt;<span style="color: #4ec9b0">p</span>&gt;Loading...&lt;/<span style="color: #4ec9b0">p</span>&gt;;
  <span style="color: #569cd6">if</span> (<span style="color: #9cdcfe">isError</span>) <span style="color: #569cd6">return</span> &lt;<span style="color: #4ec9b0">p</span>&gt;Error&lt;/<span style="color: #4ec9b0">p</span>&gt;;

  <span style="color: #569cd6">return</span> (
    &lt;<span style="color: #4ec9b0">ul</span>&gt;
      {<span style="color: #9cdcfe">data</span>?.<span style="color: #dcdcaa">map</span>((<span style="color: #9cdcfe">user</span>) =&gt; (
        &lt;<span style="color: #4ec9b0">li</span> <span style="color: #9cdcfe">key</span>={<span style="color: #9cdcfe">user</span>.<span style="color: #9cdcfe">id</span>}&gt;{<span style="color: #9cdcfe">user</span>.<span style="color: #9cdcfe">name</span>}&lt;/<span style="color: #4ec9b0">li</span>&gt;
      ))}
    &lt;/<span style="color: #4ec9b0">ul</span>&gt;
  );
}`,
            }}
          />
        </TerminalUI>
      </section>

      {/* useMutation Hook */}
      <section className="mb-8 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-gray-700">
          4. เพิ่ม/แก้ไข/ลบข้อมูล (useMutation)
        </h2>
        <p className="text-gray-700 mb-4">
          ใช้ useMutation สำหรับดำเนินการสร้าง, อัปเดต, ลบ (POST, PUT, DELETE):
        </p>

        <TerminalUI fileName="example.tsx" name="useMutation Example">
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
              __html: `<span style="color: #569cd6">import</span> { <span style="color: #4ec9b0">useMutation</span>, <span style="color: #4ec9b0">useQueryClient</span> } <span style="color: #569cd6">from</span> <span style="color: #ce9178">"@tanstack/react-query"</span>;

<span style="color: #569cd6">const</span> <span style="color: #dcdcaa">createUser</span> = <span style="color: #569cd6">async</span> (<span style="color: #9cdcfe">newUser</span>) => {
  <span style="color: #569cd6">const</span> <span style="color: #9cdcfe">response</span> = <span style="color: #569cd6">await</span> <span style="color: #4ec9b0">fetch</span>(<span style="color: #ce9178">"https://api.example.com/users"</span>, {
    <span style="color: #9cdcfe">method</span>: <span style="color: #ce9178">"POST"</span>,
    <span style="color: #9cdcfe">headers</span>: { <span style="color: #ce9178">"Content-Type"</span>: <span style="color: #ce9178">"application/json"</span> },
    <span style="color: #9cdcfe">body</span>: <span style="color: #4ec9b0">JSON</span>.<span style="color: #dcdcaa">stringify</span>(<span style="color: #9cdcfe">newUser</span>),
  });
  <span style="color: #569cd6">return</span> <span style="color: #9cdcfe">response</span>.<span style="color: #dcdcaa">json</span>();
};

<span style="color: #569cd6">export</span> <span style="color: #569cd6">function</span> <span style="color: #dcdcaa">CreateUserForm</span>() {
  <span style="color: #569cd6">const</span> <span style="color: #9cdcfe">queryClient</span> = <span style="color: #4ec9b0">useQueryClient</span>();
  
  <span style="color: #569cd6">const</span> <span style="color: #9cdcfe">mutation</span> = <span style="color: #4ec9b0">useMutation</span>({
    <span style="color: #9cdcfe">mutationFn</span>: <span style="color: #dcdcaa">createUser</span>,
    <span style="color: #9cdcfe">onSuccess</span>: () => {
      <span style="color: #9cdcfe">queryClient</span>.<span style="color: #dcdcaa">invalidateQueries</span>({ <span style="color: #9cdcfe">queryKey</span>: [<span style="color: #ce9178">"users"</span>] });
    },
  });

  <span style="color: #569cd6">const</span> <span style="color: #dcdcaa">handleSubmit</span> = (<span style="color: #9cdcfe">e</span>) => {
    <span style="color: #9cdcfe">e</span>.<span style="color: #dcdcaa">preventDefault</span>();
    <span style="color: #9cdcfe">mutation</span>.<span style="color: #dcdcaa">mutate</span>({ <span style="color: #9cdcfe">name</span>: <span style="color: #ce9178">"John"</span>, <span style="color: #9cdcfe">email</span>: <span style="color: #ce9178">"john@example.com"</span> });
  };

  <span style="color: #569cd6">return</span> (
    &lt;<span style="color: #4ec9b0">form</span> <span style="color: #9cdcfe">onSubmit</span>={<span style="color: #dcdcaa">handleSubmit</span>}&gt;
      &lt;<span style="color: #4ec9b0">button</span> <span style="color: #9cdcfe">type</span>=<span style="color: #ce9178">"submit"</span> <span style="color: #9cdcfe">disabled</span>={<span style="color: #9cdcfe">mutation</span>.<span style="color: #9cdcfe">isPending</span>}&gt;
        {<span style="color: #9cdcfe">mutation</span>.<span style="color: #9cdcfe">isPending</span> ? <span style="color: #ce9178">"Creating..."</span> : <span style="color: #ce9178">"Create"</span>}
      &lt;/<span style="color: #4ec9b0">button</span>&gt;
    &lt;/<span style="color: #4ec9b0">form</span>&gt;
  );
}`,
            }}
          />
        </TerminalUI>
      </section>

      {/* Best Practices */}
      <section className="mb-8 bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">
          5. Best Practices
        </h2>
        <ul className="space-y-3 text-gray-700">
          <li className="flex items-start">
            <span className="text-blue-500 mr-3 font-bold">•</span>
            <span>
              <strong>ตั้งชื่อ queryKey ให้สมควร:</strong> ใช้ array
              เพื่อความชัดเจน เช่น [&quot;users&quot;, userId]
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-500 mr-3 font-bold">•</span>
            <span>
              <strong>ตั้ง staleTime:</strong> ระบุเวลา cache
              เพื่อลดการดึงข้อมูลซ้ำ
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-500 mr-3 font-bold">•</span>
            <span>
              <strong>ใช้ invalidateQueries:</strong> refresh ข้อมูลหลังจาก
              mutation สำเร็จ
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-500 mr-3 font-bold">•</span>
            <span>
              <strong>จัดการ error state:</strong> แสดงข้อความ error
              ให้ชัดเจนแก่ผู้ใช้
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-500 mr-3 font-bold">•</span>
            <span>
              <strong>ใช้ dependent queries:</strong> ใช้ enabled option
              เพื่อควบคุมการดึงข้อมูล
            </span>
          </li>
        </ul>
      </section>

      {/* Advanced Example */}
      <section className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-gray-700">
          6. ตัวอย่างเพิ่มเติม (Dependent Query)
        </h2>
        <p className="text-gray-700 mb-4">ดึงข้อมูล B หลังจากได้ข้อมูล A:</p>

        <TerminalUI fileName="example.tsx" name="Dependent Query">
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
              __html: `<span style="color: #569cd6">const</span> { <span style="color: #9cdcfe">data</span>: <span style="color: #9cdcfe">user</span> } = <span style="color: #4ec9b0">useQuery</span>({
  <span style="color: #9cdcfe">queryKey</span>: [<span style="color: #ce9178">"user"</span>, <span style="color: #9cdcfe">userId</span>],
  <span style="color: #9cdcfe">queryFn</span>: () => <span style="color: #dcdcaa">fetchUser</span>(<span style="color: #9cdcfe">userId</span>),
});

<span style="color: #6a9955">// ดึงข้อมูล posts เมื่อได้ userId เท่านั้น</span>
<span style="color: #569cd6">const</span> { <span style="color: #9cdcfe">data</span>: <span style="color: #9cdcfe">posts</span> } = <span style="color: #4ec9b0">useQuery</span>({
  <span style="color: #9cdcfe">queryKey</span>: [<span style="color: #ce9178">"user"</span>, <span style="color: #9cdcfe">userId</span>, <span style="color: #ce9178">"posts"</span>],
  <span style="color: #9cdcfe">queryFn</span>: () => <span style="color: #dcdcaa">fetchUserPosts</span>(<span style="color: #9cdcfe">userId</span>),
  <span style="color: #9cdcfe">enabled</span>: !!<span style="color: #9cdcfe">userId</span>,
});`,
            }}
          />
        </TerminalUI>
      </section>
    </div>
  );
};
