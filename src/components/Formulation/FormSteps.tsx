// components/FormSteps.tsx
"use client";
import React,{ useState } from "react";
import { useFormStore } from "@/store/formFormulationStore";
import FormType from "./FormType";
import Dynamicpage from "@/app/(formulation)/formulation/Dynamicpage";
import {
  formConfigurations,
  viscosityOptionsByDosageForm,
} from "@/constants/formFormulationType";
import { useRouter } from "next/navigation";
import axios from "axios";

const FormSteps: React.FC = () => {
  const router = useRouter();
  const { currentStep, nextStep, prevStep, formType, setFormType, clearFormData, formData } =
    useFormStore();
    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const handleNext = () => {
    if (currentStep === 1 && !formType) {
      return; // Prevent navigation if no form type is selected
    }
    nextStep();
  };

  const handlePrev = () => {
    clearFormData();
    prevStep();
  };

  const handleTypeSelect = (value: string) => {
    setFormType(value);
  };

  const isLastStep = currentStep === 2; // Adjust if you have more steps
  
  const validateForm = (): boolean => {
    if (!formType) return false; // Should not happen

    const formFields = formConfigurations[formType];
    const requiredFields = formFields.filter(
      (field) => !field.optional && !field.disabled // Skip disabled fields
    );
    const newErrors: { [key: string]: string } = {};
  
    requiredFields.forEach(field => {
      const value = formData[field.name];
  
      if (
        field.name === "viscosity" &&
        viscosityOptionsByDosageForm[formData["dosage_form"]]?.length === 0
      ) {
        return;
      }

      if (
        value === undefined ||
        value === null ||
        (typeof value === "string" && value.trim() === "")
      ) {
        newErrors[field.name] = `${field.label} is required.`;
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return false;
    }

    // No errors
    setErrors({});
    return true;
  };

  // components/Formulation/FormSteps.tsx

const handleSubmit = async () => {
  if (validateForm()) {
    // console.log('Form type:', formType);

     // Build the URL with query parameters
     const params = new URLSearchParams({
      formType,
      dosage_form: formData.dosage_form,
      time_of_used: formData.time_of_used,
      function: formData.function,
      viscosity: formData.viscosity,
      appearances: formData.appearances,
    });
    

     // Construct the full URL
     const url = `/formulation/result?${params.toString()}`;

     // Use router.push with the URL string
     router.push(url);
  } else {
    console.error('Form validation failed.');
  }
};

  

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <FormType onSelect={handleTypeSelect} formType={formType} />;
      case 2:
        return formType ? (
          <Dynamicpage formType={formType} errors={errors}/>
        ) : null;
      // More steps...
      default:
        return null;
    }
  };
  return (
    <div>
      {renderStep()}
      <div className="flex justify-center mt-10">
        {currentStep > 1 && (
          <button
            type="button"
            onClick={handlePrev}
            className="btn px-4 py-2 rounded-lg mr-4"
          >
            Back
          </button>
        )}
        {isLastStep ? (
          <button
            type="button"
            onClick={handleSubmit}
            className="btn btn-success btn-wide px-4 py-2 rounded-lg"
          >
            Submit
          </button>
        ) : (
          <button
            type="button"
            onClick={handleNext}
            disabled={currentStep === 1 && !formType}
            className={`btn btn-wide px-4 py-2 rounded-lg ${
              currentStep === 1 && !formType
                ? 'cursor-not-allowed'
                : 'btn-primary'
            }`}
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default FormSteps;
