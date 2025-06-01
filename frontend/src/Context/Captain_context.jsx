import React, { createContext, useContext, useState } from "react";

export const CaptainDataContext = createContext();


const Captain_context = ({ children }) => {
const [Captain, setCaptain] = useState(null)
const [IsLoading, setIsLoading] = useState(true)
const [errors, setErrors] = useState(null)

const updateCaptain = (captainData)=>{
    setCaptain(captainData);

}


const value= {
    Captain,
    setCaptain,
    IsLoading,
    setIsLoading,
    Error,
    setErrors,
    updateCaptain

}

  return <CaptainDataContext.Provider value={ value}>{children}</CaptainDataContext.Provider>;
};

export default Captain_context;
