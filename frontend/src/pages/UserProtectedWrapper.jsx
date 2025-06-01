import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserDataContext } from "./../Context/User_context";

const UserProtectedWrapper = ({ children }) => {
  const { User } = useContext(UserDataContext);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
  }, [navigate]);

  const token = localStorage.getItem("token");

  return token ? <>{children}</> : null;
};

export default UserProtectedWrapper;
