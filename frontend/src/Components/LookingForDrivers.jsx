import React from "react";
import "./lookingForDriver.css";
import CancelationPopup from "./CancelationPopup";

const LookingForDrivers = (props) => {
  return (
    <div>
      <div className="flex justify-between flex-col p-2 items-center ">
        <div className="progress w-full"></div>

        <h4 className="text-2xl font-bold text-start">Looking for Drivers</h4>
      </div>

      <div className="flex gap-3 flex-col items-center justify-between">
        <img
          className="h-28"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_384,w_576/v1568070387/assets/b5/0a5191-836e-42bf-ad5d-6cb3100ec425/original/UberX.png"
          alt=""
        />

        <div className="w-full">
          <div className="flex border-b border-gray-500 my-4  py-3 px-2 items-center gap-5">
            <i className="ri-map-pin-2-fill my-1 text-2xl"></i>
            <div className="flex  flex-col">
              <h3 className="text-xl font-semibold">
                {" "}
                Molarband Extension, Badarpur, Delhi
              </h3>
              <p className="text-base text-gray-600">
                111 Street No. 1, Molarband Extension, Badarpur, Delhi 110044,
                India
              </p>
            </div>
          </div>

          <div className="flex border-b border-gray-500 my-4 py-3 px-2 items-center gap-5">
            <i className="ri-map-2-fill text-2xl"></i>
            <div className="flex  flex-col">
              <h3 className="text-xl font-semibold">Molarband Extension,</h3>
              <p className="text-base text-gray-600">
                111 Street No. 1, Molarband Extension, Badarpur, Delhi 110044,
                India
              </p>
            </div>
          </div>
          <div className="flex  border-gray-500 my-4  py-3 px-2  items-center justify-center gap-5">
            <i className="ri-currency-line my-1 text-2xl"></i>
            <div className="flex  flex-col">
              <h3 className="text-xl font-semibold">₹1109</h3>
              <p className="text-base text-gray-600">Cash Payment</p>
            </div>
          </div>
        </div>
        <button
          onClick={() => {
            props.setVehicleFound(false);
            // props.setCancelatonPopUp(true);
          }}
          className="text-red-900  text-xl font-semibold w-full p-2"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default LookingForDrivers;
