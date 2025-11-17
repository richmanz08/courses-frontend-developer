import { some } from "lodash";
import { TerminalUI } from "../ui/TerminalUI";

export const SomeLodashExample = () => {
  // Example data
  const users = [
    { user: "barney", age: 36, active: false },
    { user: "fred", age: 40, active: false },
    { user: "pebbles", age: 1, active: false },
  ];

  const products = [
    { name: "Laptop", price: 1200, inStock: true },
    { name: "Mouse", price: 25, inStock: false },
    { name: "Keyboard", price: 75, inStock: false },
  ];

  // Using lodash some - check if at least one matches
  const hasActiveUser = some(users, { active: true });
  const hasInStock = some(products, (p) => p.inStock);
  const hasExpensive = some(products, (p) => p.price > 1000);

  console.log("Has Active User:", hasActiveUser);
  console.log("Has In Stock:", hasInStock);
  console.log("Has Expensive (>1000):", hasExpensive);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">
        Lodash Some Example
      </h2>

      <TerminalUI fileName="Some.tsx" name="Lodash Some Example">
        <pre className="text-sm leading-relaxed">
          <code>
            <span className="text-pink-400">import</span> {`{ `}
            <span className="text-yellow-300">some</span> {`} `}
            <span className="text-pink-400">from</span>{" "}
            <span className="text-green-400">&quot;lodash&quot;</span>;{"\n\n"}
            <span className="text-gray-500">{`// Example data`}</span>
            {"\n"}
            <span className="text-pink-400">const</span>{" "}
            <span className="text-blue-300">products</span> = [{"\n"}
            {"  { "}
            <span className="text-blue-300">name</span>: {`"`}
            <span className="text-green-400">Laptop</span>
            {`", `}
            <span className="text-blue-300">price</span>:{" "}
            <span className="text-orange-400">1200</span>,{" "}
            <span className="text-blue-300">inStock</span>:{" "}
            <span className="text-orange-400">true</span>
            {" },\n"}
            {"  { "}
            <span className="text-blue-300">name</span>: {`"`}
            <span className="text-green-400">Mouse</span>
            {`", `}
            <span className="text-blue-300">price</span>:{" "}
            <span className="text-orange-400">25</span>,{" "}
            <span className="text-blue-300">inStock</span>:{" "}
            <span className="text-orange-400">false</span>
            {" },\n"}
            {"  { "}
            <span className="text-blue-300">name</span>: {`"`}
            <span className="text-green-400">Keyboard</span>
            {`", `}
            <span className="text-blue-300">price</span>:{" "}
            <span className="text-orange-400">75</span>,{" "}
            <span className="text-blue-300">inStock</span>:{" "}
            <span className="text-orange-400">false</span>
            {" }"}
            {"\n];"}
            {"\n\n"}
            <span className="text-gray-500">{`// Using lodash some - check if at least one matches`}</span>
            {"\n"}
            <span className="text-pink-400">const</span>{" "}
            <span className="text-blue-300">hasInStock</span> ={" "}
            <span className="text-yellow-300">some</span>(
            <span className="text-blue-300">products</span>, (
            <span className="text-blue-300">p</span>) {`=> `}
            <span className="text-blue-300">p</span>.
            <span className="text-blue-300">inStock</span>);
            {"\n\n"}
            <span className="text-pink-400">const</span>{" "}
            <span className="text-blue-300">hasExpensive</span> ={" "}
            <span className="text-yellow-300">some</span>(
            <span className="text-blue-300">products</span>, (
            <span className="text-blue-300">p</span>) {`=> `}
            <span className="text-blue-300">p</span>.
            <span className="text-blue-300">price</span> {">"}{" "}
            <span className="text-orange-400">1000</span>);
            {"\n\n"}
            <span className="text-blue-300">console</span>.
            <span className="text-yellow-300">log</span>(
            <span className="text-green-400">&quot;Has In Stock:&quot;</span>,{" "}
            <span className="text-blue-300">hasInStock</span>);{" "}
            <span className="text-gray-500">{`// true`}</span>
            {"\n"}
            <span className="text-blue-300">console</span>.
            <span className="text-yellow-300">log</span>(
            <span className="text-green-400">&quot;Has Expensive:&quot;</span>,{" "}
            <span className="text-blue-300">hasExpensive</span>);{" "}
            <span className="text-gray-500">{`// true`}</span>
          </code>
        </pre>
      </TerminalUI>

      <div className="mt-4 grid md:grid-cols-3 gap-4">
        <div>
          <h3 className="text-lg font-semibold mb-2 text-gray-800">
            Has In Stock:
          </h3>
          <pre
            className={`p-4 rounded text-sm border-2 ${
              hasInStock
                ? "bg-green-50 border-green-300"
                : "bg-red-50 border-red-300"
            }`}
          >
            {JSON.stringify(hasInStock, null, 2)}
          </pre>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2 text-gray-800">
            Has Expensive (&gt;1000):
          </h3>
          <pre
            className={`p-4 rounded text-sm border-2 ${
              hasExpensive
                ? "bg-green-50 border-green-300"
                : "bg-red-50 border-red-300"
            }`}
          >
            {JSON.stringify(hasExpensive, null, 2)}
          </pre>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2 text-gray-800">
            Has Active User:
          </h3>
          <pre
            className={`p-4 rounded text-sm border-2 ${
              hasActiveUser
                ? "bg-green-50 border-green-300"
                : "bg-red-50 border-red-300"
            }`}
          >
            {JSON.stringify(hasActiveUser, null, 2)}
          </pre>
        </div>
      </div>
    </div>
  );
};
