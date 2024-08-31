import React from "react";

interface PricingCardProps {
  title: string;
  description: string;
  monthlyPrice: string;
  yearlyPrice: string;
  features: string[];
  submitButtonLabel?: string;
  onSubmit: () => void;
  svgIcon: JSX.Element;
}

export default function PricingCard({
  title,
  description,
  monthlyPrice,
  yearlyPrice,
  features,
  submitButtonLabel,
  onSubmit,
  svgIcon,
}: PricingCardProps) {
  return (
    <div className="card bg-gray-50 mx-auto w-full h-full max-w-sm rounded-2xl shadow-xl p-8">
      <div className="card-body p-6">
        <div className="w-16 h-16 rounded-full bg-indigo-50 mx-auto flex justify-center items-center">
          {/* Replace with any relevant icon */}
          {svgIcon}
        </div>
        <h3 className="font-bold text-2xl text-center text-indigo-600 mt-7 mb-4">
          {title}
        </h3>
        <p className="text-gray-500 text-center text-lg mb-4">{description}</p>
        <div className="flex items-center justify-center">
          <span className="font-medium text-2xl text-gray-900">
            {monthlyPrice}
          </span>
        </div>
        {yearlyPrice && (
          <p className="text-center text-gray-500 text-sm mt-2">
            {yearlyPrice}
          </p>
        )}
      </div>
      <div className="divider m-0"></div>
      <ul className="card-footer p-6 space-y-4 text-lg">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center space-x-3.5">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-600"></span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <button
        onClick={onSubmit}
        className="btn btn-success py-2.5 px-5 w-full rounded-full transition-all text-base font-semibold text-white"
      >
        {submitButtonLabel}
      </button>
    </div>
  );
}
