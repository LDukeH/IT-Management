import { create } from "zustand";
import api from "../axios.js";
import { notifySuccess, notifyError } from "../utils/notify.js";
import user from "../../BE/models/user.js";

const useUserStore = create((set, get) => {
  return {
    users: [],
    loading: false,
    currentUser: null,
    getAllUser: async () => {
      set({ loading: true });
      try {
        const response = await api.get("http://localhost:5000/users/all");
        const sortedUser = response.data.sort((a, b) =>
          a.position.localeCompare(b.position)
        );
        set({ users: sortedUser });
      } catch (error) {
        notifyError("There was an error when fetching data");
      }
      set({ loading: false });
    },
    createUser: async (data) => {
      try {
        const response = await api.post(
          "http://localhost:5000/users/create",
          data
        );
        await get().getAllUser();
      } catch (error) {
        notifyError("Create user failed");
      }
    },
    loginUser: async (data, navigate) => {
      try {
        const response = await api.post(
          "http://localhost:5000/users/login",
          data
        );
        set({ currentUser: response.data });
        const user = response.data;
        if (user.position === "Admin") {
          navigate("/admin/dashboard");
        }

        notifySuccess("Login successfully");
      } catch (error) {
        notifyError("Login failed");
      }
    },
    logoutUser: async () => {
      try {
        const response = await api.post("http://localhost:5000/users/logout");
        set({ currentUser: null });
        notifySuccess("Logout successfully");
      } catch (error) {
        notifyError("Logout failed");
      }
    },
    getCurrentUser: async () => {
      set({ loading: true });
      try {
        const response = await api.get("http://localhost:5000/users/current");
        set({ currentUser: response.data });
      } catch (error) {}
      set({ loading: false });
    },
  };
});

export default useUserStore;
