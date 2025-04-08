import { useNavigate, useParams } from "react-router-dom";
// icons
import { CalendarIcon, BackIcon } from "../svg";
import useNotificationStore from "../store/notificationStore";
import { useEffect, useState } from "react";

//Utils
import { dateFormat } from "../utils/dateFormat";

function NotificationInformation() {
  const navigate = useNavigate();
  const [notification, setNotification] = useState({});
  const { getNotificationByID } = useNotificationStore();
  const id = useParams().id;

  useEffect(() => {
    const handleFetch = async () => {
      const res = await getNotificationByID(id);
      setNotification(res);
    };
    handleFetch();
  }, []);

  return (
    <>
      <div className="w-full h-3/4 px-12 py-4 mt-5 bg-gray-50 shadow-inner relative">
        <button
          onClick={() => {
            navigate(-1);
          }}
          className="cursor-pointer transition-all duration-300 text-gray-500 hover:text-black absolute top-4 left-4"
        >
          <BackIcon />
        </button>
        <div className="text-4xl text-black font-bold text-center">
          Title: {notification.title}
        </div>
        <div className="text-2xl my-4 flex justify-evenly w-full mx-auto">
          Date: {dateFormat(notification.date)}
        </div>
        <div className="text-3xl font-bold text-gray-800">Description:</div>
        <hr />
        <div className="select-none font-medium mt-1 py-2 px-4 bg-white border shadow-sm  border-slate-300 placeholder-slate-400  min-h-36 rounded-md">
          {notification.description}
        </div>
      </div>
    </>
  );
}

export default NotificationInformation;
