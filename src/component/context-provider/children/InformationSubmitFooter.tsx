import { Button } from "primereact/button";
import React from "react";
import { CreatedBy } from "./CreatedBy";
import { EmployeeContext } from "../ComponentAndProps";

interface InformationSubmitFooterProps {
  onSave: () => void;
}

export const InformationSubmitFooter: React.FC<
  InformationSubmitFooterProps
> = ({ onSave }) => {
  const { isValid, name } = React.useContext(EmployeeContext);
  return (
    <div>
      <h1 className="my-2">Footer form submit</h1>
      <Button
        disabled={!isValid}
        onClick={onSave}
        severity="success"
        className="w-full"
      >
        Save
        {name}
      </Button>
      <CreatedBy />
    </div>
  );
};
