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

  toDelete: { id: "", type: "" },
  isDeleteModalOpen: false,
  openDeleteModal: (id, name, type) => {
    set({ isDeleteModalOpen: true });
    set({ toDelete: { id: id, name: name, type: type } });
  },
  closeDeleteModal: () => set({ isDeleteModalOpen: false }),
}));

export default useModalStore;
