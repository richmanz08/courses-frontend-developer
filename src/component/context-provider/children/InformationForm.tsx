import { Controller } from "react-hook-form";
import { InputText } from "primereact/inputtext";
import { InputNumber } from "primereact/inputnumber";
import { EmployeeContext } from "../ComponentAndProps";
import { useContext } from "react";

export const InformationForm: React.FC = () => {
  const { control } = useContext(EmployeeContext);
  return (
    <div>
      <h1 className="my-2">Body form</h1>
      <div className="border border-gray-800 p-4 grid gap-4 grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="font-semibold text-gray-200">
            Name <span className="text-red-500">*</span>
          </label>
          <Controller
            name="name"
            rules={{ required: true }}
            control={control}
            render={({ field }) => (
              <InputText {...field} id="name" placeholder="Enter your name" />
            )}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="age" className="font-semibold text-gray-200">
            Age <span className="text-red-500">*</span>
          </label>
          <Controller
            name="age"
            rules={{ required: true, min: 0, max: 150 }}
            control={control}
            render={({ field }) => (
              <InputNumber
                id="age"
                max={150}
                value={field.value}
                onValueChange={(e) => field.onChange(e.value)}
                placeholder="Enter your age"
              />
            )}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="job" className="font-semibold text-gray-200">
            Job <span className="text-red-500">*</span>
          </label>
          <Controller
            name="job"
            rules={{ required: true }}
            control={control}
            render={({ field }) => (
              <InputText {...field} id="job" placeholder="Enter your job" />
            )}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="address" className="font-semibold text-gray-200">
            Address
          </label>
          <Controller
            name="address"
            control={control}
            render={({ field }) => (
              <InputText
                {...field}
                id="address"
                placeholder="Enter your address"
              />
            )}
          />
        </div>
      </div>
    </div>
  );
};
