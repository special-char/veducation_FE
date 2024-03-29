"use client";
import { createContext, useContext, useReducer } from "react";

export const PurchaseContext = createContext();

function reducer(state, action) {
  return { ...state, ...action };
}

const initialPurchase = {
  purchasedItems: [],
};

export const PurchaseContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialPurchase);

  function addPurchaseItems(items) {
    if (Array.isArray(items)) dispatch({ purchasedItems: items });
  }

  return (
    <PurchaseContext.Provider
      value={{ purchaseState: state, addPurchaseItems }}
    >
      {children}
    </PurchaseContext.Provider>
  );
};

export const usePurchaseContext = () => useContext(PurchaseContext);
