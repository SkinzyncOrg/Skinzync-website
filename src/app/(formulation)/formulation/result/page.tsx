// app/(formulation)/formulation/result/page.tsx

"use client";

import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import axios from "axios";
import dynamic from "next/dynamic";
import {
  formConfigurations,
  FormField,
} from "@/constants/formFormulationType";
import { displayUserInput } from "@/components/Formulation/UserInputDisplay";
import Image from "next/image"; // For optimized images

// Dynamically import the RadarChart component (Client Component)
const RadarChart = dynamic(() => import("@/components/Formulation/RadarChart"), {
  ssr: false,
});

const ResultPage = () => {
  const searchParams = useSearchParams();

  // Retrieve formType from searchParams
  const formType = searchParams.get("formType") as string;

  // Get formFields for the selected formType
  const formFields = formConfigurations[formType];

  const [formulas, setFormulas] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const dosage_form = searchParams.get("dosage_form");
      const time_of_used = searchParams.get("time_of_used");
      const appearances = searchParams.get("appearances");
      const selectedFunction = searchParams.get("function");
      const viscosity = searchParams.get("viscosity");

      try {
        // Send POST request to the API
        const response = await axios.post("/api/formulation", {
          formType,
          dosage_form,
          time_of_used,
          function: selectedFunction,
          viscosity,
          appearances,
        });

        // If response is OK, set the data
        if (response.status === 200) {
          setFormulas(response.data.formulas);
        } else {
          console.error("Error fetching data:", response.data.error);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    // Include all dependencies to satisfy ESLint
    fetchData();
  }, [
    formType,
    searchParams.get("dosage_form"),
    searchParams.get("time_of_used"),
    searchParams.get("appearances"),
    searchParams.get("function"),
    searchParams.get("viscosity"),
  ]);

  if (loading) {
    return (
      <div className="flex w-full h-96 mx-auto p-4 items-center justify-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

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
      {formulas && formulas.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          {formulas.map((formulaData: any, index: number) => (
            formulaData.Formulas.map((formula: any) => (
              <div
                key={formula["Formula number"]}
                className="mt-4 p-4 border rounded"
              >
                <h3 className="text-lg font-medium">
                  Formula {formula["Formula number"]}
                </h3>
                <p>
                  <strong>pH:</strong> {formula["pH"]}
                </p>
                <p>
                  <strong>Viscosity:</strong> {formula["Viscosity (cps)"]}
                </p>

                {/* Display Ingredients */}
                <h4 className="mt-2 font-semibold">Ingredients:</h4>
                <ul className="list-disc ml-5">
                  {formula.Ingredients.map(
                    (ingredient: any, idx: number) => (
                      <li key={idx}>
                        {ingredient["Ingredient"]} - {ingredient["%w/w"]}% (
                        {ingredient["Function"]}) - {ingredient.Supplier}
                      </li>
                    )
                  )}
                </ul>

                {/* Display Radar Chart for Additional Properties */}
                <div className="mt-4">
                  <RadarChart
                    additionalProperties={formula["Additional Properties"]}
                    formType={formType}
                  />
                </div>
              </div>
            ))
          ))}
        </div>
      ) : (
        <div>
          <p>No formulas found matching your criteria.</p>
        </div>
      )}
    </div>
  );
};

export default ResultPage;
