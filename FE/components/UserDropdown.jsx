import useModalStore from "../store/modalStore";
import { Link } from "react-router-dom";
import { useState } from "react";
import { DownIcon } from "../svg";

function UserDropdown({ user, baseColor }) {
  const { openLogoutModal } = useModalStore();

  const [dropdownOpen, setDropdownOpen] = useState(false);
  function handleOpen() {
    setDropdownOpen(!dropdownOpen);
  }
  return (
    <div>
      <button
        className="h-full cursor-pointer flex justify-center items-center gap-4 hover:brightness-90 transition duration-300 active:border-blue-500 relative"
        onClick={handleOpen}
      >
        {user.name}
        <DownIcon width="12" />
      </button>
      <div
        className={`absolute right-8 top-16 w-36 h-fit shadow-lg border-t-1 flex flex-col items-center justify-center transition-all duration-150 divide-y z-50 ${
          dropdownOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-1/12 invisible"
        }`}
        style={{ backgroundColor: baseColor || "#0284c7" }}
      >
        <Link
          className=" h-12 w-full flex items-center  justify-center cursor-pointer text-sm transition-all duration-300 hover:brightness-75"
          style={{ backgroundColor: baseColor || "#0284c7" }}
          to={`/user/${user._id}`}
        >
          Information
        </Link>
        {user.position === "Admin" ? (
          <Link
            to="/admin"
            className="h-12 w-full flex items-center justify-center px-4 cursor-pointer text-sm transition-all duration-150 hover:brightness-75"
            style={{
              backgroundColor: baseColor || "#0284c7",
            }}
          >
            Admin panel
          </Link>
        ) : (
          ""
        )}
        <button
          className="h-12 w-full flex items-center justify-center px-4 cursor-pointer text-sm transition-all duration-150 hover:brightness-75"
          style={{ backgroundColor: baseColor || "#0284c7" }}
          onClick={() => {
            openLogoutModal();
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default UserDropdown;
