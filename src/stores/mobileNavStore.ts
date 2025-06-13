import { create } from "zustand";

type MobileNavState = {
  isOpen: boolean;
  toggle: () => void;
  close: () => void;
};

export const useMobileNav = create<MobileNavState>((set) => ({
  isOpen: false,
  toggle: () => set((state) => ({ isOpen: !state.isOpen })),
  close: () => set({ isOpen: false }),
}));
