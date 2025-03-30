import { useEffect } from "react";
import useUserStore from "../store/userStore";
import { Navigate } from "react-router-dom";
import { notifyError } from "../utils/notify";

export const ProtectedAdmin = ({ children }) => {
  const { currentUser } = useUserStore();

  if (currentUser === null) {
    return <Navigate to="/" />;
  }

  if (currentUser.position !== "Admin") {
    notifyError("You are not allowed to access");
    return <Navigate to="/" />;
  }
  return children;
};
