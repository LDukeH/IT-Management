function UserCard(props) {
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
    </tr>
  );
}

export default UserCard;
