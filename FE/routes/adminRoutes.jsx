import AdminPage from "../src/page/Admin/Admin.jsx";
import DashBoard from "../src/page/Admin/DashBoard.jsx";

// user import
import UserManage from "../src/page/Admin/UserManage/UserManage.jsx";
import UserCreate from "../src/page/Admin/UserManage/UserCreate.jsx";

// job import
import JobManage from "../src/page/Admin/JobManage/JobManage.jsx";
import JobCreate from "../src/page/Admin/JobManage/JobCreate.jsx";
import JobAssign from "../src/page/Admin/JobManage/JobAssign.jsx";
import { ProtectedAdmin } from "./ProtectedRoutes.jsx";

// notification import
import NotificationManage from "../src/page/Admin/NotificationManage/NotificationManage.jsx";
import NotificationCreate from "../src/page/Admin/NotificationManage/NotificationCreate.jsx";

const adminRoutes = {
  path: "/admin",
  element: (
    <ProtectedAdmin>
      {" "}
      <AdminPage />
    </ProtectedAdmin>
  ),
  children: [
    { path: "dashboard", element: <DashBoard /> },
    // user path
    {
      path: "user",
      element: <UserManage />,
    },
    {
      path: "user/create",
      element: <UserCreate />,
    },

    // job path
    {
      path: "job",
      element: <JobManage />,
    },
    {
      path: "job/create",
      element: <JobCreate />,
    },
    {
      path: "job/assign/:id",
      element: <JobAssign />,
    },

    // notification path
    {
      path: "notification",
      element: <NotificationManage />,
    },
    {
      path: "notification/create",
      element: <NotificationCreate />,
    },
  ],
};

export default adminRoutes;
