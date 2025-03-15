import { Link } from "react-router";
import useUserStore from "../../../store/userStore";

function navBar() {
  const { currentUser } = useUserStore();

  return (
    <div className="flex flex-row justify-between items-center px-12 bg-white border border-white">
      <Link to="/">
        <img src={`/logo.png`} alt="logo" className="w-21 h-14"></img>
      </Link>

      {/* placeholder, change it to props once have backend service */}
      <div className="flex flex-row items-center gap-4">
        <span className="font-semibold">
          Welcome back, {currentUser ? currentUser.name : ""}
        </span>
        <img
          src="/user.png"
          className="w-10 h-10 rounded-full border border-black"
        ></img>
      </div>
    </div>
  );
}
export default navBar;
