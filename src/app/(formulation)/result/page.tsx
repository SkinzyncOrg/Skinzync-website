"use client";
import React from "react";
import { useSearchParams } from "next/navigation";

const ResultPage: React.FC = () => {
  const searchParams = useSearchParams();
  const data = searchParams.get("data");

  // Decode and parse the result data
  const resultData = data ? JSON.parse(decodeURIComponent(data)) : null;

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-4">Form Submission Result</h1>
      {resultData ? (
        <pre className="bg-gray-100 p-4 rounded-lg">{JSON.stringify(resultData, null, 2)}</pre>
      ) : (
        <p>No data available.</p>
      )}
    </div>
  );
};

export default ResultPage;
