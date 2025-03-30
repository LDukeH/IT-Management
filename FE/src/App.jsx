import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Routes goes here
import homeRoutes from "../routes/homeRoutes";
import adminRoutes from "../routes/adminRoutes";

import { useEffect } from "react";

// Store goes here
import useUserStore from "../store/userStore";
import useNotificationStore from "../store/notificationStore";
//
import Layout from "./Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Wrap everything inside Layout
    children: [homeRoutes, adminRoutes],
  },
]);

function App() {
  const { getCurrentUser } = useUserStore();
  const { getAllNotification } = useNotificationStore();
  useEffect(() => {
    getCurrentUser();
    getAllNotification();
  }, []);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
