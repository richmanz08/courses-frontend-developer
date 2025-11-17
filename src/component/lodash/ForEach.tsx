import { forEach } from "lodash";
import { TerminalUI } from "../ui/TerminalUI";
import { useState } from "react";

export const ForEachLodashExample = () => {
  const [logs, setLogs] = useState<string[]>([]);

  // Example data
  const users = [
    { user: "barney", age: 36 },
    { user: "fred", age: 40 },
    { user: "pebbles", age: 1 },
  ];

  const runForEach = () => {
    const newLogs: string[] = [];

    // Using lodash forEach
    forEach(users, (user, index) => {
      const log = `${index}: ${user.user} is ${user.age} years old`;
      newLogs.push(log);
      console.log(log);
    });

    setLogs(newLogs);
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">
        Lodash ForEach Example
      </h2>

      <TerminalUI fileName="ForEach.tsx" name="Lodash ForEach Example">
        <pre className="text-sm leading-relaxed">
          <code>
            <span className="text-pink-400">import</span> {`{ `}
            <span className="text-yellow-300">forEach</span> {`} `}
            <span className="text-pink-400">from</span>{" "}
            <span className="text-green-400">&quot;lodash&quot;</span>;{"\n\n"}
            <span className="text-gray-500">{`// Example data`}</span>
            {"\n"}
            <span className="text-pink-400">const</span>{" "}
            <span className="text-blue-300">users</span> = [{"\n"}
            {"  { "}
            <span className="text-blue-300">user</span>: {`"`}
            <span className="text-green-400">barney</span>
            {`", `}
            <span className="text-blue-300">age</span>:{" "}
            <span className="text-orange-400">36</span>
            {" },\n"}
            {"  { "}
            <span className="text-blue-300">user</span>: {`"`}
            <span className="text-green-400">fred</span>
            {`", `}
            <span className="text-blue-300">age</span>:{" "}
            <span className="text-orange-400">40</span>
            {" },\n"}
            {"  { "}
            <span className="text-blue-300">user</span>: {`"`}
            <span className="text-green-400">pebbles</span>
            {`", `}
            <span className="text-blue-300">age</span>:{" "}
            <span className="text-orange-400">1</span>
            {" }"}
            {"\n];"}
            {"\n\n"}
            <span className="text-gray-500">{`// Using lodash forEach`}</span>
            {"\n"}
            <span className="text-yellow-300">forEach</span>(
            <span className="text-blue-300">users</span>, (
            <span className="text-blue-300">user</span>,{" "}
            <span className="text-blue-300">index</span>) {`=> {\n`}
            {"  "}
            <span className="text-blue-300">console</span>.
            <span className="text-yellow-300">log</span>(
            <span className="text-green-400">`$</span>
            {"{"}
            <span className="text-blue-300">index</span>
            {"}"}
            <span className="text-green-400">: $</span>
            {"{"}
            <span className="text-blue-300">user</span>.
            <span className="text-blue-300">user</span>
            {"}"}
            <span className="text-green-400"> is $</span>
            {"{"}
            <span className="text-blue-300">user</span>.
            <span className="text-blue-300">age</span>
            {"}"}
            <span className="text-green-400"> years old`</span>
            );
            {"\n});"}
            {"\n\n"}
            <span className="text-gray-500">
              {`// Output:\n// 0: barney is 36 years old\n// 1: fred is 40 years old\n// 2: pebbles is 1 years old`}
            </span>
          </code>
        </pre>
      </TerminalUI>

      <div className="mt-4">
        <button
          onClick={runForEach}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded font-semibold"
        >
          Run forEach
        </button>
      </div>

      {logs.length > 0 && (
        <div className="mt-4">
          <h3 className="text-lg font-semibold mb-2 text-gray-800">Output:</h3>
          <div className="bg-gray-800 text-green-400 p-4 rounded font-mono text-sm">
            {logs.map((log, index) => (
              <div key={index}>{log}</div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
