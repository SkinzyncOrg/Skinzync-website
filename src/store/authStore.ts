import { create } from 'zustand';

type AuthState = {
  isAuthenticated: boolean;
  setAuthenticated: (isAuthenticated: boolean) => void;
  login: () => void;
  logout: () => void;
};

export const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: false,
  setAuthenticated: (isAuthenticated: boolean) => set({ isAuthenticated }),
  login: () => set({ isAuthenticated: true }),
  logout: () => set({ isAuthenticated: false }),
}));
