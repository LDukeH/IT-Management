import useNotificationStore from "../../../../store/notificationStore";
import { Link } from "react-router-dom";

function NotificationCard(props) {
  function dateFormat(date) {
    return new Date(date).toLocaleDateString("vi-VN", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });
  }

  return (
    <div className="shadow-inner p-4 border border-gray-300 rounded-lg bg-white my-4 flex flex-col gap-4">
      <div className="flex justify-between">
        <div className="text-lg text-black font-bold">
          Name: <span>{props.title}</span>
        </div>
        <div className="text-lg text-black font-bold">ID: {props._id}</div>
      </div>

      {/* description */}
      <div>
        <div className="text-xl text-black font-bold">Description:</div>
        <div className="bg-gray-50 rounded-xl px-4 py-1 mt-2 text-wrap line-clamp-5 whitespace-pre-wrap">
          {props.description}
        </div>
      </div>

      {/* date */}
      <div className="text-black text-lg font-bold flex justify-between">
        <div>
          Date: <span>{dateFormat(props.date)}</span>
        </div>
        <div>
          For: <span>{props.for}</span>
        </div>
      </div>

      {/* detailed information */}
      <Link
        to={`info/${props._id}`}
        className="text-lg h-full w-24 px-2 text-center rounded-xl bg-green-500 cursor-pointer font-semibold hover:bg-green-700 transition-all duration-150"
      >
        Info
      </Link>
    </div>
  );
}

function NotificationList() {
  const { notifications } = useNotificationStore();

  return (
    <div>
      {notifications.map((notification, index) => {
        return <NotificationCard key={notification._id} {...notification} />;
      })}
    </div>
  );
}

function NotificationManage() {
  return (
    <>
      <div className="flex justify-between items-center">
        <h1 className="my-6 text-2xl font-semibold text-gray-700">
          Notification manage:
        </h1>
      </div>
      <div className="flex flex-row justify-between">
        <div className="text-xl font-semibold text-gray-500">All:</div>
        <Link
          to="create"
          className="h-full px-4 py-1 rounded-xl bg-green-500 cursor-pointer font-semibold hover:bg-green-700 transition-all duration-150"
        >
          Add
        </Link>
      </div>
      <hr className="mt-2 border-gray-300" />
      <div className="h-[calc(100vh-14rem)] overflow-y-scroll">
        <NotificationList />
      </div>
    </>
  );
}

export default NotificationManage;
