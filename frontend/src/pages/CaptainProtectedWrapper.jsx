import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CaptainDataContext } from "../Context/Captain_context";
import axios from "axios";

const CaptainProtectedWrapper =  ({ children }) => {
  const navigate = useNavigate();

  const { Captain, setCaptain, IsLoading, setIsLoading } =
    useContext(CaptainDataContext);
  const token = localStorage.getItem("token");


    useEffect(() => {
     
      if (!token) {
        navigate("/captain-login");
      }
    }, [token]);

  const url = import.meta.env.VITE_URL;
   axios
    .get(`${url}/captain/profile`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => {
      if (res.status === 200) {
        // console.log(res)
        const data = res.data.data;
        console.log(res, "data", data);
        setCaptain(data.Captain);
        setIsLoading(false)
      }
    }).catch((e)=>{

        localStorage.removeItem("token")
        console.log("error",e)
        navigate("/captain-login")

    })

  if (IsLoading) {
    return <div>Loading....</div>;
  }



  return <>{children}</>;
};

export default CaptainProtectedWrapper;
