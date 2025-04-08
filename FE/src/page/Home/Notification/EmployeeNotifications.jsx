import useNotificationStore from "../../../../store/notificationStore";
import { Link } from "react-router-dom";

function EmployeeNotification() {
  function dateFormat(date) {
    return new Date(date).toLocaleDateString("vi-VN", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });
  }

  const { notifications } = useNotificationStore();

  const employeeNotifications = notifications.filter(
    (notification) => notification.for === "Employee"
  );

  return (
    <div>
      {employeeNotifications.map((notification, index) => (
        <div
          key={index}
          className="p-4 m-5 flex flex-col items-start transition-all duration-300 border rounded-xl gap-3"
        >
          <Link className="font-bold text-2xl text-blue-500 hover:text-blue-700">
            {notification.title}
          </Link>
          <div className="text-gray-700">
            <span className="font-bold "> Date:</span>{" "}
            {dateFormat(notification.date)}
          </div>
          <div className="h-24 w-full line-clamp-4 text-start">
            {notification.description}
          </div>
          <Link
            className="border cursor-pointer rounded-sm px-2 py-1 hover:bg-black hover:text-white transition-all duration-300"
            to={`/notification/${notification._id}`}
          >
            More
          </Link>
        </div>
      ))}
    </div>
  );
}

export default EmployeeNotification;
