import { every } from "lodash";
import { TerminalUI } from "../ui/TerminalUI";

export const EveryLodashExample = () => {
  // Example data
  const numbers = [2, 4, 6, 8, 10];
  const mixedNumbers = [2, 4, 5, 8, 10];

  const users = [
    { user: "barney", age: 36, active: true },
    { user: "fred", age: 40, active: true },
    { user: "pebbles", age: 1, active: true },
  ];

  const mixedUsers = [
    { user: "barney", age: 36, active: true },
    { user: "fred", age: 40, active: false },
    { user: "pebbles", age: 1, active: true },
  ];

  // Using lodash every - check if ALL match
  const allEven = every(numbers, (n) => n % 2 === 0);
  const allMixedEven = every(mixedNumbers, (n) => n % 2 === 0);
  const allActive = every(users, { active: true });
  const allMixedActive = every(mixedUsers, { active: true });
  const allAdults = every(users, (u) => u.age >= 18);

  console.log("All Even:", allEven);
  console.log("All Mixed Even:", allMixedEven);
  console.log("All Active:", allActive);
  console.log("All Mixed Active:", allMixedActive);
  console.log("All Adults:", allAdults);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">
        Lodash Every Example
      </h2>

      <TerminalUI fileName="Every.tsx" name="Lodash Every Example">
        <pre className="text-sm leading-relaxed">
          <code>
            <span className="text-pink-400">import</span> {`{ `}
            <span className="text-yellow-300">every</span> {`} `}
            <span className="text-pink-400">from</span>{" "}
            <span className="text-green-400">&quot;lodash&quot;</span>;{"\n\n"}
            <span className="text-gray-500">{`// Example data`}</span>
            {"\n"}
            <span className="text-pink-400">const</span>{" "}
            <span className="text-blue-300">numbers</span> = [
            <span className="text-orange-400">2</span>,{" "}
            <span className="text-orange-400">4</span>,{" "}
            <span className="text-orange-400">6</span>,{" "}
            <span className="text-orange-400">8</span>,{" "}
            <span className="text-orange-400">10</span>];
            {"\n"}
            <span className="text-pink-400">const</span>{" "}
            <span className="text-blue-300">mixedNumbers</span> = [
            <span className="text-orange-400">2</span>,{" "}
            <span className="text-orange-400">4</span>,{" "}
            <span className="text-orange-400">5</span>,{" "}
            <span className="text-orange-400">8</span>,{" "}
            <span className="text-orange-400">10</span>];
            {"\n\n"}
            <span className="text-pink-400">const</span>{" "}
            <span className="text-blue-300">users</span> = [{"\n"}
            {"  { "}
            <span className="text-blue-300">user</span>: {`"`}
            <span className="text-green-400">barney</span>
            {`", `}
            <span className="text-blue-300">age</span>:{" "}
            <span className="text-orange-400">36</span>,{" "}
            <span className="text-blue-300">active</span>:{" "}
            <span className="text-orange-400">true</span>
            {" },\n"}
            {"  { "}
            <span className="text-blue-300">user</span>: {`"`}
            <span className="text-green-400">fred</span>
            {`", `}
            <span className="text-blue-300">age</span>:{" "}
            <span className="text-orange-400">40</span>,{" "}
            <span className="text-blue-300">active</span>:{" "}
            <span className="text-orange-400">true</span>
            {" },\n"}
            {"  { "}
            <span className="text-blue-300">user</span>: {`"`}
            <span className="text-green-400">pebbles</span>
            {`", `}
            <span className="text-blue-300">age</span>:{" "}
            <span className="text-orange-400">1</span>,{" "}
            <span className="text-blue-300">active</span>:{" "}
            <span className="text-orange-400">true</span>
            {" }"}
            {"\n];"}
            {"\n\n"}
            <span className="text-gray-500">{`// Using lodash every - check if ALL match`}</span>
            {"\n"}
            <span className="text-pink-400">const</span>{" "}
            <span className="text-blue-300">allEven</span> ={" "}
            <span className="text-yellow-300">every</span>(
            <span className="text-blue-300">numbers</span>, (
            <span className="text-blue-300">n</span>) {`=> `}
            <span className="text-blue-300">n</span> %{" "}
            <span className="text-orange-400">2</span> ==={" "}
            <span className="text-orange-400">0</span>);
            {"\n\n"}
            <span className="text-pink-400">const</span>{" "}
            <span className="text-blue-300">allMixedEven</span> ={" "}
            <span className="text-yellow-300">every</span>(
            <span className="text-blue-300">mixedNumbers</span>, (
            <span className="text-blue-300">n</span>) {`=> `}
            <span className="text-blue-300">n</span> %{" "}
            <span className="text-orange-400">2</span> ==={" "}
            <span className="text-orange-400">0</span>);
            {"\n\n"}
            <span className="text-pink-400">const</span>{" "}
            <span className="text-blue-300">allActive</span> ={" "}
            <span className="text-yellow-300">every</span>(
            <span className="text-blue-300">users</span>, {"{ "}
            <span className="text-blue-300">active</span>:{" "}
            <span className="text-orange-400">true</span>
            {" });\n\n"}
            <span className="text-pink-400">const</span>{" "}
            <span className="text-blue-300">allAdults</span> ={" "}
            <span className="text-yellow-300">every</span>(
            <span className="text-blue-300">users</span>, (
            <span className="text-blue-300">u</span>) {`=> `}
            <span className="text-blue-300">u</span>.
            <span className="text-blue-300">age</span> {">="}{" "}
            <span className="text-orange-400">18</span>);
            {"\n\n"}
            <span className="text-blue-300">console</span>.
            <span className="text-yellow-300">log</span>(
            <span className="text-green-400">&quot;All Even:&quot;</span>,{" "}
            <span className="text-blue-300">allEven</span>);{" "}
            <span className="text-gray-500">{`// true`}</span>
            {"\n"}
            <span className="text-blue-300">console</span>.
            <span className="text-yellow-300">log</span>(
            <span className="text-green-400">&quot;All Mixed Even:&quot;</span>,{" "}
            <span className="text-blue-300">allMixedEven</span>);{" "}
            <span className="text-gray-500">{`// false (5 is odd)`}</span>
            {"\n"}
            <span className="text-blue-300">console</span>.
            <span className="text-yellow-300">log</span>(
            <span className="text-green-400">&quot;All Active:&quot;</span>,{" "}
            <span className="text-blue-300">allActive</span>);{" "}
            <span className="text-gray-500">{`// true`}</span>
            {"\n"}
            <span className="text-blue-300">console</span>.
            <span className="text-yellow-300">log</span>(
            <span className="text-green-400">&quot;All Adults:&quot;</span>,{" "}
            <span className="text-blue-300">allAdults</span>);{" "}
            <span className="text-gray-500">{`// false (pebbles is 1)`}</span>
          </code>
        </pre>
      </TerminalUI>

      <div className="mt-4">
        <h3 className="text-lg font-semibold mb-2 text-gray-800">
          📋 Comparison: every vs some
        </h3>
        <div className="bg-blue-50 p-4 rounded border-2 border-blue-300 mb-4">
          <p className="text-sm text-gray-700">
            <strong>every()</strong> - ต้องตรงเงื่อนไข <strong>ทั้งหมด</strong>{" "}
            ถึงจะ return true
            <br />
            <strong>some()</strong> - ต้องตรงเงื่อนไข{" "}
            <strong>อย่างน้อย 1 ตัว</strong> ถึงจะ return true
          </p>
        </div>
      </div>

      <div className="mt-4 space-y-4">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h3 className="text-lg font-semibold mb-2 text-gray-800">
              All Even Numbers [2, 4, 6, 8, 10]:
            </h3>
            <pre
              className={`p-4 rounded text-sm border-2 ${
                allEven
                  ? "bg-green-50 border-green-300"
                  : "bg-red-50 border-red-300"
              }`}
            >
              every(numbers, n =&gt; n % 2 === 0){"\n"}
              Result: {JSON.stringify(allEven)}
            </pre>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2 text-gray-800">
              All Mixed Even [2, 4, 5, 8, 10]:
            </h3>
            <pre
              className={`p-4 rounded text-sm border-2 ${
                allMixedEven
                  ? "bg-green-50 border-green-300"
                  : "bg-red-50 border-red-300"
              }`}
            >
              every(mixedNumbers, n =&gt; n % 2 === 0){"\n"}
              Result: {JSON.stringify(allMixedEven)} ❌ (5 is odd)
            </pre>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          <div>
            <h3 className="text-lg font-semibold mb-2 text-gray-800">
              All Active Users:
            </h3>
            <pre
              className={`p-4 rounded text-sm border-2 ${
                allActive
                  ? "bg-green-50 border-green-300"
                  : "bg-red-50 border-red-300"
              }`}
            >
              every(users, {`{ active: true }`}){"\n"}
              Result: {JSON.stringify(allActive)}
            </pre>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2 text-gray-800">
              All Mixed Active:
            </h3>
            <pre
              className={`p-4 rounded text-sm border-2 ${
                allMixedActive
                  ? "bg-green-50 border-green-300"
                  : "bg-red-50 border-red-300"
              }`}
            >
              every(mixedUsers, {`{ active: true }`}){"\n"}
              Result: {JSON.stringify(allMixedActive)} ❌
            </pre>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2 text-gray-800">
              All Adults (&gt;=18):
            </h3>
            <pre
              className={`p-4 rounded text-sm border-2 ${
                allAdults
                  ? "bg-green-50 border-green-300"
                  : "bg-red-50 border-red-300"
              }`}
            >
              every(users, u =&gt; u.age &gt;= 18){"\n"}
              Result: {JSON.stringify(allAdults)} ❌ (pebbles is 1)
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
};
