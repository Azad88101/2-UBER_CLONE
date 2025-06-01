
import React, { createContext, useState } from "react";

export const UserDataContext = createContext();

const User_context = ({ children }) => {
    const [User, setUser] = useState({
      email: "",
      fullname: {
        firstname: "",
        lastname: "",
      },
    });

  return (
    <UserDataContext.Provider value={[User, setUser]}>
      {children}
    </UserDataContext.Provider>
  );
};

export default User_context;
