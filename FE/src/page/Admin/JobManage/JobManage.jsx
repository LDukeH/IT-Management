import { Link } from "react-router-dom";
import JobCard from "../../../../components/cards/JobCard";
import useJobStore from "../../../../store/jobStore";

function JobList() {
  const { jobs } = useJobStore();

  return (
    <div>
      {jobs.map((job, index) => {
        return <JobCard key={job._id} {...job} />;
      })}
    </div>
  );
}

function JobManage() {
  return (
    <>
      <div className="flex justify-between items-center">
        <h1 className="my-6 text-2xl font-semibold text-gray-700">
          Job manage:
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
        <JobList />
      </div>
    </>
  );
}

export default JobManage;
