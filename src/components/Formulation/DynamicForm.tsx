// components/DynamicForm.tsx
"use client";
import React, { useEffect } from "react";
import { useFormStore } from "@/store/formFormulationStore";
import {
  formConfigurations,
  FormField,
  Option,
  viscosityOptionsByDosageForm,
  timeOfUseOptionsByDosageForm,
} from "@/constants/formFormulationType";

interface DynamicFormProps {
  formType: string;
  errors: { [key: string]: string };
}

const DynamicForm: React.FC<DynamicFormProps> = ({ formType, errors }) => {
  const { formData, setFormData } = useFormStore();

  const formFields = formConfigurations[formType];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ [name]: value });
  };
  useEffect(() => {
    formFields.forEach((field) => {
      // Check if the field is "appearances"
      if (field.name === "appearances") {
        if (
          field.type === "select" &&
          field.options &&
          field.options.length === 1
        ) {
          const currentValue = formData[field.name];
          if (!currentValue) {
            setFormData({ [field.name]: field.options[0].value });
          }
        }
      }
    });
  }, [formFields, setFormData]);

  return (
    <div>
      <div className="flex w-full h-full bg-purple-100 rounded-lg items-center mb-5">
        <h2 className="text-2xl font-bold text-center text-primary p-3">
          Physical Appearances
        </h2>
      </div>
      <form className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {formFields.map((field: FormField) => {
            const hasError = !!errors[field.name];
            let isFieldDisabled = field.disabled || false;

            // Determine options for fields with dynamic options
            let fieldOptions = field.options;
            const dosageForm = formData["dosage_form"];

            if (field.name === "viscosity") {
              fieldOptions = dosageForm
                ? viscosityOptionsByDosageForm[dosageForm]
                : [];
              // Determine if the field should be disabled
              isFieldDisabled = fieldOptions.length === 0;
            } else if (field.name === "time_of_used") {
              fieldOptions = dosageForm
                ? timeOfUseOptionsByDosageForm[dosageForm]
                : [];
              // Determine if the field should be disabled
              isFieldDisabled = fieldOptions.length === 0;
            }

            // Skip rendering if field is disabled and has no options
            // if (field.name === "viscosity" && (fieldOptions?.length ?? 0) === 0) {
            //    return null;
            //  }

            return (
              <div key={field.name} className="flex flex-col relative">
                <label className="mb-1 text-gray-700 flex items-center">
                  {field.label}
                  {!field.optional && (
                    <span className="text-red-500 ml-1">*</span>
                  )}
                  {field.tooltip && (
                    <span
                      className="tooltip tooltip-right ml-2"
                      data-tip={field.tooltip}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="20"
                        height="20"
                        viewBox="0 0 50 50"
                      >
                        <path d="M 25 2 C 12.309295 2 2 12.309295 2 25 C 2 37.690705 12.309295 48 25 48 C 37.690705 48 48 37.690705 48 25 C 48 12.309295 37.690705 2 25 2 z M 25 4 C 36.609824 4 46 13.390176 46 25 C 46 36.609824 36.609824 46 25 46 C 13.390176 46 4 36.609824 4 25 C 4 13.390176 13.390176 4 25 4 z M 25 11 A 3 3 0 0 0 22 14 A 3 3 0 0 0 25 17 A 3 3 0 0 0 28 14 A 3 3 0 0 0 25 11 z M 21 21 L 21 23 L 22 23 L 23 23 L 23 36 L 22 36 L 21 36 L 21 38 L 22 38 L 23 38 L 27 38 L 28 38 L 29 38 L 29 36 L 28 36 L 27 36 L 27 21 L 26 21 L 22 21 L 21 21 z"></path>
                      </svg>
                    </span>
                  )}
                </label>
                {field.type === "select" && fieldOptions ? (
                  <select
                    name={field.name}
                    value={formData[field.name] || ""}
                    onChange={handleChange}
                    className={`border ${
                      hasError ? "border-red-500" : "border-gray-300"
                    } rounded px-3 py-2 focus:outline-none focus:ring ${
                      hasError
                        ? "focus:border-red-500"
                        : "focus:border-blue-300"
                    } ${
                      isFieldDisabled ? "bg-gray-100 cursor-not-allowed" : ""
                    }`}
                    disabled={isFieldDisabled}
                  >
                    <option value="" disabled>
                      {isFieldDisabled
                        ? "Not applicable"
                        : `Select ${field.label}`}
                    </option>
                    {fieldOptions.map((option: Option) => (
                      <option
                        key={option.value}
                        value={option.value}
                        disabled={option.disabled}
                      >
                        {option.label}
                      </option>
                    ))}
                  </select>
                ) : (
                  <input
                    type={field.type}
                    name={field.name}
                    value={formData[field.name] || ""}
                    onChange={handleChange}
                    className={`border ${
                      hasError ? "border-red-500" : "border-gray-300"
                    } rounded px-3 py-2 focus:outline-none focus:ring ${
                      hasError
                        ? "focus:border-red-500"
                        : "focus:border-blue-300"
                    }`}
                    disabled={isFieldDisabled}
                  />
                )}
                {hasError && (
                  <span className="text-red-500 text-sm mt-1">
                    {errors[field.name]}
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </form>
    </div>
  );
};

export default DynamicForm;
