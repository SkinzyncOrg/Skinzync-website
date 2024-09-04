"use client";
import React, { useState, useEffect } from "react";
import { ProductSpecificationData, RegulationData } from "@/types/productDetail";

interface ProductDetailProps {
  specifications: ProductSpecificationData[];
  regulations: RegulationData[];
  selectedCountry: string;
  onCountryChange: (country: string) => void;
}

const tabContentTitles = ["Specifications", "Cosmetic Regulations"];

export default function ProductDetail({
  specifications,
  regulations,
  selectedCountry,
  onCountryChange,
}: ProductDetailProps) {
  const [activeTab, setActiveTab] = useState(0);

  // Extract unique country names from the regulations
  const countryOptions = regulations.map((reg) => reg.country);

  const currentRegulations =
    regulations.find((reg) => reg.country === selectedCountry)?.body_parts ??
    [];

  return (
    <div className="container mx-auto py-4">
      <div className="w-fit overflow-hidden rounded-xl border border-gray-100 bg-gray-100 p-1">
        <ul className="flex items-center gap-2 text-sm font-medium">
          {tabContentTitles.map((title, index) => (
            <li key={index}>
              <a
                onClick={() => setActiveTab(index)}
                className={`inline-flex cursor-pointer items-center gap-2 rounded-lg px-3 py-2 hover:bg-white hover:text-gray-700 hover:shadow ${
                  activeTab === index ? "bg-white shadow text-gray-700" : ""
                }`}
              >
                {title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="px-3 py-3">
        {activeTab === 0 && (
          <table className="w-full">
            <thead>
              <tr className="text-left">
                <th className="pb-2 underline">Property</th>
                <th className="pb-2 underline">Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-1">Solubility</td>
                <td className="py-1">{specifications[0].solubility}</td>
              </tr>
              <tr>
                <td className="py-1">Best pH</td>
                <td className="py-1">{specifications[0].best_ph}</td>
              </tr>
              <tr>
                <td className="py-1">Melting Point</td>
                <td className="py-1">{specifications[0].melting_point}°C</td>
              </tr>
              <tr>
                <td className="py-1">Note</td>
                <td className="py-1">{specifications[0].note}</td>
              </tr>
            </tbody>
          </table>
        )}

        {activeTab === 1 && (
          <div className="flex flex-col space-y-4">
            <select
              className="select select-bordered w-full max-w-xs mt-4"
              value={selectedCountry}
              onChange={(e) => onCountryChange(e.target.value)}
            >
              {countryOptions.map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>

            <div className="overflow-x-auto mt-4 rounded-lg">
              <table className="w-full min-w-[600px] table">
                <thead>
                  <tr className="bg-purple-100">
                    <th className="border p-2 text-left text-sm font-semibold text-purple-800">
                      Body Part
                    </th>
                    <th className="border p-2 text-left text-sm font-semibold text-purple-800">
                      Type
                    </th>
                    <th className="border p-2 text-left text-sm font-semibold text-purple-800">
                      Percent
                    </th>
                    <th className="border p-2 text-left text-sm font-semibold text-purple-800">
                      Instructions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {currentRegulations.map((regulation, index) => (
                    <React.Fragment key={index}>
                      <tr>
                        <td
                          rowSpan={2}
                          className="border p-2 text-sm font-medium text-gray-700"
                        >
                          {regulation.body_part}
                        </td>
                        <td className="border p-2 text-sm text-gray-600">
                          Leave on
                        </td>
                        <td className="border p-2 text-sm text-gray-600">
                          {regulation.leave_on_percent}%
                        </td>
                        <td className="border p-2 text-sm text-gray-600">
                          {regulation.leave_on_instructions || "-"}
                        </td>
                      </tr>
                      <tr>
                        <td className="border p-2 text-sm text-gray-600">
                          Rinse off
                        </td>
                        <td className="border p-2 text-sm text-gray-600">
                          {regulation.rinse_off_percent}%
                        </td>
                        <td className="border p-2 text-sm text-gray-600">
                          {regulation.rinse_off_instructions || "-"}
                        </td>
                      </tr>
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
