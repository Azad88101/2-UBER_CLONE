import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const CaptainLogout = () => {
  const token = localStorage.getItem("token");

  const navigate = useNavigate();
  const url = import.meta.env.VITE_URL;
  axios
    .get(`${url}/captain/logout`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => {
      if (res.status === 200) {
        localStorage.removeItem("token");
      }
    })
    .catch((err) => {
      console.log(err);
    });

  useEffect(() => {
    if (!token) {
      navigate("/captain-login");
    }
  }, [token]);

  return <div>Captain Logout</div>;
};

export default CaptainLogout;
