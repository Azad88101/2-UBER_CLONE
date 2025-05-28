import React, { createContext } from "react";

// Create the context
export const UserDataContext = createContext(); // ✅ use createContext()

// Define the context provider component
const User_context = ({ children }) => {
  const user = "azad";

  return (
    <UserDataContext.Provider value={{ user }}>
      {children}
    </UserDataContext.Provider>
  );
};

export default User_context; // ✅ export the component correctly
