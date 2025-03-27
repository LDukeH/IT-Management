import Loader from "../../../components/Loader";
import { UserIcon } from "../../../svg";
import UserDetail from "./UserDetail";
import UserJobList from "./UseJobList";

function UserInformation({ user }) {
  return user ? (
    <div className="w-full h-[calc(100vh-7rem)] px-8 py-4 bg-gray-50 min-h-100vh shadow-2xl border rounded-2xl">
      <div className="w-full h-12 my-1 p-8 border  text-3xl flex items-center justify-between gap-2 border-gray-200 rounded-2xl shadow-sm">
        <div className="flex items-center gap-2">
          <UserIcon />
          <span className="font-semibold">{user.name}</span>
        </div>
        <div>
          Position: <span className="font-semibold ">{user.position}</span>
        </div>
      </div>
      <div className="w-full h-[calc(100vh-14rem)] p-4  min-h-24 border-gray-200 rounded-2xl shadow-sm grid grid-cols-2 gap-24">
        <div className="h-[calc(100vh-18rem)]">
          <h2 className="font-bold text-2xl">User Detail:</h2>
          <UserDetail user={user} />
        </div>
        <div className="h-[calc(100vh-18rem)]">
          <h2 className="font-bold text-2xl">Job List:</h2>
          <UserJobList user={user} />
        </div>
      </div>
    </div>
  ) : (
    <Loader />
  );
}

export default UserInformation;
