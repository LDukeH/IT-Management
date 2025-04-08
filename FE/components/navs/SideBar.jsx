import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { SideBarIcon } from "../../svg";

import { useState } from "react";
import { NavLink } from "react-router-dom";

import UserDropdown from "../UserDropdown";
import useUserStore from "../../store/userStore";

function SideBar() {
  const [close, setClose] = useState(true);
  const { currentUser } = useUserStore();

  return (
    <>
      <div className="w-screen h-16 bg-sky-600 flex justify-between items-center px-6 text-white sticky top-0 z-50">
        {close ? (
          <div onClick={() => setClose(!close)} className="cursor-pointer">
            <SideBarIcon />
          </div>
        ) : (
          ""
        )}
        <div>{currentUser ? <UserDropdown user={currentUser} /> : ""}</div>
        <div className="absolute top-0 left-0 h-screen text-black">
          <Sidebar
            className="max-w-16 h-full fixed top-0 left-0 z-50"
            rootStyles={{
              backgroundColor: "#0284c7",
              fontSize: "1.2rem",
              fontWeight: "500",
            }}
            collapsedWidth="0px"
            collapsed={close}
            onBackdropClick={() => setClose(true)}
          >
            <Menu
              menuItemStyles={{
                button: ({ level, active, disabled }) => {
                  return {
                    [`&.active`]: {
                      backgroundColor: "#006e8e",
                      color: "white",
                    },
                    marginTop: "8px",
                    ":hover": {
                      backgroundColor: "#0284c7",
                      color: "white",
                      transition: "all 0.3s ease",
                    },
                    ":active": {
                      backgroundColor: "#0284c7",
                      color: "white",
                      transition: "all 0.3s ease",
                    },
                  };
                },
              }}
            >
              {/* other menu item */}
              <MenuItem component={<NavLink to="/" />}> Home </MenuItem>
              <MenuItem component={<NavLink to="/about" />}> About </MenuItem>
              <MenuItem component={<NavLink to="/notification" />}>
                Notification
              </MenuItem>
              <MenuItem component={<NavLink to="/rule" />}>
                Rules - Guides
              </MenuItem>
              <MenuItem component={<NavLink to="/schedule" />}>
                Schedule
              </MenuItem>

              {/* admin related */}
              {currentUser.position === "Admin" ? (
                <div className="mt-8 p-2 bg-gray-200">
                  Admin:
                  <div>
                    <MenuItem component={<NavLink to="/admin/dashboard" />}>
                      DashBoard
                    </MenuItem>

                    <SubMenu label="Management" defaultOpen={false}>
                      <MenuItem component={<NavLink to="/admin/user" />}>
                        User
                      </MenuItem>
                      <MenuItem component={<NavLink to="/admin/job" />}>
                        Job
                      </MenuItem>
                      <MenuItem
                        component={<NavLink to="/admin/notification" />}
                      >
                        Notification
                      </MenuItem>
                    </SubMenu>
                  </div>
                </div>
              ) : (
                ""
              )}
            </Menu>
          </Sidebar>
          {close ? (
            ""
          ) : (
            <div
              className="border inset-0 fixed bg-black opacity-80 z-20"
              onClick={() => {
                setClose(true);
              }}
            ></div>
          )}
        </div>
      </div>
    </>
  );
}

export default SideBar;
