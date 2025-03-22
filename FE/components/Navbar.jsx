import useUserStore from "../store/userStore";

import UserDropdown from "../components/UserDropdown";

import { Link } from "react-router-dom";

function NavBlock({ text }) {
  return (
    <button className="h-full w-full flex items-center rounded-xl justify-center px-4 cursor-pointer text-sm hover:bg-sky-700 transition-all duration-150">
      {text}
    </button>
  );
}

function Navbar() {
  const { currentUser } = useUserStore();

  return (
    <nav className="w-full h-16 flex justify-between items-center py-1 bg-sky-600 border border-black text-white font-semibold px-12 ">
      <Link to="/">
        <img src="/logo.png" className="w-12 h-12" />
      </Link>
      <div className="flex h-full gap-1">
        <NavBlock text="Home" />
        <NavBlock text="About" />
        <NavBlock text="Notification" />
        <NavBlock text="Rules - Guides" />
        <NavBlock text="Schedule" />
        {!currentUser ? "" : <></>}
      </div>
      <div>{currentUser ? <UserDropdown user={currentUser} /> : ""}</div>
    </nav>
  );
}

export default Navbar;
