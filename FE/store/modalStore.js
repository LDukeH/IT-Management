import { create } from "zustand";

const useModalStore = create((set) => ({
  isLogoutModalOpen: false,
  openLogoutModal: () => set({ isLogoutModalOpen: true }),
  closeLogoutModal: () => set({ isLogoutModalOpen: false }),

  isAssignModalOpen: false,
  openAssignModal: () => {
    set({ isAssignModalOpen: true });
  },
  closeAssignModal: () => set({ isAssignModalOpen: false }),

  isDeleteModalOpen: false,
  openDeleteModal: () => set({ isDeleteModalOpen: true }),
  closeDeleteModal: () => set({ isDeleteModalOpen: false }),
}));

export default useModalStore;
