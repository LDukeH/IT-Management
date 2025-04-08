// import from components
import DeleteModal from "../components/modals/DeleteModal";
import LogoutModal from "../components/modals/LogoutModal";
import NavBar from "../components/navs/NavBar";
import SideBar from "../components/navs/SideBar";

//
import { Outlet } from "react-router-dom";

//
import useWindowSize from "../store/useWindowSize";

function Layout() {
  const width = useWindowSize();

  return (
    <>
      {width > 59 ? <NavBar /> : <SideBar />}
      <Outlet />
      <LogoutModal />
      <DeleteModal />
    </>
  );
}

export default Layout;
