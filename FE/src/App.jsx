import { createBrowserRouter, RouterProvider } from "react-router-dom";
import homeRoutes from "../routes/homeRoutes";
import adminRoutes from "../routes/adminRoutes";
import { useEffect } from "react";
import useUserStore from "../store/userStore";
import LogoutModal from "../components/LogoutModal";
import Loader from "../components/Loader";

const router = createBrowserRouter([homeRoutes, adminRoutes]);

function App() {
  const { getCurrentUser, loading } = useUserStore();
  useEffect(() => {
    getCurrentUser();
  }, []);

  return (
    <div className="w-screen h-screen bg-gray-200">
      <>
        <RouterProvider router={router} />
        <LogoutModal />
      </>
    </div>
  );
}

export default App;
