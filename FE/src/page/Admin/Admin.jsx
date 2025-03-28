import { useEffect } from "react";
import SideBar from "./Sidebar";
import Navbar from "./Navbar";
import { Outlet } from "react-router";
import useJobStore from "../../../store/jobStore";
import useUserStore from "../../../store/userStore";
import Loader from "../../../components/Loader";

function adminPage() {
  const { getAllUser, currentUser } = useUserStore();
  const { getAllJob } = useJobStore();
  useEffect(() => {
    getAllUser();
    getAllJob();
  }, []);

  return !currentUser ? (
    <Loader />
  ) : (
    <div className="flex flex-col bg-white h-screen w-screen  overflow-hidden">
      <Navbar />
      <div className="flex flex-row items-start">
        <SideBar />
        <div className="w-full h-full max-h-[calc(100vh-4rem)] ">
          <div className="w-full mx-auto px-12 py-4 bg-gray-50 h-[calc(100vh-6rem)] shadow-inner">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default adminPage;
