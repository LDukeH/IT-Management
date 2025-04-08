import useUserStore from "../../store/userStore";

import UserDropdown from "../../components/UserDropdown";

import { Link } from "react-router-dom";

function NavBlock({ text, link }) {
  return (
    <Link
      to={link}
      className="h-full w-full flex items-center rounded-xl justify-center px-4 cursor-pointer text-sm hover:bg-sky-700 transition-all duration-150"
    >
      {text}
    </Link>
  );
}

function NavBar() {
  const { currentUser } = useUserStore();

  return (
    <nav className="w-full h-16 flex justify-between items-center py-1 bg-sky-600 border border-black text-white font-semibold px-12 ">
      <Link to="/">
        <img src="/logo.png" className="w-12 h-12" />
      </Link>
      <div className="flex h-full gap-1">
        <NavBlock text="Home" link="/" />
        <NavBlock text="About" link="/about" />
        <NavBlock text="Notification" link="/notification" />
        <NavBlock text="Rules - Guides" link="/rule" />
        <NavBlock text="Schedule" link="/schedule" />
        {!currentUser ? "" : <></>}
      </div>
      <div>{currentUser ? <UserDropdown user={currentUser} /> : ""}</div>
    </nav>
  );
}

export default NavBar;
