// types/formulaType.ts

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