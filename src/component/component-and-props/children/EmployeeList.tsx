import {
  ITableCustomUIColumnHeader,
  TableCustomUIComponent,
} from "../../ui/Table/TableCustom";
import { EmployeeData } from "../ComponentAndProps.interface";

interface EmployeeListProps {
  employees: EmployeeData[];
}
export const EmployeeList: React.FC<EmployeeListProps> = ({ employees }) => {
  const columnHeader: ITableCustomUIColumnHeader<EmployeeData>[] = [
    { title: "name", align: "left", render: (item) => <>{item.name}</> },
    { title: "age", align: "left", render: (item) => <>{item.age}</> },
    { title: "job", align: "left", render: (item) => <>{item.job}</> },
    { title: "address", align: "left", render: (item) => <>{item.address}</> },
  ];

  return (
    <div className="bg-gray-900 p-4 mt-4">
      <TableCustomUIComponent headerTable={columnHeader} datalist={employees} />
    </div>
  );
};
