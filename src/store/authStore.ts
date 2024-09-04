import { create } from 'zustand';
import { persist } from 'zustand/middleware'

type AuthState = {
  isAuthenticated: boolean;
  setAuthenticated: (isAuthenticated: boolean) => void;
  login: () => void;
  logout: () => void;
};

export const useAuthStore = create(
  persist<AuthState>(
    (set: (arg0: { isAuthenticated: boolean; }) => any) => ({
      isAuthenticated: false,

      setAuthenticated: (isAuthenticated: boolean) => set({ isAuthenticated }),
      login: () => set({ isAuthenticated: true }),
      logout: () => set({ isAuthenticated: false }),
    }),
    {
      name: 'auth-store', // Name of the storage key (localStorage key)
      getStorage: () => localStorage, // Specify which storage to use (localStorage in this case)
    }
  )
);
