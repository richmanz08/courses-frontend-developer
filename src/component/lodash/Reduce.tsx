import { reduce } from "lodash";
import { TerminalUI } from "../ui/TerminalUI";

export const ReduceLodashExample = () => {
  // Example data
  const numbers = [1, 2, 3, 4, 5];

  const orders = [
    { product: "Laptop", price: 1200 },
    { product: "Mouse", price: 25 },
    { product: "Keyboard", price: 75 },
  ];

  // Using lodash reduce to sum numbers
  const sum = reduce(numbers, (total, n) => total + n, 0);

  // Calculate total price
  const totalPrice = reduce(orders, (total, order) => total + order.price, 0);

  console.log("Sum:", sum);
  console.log("Total Price:", totalPrice);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">
        Lodash Reduce Example
      </h2>

      <TerminalUI fileName="Reduce.tsx" name="Lodash Reduce Example">
        <pre className="text-sm leading-relaxed">
          <code>
            <span className="text-pink-400">import</span> {`{ `}
            <span className="text-yellow-300">reduce</span> {`} `}
            <span className="text-pink-400">from</span>{" "}
            <span className="text-green-400">&quot;lodash&quot;</span>;{"\n\n"}
            <span className="text-gray-500">{`// Example data`}</span>
            {"\n"}
            <span className="text-pink-400">const</span>{" "}
            <span className="text-blue-300">numbers</span> = [
            <span className="text-orange-400">1</span>,{" "}
            <span className="text-orange-400">2</span>,{" "}
            <span className="text-orange-400">3</span>,{" "}
            <span className="text-orange-400">4</span>,{" "}
            <span className="text-orange-400">5</span>];
            {"\n\n"}
            <span className="text-pink-400">const</span>{" "}
            <span className="text-blue-300">orders</span> = [{"\n"}
            {"  { "}
            <span className="text-blue-300">product</span>: {`"`}
            <span className="text-green-400">Laptop</span>
            {`", `}
            <span className="text-blue-300">price</span>:{" "}
            <span className="text-orange-400">1200</span>
            {" },\n"}
            {"  { "}
            <span className="text-blue-300">product</span>: {`"`}
            <span className="text-green-400">Mouse</span>
            {`", `}
            <span className="text-blue-300">price</span>:{" "}
            <span className="text-orange-400">25</span>
            {" },\n"}
            {"  { "}
            <span className="text-blue-300">product</span>: {`"`}
            <span className="text-green-400">Keyboard</span>
            {`", `}
            <span className="text-blue-300">price</span>:{" "}
            <span className="text-orange-400">75</span>
            {" }"}
            {"\n];"}
            {"\n\n"}
            <span className="text-gray-500">{`// Using lodash reduce to sum numbers`}</span>
            {"\n"}
            <span className="text-pink-400">const</span>{" "}
            <span className="text-blue-300">sum</span> ={" "}
            <span className="text-yellow-300">reduce</span>(
            <span className="text-blue-300">numbers</span>, (
            <span className="text-blue-300">total</span>,{" "}
            <span className="text-blue-300">n</span>) {`=> `}
            <span className="text-blue-300">total</span> +{" "}
            <span className="text-blue-300">n</span>,{" "}
            <span className="text-orange-400">0</span>);
            {"\n\n"}
            <span className="text-gray-500">{`// Calculate total price`}</span>
            {"\n"}
            <span className="text-pink-400">const</span>{" "}
            <span className="text-blue-300">totalPrice</span> ={" "}
            <span className="text-yellow-300">reduce</span>(
            <span className="text-blue-300">orders</span>, (
            <span className="text-blue-300">total</span>,{" "}
            <span className="text-blue-300">order</span>) {`=> `}
            <span className="text-blue-300">total</span> +{" "}
            <span className="text-blue-300">order</span>.
            <span className="text-blue-300">price</span>,{" "}
            <span className="text-orange-400">0</span>);
            {"\n\n"}
            <span className="text-blue-300">console</span>.
            <span className="text-yellow-300">log</span>(
            <span className="text-green-400">&quot;Sum:&quot;</span>,{" "}
            <span className="text-blue-300">sum</span>);{" "}
            <span className="text-gray-500">{`// 15`}</span>
            {"\n"}
            <span className="text-blue-300">console</span>.
            <span className="text-yellow-300">log</span>(
            <span className="text-green-400">&quot;Total Price:&quot;</span>,{" "}
            <span className="text-blue-300">totalPrice</span>);{" "}
            <span className="text-gray-500">{`// 1300`}</span>
          </code>
        </pre>
      </TerminalUI>

      <div className="mt-4 grid md:grid-cols-2 gap-4">
        <div>
          <h3 className="text-lg font-semibold mb-2 text-gray-800">
            Sum of Numbers:
          </h3>
          <pre className="bg-orange-50 p-4 rounded text-sm text-gray-800 border-2 border-orange-300">
            {JSON.stringify(sum, null, 2)}
          </pre>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2 text-gray-800">
            Total Price:
          </h3>
          <pre className="bg-green-50 p-4 rounded text-sm text-gray-800 border-2 border-green-300">
            ${JSON.stringify(totalPrice, null, 2)}
          </pre>
        </div>
      </div>
    </div>
  );
};
