import { isEqual, cloneDeep } from "lodash";
import { TerminalUI } from "../ui/TerminalUI";
import { useState } from "react";

export const IsEqualLodashExample = () => {
  const [comparison, setComparison] = useState<string>("");

  // Example data
  const obj1 = { name: "John", age: 30, address: { city: "NYC" } };
  const obj2 = { name: "John", age: 30, address: { city: "NYC" } };
  const obj3 = { name: "Jane", age: 25, address: { city: "LA" } };

  const runComparison = () => {
    // Regular comparison (reference)
    const refEqual = obj1 === obj2;

    // Deep comparison with lodash
    const deepEqual1 = isEqual(obj1, obj2);
    const deepEqual2 = isEqual(obj1, obj3);

    // Clone deep
    const cloned = cloneDeep(obj1);
    const clonedEqual = isEqual(obj1, cloned);

    const results = [
      `obj1 === obj2: ${refEqual} (reference comparison)`,
      `isEqual(obj1, obj2): ${deepEqual1} (deep comparison)`,
      `isEqual(obj1, obj3): ${deepEqual2} (different values)`,
      `isEqual(obj1, clonedObj): ${clonedEqual} (cloned object)`,
    ].join("\n");

    setComparison(results);
    console.log("Comparison Results:", results);
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">
        Lodash IsEqual & CloneDeep Example
      </h2>

      <TerminalUI fileName="IsEqual.tsx" name="Lodash IsEqual Example">
        <pre className="text-sm leading-relaxed">
          <code>
            <span className="text-pink-400">import</span> {`{ `}
            <span className="text-yellow-300">isEqual</span>,{" "}
            <span className="text-yellow-300">cloneDeep</span> {`} `}
            <span className="text-pink-400">from</span>{" "}
            <span className="text-green-400">&quot;lodash&quot;</span>;{"\n\n"}
            <span className="text-gray-500">{`// Example data`}</span>
            {"\n"}
            <span className="text-pink-400">const</span>{" "}
            <span className="text-blue-300">obj1</span> = {"{ "}
            <span className="text-blue-300">name</span>:{" "}
            <span className="text-green-400">&quot;John&quot;</span>,{" "}
            <span className="text-blue-300">age</span>:{" "}
            <span className="text-orange-400">30</span>,{" "}
            <span className="text-blue-300">address</span>: {"{ "}
            <span className="text-blue-300">city</span>:{" "}
            <span className="text-green-400">&quot;NYC&quot;</span>
            {" } };\n"}
            <span className="text-pink-400">const</span>{" "}
            <span className="text-blue-300">obj2</span> = {"{ "}
            <span className="text-blue-300">name</span>:{" "}
            <span className="text-green-400">&quot;John&quot;</span>,{" "}
            <span className="text-blue-300">age</span>:{" "}
            <span className="text-orange-400">30</span>,{" "}
            <span className="text-blue-300">address</span>: {"{ "}
            <span className="text-blue-300">city</span>:{" "}
            <span className="text-green-400">&quot;NYC&quot;</span>
            {" } };\n\n"}
            <span className="text-gray-500">{`// Regular comparison (reference)`}</span>
            {"\n"}
            <span className="text-blue-300">obj1</span> ==={" "}
            <span className="text-blue-300">obj2</span>;{" "}
            <span className="text-gray-500">{`// false (different references)`}</span>
            {"\n\n"}
            <span className="text-gray-500">{`// Deep comparison with lodash`}</span>
            {"\n"}
            <span className="text-yellow-300">isEqual</span>(
            <span className="text-blue-300">obj1</span>,{" "}
            <span className="text-blue-300">obj2</span>);{" "}
            <span className="text-gray-500">{`// true (same values)`}</span>
            {"\n\n"}
            <span className="text-gray-500">{`// Clone deep object`}</span>
            {"\n"}
            <span className="text-pink-400">const</span>{" "}
            <span className="text-blue-300">cloned</span> ={" "}
            <span className="text-yellow-300">cloneDeep</span>(
            <span className="text-blue-300">obj1</span>);
            {"\n"}
            <span className="text-blue-300">cloned</span>.
            <span className="text-blue-300">address</span>.
            <span className="text-blue-300">city</span> ={" "}
            <span className="text-green-400">&quot;LA&quot;</span>;{" "}
            <span className="text-gray-500">{`// won't affect obj1`}</span>
          </code>
        </pre>
      </TerminalUI>

      <div className="mt-4">
        <button
          onClick={runComparison}
          className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded font-semibold"
        >
          Run Comparison
        </button>
      </div>

      {comparison && (
        <div className="mt-4">
          <h3 className="text-lg font-semibold mb-2 text-gray-800">
            Comparison Results:
          </h3>
          <div className="bg-gray-800 text-green-400 p-4 rounded font-mono text-sm whitespace-pre">
            {comparison}
          </div>
        </div>
      )}

      <div className="mt-4 grid md:grid-cols-3 gap-4">
        <div>
          <h3 className="text-lg font-semibold mb-2 text-gray-800">
            Object 1:
          </h3>
          <pre className="bg-blue-50 p-4 rounded text-sm text-gray-800 border-2 border-blue-300">
            {JSON.stringify(obj1, null, 2)}
          </pre>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2 text-gray-800">
            Object 2:
          </h3>
          <pre className="bg-green-50 p-4 rounded text-sm text-gray-800 border-2 border-green-300">
            {JSON.stringify(obj2, null, 2)}
          </pre>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2 text-gray-800">
            Object 3:
          </h3>
          <pre className="bg-red-50 p-4 rounded text-sm text-gray-800 border-2 border-red-300">
            {JSON.stringify(obj3, null, 2)}
          </pre>
        </div>
      </div>
    </div>
  );
};
