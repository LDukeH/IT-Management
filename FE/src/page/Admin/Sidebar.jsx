import { useState } from "react";
import { Link } from "react-router";
function DashboardTab() {
  return (
    // change to router later
    <Link
      className="px-5 inline-flex items-center w-full h-12 text-sm text-gray-500 no-underline font-semibold dashboard-text transition-colors duration-150 hover:text-gray-800 cursor-pointer"
      to="dashboard"
    >
      <svg
        className="w-5 h-5"
        aria-hidden="true"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path d="M24,19V3.5c0-1.378-1.121-2.5-2.5-2.5H2.5C1.121,1,0,2.122,0,3.5v15.5H11.5v3H6v1h12v-1h-5.5v-3h11.5ZM2.5,2H21.5c.827,0,1.5,.673,1.5,1.5V14H1V3.5c0-.827,.673-1.5,1.5-1.5ZM1,15H23v3H1v-3Z" />
      </svg>
      <span className="ml-4 text-base">Dashboard</span>
    </Link>
  );
}

function ManagementTab() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center justify-between  px-5 w-full h-12 text-sm font-semibold  hover:text-gray-800 cursor-pointer"
      >
        <span className="inline-flex items-center">
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M17.5,11c-3.584,0-6.5,2.916-6.5,6.5s2.916,6.5,6.5,6.5,6.5-2.916,6.5-6.5-2.916-6.5-6.5-6.5Zm0,12c-3.032,0-5.5-2.467-5.5-5.5s2.468-5.5,5.5-5.5,5.5,2.467,5.5,5.5-2.468,5.5-5.5,5.5Zm1.354-4.854c.195,.195,.195,.512,0,.707-.098,.098-.226,.146-.354,.146s-.256-.049-.354-.146l-1-1c-.094-.094-.146-.221-.146-.354v-2c0-.276,.224-.5,.5-.5s.5,.224,.5,.5v1.793l.854,.854Zm.646-14.146h-2.028c-.25-2.247-2.16-4-4.472-4h-2.5c-2.312,0-4.223,1.753-4.472,4h-1.528C2.019,4,0,6.019,0,8.5v11c0,2.481,2.019,4.5,4.5,4.5h6c.276,0,.5-.224,.5-.5s-.224-.5-.5-.5H4.5c-1.93,0-3.5-1.57-3.5-3.5v-6.5H9.5c.276,0,.5-.224,.5-.5s-.224-.5-.5-.5H1v-3.5c0-1.93,1.57-3.5,3.5-3.5h15c1.93,0,3.5,1.57,3.5,3.5v2c0,.276,.224,.5,.5,.5s.5-.224,.5-.5v-2c0-2.481-2.019-4.5-4.5-4.5ZM10.5,1h2.5c1.76,0,3.221,1.306,3.464,3H7.036c.243-1.694,1.704-3,3.464-3Z" />
          </svg>
          <span className="ml-4 text-base">Management</span>
        </span>
        <svg
          className="w-4 h-4"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          ></path>
        </svg>
      </button>
      <ul
        className={`mx-5 overflow-hidden text-sm font-medium text-gray-500 rounded-md shadow-inner bg-gray-50 transition-all duration-300 ease-in-out ${
          isOpen ? "h-auto" : "max-h-0 opacity-0"
        }`}
        aria-label="submenu"
      >
        <li className="px-2 py-1  transition-colors duration-150 ">
          {/* change to link router later */}
          <Link
            className="w-full text-base text-gray-500 no-underline duration-150 hover:text-gray-800"
            to="user"
          >
            User
          </Link>
        </li>
        <li className="px-2 py-1  transition-colors duration-150 ">
          {/* change to link router later */}
          <Link
            className="w-full text-base text-gray-500 no-underline duration-150 hover:text-gray-800"
            to="job"
          >
            Job
          </Link>
        </li>
        <li className="px-2 py-1  transition-colors duration-150 ">
          {/* change to link router later */}
          <Link
            className="w-full text-base text-gray-500 no-underline duration-150 hover:text-gray-800"
            to="notification"
          >
            Notification
          </Link>
        </li>
      </ul>
    </div>
  );
}

function sideBar() {
  return (
    <>
      <aside className="z-20 hidden w-60  overflow-y-auto bg-white md:block flex-shrink-0  pt-8 pl-2 overflow-clip">
        <div className="py-1 px-1 text-gray-500 grid grid-row gap-1 w-auto h-auto">
          {/* change this anchor to router link later */}
          <DashboardTab />

          {/* management tab */}
          <ManagementTab />
        </div>
      </aside>
    </>
  );
}

export default sideBar;
