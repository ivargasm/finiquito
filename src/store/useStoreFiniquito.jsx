import { create } from 'zustand';

export const useStoreFiniquito = create((set) => ({
    isDark: true,
    toggleTheme: () => set((state) => ({ isDark: !state.isDark })),
}));
