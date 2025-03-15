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
    <div className="w-4/5 h-full mx-auto bg-white border">
      <div className="w-full h-36 bg-[url(/homeLogo.png)] bg-center bg-contain "></div>
      <NavBar />
      <main className="flex gap-12">
        {currentUser ? "" : <LogIn />}
        <div className="pt-10 w-full h-[calc(100vh-200px)] px-12 overflow-y-scroll">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default Home;
