import LogoutModal from "../components/LogoutModal";

//
import { useNavigate, Outlet } from "react-router-dom";

function Layout() {
  const navigate = useNavigate();

  return (
    <>
      <Outlet />
      <LogoutModal navigate={navigate} />
    </>
  );
}

export default Layout;
