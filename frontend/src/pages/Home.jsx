import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";
import LocationSearchPanel from "../Components/LocationSearchPanel";
import VehicleSelection from "../Components/VehicleSelection";
import ConfirmRide from "../Components/ConfirmRide";
import LookingForDrivers from "../Components/LookingForDrivers";
import WaitingForDriver from "../Components/WaitingForDriver";
import CancelationPopup from "../Components/CancelationPopup";

const Home = () => {
  const [source, setSource] = useState("");
  const [Destination, setDestination] = useState("");
  const [PanelOpen, setPanelOpen] = useState(false);
  const [VehiclePanel, setVehiclePanel] = useState(false);
  const [ConfirmRidePanel, setConfirmRidePanel] = useState(false);
  const [VehicleFound, setVehicleFound] = useState(false);
  const [WaitingForDriverForArrving, setWaitingForDriverForArrving] =
    useState(true);

  const [CancelatonPopUp, setCancelatonPopUp] = useState(false);

  const panelRef = useRef(null);
  const vehiclePanelRef = useRef(null);
  const confirmRidePanelRef = useRef(null);
  const VehicleFoundRef = useRef(null);
  const WaitingForDriverRef = useRef(null);
  const CancelationPopupRef = useRef(null);

  const submitHandler = (e) => {
    e.preventDefault();
    const data = { source, Destination };
    console.log(data);
    setSource("");
    setDestination("");
  };

  useGSAP(() => {
    if (PanelOpen) {
      gsap.to(panelRef.current, {
        height: "calc(100vh - 30%)",
        duration: 0.1,
      });
    } else {
      gsap.to(panelRef.current, {
        height: "0%",
        duration: 0.1,
      });
    }
  }, [PanelOpen]);

  useGSAP(() => {
    if (VehiclePanel) {
      gsap.to(vehiclePanelRef.current, {
        y: 0,
        duration: 0.1,
      });
    } else {
      gsap.to(vehiclePanelRef.current, {
        y: "100%",
        duration: 0.1,
      });
    }
  }, [VehiclePanel]);

  useGSAP(() => {
    if (ConfirmRidePanel) {
      gsap.to(confirmRidePanelRef.current, {
        y: 0,
        duration: 0.1,
      });
    } else {
      gsap.to(confirmRidePanelRef.current, {
        y: "100%",
        duration: 0.1,
      });
    }
  }, [ConfirmRidePanel]);

  useGSAP(() => {
    if (VehicleFound) {
      gsap.to(VehicleFoundRef.current, {
        y: 0,
        duration: 0.1,
      });
    } else {
      gsap.to(VehicleFoundRef.current, {
        y: "100%",
        duration: 0.1,
      });
    }
  }, [VehicleFound]);

  useGSAP(() => {
    if (WaitingForDriverForArrving) {
      gsap.to(WaitingForDriverRef.current, {
        y: 0,
        duration: 0.1,
      });
    } else {
      gsap.to(WaitingForDriverRef.current, {
        y: "100%",
        duration: 0.1,
      });
    }
  }, [WaitingForDriverForArrving]);

  useGSAP(() => {
    if (CancelatonPopUp) {
      gsap.to(CancelationPopupRef.current, {
        scale: 1,
        duration: 0.1,
      });
    } else {
      gsap.to(CancelationPopupRef.current, {
        scale: 0,
        duration: 0.1,
      });
    }
  }, [CancelatonPopUp]);

  return (
    <div className="h-screen w-screen relative">
      {/* top uber logo */}
      <img
        className="w-36 absolute top-9 left-7"
        src="	https://pngimg.com/uploads/uber/uber_PNG19.png"
        alt=""
      />
      {/* /Background image */}
      <div className="bg-image-H h-screen w-screen">
        <img
          className="object-cover h-full w-full"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt=""
        />
      </div>

      {/* Main Source/Destination Section  and locatins panel */}
      <div className="h-screen absolute top-0 w-full flex flex-col justify-end">
        <div className="h-[30%] p-4 bg-white relative">
          <div className="flex justify-between p-1 items-center">
            <h4 className="text-3xl font-bold">Find a trip</h4>
            {PanelOpen && (
              <i
                onClick={() => setPanelOpen(false)}
                className="ri-arrow-down-wide-line text-4xl cursor-pointer absolute top-4 right-4 z-50"
              ></i>
            )}
          </div>

          <form onSubmit={submitHandler}>
            <div className="line bg-gray-900 absolute h-[30%] w-1 rounded-full top-[38%] left-[12%]"></div>

            <input
              onClick={() => setPanelOpen(true)}
              onChange={(e) => setSource(e.target.value)}
              value={source}
              className="text-lg bg-[#eeeeee] text-center mt-5 py-4 px-4 rounded-lg border w-full mb-5"
              type="text"
              placeholder="Add a Pickup location"
              name="source"
            />
            <input
              onClick={() => setPanelOpen(true)}
              onChange={(e) => setDestination(e.target.value)}
              value={Destination}
              className="text-lg bg-[#eee] text-center py-4 px-4 rounded-lg border w-full mt-1 mb-4"
              type="text"
              placeholder="Enter your Destination"
              name="destination"
            />
          </form>
        </div>

        {/* Location Panel (search results) */}
        <div
          ref={panelRef}
          className="h-0 bg-white overflow-y-auto transition-all duration-500"
          style={{ maxHeight: "calc(100vh - 30%)" }}
        >
          <LocationSearchPanel
            setPanelOpen={setPanelOpen}
            setVehiclePanel={setVehiclePanel}
          />
        </div>
      </div>

      {/* Vehicle Panel */}
      <div
        ref={vehiclePanelRef}
        className="p-3 w-full bg-white translate-y-full fixed bottom-0 left-0 transition-transform duration-500"
      >
        <VehicleSelection
          setPanelOpen={setPanelOpen}
          setConfirmRidePanel={setConfirmRidePanel}
          setVehiclePanel={setVehiclePanel}
        />
      </div>

      {/* Confirm Ride Panel with confirm button */}

      <div
        ref={confirmRidePanelRef}
        className="p-3 w-full bg-white translate-y-full fixed bottom-0 left-0 transition-transform duration-500"
      >
        <ConfirmRide
          setConfirmRidePanel={setConfirmRidePanel}
          setVehiclePanel={setVehiclePanel}
          setVehicleFound={setVehicleFound}
        />
      </div>

      {/* looking for driver panel */}

      <div
        ref={VehicleFoundRef}
        className="p-3 w-full bg-white translate-y-full fixed bottom-0 left-0 transition-transform duration-500"
      >
        <LookingForDrivers
          setVehicleFound={setVehicleFound}
          setWaitingForDriverForArrving={setWaitingForDriverForArrving}
          setCancelatonPopUp={setCancelatonPopUp}
        />
      </div>
      {/* if driver found than WaitingForDriverForArrving driver panel with driver detaiil and arriving timing  */}
      <div
        ref={WaitingForDriverRef}
        className="p-3 w-full bg-white    fixed bottom-0 left-0 transition-transform duration-500"
      >
        <WaitingForDriver
          setWaitingForDriverForArrving={setWaitingForDriverForArrving}
        />
      </div>

      {/* Ride cancelation faled */}

      {/* <div
        ref={CancelationPopupRef}
        className="p-3 w-full bg-white scale-0 z-999  absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] transition-transform duration-500"
      >
        <CancelationPopup setCancelatonPopUp={setCancelatonPopUp} />
      </div> */}
    </div>
  );
};

export default Home;
