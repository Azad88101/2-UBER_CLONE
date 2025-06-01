import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CaptainDataContext } from "../Context/Captain_context";
import axios from "axios";

const Captain_Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [color, setColor] = useState("");
  const [plate, setPlate] = useState("");
  const [capacity, setCapacity] = useState("");
  const [vehicleType, setVehicleType] = useState("");

  // This will hold array of validation errors from backend

  // This will hold generic error messages for other errors
  const [error, setError] = useState([]);

  const { Captain, setCaptain } = useContext(CaptainDataContext);

  const navigate = useNavigate();
  const [msg, setMsg] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();

    const Captaindata = {
      fullname: {
        firstname,
        lastname,
      },
      email,
      password,
      vehicle: {
        color,
        plate,
        capacity,
        vehicleType,
      },
    };

    try {
      const url = import.meta.env.VITE_URL;
      const res = await axios.post(`${url}/captain/register`, Captaindata);

      if (res.status === 201) {
        const data = res.data;
        setCaptain(data.captain);
        localStorage.setItem("token", data.token);
        navigate("/captain-home");
        console.log(res.data);
      }
    } catch (err) {
      // console.log(err);

      // Reset errors first

      setError(null);

      console.log("error   ", err);

      setMsg(err.response?.data?.message);
      console.log(msg);
      setError(err.response?.data?.errors);
    }

    // Optionally clear form inputs only if signup is successful, so maybe move this inside the if (res.status === 201) block if you want
  };

  return (
    <div className="p-7 flex flex-col items-center justify-between h-screen">
      <div>
        <img
          className="w-16 mt-6 mb-6 filter invert"
          src="https://cdn-assets-us.frontify.com/s3/frontify-enterprise-files-us/eyJwYXRoIjoicG9zdG1hdGVzXC9hY2NvdW50c1wvODRcLzQwMDA1MTRcL3Byb2plY3RzXC8yN1wvYXNzZXRzXC9lZFwvMTg4MTFcL2M0YWEwMGFkZDg0MmMyYzAxMmFiYzljOGQwZjI3ZDY1LTE2MjQzODUwOTguc3ZnIn0:postmates:OjicWr3Vd8E0jiG7blub9mF1JjPCJVb69cMbQNt_z74?width=800"
          alt=""
        />
        <form onSubmit={(e) => handleSubmit(e)} className="">
          <h3 className="text-xl font-medium mb-4">What's your name?</h3>

          <div className="flex items-center justify-center gap-6">
            <input
              name="firstname"
              value={firstname}
              onChange={(e) => setfirstname(e.target.value)}
              className="text-lg bg-[#eeeeee] py-2 px-4 rounded border w-full mb-4"
              required
              type="text"
              placeholder="First name"
            />
            <input
              name="lastname"
              value={lastname}
              onChange={(e) => setlastname(e.target.value)}
              className="text-lg bg-[#eeeeee] py-2 px-4 rounded border w-full mb-4"
              type="text"
              placeholder="Last name"
            />
          </div>

          <h3 className="text-xl font-medium mb-4">What's your email?</h3>
          <input
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="text-lg bg-[#eeeeee] py-2 px-4 rounded border w-full mb-4"
            required
            type="email"
            placeholder="Enter your email"
          />

          <h3 className="text-xl font-medium mb-4">Enter your Password</h3>
          <input
            className="text-lg bg-[#eeeeee] py-2 px-4 rounded border w-full mb-4"
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Enter your password"
            id="password"
          />

          {/* New Vehicle Info Fields */}
          <h3 className="text-xl font-medium mb-4">Vehicle Color</h3>
          <input
            className="text-lg bg-[#eeeeee] py-2 px-4 rounded border w-full mb-4"
            type="text"
            name="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            placeholder="Enter vehicle color"
          />

          <h3 className="text-xl font-medium mb-4">License Plate</h3>
          <input
            className="text-lg bg-[#eeeeee] py-2 px-4 rounded border w-full mb-4"
            type="text"
            name="plate"
            value={plate}
            onChange={(e) => setPlate(e.target.value)}
            placeholder="Enter license plate number"
          />

          <h3 className="text-xl font-medium mb-4">Capacity</h3>
          <input
            className="text-lg bg-[#eeeeee] py-2 px-4 rounded border w-full mb-4"
            type="number"
            name="capacity"
            value={capacity}
            onChange={(e) => setCapacity(e.target.value)}
            placeholder="Enter vehicle capacity"
            min="1"
          />

          <h3 className="text-xl font-medium mb-4">Vehicle Type</h3>
          <select
            className="text-lg bg-[#eeeeee] py-2 px-4 rounded border w-full mb-4"
            name="vehicleType"
            value={vehicleType}
            onChange={(e) => setVehicleType(e.target.value)}
            required
          >
            <option value="" disabled>
              Select vehicle type
            </option>
            <option value="Bike">Bike</option>
            <option value="Car">Car</option>
            <option value="Auto">Auto</option>
          </select>

          {/* Show validation errors from backend */}
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

          <button className="text-lg bg-[#111] text-white py-2 px-4 rounded border w-full mb-4">
            Signup
          </button>
        </form>

        <div className="flex items-center justify-center">
          <h4>Already have a Captain account?</h4>
          <Link to="/Captain-login">
            <button className="ml-1 text-blue-600 font-semibold text-lg">
              Login
            </button>
          </Link>
        </div>
      </div>

      <div className="flex px-6 mt-8 justify-center items-center">
        <p>
          By proceeding, you agree to the{" "}
          <span className="text-blue-600">Terms of Service</span> and{" "}
          <span className="text-blue-600">Privacy Policy</span>
        </p>
      </div>
    </div>
  );
};

export default Captain_Signup;
