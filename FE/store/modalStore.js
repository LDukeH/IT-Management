import { create } from "zustand";

const useModalStore = create((set) => ({
  isLogoutModalOpen: false,
  openLogoutModal: () => set({ isLogoutModalOpen: true }),
  closeLogoutModal: () => set({ isLogoutModalOpen: false }),

  isAssignModalOpen: false,
  openAssignModal: () => {
    console.log("Opening assign modal");
    set({ isAssignModalOpen: true });
  },
  closeAssignModal: () => set({ isAssignModalOpen: false }),
}));

export default useModalStore;
