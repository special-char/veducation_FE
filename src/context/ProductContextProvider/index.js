"use client";
const { createContext, useReducer } = require("react");

const initialState = {
  cartItems: 0,
  notifications: 0,
  signIn: false,
  cart: [],
  authToken: "",
};

export const ProductContext = createContext(initialState);

function reducer(state, action) {
  return { ...state, ...action };
}

const ProductContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ProductContext.Provider value={{ state, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;
