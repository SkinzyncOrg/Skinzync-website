export interface DetailedProductData {
  product_id: number;
  company_id: number;
  function_id: number;
  name: string;
  thumbnail: string;
  tradename: string;
  description: string;
  spec_sheets_url: string;
  created_at: string;
  company: CompanyData;
  function: FunctionData;
  product_images: ProductImageData[];
  product_variants: ProductVariantData[];
  specifications: ProductSpecificationData[];
  regulations: RegulationData[];
}

export interface CompanyData {
  company_id: number;
  name: string;
  address: string;
  company_type: string;
  created_at: string;
}

export interface FunctionData {
  function_id: number;
  name: string;
}

export interface ProductImageData {
  image_id: number;
  product_id: number;
  image_url: string;
  created_at: string;
}

export interface ProductVariantData {
  variant_id: number;
  product_id: number;
  weight: string;
  price: number;
}

export interface ProductVariantData {
  variant_id: number;
  product_id: number;
  weight: string;
  price: number;
}

export interface ProductSpecificationData {
  product_specification_id: number;
  product_id: number;
  solubility: string;
  best_ph: string | number;
  melting_point: string | number;
  note: string;
}

export interface RegulationData {
  regulation_id: number;
  product_id: number;
  country: string;
  body_parts: RegulationBodyPartData[];
}

export interface RegulationBodyPartData {
  regulation_body_part_id: number;
  regulation_id: number;
  body_part: string;
  leave_on_percent: string | number;
  rinse_off_percent: string | number;
  leave_on_instructions: string;
  rinse_off_instructions: string | null;
}
