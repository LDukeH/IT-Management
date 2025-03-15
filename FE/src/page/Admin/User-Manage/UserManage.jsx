import { useEffect } from "react";
import useUserStore from "../../../../store/userStore";
import UserCard from "../../../../components/UserCard";
import { Link } from "react-router-dom";

function UserHeader() {
  return (
    <thead>
      <tr className="text-xs border text-center text-gray-500 uppercase border-gray-100">
        <th className="px-4 py-3 text-gray-700 text-base">Code</th>
        <th className="px-4 py-3 text-gray-700 text-base">Name</th>
        <th className="px-4 py-3 text-gray-700 text-base">Position</th>
        <th className="px-4 py-3 text-gray-700 text-base">Jobs</th>
        <th className="px-4 py-3 text-gray-700 text-base">Status</th>
        <th className="px-6 py-3 text-gray-700 text-base">Action</th>
      </tr>
    </thead>
  );
}

function UserManage() {
  const { users } = useUserStore();

  return (
    <div className="w-full mx-auto px-12 py-4 bg-gray-50 min-h-100vh shadow-inner">
      <h1 className="my-6 text-2xl font-semibold text-gray-700">
        User manage:
      </h1>

      <div className="flex flex-row justify-between">
        <div className="text-xl font-semibold text-gray-500">All user: </div>
        <Link
          to="create"
          className="h-full px-4 py-1 rounded-xl bg-green-500 cursor-pointer font-semibold hover:bg-green-700 transition-all duration-150"
        >
          Add
        </Link>
      </div>
      <table className="w-full mt-4">
        <UserHeader />
        <tbody>
          {users
            .filter((user) => user.role != "Admin")
            .map((user) => (
              <UserCard key={user._id} {...user} />
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserManage;
