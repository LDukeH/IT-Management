import { useEffect } from "react";
import useUserStore from "../../../../store/userStore";
import UserCard from "../../../../components/UserCard";
import { Link } from "react-router-dom";

function UserHeader() {
  return (
    <thead className="bg-gray-200">
      <tr className="text-xs  text-center text-gray-500 uppercase bg-gray-200 sticky top-0 z-10">
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
    <>
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
      <div className="relative mt-4 overflow-auto h-68 max-h-96">
        <table className="w-full border-collapse ">
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
    </>
  );
}

export default UserManage;
