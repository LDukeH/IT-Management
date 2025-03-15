import { useEffect, useState } from "react";
import useJobStore from "../../../../store/jobStore";
import { useParams } from "react-router-dom";
import CalendarIcon from "../../../../svg/CalendarIcon";

function JobAssign() {
  const [job, setJob] = useState({});
  const { findJob } = useJobStore();
  const id = useParams().id;

  const dateFormat = (date) => {
    return new Date(date).toLocaleDateString("vi-VN", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });
  };

  useEffect(() => {
    const handleFetch = async () => {
      const res = await findJob(id);
      setJob(res);
    };
    handleFetch();
  }, []);

  return (
    <div className="w-full h-[calc(100vh-100px)] mx-auto px-12 py-4 bg-gray-50 min-h-100vh shadow-inner">
      <div className="text-5xl text-black font-bold text-center">
        Title: {job.title}
      </div>
      <div className="text-2xl my-4 flex justify-evenly w-1/2 mx-auto">
        <div className="flex items-center">
          <CalendarIcon />
          <div>Start date: {dateFormat(job.startDate)}</div>
        </div>
        <div className="flex items-center">
          <CalendarIcon />
          <div>Due date: {dateFormat(job.dueDate)}</div>
        </div>
      </div>
      <div className="text-3xl font-bold text-gray-800">Description:</div>
      <hr />
      <div className="select-none font-medium mt-1 py-2 px-4 bg-white border shadow-sm  border-slate-300 placeholder-slate-400 w-full min-h-48 rounded-md">
        {job.description}
      </div>
      <div className="flex justify-between my-4 px-2">
        <div className="text-xl">Assigned employees: </div>
        <button className=" rounded-md bg-green-600 px-3 py-2 font-semibold text-black shadow-sm hover:bg-green-500 flex items-center gap-2 cursor-pointer">
          Assign
        </button>
      </div>
    </div>
  );
}

export default JobAssign;
