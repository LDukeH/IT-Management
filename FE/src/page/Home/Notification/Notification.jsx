import { Outlet } from "react-router-dom";
import NotificationSidebar from "./NotificationSidebar.jsx";

function Notification() {
  return (
    <div className="text-center mt-8 h-[calc(100vh-10rem)] mb-6  w-full ">
      <h1 className="font-bold text-4xl"> Notifications</h1>
      <div className="mt-8 grid grid-cols-12 gap-4 rounded-2xl p-1 h-11/12">
        <div className="col-span-8 lg:col-span-10 h-full overflow-y-auto">
          <Outlet />
        </div>
        <NotificationSidebar />
      </div>
    </div>
  );
}

export default Notification;
