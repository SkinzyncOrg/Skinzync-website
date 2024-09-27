// constants/formFormulationType.ts

export interface SearchParams {
  formType: string;
  dosage_form: string;
  time_of_used: string;
  function: string;
  viscosity: string;
  appearances: string;
}

export interface Ingredient {
  Ingredient: string;
  "%w/w": number | string; // Some entries have "-"
  Function: string;
  Supplier: string;
}

export interface AdditionalProperties {
  "absorption time": number;
  "Advance delivery system": number;
  "Matte-Finish and Oil control": number;
  "Long lasting hydration": number;
  "Spreadability": number;
  "Ease of formulating": number;
}

export interface Formula {
  "Formula number": string | number;
  pH: number | string; // Some entries have "-"
  "Viscosity (cps)": number | string; // Some entries have "-"
  Appearance: string;
  Ingredients: Ingredient[];
  "Additional Properties": AdditionalProperties;
}

export interface FormulationGroup {
  "Dosage form": string;
  "Time of use": string;
  Viscosity: string;
  Appearance: string;
  Formulas: Formula[];
}

export type FormulationData = Record<string, FormulationGroup[]>;

export interface ResultContentProps {
  searchParams: SearchParams;
  formType: string;
}

export type Option = {
  label: string;
  value: string;
  disabled?: boolean;
};

export type FormField = {
  label: string;
  type: string;
  name: string;
  options?: Option[];
  tooltip?: string;
  optional?: boolean;
  disabled?: boolean; // For disabling the entire field
};

export type FormTypeInfo = {
  key: string;
  name: string;
  disabled?: boolean;
};

export const formTypes: FormTypeInfo[] = [
  { key: "moisturizer", name: "Moisturizer" },
  { key: "sun_screen", name: "Sun Screen" },
  { key: "acne_spot", name: "Acne Spot Treatment", disabled: true },
  { key: "under_eye", name: "Under Eye Treatment", disabled: true },
  { key: "lip_care", name: "Lip Care", disabled: true },
  { key: "dark_spot", name: "Dark Spot Treatment", disabled: true },
];

export const viscosityOptionsByDosageForm: { [key: string]: Option[] } = {
  "Emulsions/Creams": [
    { label: "3000-12000", value: "3000-12000" },
    { label: "12000-25000", value: "12000-25000" },
    { label: "25000-35000", value: "25000-35000" },
    { label: "30000-40000", value: "30000-40000" },
    { label: "40000-60000", value: "40000-60000" },
    { label: "60000-80000", value: "60000-80000" },
  ],
  "Gels/Serum/Essences/Toner": [
    { label: "5000-15000", value: "5000-15000" },
    { label: "1000-10000", value: "1000-10000" },
    { label: "10000-20000", value: "10000-20000" },
    { label: "6000-18000", value: "6000-18000" },
    { label: "18000-25000", value: "18000-25000" },
  ],
  Balms: [], // No viscosity options
  Mists: [], // No viscosity options
};

export const timeOfUseOptionsByDosageForm: { [key: string]: Option[] } = {
  "Emulsions/Creams": [
    { label: "Day", value: "Day" },
    { label: "Night", value: "Night" },
  ],
  "Gels/Serum/Essences/Toner": [
  ],
  Balms: [], // No time of use options for Balms
  Mists: [], // No time of use options for Mists
};

export const formConfigurations: { [key: string]: FormField[] } = {
  moisturizer: [
    {
      label: "Dosage form",
      type: "select",
      name: "dosage_form",
      options: [
        { label: "Emulsions/Creams", value: "Emulsions/Creams" },
        { label: "Gels/Serum/Essences/Toner", value: "Gels/Serum/Essences/Toner" },
        { label: "Balms", value: "Balms" },
        { label: "Mists", value: "Mists" },
      ],
      tooltip:
        "Dosage form refers to the physical form of a cosmetic product, such as creams, gels, or sprays, which determines its application method, absorption, and overall effectiveness.",
      optional: false,
    },
    {
      label: "Function",
      type: "select",
      name: "function",
      options: [
        { label: "Hydrating", value: "Hydrating" },
        { label: "Exfoliating", value: "Exfoliating" },
        { label: "Anti-aging", value: "Anti-aging" },
        { label: "Anti-acne", value: "Anti-acne" },
        { label: "Brightening/Whitening", value: "Brightening/Whitening" },
        { label: "Soothing/Calming", value: "Soothing/Calming", disabled: true },
        { label: "Pore-minimizing", value: "Pore-minimizing", disabled: true },
        { label: "Barrier repair", value: "Barrier repair", disabled: true },
        { label: "Anti-pollution", value: "Anti-pollution", disabled: true },
      ],
      tooltip:
        "Functions refer to the specific purposes of a cosmetic product, such as moisturizing, brightening, or protecting the skin.",
      optional: false,
    },
    {
      label: "Time of use",
      type: "select",
      name: "time_of_used",
      options: [], // To be dynamically populated
      optional: true,
    },
    {
      label: "Viscosity",
      type: "select",
      name: "viscosity",
      options: [], // To be dynamically populated
      optional: false,
    },
    {
      label: "pH",
      type: "select",
      name: "ph",
      options: [
        { label: "Disabled", value: "disabled", disabled: true },
      ],
      optional: true,
      disabled: true, // Disable the entire field
    },
    {
      label: "Appearances",
      type: "select",
      name: "appearances",
      options: [
        { label: "Clear/Transparent", value: "Clear/Transparent" },
        { label: "Translucent", value: "Translucent" },
        { label: "Opaque", value: "Opaque" },
      ],
      optional: false,
    },
    {
      label: "Texture",
      type: "select",
      name: "texture",
      options: [
        { label: "Watery", value: "Watery" },
        { label: "Rich", value: "Rich" },
        { label: "Glossy", value: "Glossy" },
        { label: "Matte", value: "Matte" },
        { label: "Non-sticky", value: "Non-sticky" },
        { label: "Heavy", value: "Heavy" },
        { label: "Light", value: "Light" },
      ],
      optional: false,
      disabled: true,
    },
  ],
  sun_screen: [
    {
      label: "Dosage form",
      type: "select",
      name: "dosage_form",
      options: [
        { label: "Emulsions/Creams", value: "Emulsions/Creams" },
        { label: "Gels", value: "Gels" },
        { label: "Balms", value: "Balms" },
        { label: "Mists", value: "Mists" },
      ],
      tooltip:
        "Dosage form refers to the physical form of a cosmetic product, such as creams, gels, or sprays, which determines its application method, absorption, and overall effectiveness.",
      optional: false,
    },
    {
      label: "Type",
      type: "select",
      name: "type",
      options: [
        { label: "Physical", value: "Physical" },
        { label: "Chemical", value: "Chemical" },
        { label: "Hybrid", value: "Hybrid" },
      ],
      optional: false,
    },
    {
      label: "SPF",
      type: "select",
      name: "spf",
      options: [
        { label: "SPF 35-50", value: "35-50" },
        { label: "SPF > 50", value: "> 50" },
      ],
      optional: false,
    },
    {
      label: "PA",
      type: "select",
      name: "pa",
      options: [
        { label: "PA+++", value: "+++" },
        { label: "PA++++", value: "++++" },
      ],
      optional: false,
    },
    {
      label: "Viscosity",
      type: "select",
      name: "viscosity",
      options: [], // To be dynamically populated
      optional: false,
    },
    {
      label: "pH",
      type: "select",
      name: "ph",
      options: [],
      optional: false,
      disabled: true,
    },
    {
      label: "Texture",
      type: "select",
      name: "texture",
      options: [
        { label: "Cream to water", value: "Cream to water" },
        { label: "Watery", value: "Watery" },
        { label: "Soft", value: "Soft" },
        { label: "Glossy", value: "Glossy" },
        { label: "Matte", value: "Matte" },
        { label: "Non-sticky", value: "Non-sticky" },
        { label: "Milky", value: "Milky" },
      ],
      optional: false,
    },
  ],
  // Disabled form types
  acne_spot: [],
  under_eye: [],
  lip_care: [],
  dark_spot: [],
};

export const formSpecifications: Record<string, FormField[]> = {
  specificFunction: [
    {
      label: "Specific Ingredients",
      type: "text",
      name: "specific_ingredient",
      tooltip:
        "Any specific ingredients you would like to include in the formula.",
      disabled: true,
    },
    { label: "Claims", type: "select", name: "claims", disabled: true },
    { label: "Preferences", type: "select", name: "preferences", disabled: true },
  ],
  target_group: [
    { label: "Gender", type: "select", name: "gender", disabled: true },
    { label: "Age", type: "select", name: "age", disabled: true },
    { label: "Skin Type", type: "select", name: "skin_type", disabled: true },
  ],
};
