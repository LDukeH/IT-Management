import useModalStore from "../store/modalStore";
import useUserStore from "../store/userStore";
import { useNavigate } from "react-router-dom";

const DeleteModal = () => {
  const navigate = useNavigate();

  const { deleteUser } = useUserStore();

  const { isDeleteModalOpen, closeDeleteModal, toDelete } = useModalStore();

  if (!isDeleteModalOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-200 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg min-w-sm">
        <h2 className="text-lg font-bold mb-4">Delete confirmation</h2>
        <p>
          Do you want to delete user
          <span className="font-bold"> "{toDelete.name}"</span>?
        </p>
        <div className="mt-6 flex justify-between px-5 font-semibold ">
          <button
            className="px-4 py-2 bg-red-500 text-white rounded cursor-pointer hover:bg-red-600 transition-all duration-300"
            onClick={() => {
              if (toDelete.type === "user") {
                deleteUser(toDelete.id);
              }
              closeDeleteModal(); // Close modal after action
            }}
          >
            Delete
          </button>
          <button
            className="px-4 py-2 bg-gray-500 rounded cursor-pointer hover:bg-gray-700 transition-all duration-300"
            onClick={closeDeleteModal}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
