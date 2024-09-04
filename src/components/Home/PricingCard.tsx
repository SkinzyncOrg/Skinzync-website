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
    <div className="flex flex-col justify-between p-5 bg-white border rounded shadow-sm">
      <div className="mb-6">
        <div className="flex items-center justify-between pb-6 mb-6 border-b ">
          <div className="space-y-2 mr-4">
            <p className="text-sm font-bold tracking-wider uppercase">
              {title}
            </p>
            <p className="text-3xl font-extrabold">{monthlyPrice}</p>
            <p className="text-sm font-bold text-gray-500">{yearlyPrice}</p>
          </div>
          <div className="flex items-center justify-center w-24 h-24 rounded-full bg-gray-100">
            {svgIcon}
          </div>
        </div>
        <div>
          <p className="mb-2 font-bold tracking-wide">{description}</p>
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center">
                <div className="mr-2">
                  <svg
                    className="w-4 h-4 text-primary"
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeWidth="2"
                  >
                    <polyline
                      fill="none"
                      stroke="currentColor"
                      points="6,12 10,16 18,8"
                    />
                    <circle
                      cx="12"
                      cy="12"
                      fill="none"
                      r="11"
                      stroke="currentColor"
                    />
                  </svg>
                </div>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div>
        <button
          onClick={onSubmit}
          className="inline-flex items-center justify-center w-full h-12 px-6 mb-4 font-medium tracking-wide text-white transition duration-200 bg-gray-800 rounded shadow-md hover:bg-gray-900 focus:shadow-outline focus:outline-none"
        >
          {submitButtonLabel || "Buy Now"}
        </button>
      </div>
    </div>
  );
}
