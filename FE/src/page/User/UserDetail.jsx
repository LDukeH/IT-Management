import { Link } from "react-router-dom";

function UserDetail({ user }) {
  return (
    <div className="border pl-4 pt-4 rounded-xl flex flex-col gap-3 h-full">
      <div className="flex flex-row justify-between">
        <div>
          <span className="font-bold">Email address: </span>
          <span>{user.email}</span>
        </div>
        <Link
          className="px-6 font-semibold cursor-pointer underline text-blue-400"
          to="/user/edit"
        >
          Edit your Profile
        </Link>
      </div>
      <div className="flex flex-col">
        <span className="font-bold">User Code:</span>
        <span>{user.code}</span>
      </div>
      <div className="flex flex-col">
        <span className="font-bold">Position:</span>
        <span>{user.position}</span>
      </div>

      <div className="flex flex-col">
        <span className="font-bold">
          Please insert more information field here....
        </span>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum quia
          nam modi dicta explicabo inventore cupiditate libero repellendus
          distinctio porro ipsam quisquam, eligendi quaerat! Officiis odio
          commodi dolorum voluptatum animi.{" "}
        </span>
      </div>

      <div className="flex flex-col">
        <span className="font-bold">
          Please insert more information field here....
        </span>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum quia
          nam modi dicta explicabo inventore cupiditate libero repellendus
          distinctio porro ipsam quisquam, eligendi quaerat! Officiis odio
          commodi dolorum voluptatum animi.{" "}
        </span>
      </div>
    </div>
  );
}

export default UserDetail;
