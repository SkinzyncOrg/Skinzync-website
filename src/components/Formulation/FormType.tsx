// components/FormType.tsx
import React from "react";
import { formTypes } from "@/constants/formFormulationType";

type FormTypeProps = {
  onSelect: (type: string) => void;
  formType: string | null;
};

export default function FormType({ onSelect, formType }: FormTypeProps) {
  return (
    <>
      <div className="space-y-4 my-5">
        <h1 className="text-center text-5xl text-primary">S K I N C A R E</h1>
        <div className="flex flex-row items-center justify-center">
          <p className="mr-4 text-primary">Formulation type</p>
          <select className="select select-primary select-sm w-full max-w-52 rounded-2xl" defaultValue="Leave On">
            <option disabled value="Leave On">
              Leave On
            </option>
          </select>
        </div>
        <h2 className="text-center text-xl text-primary font-bold my-5">
          Select Your Preferred Formulation Type
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 sm:mx-10 md:grid-cols-3 md:mx-20 justify-center gap-4 ">
        {formTypes.map(({ key, name, disabled }) => (
          <button
            key={key}
            className={`flex flex-col items-center border-2 rounded-lg p-2 transition-colors duration-300 focus:outline-none ${
              formType === key
                ? "border-blue-500"
                : "border-transparent hover:border-gray-300 focus:border-gray-300"
            } ${disabled ? "opacity-50 cursor-not-allowed grayscale" : "cursor-pointer"}`}
            onClick={() => !disabled && onSelect(key)}
            aria-pressed={formType === key}
            disabled={disabled}
          >
            <img
              src={`/images/form/${key}.jpg`}
              alt={`${name} icon`}
              className="w-full h-48 object-cover rounded-md"
            />
            <p className="mt-2 text-center text-lg text-primary capitalize font-bold">
              {name}
            </p>
          </button>
        ))}
      </div>
    </>
  );
}
