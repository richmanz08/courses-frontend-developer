import { Button } from "primereact/button";
import React from "react";
import { CreatedBy } from "./CreatedBy";

interface InformationSubmitFooterProps {
  disabled: boolean;
  createdBy: string;
  name: string;
  onSave: () => void;
}

export const InformationSubmitFooter: React.FC<
  InformationSubmitFooterProps
> = ({ onSave, disabled, createdBy, name }) => {
  return (
    <div>
      <h1 className="my-2">Footer form submit</h1>
      <Button
        disabled={disabled}
        onClick={onSave}
        severity="success"
        className="w-full"
      >
        Save {name}
      </Button>
      <CreatedBy createdBy={createdBy} />
    </div>
  );
};
