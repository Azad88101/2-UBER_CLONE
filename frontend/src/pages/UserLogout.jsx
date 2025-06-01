import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";

const UserLogout = () => {
  const navigate = useNavigate();

  const token = localStorage.getItem("token");
  axios
    .get(`${import.meta.env.VITE_URL}/user/logout`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => {
      if (res.status === 200) {
        localStorage.removeItem("token");
        navigate("/login");
      }
    }).catch((err)=>{
      console.log(err)
    })
  return <div>UserLogout</div>;
};

export default UserLogout;
