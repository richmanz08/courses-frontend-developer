import { map } from "lodash";
import { TerminalUI } from "../ui/TerminalUI";

export const MapLodashExample = () => {
  // Example data
  const users = [
    { user: "barney", age: 36 },
    { user: "fred", age: 40 },
    { user: "pebbles", age: 1 },
  ];

  // Using lodash map to get usernames
  const usernames = map(users, "user");

  // Or using function
  const ages = map(users, (u) => u.age);

  console.log("Usernames:", usernames);
  console.log("Ages:", ages);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">
        Lodash Map Example
      </h2>

      <TerminalUI fileName="Map.tsx" name="Lodash Map Example">
        <pre className="text-sm leading-relaxed">
          <code>
            <span className="text-pink-400">import</span> {`{ `}
            <span className="text-yellow-300">map</span> {`} `}
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
            <span className="text-gray-500">{`// Using lodash map to get usernames`}</span>
            {"\n"}
            <span className="text-pink-400">const</span>{" "}
            <span className="text-blue-300">usernames</span> ={" "}
            <span className="text-yellow-300">map</span>(
            <span className="text-blue-300">users</span>,{" "}
            <span className="text-green-400">&quot;user&quot;</span>);
            {"\n\n"}
            <span className="text-gray-500">{`// Or using function`}</span>
            {"\n"}
            <span className="text-pink-400">const</span>{" "}
            <span className="text-blue-300">ages</span> ={" "}
            <span className="text-yellow-300">map</span>(
            <span className="text-blue-300">users</span>, (
            <span className="text-blue-300">u</span>) {`=> `}
            <span className="text-blue-300">u</span>.
            <span className="text-blue-300">age</span>);
            {"\n\n"}
            <span className="text-blue-300">console</span>.
            <span className="text-yellow-300">log</span>(
            <span className="text-green-400">&quot;Usernames:&quot;</span>,{" "}
            <span className="text-blue-300">usernames</span>);
            {"\n"}
            <span className="text-blue-300">console</span>.
            <span className="text-yellow-300">log</span>(
            <span className="text-green-400">&quot;Ages:&quot;</span>,{" "}
            <span className="text-blue-300">ages</span>);
            {"\n\n"}
            <span className="text-gray-500">
              {`// Output: ["barney", "fred", "pebbles"] and [36, 40, 1]`}
            </span>
          </code>
        </pre>
      </TerminalUI>

      <div className="mt-4 grid md:grid-cols-2 gap-4">
        <div>
          <h3 className="text-lg font-semibold mb-2 text-gray-800">
            Usernames:
          </h3>
          <pre className="bg-blue-50 p-4 rounded text-sm text-gray-800 border-2 border-blue-300">
            {JSON.stringify(usernames, null, 2)}
          </pre>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2 text-gray-800">Ages:</h3>
          <pre className="bg-purple-50 p-4 rounded text-sm text-gray-800 border-2 border-purple-300">
            {JSON.stringify(ages, null, 2)}
          </pre>
        </div>
      </div>
    </div>
  );
};
