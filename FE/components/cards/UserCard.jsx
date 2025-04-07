import useModalStore from "../../store/modalStore";

function UserCard(props) {
  const { openDeleteModal } = useModalStore();

  return (
    <tr className="text-center">
      {/* numbering goes here */}
      <td>
        <div>{props.code}</div>
      </td>

      {/* name goes here */}
      <td className="px-4 py-3 text-sm font-medium text-gray-500">
        {props.name}
      </td>
      {/* position goes here */}
      <td className="px-4 py-3 text-sm font-medium text-gray-500">
        {props.position}
      </td>

      {/* jobs goes here */}
      <td className="px-4 py-3 text-sm font-medium text-green-800">
        <button className="">Jobs</button>
      </td>

      {/* status goes here */}
      <td className="px-4 py-3 text-sm font-medium text-gray-500">Available</td>

      {/* delete button goes here */}
      <td className="flex justify-center items-center py-3">
        {props.position !== "Admin" && (
          <div
            className="bg-red-500 hover:bg-red-700 transition-all duration-200 font-semibold w-1/2 py-1 cursor-pointer rounded-xl"
            onClick={() => openDeleteModal(props._id, props.name, "user")}
          >
            Delete
          </div>
        )}
      </td>
    </tr>
  );
}

export default UserCard;
