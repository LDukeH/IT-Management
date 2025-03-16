import { useEffect } from "react";
import SideBar from "./Sidebar";
import NavBar from "./Navbar";
import { Outlet } from "react-router";
import useJobStore from "../../../store/jobStore";
import useUserStore from "../../../store/userStore";

function adminPage() {
  const { getAllUser } = useUserStore();
  const { getAllJob } = useJobStore();
  useEffect(() => {
    getAllUser();
    getAllJob();
  }, []);

  return (
    <div className="flex flex-col bg-white h-screen w-screen  overflow-hidden">
      <NavBar />
      <div className="flex flex-row items-start">
        <SideBar />
        <div className="w-full h-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default adminPage;
