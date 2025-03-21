import NavBar from "./Navbar";
import LogIn from "./Login";
import { Outlet } from "react-router-dom";
import useUserStore from "../../../store/userStore";
import { useEffect } from "react";
import Loader from "../../../components/Loader";

function Home() {
  const { currentUser, loading } = useUserStore();
  return loading ? (
    <Loader />
  ) : (
    <div className="w-full h-full bg-white  min-h-screen flex flex-col">
      <NavBar />
      <main className="flex gap-12 border flex-grow">
        {currentUser ? "" : <LogIn />}
        <div className="pt-10 w-full h-full px-12 overflow-y-auto">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default Home;
