import { Button } from "primereact/button";
import React from "react";

interface InformationSubmitFooterProps {
  disabled: boolean;
  onSave: () => void;
}

export const InformationSubmitFooter: React.FC<
  InformationSubmitFooterProps
> = ({ onSave, disabled }) => {
  return (
    <div>
      <h1 className="my-2">Footer form submit</h1>
      <Button
        disabled={disabled}
        onClick={onSave}
        severity="success"
        className="w-full"
      >
        Save
      </Button>
    </div>
  );
};
