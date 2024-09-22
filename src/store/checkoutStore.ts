import { create } from 'zustand';

type StepStore = {
  currentStep: number;
  nextStep: () => void;
  prevStep: () => void;
  resetStep: () => void;
};

const useStepStore = create<StepStore>((set) => ({
  currentStep: 1, // 1 for Cart, 2 for Checkout, 3 for Order Summary

  nextStep: () => set((state) => ({
    currentStep: state.currentStep < 3 ? state.currentStep + 1 : state.currentStep,
  })),

  prevStep: () => set((state) => ({
    currentStep: state.currentStep > 1 ? state.currentStep - 1 : state.currentStep,
  })),

  resetStep: () => set({ currentStep: 1 }),
}));

export default useStepStore;
