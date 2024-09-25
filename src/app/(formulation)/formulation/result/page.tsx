// app/(formulation)/formulation/result/page.tsx

import React from "react";
import {
  formConfigurations,
  FormField,
} from "@/constants/formFormulationType";
import { displayUserInput } from "@/components/Formulation/UserInputDisplay";
import ResultContent from "@/components/Formulation/ResultContent.client"; // Client Component
import moisturizerData from "@/constants/moisturizer.json";
// import sunScreenData from "@/constants/sun_screen.json"; // If applicable

interface ResultPageProps {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
}

const ResultPage: React.FC<ResultPageProps> = async ({ searchParams }) => {
  // Retrieve formType from searchParams
  const formType = searchParams.formType as string;

  if (!formType || !formConfigurations[formType]) {
    return (
      <div className="container mx-auto p-4">
        <p className="text-red-500">Error: Invalid or missing form type.</p>
      </div>
    );
  }

  // Get formFields for the selected formType
  const formFields = formConfigurations[formType];

  // Extract necessary parameters
  const dosage_form = searchParams.dosage_form as string;
  const time_of_used = searchParams.time_of_used as string;
  const appearances = searchParams.appearances as string;
  const selectedFunction = searchParams.function as string;
  const viscosity = searchParams.viscosity as string;

  // Fetch the data based on query parameters
  let data: any;
  if (formType === "moisturizer") {
    data = moisturizerData;
  } else if (formType === "sun_screen") {
    // data = sunScreenData;
  } else {
    // Handle other form types or return an error
    data = {};
  }

  // Access the data for the selected function
  const functionData = selectedFunction ? data[selectedFunction] || [] : [];

  // Filter data based on user input
  const filteredFormulas = functionData.filter((item: any) => {
    return (
      item["Dosage form"] === dosage_form &&
      item["Time of use"] === time_of_used &&
      item["Viscosity"] === viscosity &&
      item["Appearance"] === appearances
    );
  });

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Formulation Results</h1>

      {/* Display User Inputs */}
      <div className="flex w-full justify-center mb-8">
        <div className="relative flex w-[50%] flex-col overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8 shadow">
          <h2 className="text-xl font-bold mb-4">Your Selections</h2>
          <div className="grid grid-cols-2">
            {displayUserInput({ formFields, searchParams })}
          </div>
        </div>
      </div>

      {/* Display Formulas */}
      <ResultContent formulas={filteredFormulas} formType={formType} />
    </div>
  );
};

export default ResultPage;
