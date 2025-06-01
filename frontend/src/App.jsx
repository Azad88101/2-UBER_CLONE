import React, { useContext } from "react";

import { Routes, Route } from "react-router-dom";

import GetStart from "./pages/GetStart";
import User_Login from "./pages/User_Login";
import User_signup from "./pages/User_signup";
import Captain_Login from "./pages/Captain_Login";
import Captain_Signup from "./pages/Captain_Signup";
import { UserDataContext } from "./Context/User_context";
import Home from "./pages/Home";
import UserProtectedWrapper from "./pages/UserProtectedWrapper";
import UserLogout from "./pages/UserLogout";
import CaptainHome from "./pages/CaptainHome";
import CaptainProtectedWrapper from "./pages/CaptainProtectedWrapper";
import CaptainLogout from "./pages/CaptainLogout";

const App = () => {
  const user = useContext(UserDataContext);
  // console.log(user);
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<GetStart />} />

        <Route
          path="/home"
          element={
            <UserProtectedWrapper>
              <Home />
            </UserProtectedWrapper>
          }
        />

        <Route
          path="/captain-home"
          element={
            <CaptainProtectedWrapper>
              <CaptainHome />
            </CaptainProtectedWrapper>
          }
        />
        <Route path="/login" element={<User_Login />} />
        <Route path="/signup" element={<User_signup />} />
        <Route path="/user/logout" element={<UserLogout />} />
        <Route path="/captain/logout" element={<CaptainLogout />} />
        <Route path="/captain-login" element={<Captain_Login />} />
        <Route path="/Captain-Signup" element={<Captain_Signup />} />
      </Routes>
    </div>
  );
};

export default App;
