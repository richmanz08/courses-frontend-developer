export interface EmployeeForm {
  name: string;
  age: number;
  job: string;
  address?: string;
}

export interface EmployeeData extends EmployeeForm {
  id: string;
}
