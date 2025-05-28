import React, { useContext } from "react";

import { Routes, Route } from "react-router-dom";

import UserHome from "./pages/UserHome";
import User_Login from "./pages/User_Login";
import User_signup from "./pages/User_signup";
import Captain_Login from "./pages/Captain_Login";
import Captain_Signup from "./pages/Captain_Signup";
import { UserDataContext } from "./Context/User_context";

const App = () => {
  const user = useContext(UserDataContext);
  console.log(user);
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<UserHome />} />
        <Route path="/login" element={<User_Login />} />
        <Route path="/signup" element={<User_signup />} />
        <Route path="/captain-login" element={<Captain_Login />} />
        <Route path="/Captain-Signup" element={<Captain_Signup />} />
      </Routes>
    </div>
  );
};

export default App;
