import { create } from "zustand";
import api from "../axios.js";
import { notifySuccess, notifyError } from "../utils/notify.js";

const useNotificationStore = create((set, get) => {
  return {
    notifications: [],
    getAllNotification: async () => {
      set({ loading: true });
      try {
        const response = await api.get(
          "http://localhost:5000/notifications/all"
        );
        console.log(response.data);
        set({ notifications: response.data });
      } catch (error) {
        console.error(error);
        notifyError("There was an error when fetching data");
      }
      set({ loading: false });
    },
  };
});

export default useNotificationStore;
