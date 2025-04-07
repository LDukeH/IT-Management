import LogIn from "./Login";
import { Outlet } from "react-router-dom";
import useUserStore from "../../../store/userStore";
import Loader from "../../../components/Loader";

function Home() {
  const { currentUser, loading } = useUserStore();
  return loading ? (
    <Loader />
  ) : (
    <div className="w-full bg-white h-full min-h-[calc(100vh-4rem)] flex flex-col">
      <main className="flex gap-12  h-full">
        {currentUser ? "" : <LogIn />}
        <div className="w-full h-full px-12 overflow-y-auto">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default Home;
