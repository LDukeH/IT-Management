import { createBrowserRouter, RouterProvider } from "react-router-dom";
import homeRoutes from "../routes/homeRoutes";
import adminRoutes from "../routes/adminRoutes";
import { useEffect } from "react";
import useUserStore from "../store/userStore";
import LogoutModal from "../components/LogoutModal";

const router = createBrowserRouter([homeRoutes, adminRoutes]);

function App() {
  const { getCurrentUser, loading } = useUserStore();
  useEffect(() => {
    getCurrentUser();
  }, []);

  return (
    <>
      <RouterProvider router={router} />
      <LogoutModal />
    </>
  );
}

export default App;
