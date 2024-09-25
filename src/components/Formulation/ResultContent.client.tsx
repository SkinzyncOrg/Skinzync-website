// components/Formulation/ResultContent.client.tsx

'use client';

import React from "react";
import dynamic from "next/dynamic";
import RadarChart from "@/components/Formulation/RadarChart"; // Ensure RadarChart is also a Client Component

interface ResultContentProps {
  formulas: any[];
  formType: string;
}

const ResultContent: React.FC<ResultContentProps> = ({ formulas, formType }) => {
  if (formulas && formulas.length > 0) {
    return (
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
