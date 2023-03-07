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
      dispatch({ ratings: ratings.data });
      return;
    }
  }

  function addRating(payload) {
    dispatch({ ratings: [...state.ratings, payload] });
  }

  function updateContextRating(rate) {
    const index = state.ratings.findIndex((r) => r.id === rate.id);
    const currentRate = state.ratings.find((r) => r.id === rate.id);
    dispatch({
      ratings: [
        ...state.ratings.slice(0, index),
        {
          ...currentRate,
          attributes: {
            ...currentRate.attributes,
            rating: rate?.attributes?.rating,
          },
        },
        ...state.ratings.slice(index + 1),
      ],
    });
  }

  return (
    <RatingContext.Provider
      value={{ rateState: state, initAdd, addRating, updateContextRating }}
    >
      {children}
    </RatingContext.Provider>
  );
};

export const useRatingContext = () => useContext(RatingContext);
