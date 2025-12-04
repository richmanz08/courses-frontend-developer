import { useContext } from "react";
import { EmployeeContext } from "../ComponentAndProps";

export const CreatedBy: React.FC = () => {
  const { createdBy } = useContext(EmployeeContext);
  return (
    <div>
      <p>Created by: {createdBy}</p>
    </div>
  );
};
