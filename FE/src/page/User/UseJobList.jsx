import useJobStore from "../../../store/jobStore";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function UserJobList({ user }) {
  const { findJobByUserID } = useJobStore();
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const handleFetch = async () => {
      try {
        const res = await findJobByUserID(user._id);
        setJobs(res);
      } catch (error) {
        console.error(error);
      }
    };
    handleFetch();
  }, []);
  return jobs.length > 0 ? (
    <div className="overflow-y-auto border p-4 rounded-xl flex flex-col gap-3 h-full">
      {jobs.map((job, index) => (
        <div
          className="border p-2 rounded-2xl hover:scale-105 transition-all duration-300"
          key={index}
        >
          <Link to={`/jobs/${job._id}`}>
            <div className="font-bold">{job.title}</div>
            <div className="font-semibold">Description:</div>
            <div>{job.description}</div>
          </Link>
        </div>
      ))}
    </div>
  ) : (
    ""
  );
}

export default UserJobList;
