import Navbar from "../../../components/Navbar";
import UserInformation from "./UserInformation";
import useUserStore from "../../../store/userStore";

function User() {
  const { currentUser } = useUserStore();
  return (
    <div className="m-4 relative">
      <UserInformation user={currentUser} />
    </div>
  );
}

export default User;
