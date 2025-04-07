import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import useNotificationStore from "../../store/notificationStore";

function NotificationCard(props) {
  const [openDelete, setOpenDelete] = useState(false);
  const { deleteNotification } = useNotificationStore();

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
      <div className="flex justify-between px-8">
        <Link
          to={`info/${props._id}`}
          className="text-lg h-full w-24 px-2 text-center rounded-xl bg-green-500 cursor-pointer font-semibold hover:bg-green-700 transition-all duration-150"
        >
          Info
        </Link>
        <div>
          <AnimatePresence mode="wait">
            {!openDelete ? (
              <motion.div
                // need a key so exit works, can be on any of the divs here
                key="delete"
                initial={{ scaleX: 0, originX: 1 }}
                animate={{ scaleX: 1, originX: 1 }}
                transition={{ duration: 0.05 }}
                className="bg-red-500 hover:bg-red-700 cursor-pointer rounded-xl px-4 transition-all duration-200  text-lg font-semibold"
                onClick={() => setOpenDelete(true)}
              >
                Delete
              </motion.div>
            ) : (
              <motion.div
                className="flex flex-row w-full overflow-hidden rounded-xl  text-lg font-semibold cursor-pointer"
                initial={{ scaleX: 0, originX: 1 }}
                animate={{ scaleX: 1, originX: 1 }}
                exit={{ scaleX: 0, originX: 1 }}
                transition={{ duration: 0.2, ease: "linear" }}
              >
                <div
                  className="bg-red-500 px-4 hover:bg-red-700  transition-all duration-200"
                  onClick={() => {
                    console.log(props._id);
                    deleteNotification(props._id);
                  }}
                >
                  Yes, Delete
                </div>
                <div
                  className="bg-gray-500 px-4 hover:bg-gray-700  transition-all duration-200"
                  onClick={() => setOpenDelete(false)}
                >
                  Cancel
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

export default NotificationCard;
