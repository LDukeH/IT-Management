import DeleteModal from "../components/DeleteModal";
import LogoutModal from "../components/LogoutModal";

//
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <Outlet />
      <LogoutModal />
      <DeleteModal />
    </>
  );
}

export default Layout;
