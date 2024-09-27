import { MdFactory } from "react-icons/md";
import { IoPersonSharp, IoCall } from "react-icons/io5";

interface PlanData {
  title: string;
  description: string;
  monthlyPrice: string;
  yearlyPrice: string;
  features: string[];
  submitButtonLabel?: string;
  svgIcon: JSX.Element;
}

// Function to handle the first card data
// Function to handle the first card data
const getSkinZyncPro = (): PlanData => {
  return {
    title: "SKINZYNC PRO",
    description: "General public",
    monthlyPrice: "$109 / month",
    yearlyPrice: "$1,299 / year",
    submitButtonLabel: "Buy Now",
    features: ["1 month / 20 formulas"],
    svgIcon: (
      <IoPersonSharp size={40}/>

    ),
  };
};

// Function to handle the second card data
const getSkinZyncPremium = (): PlanData => {
  return {
    title: "SKINZYNC Premium",
    description: "OEM/ODM/OBM",
    monthlyPrice: "$269 / month",
    yearlyPrice: "$2,999 / year",
    submitButtonLabel: "Buy Now",
    features: ["1 month / 100 formulas"],
    svgIcon: (
      <MdFactory size={40}/>

    ),
  };
};

// Function to handle the third card data
const getSkinZyncSupply = (): PlanData => {
  return {
    title: "SKINZYNC SUPPLY",
    description: "OEM/ODM/OBM",
    monthlyPrice: "Custom Pricing",
    yearlyPrice: "Contact Sales",
    submitButtonLabel: "Contact Sales",
    features: ["1 month / 100 formulas"],
    svgIcon: (
      <IoCall size={40}/>

    ),
  };
};

export { getSkinZyncPro, getSkinZyncPremium, getSkinZyncSupply };