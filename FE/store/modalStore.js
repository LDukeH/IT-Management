import { create } from "zustand";

const useModalStore = create((set) => ({
  isLogoutModalOpen: false,
  openLogoutModal: () => set({ isLogoutModalOpen: true }),
  closeLogoutModal: () => set({ isLogoutModalOpen: false }),
}));

export default useModalStore;
