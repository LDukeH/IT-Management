import { useEffect } from "react";
import useUserStore from "../../../store/userStore";
import { useNavigate } from "react-router-dom";

function LogIn() {
  const { loginUser } = useUserStore();
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    loginUser(data, navigate);
  }
  return (
    <div className="border border-gray-500 w-2/5 h-fit ml-4 mt-20 ">
      <form
        className="flex flex-col items-center gap-6"
        onSubmit={handleSubmit}
      >
        <div className="bg-gray-200 w-full h-full py-2 text-center font-semibold">
          Login
        </div>
        <div className="w-full ml-2 px-6 mx-auto ">
          <label htmlFor="code" className="font-semibold text-gray-900">
            User code:
          </label>
          <input
            type="text"
            required
            className="w-3xs h-7 px-1 text-black border border-gray-500 rounded-md mt-1"
            name="code"
          />
        </div>
        <div className="w-full ml-2 px-6 mx-auto">
          <label htmlFor="name" className="font-semibold text-gray-900">
            Password:
          </label>
          <input
            type="password"
            required
            className="w-3xs h-7 px-1 text-black border border-gray-500 rounded-md mt-1"
            name="password"
          />
        </div>
        <button className="inline-flex cursor-pointer items-center gap-1 rounded my-6 border border-slate-300 bg-gradient-to-b from-slate-50 to-slate-200 px-4 py-2 font-semibold hover:opacity-90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-300 focus-visible:ring-offset-2 active:opacity-100">
          Đăng nhập
        </button>
      </form>
    </div>
  );
}

export default LogIn;
