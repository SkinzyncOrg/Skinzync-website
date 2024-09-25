import React from "react";
import DynamicForm from "@/components/Formulation/DynamicForm";
import SpecificationForm from "@/components/Formulation/SpecificationForm";
import { formTypes } from "@/constants/formFormulationType";

interface DynamicpageProps {
  formType: string;
  errors: { [key: string]: string };
}
export default function Dynamicpage({ formType, errors }: DynamicpageProps) {
  const getFormTypeImage = (formTypeKey: string): string | undefined => {
    const foundFormType = formTypes.find(
      (formType) => formType.key === formTypeKey
    );
    return foundFormType
      ? `/images/form/${foundFormType.key}-bg.jpg`
      : undefined;
  };

  const upperCaseAll = (formTypeKey: string): string | undefined => {
    const foundFormType = formTypes.find(
      (formType) => formType.key === formTypeKey
    );
    return foundFormType ? foundFormType.name.toUpperCase() : undefined;
  }
  return (
    <div className="flex flex-col space-y-4">
      <div
        className="hero w-full min-h-96 rounded-lg bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${getFormTypeImage(formType)})`,
        }}
      >
        <div className="hero-overlay bg-white bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
          <h2 className="mb-5 text-center text-4xl text-primary">S K I N C A R E</h2>
            <h1 className="mb-5 text-center text-6xl text-primary font-bold">
              {upperCaseAll(formType)}
            </h1>
          </div>
        </div>
      </div>
      <DynamicForm formType={formType} errors={errors}   />
      <SpecificationForm />
    </div>
  );
}
