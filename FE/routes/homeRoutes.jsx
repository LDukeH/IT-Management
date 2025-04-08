import JobInformation from "../components/JobInformation.jsx";
import Home from "../src/page/Home/Home.jsx";
import Intro from "../src/page/Home/Intro.jsx";
import User from "../src/page/User/User.jsx";
import UserEdit from "../src/page/User/UserEdit.jsx";

// Notifications
import Notification from "../src/page/Home/Notification/Notification.jsx";
import EmployeeNotification from "../src/page/Home/Notification/EmployeeNotifications.jsx";
import ManagerNotifiCation from "../src/page/Home/Notification/ManagerNotification.jsx";
import NotificationInformation from "../components/NotificationInformation.jsx";

const notificationRoutes = {
  path: "notification",
  element: <Notification />,
  children: [
    {
      path: "employee",
      element: <EmployeeNotification />,
    },
    {
      path: "manager",
      element: <ManagerNotifiCation />,
    },
    {
      path: ":id",
      element: <NotificationInformation />,
    },
  ],
};

// Home
const homeRoutes = {
  path: "/",
  element: <Home />,
  children: [
    {
      path: "/",
      element: <Intro />,
    },

    {
      path: "user/profile",
      element: <User />,
    },
    {
      path: "user/edit",
      element: <UserEdit />,
    },
    {
      path: "jobs/:id",
      element: <JobInformation />,
    },
    notificationRoutes,
  ],
};

export default homeRoutes;
