import React, { useState } from "react";
import { Link } from "react-router-dom";

const Captain_Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [captainData, setcaptainData] = useState({});
  const [fullname, setfullname] = useState({});
  const [VehicleData, setVehicleData] = useState({});
  

  return (
    <div className="p-7 flex flex-col items-center  justify-between h-screen">
      <div className="">
        <img
          className="w-16   mt-6 mb-6  filter invert"
          src="https://cdn-assets-us.frontify.com/s3/frontify-enterprise-files-us/eyJwYXRoIjoicG9zdG1hdGVzXC9hY2NvdW50c1wvODRcLzQwMDA1MTRcL3Byb2plY3RzXC8yN1wvYXNzZXRzXC9lZFwvMTg4MTFcL2M0YWEwMGFkZDg0MmMyYzAxMmFiYzljOGQwZjI3ZDY1LTE2MjQzODUwOTguc3ZnIn0:postmates:OjicWr3Vd8E0jiG7blub9mF1JjPCJVb69cMbQNt_z74?width=800"
          alt=""
        />
        <form
          onSubmit={(e) => {
            e.preventDefault();

            setfullname({
              firstname,
              lastname,
            });
            setcaptainData({ fullname, email, password });
            console.log(captainData);
            setEmail("");
            setPassword("");
            setfirstname("");
            setlastname("");
          }}
          className=" "
          action=""
        >
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
            Signup
          </button>
        </form>

        <div className="flex items-center justify-center">
          <h4>Already have an Captain account?</h4>
          <Link to="/Captain-login">
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

export default Captain_Signup;
