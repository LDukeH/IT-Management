import { Link, useMatch } from "react-router-dom";

function NavBlock({ text, link }) {
  const match = useMatch(`/notification/${link}`);
  return (
    <Link
      to={link}
      className={`h-1/12 flex items-center justify-center rounded-2xl cursor-pointer text-sm border font-semibold transition-all duration-300 hover:scale-110 ${
        match ? "bg-black text-white" : ""
      }`}
    >
      {text}
    </Link>
  );
}

function NotificationSidebar() {
  return (
    <nav className="h-[calc(100vh-14rem)]  col-span-4 lg:col-span-2 flex flex-col gap-1 border-l p-2">
      <NavBlock text="Employee" link="employee" />
      <NavBlock text="Manager" link="manager" />
    </nav>
  );
}

export default NotificationSidebar;
