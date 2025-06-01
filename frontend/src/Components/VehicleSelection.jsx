import React from "react";

const VehicleSelection = (props) => {
  return (
    <div>
      <div className="flex justify-between px-2 items-center">
        <h3 className="text-xl font-semibold mt-2 mb-4">Choose a Vehicle</h3>
        <i
          onClick={() => {
            props.setVehiclePanel(false);
            // props.setPanelOpen(true);

            props.setPanelOpen(true);
          }}
          className="ri-close-fill text-xl cursor-pointer "
        ></i>
      </div>

      {/* Car Option */}
      <div
        onClick={() => {
          props.setConfirmRidePanel(true);
          props.setVehiclePanel(false);
        }}
        className="flex w-full border-[3px] my-3 bg-gray-100 items-center justify-between gap-4 p-2 rounded-xl shadow-md"
      >
        <div className="flex items-center gap-4">
          <img
            className="w-60"
            src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1652995234/assets/92/8d4288-e896-4333-9bc2-c60c49f2a095/original/UberXL_Black_v2.png"
            alt="Uber Car"
          />
        </div>
        <div className="flex w-full flex-col justify-center">
          <h2 className="text-lg font-semibold">
            UberGo • <i className="ri-user-3-fill inline-block"></i> 4
          </h2>
          <h5 className="text-sm font-medium text-gray-600">
            2 mins away • ETA 15:24
          </h5>
          <p className="text-sm font-medium text-gray-600">
            Affordable, compact rides
          </p>
        </div>
        <div className="flex text-2xl items-start font-bold text-gray-800 gap-1">
          <span>₹</span>
          <span>190.8</span>
        </div>
      </div>

      {/* Bike Option */}
      <div
        onClick={() => {
          props.setConfirmRidePanel(true);
          props.setVehiclePanel(false);
        }}
        className="flex w-full border-[3px] my-3 bg-gray-100 items-center justify-between gap-4 p-3 rounded-xl shadow-md"
      >
        <div className="flex items-center gap-4">
          <img
            className="w-60"
            src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png"
            alt="Uber Bike"
          />
        </div>

        {/* moto details */}
        <div
          onClick={() => {
            props.setConfirmRidePanel(true);
            props.setVehiclePanel(false);
          }}
          className="flex w-full flex-col justify-center"
        >
          <h2 className="text-lg font-semibold">
            Moto • <i className="ri-user-3-fill inline-block"></i> 1
          </h2>
          <h5 className="text-sm text-gray-600">3 mins away • ETA 15:24</h5>
          <p className="text-sm text-gray-600">Affordable motorcycle rides</p>
        </div>
        <div className="flex text-2xl items-start font-bold text-gray-800 gap-1">
          <span>₹</span>
          <span>96.7</span>
        </div>
      </div>

      {/* Auto Option */}
      <div className="flex w-full border-[3px] my-3 bg-gray-100 items-center justify-between gap-4 p-3 rounded-xl shadow-md">
        <div className="flex items-center gap-4">
          <img
            className="w-60"
            src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png"
            alt="Uber Auto"
          />
        </div>
        <div className="flex w-full flex-col justify-center">
          <h2 className="text-lg font-semibold">
            UberAuto • <i className="ri-user-3-fill inline-block"></i> 4
          </h2>
          <h5 className="text-sm text-gray-600">5 mins away • ETA 15:24</h5>
          <p className="text-sm text-gray-600">Affordable Auto rides</p>
        </div>
        <div className="flex text-2xl items-start font-bold text-gray-800 gap-1">
          <span>₹</span>
          <span>107</span>
        </div>
      </div>
    </div>
  );
};

export default VehicleSelection;
