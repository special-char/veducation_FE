"use client";

import { useSession } from "next-auth/react";

const { createContext, useReducer, useContext, useMemo } = require("react");

const initialState = {
  notifications: 0,
  signIn: false,
  cart: [],
  signUp: false,
  authToken: "",
  user: {},
};

export const ProductContext = createContext(initialState);

function reducer(state, action) {
  return { ...state, ...action };
}

const ProductContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = useMemo(() => ({ state, dispatch }), []);

  return (
    <ProductContext.Provider value={{ state, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProductsContext = () => useContext(ProductContext);

export default ProductContextProvider;
