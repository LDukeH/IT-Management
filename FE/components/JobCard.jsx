import { Link } from "react-router-dom";
import useModalStore from "../store/modalStore";

function JobCard(props) {
  const { openDeleteModal } = useModalStore();

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
        <div className="text-xl text-black font-bold">Description</div>
        <div className="bg-gray-50 rounded-xl px-4 py-2 mt-2 whitespace-pre-wrap">
          {props.description}
        </div>
      </div>

      {/* date */}
      <div className="text-black text-lg font-bold flex justify-between">
        <div>
          Start date: <span>{dateFormat(props.startDate)}</span>
        </div>
        <div>
          Due date: <span>{dateFormat(props.dueDate)}</span>
        </div>
      </div>

      {/* assigned employee */}
      <div className="flex justify-between px-2">
        <Link
          to={`assign/${props._id}`}
          className="text-lg h-full w-24 px-2 text-center rounded-xl bg-green-500 cursor-pointer font-semibold hover:bg-green-700 transition-all duration-150"
        >
          Info
        </Link>
        <button
          className="text-lg h-full w-24 px-2 text-center rounded-xl bg-red-500 cursor-pointer font-semibold hover:bg-red-700 transition-all duration-150"
          onClick={openDeleteModal}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default JobCard;
