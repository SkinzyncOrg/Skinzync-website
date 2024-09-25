// components/Formulation/UserInputDisplay.tsx

import React from "react";
import { FormField, Option } from "@/constants/formFormulationType";

interface UserInputDisplayProps {
  formFields: FormField[];
  searchParams: URLSearchParams;
}

export const displayUserInput = ({
  formFields,
  searchParams,
}: UserInputDisplayProps) => {
  return (
    <>
      {formFields.map((field: FormField, index: number) => {
        // If the field is disabled, display 'N/A'
        if (field.disabled) {
          return (
            <div key={index} className="mb-4">
              <h3 className="text-lg font-semibold">{field.label}</h3>
              <p>N/A</p>
            </div>
          );
        }

        // Get the user's selected value for this field
        const value = searchParams.get(field.name) as string | undefined;
        let displayValue = value || "N/A";

        // If the field has options, find the label for the selected value
        if (field.options && field.options.length > 0 && value) {
          const option = field.options.find(
            (opt: Option) => opt.value === value
          );
          displayValue = option ? option.label : value;
        }

        return (
          <div key={index} className="mb-4">
            <h3 className="text-lg font-semibold">{field.label}</h3>
            <p>{displayValue}</p>
          </div>
        );
      })}
    </>
  );
};
