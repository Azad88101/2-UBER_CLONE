import axios from "axios";
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CaptainDataContext } from "../Context/Captain_context";

const Captain_Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { Captain, setCaptain } = useContext(CaptainDataContext);
  const [error, setError] = useState([]);
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  // const submitHandler = async (e) => {
  //   e.preventDefault();
  //   const captainData = { email, password };

  //   try {
  //     const url = import.meta.env.VITE_URL;
  //     const res = await axios.post(`${url}/captain/login`, captainData);

  //     console.log(res);
  //     if (res.status === 200) {
  //       const data = res.data;
  //       message = data.message;
  //       // console.log(message)
  //       // console.log(data)
  //       setCaptain(data);
  //       const token = data.data.token;
  //       // console.log(token)
  //       localStorage.setItem("token", token);
  //       navigate("/captain-home");
  //     }
  //   } catch (err) {
  //     console.log(err);
  //     setMsg(err.response?.data?.message);
  //   }

  //   setEmail("");
  //   setPassword("");
  // };

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const url = import.meta.env.VITE_URL;
      const captainData = { email, password };

      const res = await axios.post(`${url}/captain/login`, captainData);

      if (res.status === 200) {
        const { message, data } = res.data;
        setCaptain(data);
        localStorage.setItem("token", data.token);
        navigate("/captain-home");
      }
    } catch (err) {
      console.error("Login error:", err);
      const errorMessage =
        err.response?.data?.message || "Login failed. Please try again.";
      setMsg(errorMessage);
    } finally {
      setEmail("");
      setPassword("");
    }
  };

  return (
    <div className="p-7 flex flex-col items-center justify-center">
      <div className="">
        <img
          className="w-16   mt-6 mb-6  filter invert"
          src="https://cdn-assets-us.frontify.com/s3/frontify-enterprise-files-us/eyJwYXRoIjoicG9zdG1hdGVzXC9hY2NvdW50c1wvODRcLzQwMDA1MTRcL3Byb2plY3RzXC8yN1wvYXNzZXRzXC9lZFwvMTg4MTFcL2M0YWEwMGFkZDg0MmMyYzAxMmFiYzljOGQwZjI3ZDY1LTE2MjQzODUwOTguc3ZnIn0:postmates:OjicWr3Vd8E0jiG7blub9mF1JjPCJVb69cMbQNt_z74?width=800"
          alt=""
        />
        <form onSubmit={(e) => handleSubmit(e)} className=" " action="">
          <h3 className="text-xl font-medium mb-4">What's your email?</h3>
          <input
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="text-lg bg-[#eeeeee]  py-2 px-4 rounded border w-full mb-4"
            required
            type="email"
            placeholder="Enter your email"
          />

          <h3 className="text-xl font-medium  mb-4">Enter you Password</h3>
          <input
            className="text-lg bg-[#eeeeee]  py-2 px-4 rounded border w-full mb-4"
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Enter your password"
            id="password"
          />

          {error.length > 0 && (
            <div className="mb-4 text-red-600">
              <ul>
                {error.map((err, index) => (
                  <li key={index}>
                    <strong>{err.path}:</strong> {err.msg}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {msg && <div className="mb-4 text-red-600">{msg}</div>}

          <button className="text-lg bg-[#111] text-white   py-2 px-4 rounded border w-full mb-4">
            Continue
          </button>
        </form>

        <div className="flex items-center justify-center">
          <h4> Join a fleet? </h4>
          <Link to="/captain-signup">
            <button className="ml-1 text-blue-600 font-semibold text-lg">
              Register as a Captain
            </button>
          </Link>
        </div>
      </div>

      <div className="flex  mt-8 justify-center items-center  ">
        <h4> </h4>
        <Link to="/login">
          <button className="ml-1 text-blue-600 font-semibold text-lg">
            Sign in as a User
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Captain_Login;
