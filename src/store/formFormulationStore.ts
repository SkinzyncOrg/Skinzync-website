// store/formFormulationStore.ts

import { create } from 'zustand';

interface FormState {
  currentStep: number;
  formData: { [key: string]: any };
  formType: string;
  formulas: any[];
  setFormType: (type: string) => void;
  setFormData: (data: { [key: string]: any }) => void;
  clearFormData: () => void;
  nextStep: () => void;
  prevStep: () => void;
}

export const useFormStore = create<FormState>((set) => ({
  currentStep: 1,
  formData: {},
  formType: '',
  formulas: [],
  setFormType: (type) => set({ formType: type }),
  setFormData: (data) =>
    set((state) => ({ formData: { ...state.formData, ...data } })),
  clearFormData: () => set({ formData: {} }),
  nextStep: () => set((state) => ({ currentStep: state.currentStep + 1 })),
  prevStep: () => set((state) => ({ currentStep: state.currentStep - 1 })),
}));
