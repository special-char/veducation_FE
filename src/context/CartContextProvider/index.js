"use client";
import { getCartItems } from "@/lib/getCartItems";
import { addToCart } from "@/lib/updateCart";
import { createContext, use, useContext, useEffect, useReducer } from "react";

const initialState = {
  cart: [],
};

export const CartContext = createContext(initialState);

function reducer(state, action) {
  return { ...state, ...action };
}

export const CartContextProvider = ({ children }) => {
  const [cartState, dispatch] = useReducer(reducer, initialState);

  // console.log(defaultCartItems);

  function addItem(item) {
    if (Array.isArray(item)) {
      dispatch({ cart: [...cartState.cart, ...item] });
      return;
    }
    dispatch({ cart: [...cartState.cart, item] });
  }

  async function updateCount(id, count, productId, userId) {
    const clickedCartIndex = cartState.cart.findIndex((item) => item.id === id);
    const response = await addToCart(productId, userId, count, id);
    const clickedCartItem = cartState.cart.find((item) => item.id === id);
    const newCount = response?.data?.attributes?.count;
    console.log({ response }, "response from context");
    dispatch({
      cart: [
        ...cartState?.cart?.slice(0, clickedCartIndex),
        {
          ...clickedCartItem,
          attributes: { ...clickedCartItem.attributes, quantity: count },
        },
        ...cartState?.cart?.slice(clickedCartIndex + 1),
      ],
    });
    console.log({ clickedCartIndex, clickedCartItem, cart: cartState?.cart });
  }

  return (
    <CartContext.Provider value={{ cartState, addItem, updateCount }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCartProvider = () => useContext(CartContext);
