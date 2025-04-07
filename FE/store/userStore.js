import { create } from "zustand";
import { persist } from "zustand/middleware";
import api from "../axios.js";
import { notifySuccess, notifyError } from "../utils/notify.js";

const useUserStore = create(
  persist((set, get) => {
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
        } catch (error) {
          notifyError("Logout failed");
        }
      },
      getCurrentUser: async () => {
        set({ loading: true });
        try {
          const response = await api.get("http://localhost:5000/users/current");
          set({ currentUser: response.data });
        } catch (error) {
          if (error.response?.status === 401) {
            notifyError("There's no account logged in");
            await get().logoutUser();
          } else {
            notifyError("Something went wrong. Please try again later.");
          }
        }
        set({ loading: false });
      },
      editUser: async (data) => {
        try {
          const response = await api.put(
            `http://localhost:5000/users/update`,
            data,
            { headers: { "Content-Type": "multipart/form-data" } }
          );
          notifySuccess("Edit information successfully");
          await get().getAllUser();
        } catch (error) {
          notifyError("Edit user failed");
        }
      },
      deleteUser: async (userID) => {
        try {
          const response = await api.delete(
            `http://localhost:5000/users/${userID}`
          );
          await get().getAllUser();
          notifySuccess("Delete user successfully");
        } catch (error) {
          console.log(error);
        }
      },
    };
  })
);

export default useUserStore;
