import { useForm } from "react-hook-form";
import { Information } from "./children/Information";
import { InformationForm } from "./children/InformationForm";
import { InformationSubmitFooter } from "./children/InformationSubmitFooter";
import { EmployeeForm, EmployeeData } from "./ComponentAndProps.interface";
import { TerminalUI } from "../ui/TerminalUI";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
// import { EmployeeList } from "./children/EmployeeList";

export const ComponentAndProps: React.FC = () => {
  const [employees, setEmployees] = useState<EmployeeData[]>([]);

  const {
    control,
    handleSubmit,
    getValues,
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
    console.log("Employees list: ", employees);
  };

  console.log(`Employee 😊☘️`, employees);

  return (
    <div className="">
      <TerminalUI name="Components and props" fileName="ComponentAndProps.tsx">
        <div className="flex flex-col gap-4 p-4 ">
          <Information name={getValues("name")} />
          <InformationForm control={control} />
          <InformationSubmitFooter
            disabled={!isValid}
            onSave={handleSubmit(onSave)}
          />
        </div>
      </TerminalUI>

      {/* <EmployeeList employees={employees} /> */}
    </div>
  );
};
