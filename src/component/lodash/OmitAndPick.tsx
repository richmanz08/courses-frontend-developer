import { omit, pick } from "lodash";
import { TerminalUI } from "../ui/TerminalUI";

export const OmitLodashExample = () => {
  // Example data
  const user = {
    id: 1,
    username: "john_doe",
    password: "secret123",
    email: "john@example.com",
    age: 30,
    role: "admin",
  };

  // Using lodash omit - remove specified properties
  const userWithoutPassword = omit(user, ["password"]);
  const publicInfo = omit(user, ["password", "email", "id"]);

  // Using pick - keep only specified properties
  const basicInfo = pick(user, ["username", "age"]);

  console.log("Without Password:", userWithoutPassword);
  console.log("Public Info:", publicInfo);
  console.log("Basic Info:", basicInfo);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">
        Lodash Omit & Pick Example
      </h2>

      <TerminalUI fileName="Omit.tsx" name="Lodash Omit & Pick Example">
        <pre className="text-sm leading-relaxed">
          <code>
            <span className="text-pink-400">import</span> {`{ `}
            <span className="text-yellow-300">omit</span>,{" "}
            <span className="text-yellow-300">pick</span> {`} `}
            <span className="text-pink-400">from</span>{" "}
            <span className="text-green-400">&quot;lodash&quot;</span>;{"\n\n"}
            <span className="text-gray-500">{`// Example data`}</span>
            {"\n"}
            <span className="text-pink-400">const</span>{" "}
            <span className="text-blue-300">user</span> = {"{\n"}
            {"  "}
            <span className="text-blue-300">id</span>:{" "}
            <span className="text-orange-400">1</span>,{"\n"}
            {"  "}
            <span className="text-blue-300">username</span>:{" "}
            <span className="text-green-400">&quot;john_doe&quot;</span>,{"\n"}
            {"  "}
            <span className="text-blue-300">password</span>:{" "}
            <span className="text-green-400">&quot;secret123&quot;</span>,{"\n"}
            {"  "}
            <span className="text-blue-300">email</span>:{" "}
            <span className="text-green-400">&quot;john@example.com&quot;</span>
            ,{"\n"}
            {"  "}
            <span className="text-blue-300">age</span>:{" "}
            <span className="text-orange-400">30</span>,{"\n"}
            {"  "}
            <span className="text-blue-300">role</span>:{" "}
            <span className="text-green-400">&quot;admin&quot;</span>
            {"\n};"}
            {"\n\n"}
            <span className="text-gray-500">{`// Using lodash omit - remove specified properties`}</span>
            {"\n"}
            <span className="text-pink-400">const</span>{" "}
            <span className="text-blue-300">userWithoutPassword</span> ={" "}
            <span className="text-yellow-300">omit</span>(
            <span className="text-blue-300">user</span>, [
            <span className="text-green-400">&quot;password&quot;</span>]);
            {"\n\n"}
            <span className="text-pink-400">const</span>{" "}
            <span className="text-blue-300">publicInfo</span> ={" "}
            <span className="text-yellow-300">omit</span>(
            <span className="text-blue-300">user</span>, [
            <span className="text-green-400">&quot;password&quot;</span>,{" "}
            <span className="text-green-400">&quot;email&quot;</span>,{" "}
            <span className="text-green-400">&quot;id&quot;</span>]);
            {"\n\n"}
            <span className="text-gray-500">{`// Using pick - keep only specified properties`}</span>
            {"\n"}
            <span className="text-pink-400">const</span>{" "}
            <span className="text-blue-300">basicInfo</span> ={" "}
            <span className="text-yellow-300">pick</span>(
            <span className="text-blue-300">user</span>, [
            <span className="text-green-400">&quot;username&quot;</span>,{" "}
            <span className="text-green-400">&quot;age&quot;</span>]);
          </code>
        </pre>
      </TerminalUI>

      <div className="mt-4 space-y-4">
        <div>
          <h3 className="text-lg font-semibold mb-2 text-gray-800">
            Original User:
          </h3>
          <pre className="bg-gray-50 p-4 rounded text-sm text-gray-800 border-2 border-gray-300">
            {JSON.stringify(user, null, 2)}
          </pre>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          <div>
            <h3 className="text-lg font-semibold mb-2 text-gray-800">
              Without Password:
            </h3>
            <pre className="bg-blue-50 p-4 rounded text-sm text-gray-800 border-2 border-blue-300">
              {JSON.stringify(userWithoutPassword, null, 2)}
            </pre>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2 text-gray-800">
              Public Info:
            </h3>
            <pre className="bg-green-50 p-4 rounded text-sm text-gray-800 border-2 border-green-300">
              {JSON.stringify(publicInfo, null, 2)}
            </pre>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2 text-gray-800">
              Basic Info (pick):
            </h3>
            <pre className="bg-purple-50 p-4 rounded text-sm text-gray-800 border-2 border-purple-300">
              {JSON.stringify(basicInfo, null, 2)}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
};
