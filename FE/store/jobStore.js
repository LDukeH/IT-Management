import { create } from "zustand";
import api from "../axios.js";
import { notifySuccess, notifyError } from "../utils/notify.js";

const useJobStore = create((set, get) => {
  return {
    jobs: [],
    loading: false,
    getAllJob: async () => {
      set({ loading: true });
      try {
        const response = await api.get("http://localhost:5000/jobs/all");
        set({ jobs: response.data });
      } catch (error) {
        console.error(error);
        notifyError("There was an error when fetching data");
      }
      set({ loading: false });
    },
    findJobByID: async (jobID) => {
      try {
        const response = await api.get(`http://localhost:5000/jobs/${jobID}`);
        return response.data;
      } catch (error) {
        console.error(error);
        notifyError("There was an error when fetching data");
      }
    },
    findJobByUserID: async (userID) => {
      try {
        const response = await api.get(
          `http://localhost:5000/jobs/user/${userID}`
        );
        console.log(response.data);
        return response.data;
      } catch (error) {
        console.error(error);
        notifyError("There was an error when fetching data");
      }
    },
    createJob: async (data) => {
      try {
        const response = await api.post(
          "http://localhost:5000/jobs/create",
          data
        );
        await get().getAllJob();
        notifySuccess("Create job successfully");
      } catch (error) {
        notifyError("Create job failed");
      }
    },
    assignJob: async (employeeIDs, jobID) => {
      try {
        const data = { employeeIDS: employeeIDs, jobID: jobID };
        console.log(data);
        const response = await api.post(
          "http://localhost:5000/jobs/assign",
          data
        );

        await get().getAllJob();
        notifySuccess("Assign job successfully");
      } catch (error) {
        console.error(error);
        notifyError("Assign job failed");
      }
    },
  };
});

export default useJobStore;
