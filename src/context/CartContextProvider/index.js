"use client";
import { getCartItems } from "@/lib/getCartItems";
import { addToCart } from "@/lib/updateCart";
import { useSession } from "next-auth/react";
import { createContext, use, useContext, useEffect, useReducer } from "react";
import { useProductsContext } from "../ProductContextProvider";

const initialState = {
  cart: [],
};

export const CartContext = createContext(initialState);

function reducer(state, action) {
  return { ...state, ...action };
}

export const CartContextProvider = ({ children }) => {
  const [cartState, dispatch] = useReducer(reducer, initialState);
  const userSession = useSession();
  const {
    state: { signIn },
    dispatch: dispatchProduct,
  } = useProductsContext();

  function cartInit(item) {
    // if (!userSession?.data?.user) {
    //   // console.log({ second: userSession?.data?.user });
    //   // dispatchProduct({ signIn: true });
    //   return;
    // }
    dispatch({ cart: [...cartState.cart, ...item] });
  }

  function addItem(item) {
    if (!userSession?.data?.user) {
      console.log({ first: userSession?.data?.user });
      dispatchProduct({ signIn: true });
      return;
    }

    dispatch({ cart: [...cartState.cart, item] });
  }

  async function updateCount(id, count, productId, userId) {
    if (!userSession?.data?.user) {
      console.log({ second: userSession?.data?.user });
      dispatchProduct({ signIn: true });
      return;
    }
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
  }

  return (
    <CartContext.Provider value={{ cartState, addItem, cartInit, updateCount }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCartProvider = () => useContext(CartContext);
