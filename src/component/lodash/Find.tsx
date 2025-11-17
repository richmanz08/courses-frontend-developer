import { find } from "lodash";
import { TerminalUI } from "../ui/TerminalUI";

export const FindLodashExample = () => {
  // Example data
  const users = [
    { id: 1, user: "barney", age: 36, active: true },
    { id: 2, user: "fred", age: 40, active: false },
    { id: 3, user: "pebbles", age: 1, active: true },
  ];

  // Using lodash find
  const foundUser = find(users, { user: "fred" });
  const activeUser = find(users, (u) => u.active && u.age > 30);

  console.log("Found User:", foundUser);
  console.log("Active User > 30:", activeUser);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">
        Lodash Find Example
      </h2>

      <TerminalUI fileName="Find.tsx" name="Lodash Find Example">
        <pre className="text-sm leading-relaxed">
          <code>
            <span className="text-pink-400">import</span> {`{ `}
            <span className="text-yellow-300">find</span> {`} `}
            <span className="text-pink-400">from</span>{" "}
            <span className="text-green-400">&quot;lodash&quot;</span>;{"\n\n"}
            <span className="text-gray-500">{`// Example data`}</span>
            {"\n"}
            <span className="text-pink-400">const</span>{" "}
            <span className="text-blue-300">users</span> = [{"\n"}
            {"  { "}
            <span className="text-blue-300">id</span>:{" "}
            <span className="text-orange-400">1</span>,{" "}
            <span className="text-blue-300">user</span>: {`"`}
            <span className="text-green-400">barney</span>
            {`", `}
            <span className="text-blue-300">age</span>:{" "}
            <span className="text-orange-400">36</span>,{" "}
            <span className="text-blue-300">active</span>:{" "}
            <span className="text-orange-400">true</span>
            {" },\n"}
            {"  { "}
            <span className="text-blue-300">id</span>:{" "}
            <span className="text-orange-400">2</span>,{" "}
            <span className="text-blue-300">user</span>: {`"`}
            <span className="text-green-400">fred</span>
            {`", `}
            <span className="text-blue-300">age</span>:{" "}
            <span className="text-orange-400">40</span>,{" "}
            <span className="text-blue-300">active</span>:{" "}
            <span className="text-orange-400">false</span>
            {" },\n"}
            {"  { "}
            <span className="text-blue-300">id</span>:{" "}
            <span className="text-orange-400">3</span>,{" "}
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
            <span className="text-gray-500">{`// Using lodash find`}</span>
            {"\n"}
            <span className="text-pink-400">const</span>{" "}
            <span className="text-blue-300">foundUser</span> ={" "}
            <span className="text-yellow-300">find</span>(
            <span className="text-blue-300">users</span>, {"{ "}
            <span className="text-blue-300">user</span>:{" "}
            <span className="text-green-400">&quot;fred&quot;</span>
            {" });\n\n"}
            <span className="text-pink-400">const</span>{" "}
            <span className="text-blue-300">activeUser</span> ={" "}
            <span className="text-yellow-300">find</span>(
            <span className="text-blue-300">users</span>, (
            <span className="text-blue-300">u</span>) {`=> `}
            <span className="text-blue-300">u</span>.
            <span className="text-blue-300">active</span> {"&& "}
            <span className="text-blue-300">u</span>.
            <span className="text-blue-300">age</span> {">"}{" "}
            <span className="text-orange-400">30</span>);
            {"\n\n"}
            <span className="text-blue-300">console</span>.
            <span className="text-yellow-300">log</span>(
            <span className="text-green-400">&quot;Found User:&quot;</span>,{" "}
            <span className="text-blue-300">foundUser</span>);
            {"\n"}
            <span className="text-blue-300">console</span>.
            <span className="text-yellow-300">log</span>(
            <span className="text-green-400">
              &quot;Active User &gt; 30:&quot;
            </span>
            , <span className="text-blue-300">activeUser</span>);
          </code>
        </pre>
      </TerminalUI>

      <div className="mt-4 grid md:grid-cols-2 gap-4">
        <div>
          <h3 className="text-lg font-semibold mb-2 text-gray-800">
            Found User (name = &quot;fred&quot;):
          </h3>
          <pre className="bg-yellow-50 p-4 rounded text-sm text-gray-800 border-2 border-yellow-300">
            {JSON.stringify(foundUser, null, 2)}
          </pre>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2 text-gray-800">
            Active User &gt; 30:
          </h3>
          <pre className="bg-teal-50 p-4 rounded text-sm text-gray-800 border-2 border-teal-300">
            {JSON.stringify(activeUser, null, 2)}
          </pre>
        </div>
      </div>
    </div>
  );
};
