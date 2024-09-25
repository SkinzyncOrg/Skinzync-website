// app/(formulation)/formulation/result/page.tsx

'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import axios from 'axios';

const ResultPage = () => {
  const searchParams = useSearchParams();

  const [formulas, setFormulas] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const formType = searchParams.get('formType');
      const dosageForm = searchParams.get('dosageForm');
      const timeOfUse = searchParams.get('timeOfUse');
      const selectedFunction = searchParams.get('function');
      const viscosity = searchParams.get('viscosity');
      const appearance = searchParams.get('appearance');

      try {
        // Send POST request to the API
        const response = await axios.post('/api/formulation', {
          formType,
          dosageForm,
          timeOfUse,
          function: selectedFunction,
          viscosity,
          appearance,
        });

        // if response ok then set the data
        if (response.status === 200) {
          setFormulas(response.data.formulas);
        } else {
          console.error('Error fetching data:', response.data.error);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [searchParams]);

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
      {formulas && formulas.length > 0 ? (
        formulas.map((formulaData: any, index: number) => (
          <div key={index} className="mb-6">
            <h2 className="text-xl font-semibold mb-2">
              {formulaData['Dosage form']} - {formulaData['Time of use']}
            </h2>
            {formulaData.Formulas.map((formula: any) => (
              <div
                key={formula['Formula number']}
                className="mt-4 p-4 border rounded"
              >
                <h3 className="text-lg font-medium">
                  Formula {formula['Formula number']}
                </h3>
                <p>
                  <strong>pH:</strong> {formula['pH']}
                </p>
                <p>
                  <strong>Viscosity:</strong> {formula['Viscosity (cps)']}
                </p>
                {/* Display Ingredients */}
                <h4 className="mt-2 font-semibold">Ingredients:</h4>
                <ul className="list-disc ml-5">
                  {formula.Ingredients.map(
                    (ingredient: any, idx: number) => (
                      <li key={idx}>
                        {ingredient['Ingredient']} - {ingredient['%w/w']}% (
                        {ingredient['Function']}) - {ingredient.Supplier}
                      </li>
                    )
                  )}
                </ul>
                {/* Display Additional Properties */}
                <h4 className="mt-2 font-semibold">Additional Properties:</h4>
                <ul className="list-disc ml-5">
                  {Object.entries(formula['Additional Properties']).map(
                    ([key, value]) => (
                      <li key={key}>
                        {key}: {value as React.ReactNode}
                      </li>
                    )
                  )}
                </ul>
              </div>
            ))}
          </div>
        ))
      ) : (
        <p>No formulas found matching your criteria.</p>
      )}
    </div>
  );
};

export default ResultPage;
