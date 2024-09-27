// components/Formulation/ResultContent.client.tsx

"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import RadarChart from "@/components/Formulation/RadarChart"; // Ensure RadarChart is also a Client Component

interface ResultContentProps {
  formulas: any[];
  formType: string;
}

const ResultContent: React.FC<ResultContentProps> = ({
  formulas,
  formType,
}) => {
  // State to keep track of which formulas have their ingredients expanded
  const [expandedFormulas, setExpandedFormulas] = useState<{
    [key: string]: boolean;
  }>({});

  // Function to toggle the expanded state of a formula
  const toggleExpand = (formulaNumber: string | number) => {
    setExpandedFormulas((prevState) => ({
      ...prevState,
      [formulaNumber]: !prevState[formulaNumber],
    }));
  };
  if (formulas && formulas.length > 0) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        {formulas.map((formulaData: any, index: number) =>
          formulaData.Formulas.map((formula: any) => (
            <div
              key={formula["Formula number"]}
              className="mt-4 p-6 border rounded flex flex-col justify-between h-full"
            >
              {/* Main Content */}
              <div className="flex-1 space-y-4">
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
                <div className="">
                  {formula.Ingredients.slice(0, 10).map(
                    (ingredient: any, idx: number) => (
                      <div key={idx} className="flex flex-row w-full space-y-2">
                        <p className="truncate w-1/2">
                          {ingredient["Ingredient"]}
                        </p>
                        <p className="w-1/2 text-right">
                          {ingredient["%w/w"]}%
                        </p>
                      </div>
                    )
                  )}
                  {formula.Ingredients.length > 10 && (
                    <>
                      {!expandedFormulas[formula["Formula number"]] && (
                        <p className="text-center">
                          {/* "More" */}
                          <button
                            className="text-blue-500 hover:underline"
                            onClick={() =>
                              toggleExpand(formula["Formula number"])
                            }
                          >
                            more
                          </button>
                        </p>
                      )}
                      {expandedFormulas[formula["Formula number"]] && (
                        <>
                          {formula.Ingredients.slice(10).map(
                            (ingredient: any, idx: number) => (
                              <div
                                key={idx + 10}
                                className="flex flex-row w-full space-y-2"
                              >
                                <p className="truncate w-1/2">
                                  {ingredient["Ingredient"]}
                                </p>
                                <p className="w-1/2 text-right">
                                  {ingredient["%w/w"]}%
                                </p>
                              </div>
                            )
                          )}
                          <p className="text-center">
                            {/* "Less" link */}
                            <button
                              className="text-blue-500 hover:underline"
                              onClick={() =>
                                toggleExpand(formula["Formula number"])
                              }
                            >
                              less
                            </button>
                          </p>
                        </>
                      )}
                    </>
                  )}
                </div>
              </div>

              {/* Radar Chart */}
              <div className="mt-4">
                <RadarChart
                  additionalProperties={formula["Additional Properties"]}
                  formType={formType}
                />
              </div>
              {/* Clcik to see each formula */}
              <div className="flex justify-center">
                {/* <Link href={`/formulation/result/${formula["Formula number"]}`}> */}
                  <div className="btn btn-primary btn-wide text-white px-4 py-3 rounded-2xl text-center">
                    Select
                  </div>
                {/* </Link> */}
              </div>
            </div>
          ))
        )}
      </div>
    );
  } else {
    return (
      <div>
        <p>No formulas found matching your criteria.</p>
      </div>
    );
  }
};

export default ResultContent;
