import useModalStore from "../../store/modalStore";
import useUserStore from "../../store/userStore";
import useJobStore from "../../store/jobStore";

function UserToAssign(props) {
  return (
    <label
      htmlFor={props.userID}
      className="shadow-inner px-2 border-gray-500 border-2 rounded-lg my-4 flex justify-between items-center cursor-pointer hover:border-gray-900 transition-all duration-300"
    >
      <div>
        <div>
          Name: <span className="font-semibold">{props.name}</span>
        </div>
        <div>
          Position: <span className="font-semibold">{props.position}</span>
        </div>
        <div>Code: {props.code}</div>
      </div>
      <input
        type="checkbox"
        className="accent-gray-500 w-4 h-4"
        name={props.userID}
        id={props.userID}
      />
    </label>
  );
}

function AssignModal({ job }) {
  const { users } = useUserStore();
  const { isAssignModalOpen, closeAssignModal } = useModalStore();

  const { assignJob } = useJobStore();

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    const ids = Object.keys(data);

    assignJob([...ids], job._id);
    closeAssignModal();
  }

  if (!isAssignModalOpen) return null;
  return (
    <div className="fixed z-50 flex justify-center items-center inset-0 h-screen bg-black/30">
      <form
        className="bg-white p-6 rounded-lg shadow-2xl w-sm min-h-96"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold mb-4">Assigning employee</h2>
        <p className="font-semibold text-xl">List of employee: </p>
        <div className="p-2 max-h-80 overflow-y-auto">
          {users
            .filter((user) => user.position != "Admin")
            .map((user) => (
              <UserToAssign key={user._id} userID={user._id} {...user} />
            ))}
        </div>
        <div className="flex justify-between items-center">
          <button
            onClick={closeAssignModal}
            className="px-4 py-1 my-2 bg-gray-300 rounded cursor-pointer hover:bg-gray-400"
          >
            Close
          </button>
          <button
            className="px-4 py-1 bg-green-500 text-white rounded cursor-pointer hover:bg-green-600"
            type="submit"
          >
            Assign
          </button>
        </div>
      </form>
    </div>
  );
}

export default AssignModal;
