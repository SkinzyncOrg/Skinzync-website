// types.ts
export interface Option {
  id: string;
  name: string;
  values: string[];
  information: string;
  optional: boolean;
}

export interface FormSection {
  title: string;
  fields: Option[];
}
