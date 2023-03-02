import { use, useEffect } from "react";

export const useDispatch = (dispatchedFunction, gotData) => {
  useEffect(() => {
    if (gotData) {
      dispatchedFunction();
    }
    return () => {};
  }, [dispatchedFunction, gotData]);
};
