import useUserStore from "../../../store/userStore";
import { useNavigate } from "react-router-dom";
import { UserIcon, LockIcon, ForwardIcon } from "../../../svg";

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
    <div className="border h-96 w-120 my-32 ml-12 flex flex-col justify-center items-center rounded-4xl bg-white shadow-2xl">
      <form
        className="flex flex-col items-center gap-6"
        onSubmit={handleSubmit}
      >
        <div className="text-2xl font-bold text-cyan-600 ">Login</div>
        <div className="px-5 relative">
          <div className="w-fit absolute top-2 text-cyan-700">
            <UserIcon />
          </div>
          <input
            type="text"
            required
            className="border-b border-b-cyan-600 font-bold p-2.5 pl-8 focus:outline-none focus:placeholder-gray-600 text-blue-950 "
            placeholder="User code"
            name="code"
          />
        </div>
        <div className="px-5 relative">
          <div className="w-fit absolute top-2 text-cyan-700">
            <LockIcon />
          </div>
          <input
            type="password"
            required
            className="border-b border-b-cyan-600 font-bold p-2.5 pl-8 focus:outline-none focus:placeholder-gray-600 text-blue-950"
            placeholder="Password"
            name="password"
          />
        </div>
        <button className=" border-2 border-cyan-500 p-2 mt-6 rounded-xl flex justify-center items-center gap-2 text-cyan-600 cursor-pointer hover:border-cyan-700 hover:text-cyan-700 transition-all duration-300  ">
          Login
          <ForwardIcon />
        </button>
      </form>
    </div>
  );
}

export default LogIn;
