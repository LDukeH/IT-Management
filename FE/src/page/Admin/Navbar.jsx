import { Link } from "react-router";
import useUserStore from "../../../store/userStore";
import UserDropdown from "../../../components/UserDropdown";

function Navbar() {
  const { currentUser } = useUserStore();

  return (
    <div className="flex flex-row justify-between items-center px-12 bg-white h-16 sticky top-0 z-50">
      <Link to="/">
        <img src={`/logo.png`} alt="logo" className="w-12 h-12"></img>
      </Link>

      {/* baseColor should be passed as hex... */}
      <UserDropdown user={currentUser} baseColor={"white"} />
    </div>
  );
}
export default Navbar;
