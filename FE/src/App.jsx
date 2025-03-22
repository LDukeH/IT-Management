import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Routes goes here
import homeRoutes from "../routes/homeRoutes";
import adminRoutes from "../routes/adminRoutes";
import userRoutes from "../routes/userRoutes";

import { useEffect } from "react";

// Store goes here
import useUserStore from "../store/userStore";
//
import { useNavigate } from "react-router-dom";
import Layout from "./Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Wrap everything inside Layout
    children: [homeRoutes, adminRoutes, userRoutes],
  },
]);
function App() {
  const { getCurrentUser, loading } = useUserStore();
  useEffect(() => {
    getCurrentUser();
  }, []);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
