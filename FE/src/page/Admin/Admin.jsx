import { useEffect } from "react";
import SideBar from "./Sidebar";
import { Outlet } from "react-router";
import useJobStore from "../../../store/jobStore";
import useUserStore from "../../../store/userStore";
import Loader from "../../../components/Loader";
import useNotificationStore from "../../../store/notificationStore";

function adminPage() {
  const { getAllUser, currentUser } = useUserStore();
  const { getAllJob } = useJobStore();
  const { getAllNotification } = useNotificationStore();
  useEffect(() => {
    getAllUser();
    getAllJob();
    getAllNotification();
  }, []);

  return !currentUser ? (
    <Loader />
  ) : (
    <div className="flex flex-row items-start">
      <div className="hidden sm:block">
        <SideBar />
      </div>
      <div className="w-full h-full max-h-[calc(100vh-4rem)] ">
        <div className="w-full mx-auto px-12 py-4 bg-gray-50 h-[calc(100vh-6rem)] shadow-inner">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default adminPage;
