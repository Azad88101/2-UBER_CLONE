import React, { useState } from "react";
import { Link } from "react-router-dom";



const Captain_Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [captainData, setcaptainData] = useState({});
  return (
    <div className="p-7 flex flex-col items-center justify-center">
      <div className="">
        <img
          className="w-16   mt-6 mb-6  filter invert"
          src="https://cdn-assets-us.frontify.com/s3/frontify-enterprise-files-us/eyJwYXRoIjoicG9zdG1hdGVzXC9hY2NvdW50c1wvODRcLzQwMDA1MTRcL3Byb2plY3RzXC8yN1wvYXNzZXRzXC9lZFwvMTg4MTFcL2M0YWEwMGFkZDg0MmMyYzAxMmFiYzljOGQwZjI3ZDY1LTE2MjQzODUwOTguc3ZnIn0:postmates:OjicWr3Vd8E0jiG7blub9mF1JjPCJVb69cMbQNt_z74?width=800"
          alt=""
        />
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setcaptainData({ email, password });
            // console.log(userData)
            setEmail("");
            setPassword("");
          }}
          className=" "
          action=""
        >
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
