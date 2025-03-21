import { HomeIcon } from "../../../svg";
import useUserStore from "../../../store/userStore";
import useModalStore from "../../../store/modalStore";

import { Link } from "react-router-dom";
//Change to link later

function NavBlock({ text }) {
  return (
    <button className="h-full flex items-center rounded-xl justify-center px-4 cursor-pointer text-sm hover:bg-cyan-700">
      {text}
    </button>
  );
}

function NavBar() {
  const { currentUser, logoutUser } = useUserStore();
  const { openLogoutModal } = useModalStore();

  const position = currentUser ? currentUser.position : "";
  return (
    <nav className="w-full h-12 flex justify-between items-center py-1 bg-cyan-600 text-white font-semibold px-12 ">
      <img src="./logo.png" className="w-12 h-12" />
      <div className="flex h-full gap-1">
        <NavBlock text="Home" />
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
              className="h-full flex rounded-xl items-center justify-center px-4 cursor-pointer text-sm hover:bg-cyan-700"
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
            className="h-full flex items-center justify-center px-4 cursor-pointer text-sm rounded-xl hover:bg-cyan-700"
          >
            Admin panel
          </Link>
        ) : (
          ""
        )}
      </div>
    </nav>
  );
}

export default NavBar;
