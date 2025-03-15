import useModalStore from "../store/modalStore";
import useUserStore from "../store/userStore";

const LogoutModal = () => {
  const { isLogoutModalOpen, closeLogoutModal } = useModalStore();
  const logoutUser = useUserStore((state) => state.logoutUser);

  if (!isLogoutModalOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-200 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg min-w-sm">
        <h2 className="text-lg font-bold mb-4">Logout confirmation</h2>
        <p>Do you want to logout?</p>
        <div className="mt-6 flex justify-between px-5">
          <button
            className="px-4 py-2 bg-red-500 text-white rounded cursor-pointer hover:bg-red-600"
            onClick={() => {
              logoutUser(); // Call actual logout
              closeLogoutModal(); // Close modal after action
            }}
          >
            Logout
          </button>
          <button
            className="px-4 py-2 bg-gray-300 rounded cursor-pointer hover:bg-gray-400"
            onClick={closeLogoutModal}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogoutModal;
