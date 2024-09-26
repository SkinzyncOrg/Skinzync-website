// components/Formulation/SpecificationForm.tsx

import React from "react";
import { formSpecifications, FormField, Option } from "@/constants/formFormulationType";
import { useFormStore } from "@/store/formFormulationStore";

function formatCategoryName(category: string): string {
  // Replace underscores with spaces and format
  let formatted = category.replace(/_/g, " ");
  formatted = formatted.replace(/([A-Z])/g, " $1");
  formatted = formatted
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
  return formatted.trim();
}

export default function SpecificationForm() {
  const { formData, setFormData } = useFormStore();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ [name]: value });
  };

  return (
    <div>
      <div className="flex w-full h-full bg-purple-100 rounded-lg items-center mb-5">
        <h2 className="text-2xl font-bold text-center text-primary p-3">
          Other Specifications
        </h2>
      </div>

      {/* Form */}
      <form className="space-y-6">
        {/* Wrapping all categories in a flex container for horizontal layout */}
        <div className="flex flex-wrap space-y-6 md:space-x-6 md:space-y-0">
          {Object.entries(formSpecifications).map(([category, fields]) => (
            <div key={category} className="w-full md:w-1/2 lg:w-1/3">
              {/* Category Header */}
              <h3 className="text-xl font-semibold mb-4 capitalize">
                {formatCategoryName(category)}
              </h3>

              {/* Form Fields in Vertical Stacking */}
              <div className="flex flex-col space-y-4">
                {fields.map((field: FormField) => {
                  const isFieldDisabled = field.disabled || false;

                  return (
                    <div key={field.name} className="flex flex-col relative">
                      {/* Field Label */}
                      <label className="mb-1 text-gray-700 flex items-center">
                        {field.label}
                        {field.tooltip && (
                          <span
                            className="tooltip tooltip-right ml-2"
                            data-tip={field.tooltip}
                          >
                            {/* Tooltip Icon */}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
                              viewBox="0 0 50 50"
                            >
                              <path d="M 25 2 C 12.309295 2 2 12.309295 2 25 C 2 37.690705 12.309295 48 25 48 C 37.690705 48 48 37.690705 48 25 C 48 12.309295 37.690705 2 25 2 z M 25 4 C 36.609824 4 46 13.390176 46 25 C 46 36.609824 36.609824 46 25 46 C 13.390176 46 4 36.609824 4 25 C 4 13.390176 13.390176 4 25 4 z M 25 11 A 3 3 0 0 0 22 14 A 3 3 0 0 0 25 17 A 3 3 0 0 0 28 14 A 3 3 0 0 0 25 11 z M 21 21 L 21 23 L 22 23 L 23 23 L 23 36 L 22 36 L 21 36 L 21 38 L 22 38 L 23 38 L 27 38 L 28 38 L 29 38 L 29 36 L 28 36 L 27 36 L 27 21 L 26 21 L 22 21 L 21 21 z"></path>
                            </svg>
                          </span>
                        )}
                      </label>

                      {/* Field Input */}
                      {field.type === "select" && field.options ? (
                        <select
                          name={field.name}
                          value={formData[field.name] || ""}
                          onChange={handleChange}
                          disabled={isFieldDisabled}
                          className={`border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300 ${
                            isFieldDisabled ? "bg-gray-100 cursor-not-allowed" : ""
                          }`}
                        >
                          <option value="" disabled>
                            Select {field.label}
                          </option>
                          {field.options.map((option: Option) => (
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
                          disabled={isFieldDisabled}
                          className={`border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300 ${
                            isFieldDisabled ? "bg-gray-100 cursor-not-allowed" : ""
                          }`}
                        />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </form>
    </div>
  );
}
