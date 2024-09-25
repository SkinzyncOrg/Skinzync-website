// components/Formulation/RadarChart.tsx

'use client';

import React from "react";
import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";

// Dynamically import the ApexCharts component (required for Next.js)
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

interface RadarChartProps {
  additionalProperties: { [key: string]: number };
  formType: string;
}

const categoriesTypes: { [key: string]: string[] } = {
  moisturizer: [
    "Absorption time",
    "Advance delivery system",
    "Matte-Finish and Oil control",
    "Long lasting hydration",
    "Spreadability",
    "Ease of formulating",
  ],
  sun_screen: [
    "Water resistance",
    "Transparency",
    "Hydrating/ glowing effect",
    "Light feel",
    "Spreadability",
    "Thickness",
  ],
  // Add other form types as needed
};

const RadarChart: React.FC<RadarChartProps> = ({
  additionalProperties,
  formType,
}) => {
  // Get the categories for the form type
  const categories = categoriesTypes[formType];

  if (!additionalProperties || !categories) {
    return <p>No additional properties available.</p>;
  }

  // Extract data in the same order as categories
  const dataValues = categories.map((category) => {
    // Use case-insensitive matching for keys
    const key = Object.keys(additionalProperties).find(
      (k) => k.toLowerCase() === category.toLowerCase()
    );
    return key ? additionalProperties[key] : 0;
  });

  // Define the chart options
  const options: ApexOptions = {
    chart: {
      type: "radar",
    },
    xaxis: {
      categories: categories,
    },
    yaxis: {
      show: false,
      min: 0,
      max: 5,
    },
    markers: {
      size: 4,
    },
    noData: {
      text: "Loading...",
    },
    stroke: {
      show: true,
      width: 2,
    },
    fill: {
      opacity: 0.1,
    },
  };

  const series = [
    {
      name: "Value",
      data: dataValues,
    },
  ];

  return (
    <div>
      <Chart options={options} series={series} type="radar" height={350} />
    </div>
  );
};

export default RadarChart;
