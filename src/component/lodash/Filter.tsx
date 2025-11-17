import { filter } from "lodash";
import { TerminalUI } from "../ui/TerminalUI";

export const FilterLodashExample = () => {
  // Example data
  const users = [
    { user: "barney", age: 36, active: true },
    { user: "fred", age: 40, active: false },
    { user: "pebbles", age: 1, active: true },
  ];

  // Using lodash filter to get active users
  const activeUsers = filter(users, { active: true });

  console.log("Active Users:", activeUsers);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">
        Lodash Filter Example
      </h2>

      <TerminalUI fileName="Filter.tsx" name="Lodash Filter Example">
        <pre className="text-sm leading-relaxed">
          <code>
            <span className="text-pink-400">import</span> {`{ `}
            <span className="text-yellow-300">filter</span> {`} `}
            <span className="text-pink-400">from</span>{" "}
            <span className="text-green-400">&quot;lodash&quot;</span>;{"\n\n"}
            <span className="text-gray-500">{`// Example data`}</span>
            {"\n"}
            <span className="text-pink-400">const</span>{" "}
            <span className="text-blue-300">users</span> = [{"\n"}
            {"  "}
            {"{ "}
            <span className="text-blue-300">user</span>: {`"`}
            <span className="text-green-400">barney</span>
            {`", `}
            <span className="text-blue-300">age</span>:{" "}
            <span className="text-orange-400">36</span>
            {`, `}
            <span className="text-blue-300">active</span>:{" "}
            <span className="text-orange-400">true</span>
            {" },\n"}
            {"  "}
            {"{ "}
            <span className="text-blue-300">user</span>: {`"`}
            <span className="text-green-400">fred</span>
            {`", `}
            <span className="text-blue-300">age</span>:{" "}
            <span className="text-orange-400">40</span>
            {`, `}
            <span className="text-blue-300">active</span>:{" "}
            <span className="text-orange-400">false</span>
            {" },\n"}
            {"  "}
            {"{ "}
            <span className="text-blue-300">user</span>: {`"`}
            <span className="text-green-400">pebbles</span>
            {`", `}
            <span className="text-blue-300">age</span>:{" "}
            <span className="text-orange-400">1</span>
            {`, `}
            <span className="text-blue-300">active</span>:{" "}
            <span className="text-orange-400">true</span>
            {" }"}
            {"\n];"}
            {"\n\n"}
            <span className="text-gray-500">{`// Using lodash filter to get active users`}</span>
            {"\n"}
            <span className="text-pink-400">const</span>{" "}
            <span className="text-blue-300">activeUsers</span> ={" "}
            <span className="text-yellow-300">filter</span>(
            <span className="text-blue-300">users</span>, {"{ "}
            <span className="text-blue-300">active</span>:{" "}
            <span className="text-orange-400">true</span>
            {" });\n\n"}
            <span className="text-blue-300">console</span>.
            <span className="text-yellow-300">log</span>(
            <span className="text-green-400">&quot;Active Users:&quot;</span>,{" "}
            <span className="text-blue-300">activeUsers</span>);
            {"\n\n"}
            <span className="text-gray-500">
              {`// Output: [{ user: "barney", age: 36, active: true }, { user: "pebbles", age: 1, active: true }]`}
            </span>
          </code>
        </pre>
      </TerminalUI>

      <div className="mt-4">
        <h3 className="text-lg font-semibold mb-2 text-gray-800">
          Active Users (Filtered):
        </h3>
        <pre className="bg-green-50 p-4 rounded text-sm text-gray-800 border-2 border-green-300">
          {JSON.stringify(activeUsers, null, 2)}
        </pre>
      </div>
    </div>
  );
};
