import React, { useContext, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import { UserDataContext } from "../Context/User_context";

const User_signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setuserData] = useState({});
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [error, setError] = useState("");

  const [User, setUser] = useContext(UserDataContext);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newUser = {
      fullname: {
        firstname,
        lastname,
      },
      email,
      password,
    };

    console.log(newUser);
    console.log(import.meta.env.VITE_URL);
    try {
      const url = import.meta.env.VITE_URL;
      const res = await axios.post(`${url}/user/register`, newUser);

      if (res.status === 201) {
        const data = res.data;
        setUser(data.user);
        localStorage.setItem("token", data.token);

        navigate("/home");
      }
    } catch (err) {
      if (err.response) {
        // Server responded with a status other than 2xx
        switch (err.response.status) {
          case 400:
            setError("Bad Request: Please check your input.");
            break;
          case 401:
            setError("Unauthorized: Please log in first.");
            break;
          case 403:
            setError("Forbidden: You don't have permission.");
            break;
          case 404:
            setError("Endpoint not found.");
            break;
          case 409:
            setError("User already exists with this email.");
            break;
          case 500:
            setError("Server error. Please try again later.");
            break;
          default:
            setError(
              `Unexpected error (${err.response.status}). Please try again.`
            );
        }
      } else if (err.request) {
        // Request was made but no response received
        setError("No response from server. Please check your network.");
      } else {
        // Something else went wrong
        setError("An unexpected error occurred. Please try again.");
      }
    }

    setEmail("");
    setPassword("");
    setfirstname("");
    setlastname("");
  };

  return (
    <div className="p-7 flex flex-col items-center  justify-between h-screen">
      <div className="">
        <img
          className="w-16   mt-6 mb-6 "
          src="https://imgs.search.brave.com/VS7tj4eMRj3vJiO_AWHnw2NgXaMj916xmMK72FgQ3Xs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWdz/LnNlYXJjaC5icmF2/ZS5jb20vUFNxY0dZ/MXFUZE9neFdjQ3NB/OTBqeE44YnZaZnln/SXdoXzNaV2xMRHRR/ay9yczpmaXQ6NTAw/OjA6MDowL2c6Y2Uv/YUhSMGNITTZMeTlt/Y21WbC9iRzluYjNC/dVp5NWpiMjB2L2FX/MWhaMlZ6TDJGc2JG/OXAvYldjdk1UWTFP/VGMyTVRFdy9NSFZp/WlhJdGJHOW5ieTF3/L2JtY3VjRzVu"
          alt=""
        />
        <form onSubmit={(e)=>handleSubmit(e)} className=" " action="">
          <h3 className="text-xl font-medium mb-4">What's your name?</h3>

          <div className="flex items-center justify-center gap-6">
            <input
              name="firstname"
              value={firstname}
              onChange={(e) => setfirstname(e.target.value)}
              className="text-lg bg-[#eeeeee]  py-2 px-4 rounded border w-full mb-4"
              required
              type="text"
              placeholder="first name"
            />

            {/* <h3 className="text-xl font-medium mb-4">What's your first last?</h3> */}
            <input
              name="lastname"
              value={lastname}
              onChange={(e) => setlastname(e.target.value)}
              className="text-lg bg-[#eeeeee]  py-2 px-4 rounded border w-full mb-4"
              type="text"
              placeholder="last name"
            />
          </div>

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
          <button className="text-lg bg-[#111] text-white   py-2 px-4 rounded border w-full mb-4">
            Create Account
          </button>

          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded mb-4">
              {error}
            </div>
          )}
        </form>

        <div className="flex items-center justify-center">
          <h4>Already have an account?</h4>
          <Link to="/login">
            <button className="ml-1 text-blue-600 font-semibold text-lg">
              login
            </button>
          </Link>
        </div>
      </div>

      <div className="flex px-6 mt-8 justify-center items-center  ">
        <p>
          by proceeding, you agree to the{" "}
          <span className="text-blue-600">Terms of Service</span> and{" "}
          <span className="text-blue-600">Privacy Policy</span>
        </p>
      </div>
    </div>
  );
};

export default User_signup;
