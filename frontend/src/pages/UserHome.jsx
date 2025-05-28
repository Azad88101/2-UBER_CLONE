import React from "react";
import { Link } from "react-router-dom";
const UserHome = () => {
  return (
    <div>
      <div className="bg-cover  bg-[url('https://images.unsplash.com/photo-1738251092609-d597545f2bb7?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aW5kaWFuJTIwdHJhZmZpYyUyMGxpZ2h0fGVufDB8fDB8fHww')] h-screen w-full pt-5 flex justify-between flex-col bg-red-500">
        {/* Your content */}

        <img
          className="w-36  ml-8 mt-6 filter invert"
          src="https://imgs.search.brave.com/VS7tj4eMRj3vJiO_AWHnw2NgXaMj916xmMK72FgQ3Xs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWdz/LnNlYXJjaC5icmF2/ZS5jb20vUFNxY0dZ/MXFUZE9neFdjQ3NB/OTBqeE44YnZaZnln/SXdoXzNaV2xMRHRR/ay9yczpmaXQ6NTAw/OjA6MDowL2c6Y2Uv/YUhSMGNITTZMeTlt/Y21WbC9iRzluYjNC/dVp5NWpiMjB2L2FX/MWhaMlZ6TDJGc2JG/OXAvYldjdk1UWTFP/VGMyTVRFdy9NSFZp/WlhJdGJHOW5ieTF3/L2JtY3VjRzVu"
          alt=""
        />

        <div className="bg-white py-3 px-3 ">
          <h2 className="text-3xl font-bold">Get Started with Uber</h2>

          <Link to="/login">
            <button className="w-full bg-black  text-white  py-3 rounded mt-5 ">
              Continue
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserHome;
