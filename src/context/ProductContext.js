"use client";

import { createContext, useReducer } from "react";

function reducer(state, action) {
  return { ...state, ...action };
}

const initialState = {
  notifications: "0",
  itemsInCart: "0",
};

export const ProductContext = createContext({});

const ProductContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <ProductContext.Provider value={{ state, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;
