/* eslint-disable react-hooks/incompatible-library */
import { Control, useForm } from "react-hook-form";
import { Information } from "./children/Information";
import { InformationForm } from "./children/InformationForm";
import { InformationSubmitFooter } from "./children/InformationSubmitFooter";
import {
  EmployeeForm,
  EmployeeData,
  EmployeeContextProps,
} from "./ComponentAndProps.interface";
import { TerminalUI } from "../ui/TerminalUI";
import { v4 as uuidv4 } from "uuid";
import { createContext, useState } from "react";
import { EmployeeList } from "./children/EmployeeList";

export const EmployeeContext = createContext<EmployeeContextProps>({
  employees: [],
  isValid: false,
  control: {} as Control<EmployeeForm, unknown, EmployeeForm>,
  name: "",
  createdBy: "",
});

export const ComponentAndProps: React.FC = () => {
  const [employees, setEmployees] = useState<EmployeeData[]>([]);
  const createdBy = "CPMatch";

  const {
    control,
    handleSubmit,
    watch,
    formState: { isValid },
  } = useForm<EmployeeForm>({
    defaultValues: {
      name: "Arnon Rungrueng",
      age: 50,
      job: "",
      address: "",
    },
    mode: "onChange",
  });

  const onSave = (data: EmployeeForm) => {
    console.log("Saved data: ", data);
    const newEmployee: EmployeeData = {
      id: uuidv4(),
      ...data,
    };
    setEmployees((prev) => [...prev, newEmployee]);
  };

  console.log(`Employee 😊☘️`, employees);

  return (
    <EmployeeContext.Provider
      value={{ employees, isValid, control, name: watch("name"), createdBy }}
    >
      <div className="">
        <TerminalUI
          name="Components and props"
          fileName="ComponentAndProps.tsx"
        >
          <div className="flex flex-col gap-4 p-4 ">
            <Information />
            <InformationForm />
            <InformationSubmitFooter onSave={handleSubmit(onSave)} />
          </div>
        </TerminalUI>
        <EmployeeList />
      </div>
    </EmployeeContext.Provider>
  );
};
