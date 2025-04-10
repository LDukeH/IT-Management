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
        set({ notifications: response.data });
      } catch (error) {
        console.error(error);
        notifyError("There was an error when fetching data");
      }
      set({ loading: false });
    },
    createNotification: async (data) => {
      set({ loading: true });
      try {
        const response = await api.post(
          "http://localhost:5000/notifications/create",
          data
        );

        await get().getAllNotification();
        notifySuccess("Create notification successfully");
      } catch (error) {
        notifyError("Create job failed");
        console.error(error);
      }
    },
    deleteNotification: async (notificationID) => {
      try {
        const response = await api.delete(
          `http://localhost:5000/notifications/${notificationID}`
        );
        await get().getAllNotification();
        notifySuccess("Delete notification successfully");
      } catch (error) {
        console.log(error);
      }
    },
    getNotificationByID: async (notificationID) => {
      try {
        const response = await api.get(
          `http://localhost:5000/notifications/${notificationID}`
        );
        await get().getAllNotification();
        return response.data;
      } catch (error) {
        console.error(error);
      }
    },
  };
});

export default useNotificationStore;
