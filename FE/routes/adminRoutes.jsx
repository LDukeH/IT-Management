import AdminPage from "../src/page/Admin/Admin.jsx";
import DashBoard from "../src/page/Admin/DashBoard.jsx";
import UserManage from "../src/page/Admin/User-Manage/UserManage.jsx";
import UserCreate from "../src/page/Admin/User-Manage/UserCreate.jsx";
import JobManage from "../src/page/Admin/Job-Manage/JobManage.jsx";
import JobCreate from "../src/page/Admin/Job-Manage/JobCreate.jsx";
import JobAssign from "../src/page/Admin/Job-Manage/JobAssign.jsx";
import { ProtectedAdmin } from "./ProtectedRoutes.jsx";

const adminRoutes = {
  path: "/admin",
  element: <AdminPage />,
  children: [
    { path: "dashboard", element: <DashBoard /> },
    {
      path: "user",
      element: <UserManage />,
    },
    {
      path: "user/create",
      element: <UserCreate />,
    },
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
  ],
};

export default adminRoutes;
