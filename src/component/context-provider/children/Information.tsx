import { useContext } from "react";
import { EmployeeContext } from "../ComponentAndProps";

export const Information: React.FC = () => {
  const { name } = useContext(EmployeeContext);
  return (
    <div>
      <h1 className="my-2">header</h1>
      <div className="border border-gray-800 p-4">
        <h1>{name}</h1>
      </div>
    </div>
  );
};
