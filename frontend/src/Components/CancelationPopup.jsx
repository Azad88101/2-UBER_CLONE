import React from "react";

const CancelationPopup = (props) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white w-[90%] max-w-md p-6 rounded-2xl shadow-xl">
        <h2 className="text-xl font-bold mb-4 text-center">Cancel Ride?</h2>
        <p className="text-gray-600 text-center mb-6">
          Are you sure you want to cancel your ride? This action cannot be
          undone.
        </p>
        <div className="flex justify-center gap-4">
          <button
            onClick={props.setCancelatonPopUp(false)}
            className="px-6 py-2 bg-gray-200 text-gray-800 rounded-full hover:bg-gray-300 transition-all"
          >
            No, Keep Ride
          </button>
          <button
            onClick={props.setCancelatonPopUp(false)}
            className="px-6 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-all"
          >
            Yes, Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default CancelationPopup;
