import { Link, useNavigate } from "react-router";
import useJobStore from "../../../../store/jobStore";
import { useState } from "react";

function Input(props) {
  return (
    <div className="col-span-2">
      <label htmlFor={props.name} className="text-gray-600 font-medium text-sm">
        {props.name.toUpperCase()}
      </label>
      <input
        type={props.type}
        placeholder={props.placeholder}
        id={props.name}
        name={props.name}
        required={true}
        className="font-medium mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 w-full rounded-md sm:text-sm "
      />
    </div>
  );
}

function JobCreate() {
  const navigate = useNavigate();
  const { createJob } = useJobStore();

  const [text, setText] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    createJob(data);
    navigate("/admin/job");
  }

  return (
    <div className="w-full mx-auto px-12 py-4 bg-gray-50 min-h-100vh shadow-inner">
      <h2 className="my-3 mt-6 text-2xl font-semibold text-gray-800 text-center">
        Create a new user
      </h2>
      <form
        id="productForm"
        encType="multipart/form-data"
        onSubmit={handleSubmit}
      >
        <div className="grid grid-cols-2 gap-x-12 gap-y-6 px-24 w-2/3 mx-auto">
          <Input name="title" placeholder="Job's Title" type="text" />

          <div className="col-span-2 flex flex-col gap-6">
            <Input name="startDate" placeholder="Start Date" type="date" />
            <Input name="dueDate" placeholder="Due Date" type="date" />
          </div>

          <div className="mt-2 col-span-2">
            <label
              htmlFor="description"
              className="text-gray-600 font-medium text-sm"
            >
              DESCRIPTION
            </label>
            <textarea
              value={text}
              name="description"
              className="font-medium mt-1 py-2 px-4 bg-white border shadow-sm  border-slate-300 placeholder-slate-400 w-full h-48 rounded-md"
              onChange={(e) => setText(e.target.value)}
            ></textarea>
          </div>
        </div>
        {/* submit and back */}
        <div className="flex justify-evenly mt-4 mx-auto w-1/2">
          <button
            type="submit"
            className="rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-black shadow-sm hover:bg-green-500 flex items-center gap-2 cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="16"
              height="16"
            >
              <path d="M9.878,18.122a3,3,0,0,0,4.244,0l3.211-3.211A1,1,0,0,0,15.919,13.5l-2.926,2.927L13,1a1,1,0,0,0-1-1h0a1,1,0,0,0-1,1l-.009,15.408L8.081,13.5a1,1,0,0,0-1.414,1.415Z" />
              <path d="M23,16h0a1,1,0,0,0-1,1v4a1,1,0,0,1-1,1H3a1,1,0,0,1-1-1V17a1,1,0,0,0-1-1H1a1,1,0,0,0-1,1v4a3,3,0,0,0,3,3H21a3,3,0,0,0,3-3V17A1,1,0,0,0,23,16Z" />
            </svg>
            Add job
          </button>
          <Link
            to="/admin/job"
            className="no-underline rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-black shadow-sm hover:bg-blue-500  flex gap-2 items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="16"
              height="16"
            >
              <path d="m11.5,3c1.381,0,2.5,1.119,2.5,2.5s-1.119,2.5-2.5,2.5-2.5-1.119-2.5-2.5,1.119-2.5,2.5-2.5Zm5.304,11.106l-1.433-3.106h1.349c.389,0,.745.228.908.58l1.08,2.339c.232.503.828.721,1.327.489.501-.231.72-.826.488-1.327l-1.08-2.34c-.489-1.058-1.558-1.741-2.724-1.741,0,0-3.006-.01-3.068,0-.76.071-1.472.444-1.98,1.023-.044.05-1.441,2.474-1.441,2.474-.178.311-.51.503-.868.503h-2.364c-.552,0-1,.447-1,1s.448,1,1,1h2.364c1.072,0,2.069-.577,2.603-1.508l.222-.387,1.664,3.609-1.728,1.411c-.7.572-1.102,1.42-1.102,2.324v2.551c0,.553.448,1,1,1s1-.447,1-1v-2.551c0-.302.134-.585.367-.775l2.315-1.89c1.191-.79,1.661-2.31,1.099-3.678Zm4.196,4.894h-2.339c-.209,0-.41-.064-.581-.186-.45-.32-1.074-.215-1.395.234-.32.45-.215,1.074.235,1.395.511.364,1.113.557,1.74.557h2.339c.552,0,1-.447,1-1s-.448-1-1-1ZM15,2c1.654,0,3,1.346,3,3v1c0,.553.448,1,1,1s1-.447,1-1v-1c0-2.757-2.243-5-5-5H6.002C3.246,0,1.002,2.242,1.002,4.999l-.002,18.001c0,.552.448,1,1,1s1-.447,1-1l.002-18.001c0-1.653,1.346-2.999,3-2.999h8.998Z" />
            </svg>
            Trờ lại
          </Link>
        </div>
      </form>
    </div>
  );
}

export default JobCreate;
