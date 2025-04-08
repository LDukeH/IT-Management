import useJobStore from "../../../store/jobStore";
import useUserStore from "../../../store/userStore";
import useNotificationStore from "../../../store/notificationStore";

function DashBoardVideo() {
  return (
    <div className="flex justify-center items-center mb-6 relative z-10">
      <iframe
        width="100%"
        height="315"
        src="https://www.youtube.com/embed/69ZDBWoj5YM"
        title="YouTube video player"
        allow="accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
}

function Jobs({ number }) {
  return (
    <div className="card">
      <div className="p-3 mr-4 bg-green-100 rounded-full">
        <svg className="w-5 h-5 " fill="green" viewBox="0 0 20 20">
          <path d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"></path>
        </svg>
      </div>
      <div>
        <p className="mb-2 text-sm font-medium text-gray-600">Jobs</p>
        <p className="text-lg font-semibold text-gray-700">{number}</p>
      </div>
    </div>
  );
}

function Users({ number }) {
  return (
    <div className="card">
      <div className="p-3 mr-4  bg-orange-100 rounded-full">
        <svg className="w-5 h-5" fill="orange">
          <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
        </svg>
      </div>
      <div>
        <p className="mb-2 text-sm font-medium text-gray-600">Total users</p>
        <p className="text-lg font-semibold text-gray-700">{number}</p>
      </div>
    </div>
  );
}

function Notifications({ number }) {
  return (
    <div className="card">
      <div className="p-3 mr-4  bg-blue-100 rounded-full">
        <svg className="w-5 h-5" fill="blue" viewBox="0 0 24 24">
          <path d="m16.899,20c-.465,2.279-2.485,4-4.899,4s-4.435-1.721-4.899-4h9.799Zm3.601-13c1.93,0,3.5-1.57,3.5-3.5s-1.57-3.5-3.5-3.5-3.5,1.57-3.5,3.5,1.57,3.5,3.5,3.5Zm.24,1.988c-.08.003-.159.012-.24.012-3.033,0-5.5-2.467-5.5-5.5,0-.904.223-1.756.612-2.509-1.182-.635-2.526-.991-3.936-.991C7.775,0,4.398,2.709,3.552,6.516l-2.35,7.597c-.597,1.93.846,3.886,2.866,3.886h15.656c2.08,0,3.529-2.065,2.821-4.021l-1.806-4.992Z" />
        </svg>
      </div>
      <div>
        <p className="mb-2 text-sm font-medium text-gray-600">Notifications</p>
        <p className="text-lg font-semibold text-gray-700">{number}</p>
      </div>
    </div>
  );
}

function DashBoard() {
  const { users } = useUserStore();
  const { jobs } = useJobStore();
  const { notifications } = useNotificationStore();

  return (
    <div className="w-full mx-auto px-12 py-4 bg-gray-50 min-h-100vh">
      <h1 className="my-6 text-2xl font-semibold text-gray-700">Dashboard</h1>
      <DashBoardVideo />
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-3 md:grid-cols-2 ">
        <Users number={users.length} />
        <Jobs number={jobs.length} />
        <Notifications number={notifications.length} />
      </div>
    </div>
  );
}

export default DashBoard;
