"use client";
import { createContext, useContext, useReducer } from "react";

export const RatingContext = createContext();

function reducer(state, action) {
  return { ...state, ...action };
}

const initialState = {
  ratings: [],
};

export const RatingContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  function initAdd(ratings) {
    if (Array.isArray(ratings?.data)) {
      dispatch({ ratings });
      return;
    }
  }

  return (
    <RatingContext.Provider value={{ rateState: state, initAdd }}>
      {children}
    </RatingContext.Provider>
  );
};

export const useRatingContext = () => useContext(RatingContext);
