import HomeIcon from "../../../svg/homeIcon";
import useUserStore from "../../../store/userStore";
import useModalStore from "../../../store/modalStore";

import { Link } from "react-router-dom";
//Change to link later

function NavBlock({ text }) {
  return (
    <button className="h-full flex items-center justify-center px-4 cursor-pointer text-sm hover:bg-blue-700">
      {text}
    </button>
  );
}

function NavBar() {
  const { currentUser, logoutUser } = useUserStore();
  const { openLogoutModal } = useModalStore();

  const position = currentUser ? currentUser.position : "";
  return (
    <nav className="w-full h-12 flex items-center mt-[1px] bg-blue-600 text-white font-semibold divide-x divide-gray-500">
      <div className="h-full flex items-center justify-center w-14 cursor-pointer hover:bg-blue-700">
        <HomeIcon color={"white"} />
      </div>
      <NavBlock text="About" />
      <NavBlock text="Notification" />
      <NavBlock text="Rules - Guides" />
      <NavBlock text="Schedule" />
      {!currentUser ? (
        ""
      ) : (
        <>
          <NavBlock text="Information" />
          <button
            className="h-full flex items-center justify-center px-4 cursor-pointer text-sm hover:bg-blue-700"
            onClick={() => {
              openLogoutModal();
            }}
          >
            Logout
          </button>
        </>
      )}

      {position === "Admin" ? (
        <Link
          to="/admin"
          className="h-full flex items-center justify-center px-4 cursor-pointer text-sm hover:bg-blue-700"
        >
          Admin panel
        </Link>
      ) : (
        ""
      )}
    </nav>
  );
}

export default NavBar;
