import React, { createContext, useContext, useState } from "react";

export const The_Context = createContext();
export const MyProvider = ({ children }) => {
  const [access_token, setAccess_token] = useState("");

  return (
    <The_Context.Provider value={{ access_token, setAccess_token }}>
      {children}
    </The_Context.Provider>
  );
};
