"use client";

import { useSession } from "next-auth/react";

const { createContext, useReducer, useContext, useMemo } = require("react");

const initialState = {
  notifications: 0,
  signIn: false,
  signUp: false,
  authToken: "",
  user: {},
};

export const AppContext = createContext(initialState);

function reducer(state, action) {
  return { ...state, ...action };
}

const AppContextProvider = ({ children, user }) => {
  const [state, dispatch] = useReducer(reducer, {
    ...initialState,
    user: { ...user },
  });

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);

export default AppContextProvider;
