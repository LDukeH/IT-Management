import { useEffect, useState } from "react";
import useJobStore from "../../../../store/jobStore";
import useModalStore from "../../../../store/modalStore";
import { useNavigate, useParams } from "react-router-dom";
import AssignModal from "../../../../components/AssignModal";

// icons
import { CalendarIcon, BackIcon } from "../../../../svg";

import { Link } from "react-router-dom";

function AssignedUser(props) {
  return (
    <Link className="h-24 shadow-xl p-4 rounded-md bg-gray-50 text-base text-gray-800 font-semibold hover:scale-110 transition-all duration-150">
      <div>Name: {props.name}</div>
      <div>Code: {props.code}</div>
      <div>Position: {props.position}</div>
    </Link>
  );
}

function JobAssign() {
  const [job, setJob] = useState({});
  const { findJobByID, Job } = useJobStore();
  const { openAssignModal } = useModalStore();

  const id = useParams().id;

  const navigate = useNavigate();

  const dateFormat = (date) => {
    return new Date(date).toLocaleDateString("vi-VN", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });
  };

  useEffect(() => {
    const handleFetch = async () => {
      const res = await findJobByID(id);
      setJob(res);
    };
    handleFetch();
  }, [Job]);

  return (
    <>
      <AssignModal job={job} />
      <>
        <button
          onClick={() => {
            navigate(-1);
          }}
          className="cursor-pointer transition-all duration-300 text-gray-500 hover:text-black"
        >
          <BackIcon />
        </button>
        <div className="text-5xl text-black font-bold text-center">
          Title: {job.title}
        </div>
        <div className="text-2xl my-4 flex justify-evenly w-full mx-auto">
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
        <div className="select-none font-medium mt-1 py-2 px-4 bg-white border shadow-sm  border-slate-300 placeholder-slate-400  min-h-48 rounded-md">
          {job.description}
        </div>
        <div className="flex justify-between my-4 px-2">
          <div className="text-xl text-black font-bold">
            Assigned employees:{" "}
          </div>
          <button
            className="text-base rounded-md bg-green-600 px-3 py-2 font-semibold text-black shadow-sm hover:bg-green-500 flex items-center gap-2 cursor-pointer"
            onClick={() => {
              openAssignModal();
            }}
          >
            Assign
          </button>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3  gap-y-8 gap-x-4 h-[calc(100vh-32rem)] overflow-y-auto px-6">
          {job.employeeIds?.map((employee, index) => {
            return <AssignedUser key={index} {...employee} />;
          })}
        </div>
      </>
    </>
  );
}

export default JobAssign;
