"use client";
import { createContext, useContext, useReducer } from "react";

export const  CourseVideoContext = createContext();

function reducer(state, action) {
  return { ...state, ...action };
}

const initialState = {
  video: {},
  isPlaying: false,
};

export const CourseVideoContextProvider = ({ children }) => {
  const [videoState, videoDispatch] = useReducer(reducer, initialState);

  return (
    <CourseVideoContext.Provider value={{ videoState, videoDispatch }}>
      {children}
    </CourseVideoContext.Provider>
  );
};

export const useCourseVideoContext = () => useContext(CourseVideoContext);
