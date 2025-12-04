import { Control } from "react-hook-form";

export interface EmployeeContextProps {
  employees: EmployeeData[];
  isValid: boolean;
  control: Control<EmployeeForm, unknown, EmployeeForm>;
  name: string;
  createdBy: string;
}

export interface EmployeeForm {
  name: string;
  age: number;
  job: string;
  address?: string;
}

export interface EmployeeData extends EmployeeForm {
  id: string;
}
