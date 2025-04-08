import { Link } from "react-router-dom";
function NotFound() {
  return (
    <>
      <div className="w-1/2 h-fit mx-auto mt-20 flex flex-col items-center justify-center gap-4 py-12 bg-gray-50 shadow-md rounded-lg">
        <div className="text-9xl text-sky-500">
          4<span className="text-sky-700">{`{ }`}</span>4
        </div>
        <div className="text-2xl font-semibold text-gray-700 flex flex-col items-center justify-center">
          <div>Something is missing</div>
          <div>The page you are looking for is not available</div>
        </div>
        <Link
          to="/"
          className="bg-sky-600 w-1/6 h-12 p-4 rounded-full text-white font-semibold flex items-center justify-center hover:bg-sky-700 transition duration-300 ease-in-out"
        >
          Go to home
        </Link>
      </div>
    </>
  );
}

export default NotFound;
