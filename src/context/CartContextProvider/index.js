"use client";
import { updateProduct } from "@/lib/getHomeProductData";
import { updateCart } from "@/lib/updateCart";
import { currentDate } from "@/utils/constants";
import { useSession } from "next-auth/react";
import { createContext, use, useContext, useEffect, useReducer } from "react";
import { useAppContext } from "../AppContextProvider";

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
  const { dispatch: dispatchProduct } = useAppContext();

  function cartInit(item) {
    if (Array.isArray(item)) dispatch({ cart: [...cartState.cart, ...item] });
  }

  function addItem(item) {
    if (!userSession?.data?.user) {
      dispatchProduct({ signIn: true });
      return;
    }
    dispatch({ cart: [...cartState.cart, item] });
  }

  async function updateCount(id, count, productId, userId) {
    if (!userSession?.data?.user) {
      dispatchProduct({ signIn: true });
      return;
    }

    const clickedCartIndex = cartState.cart.findIndex((item) => item.id === id);

    const response = await updateCart(id, {
      quantity: count,
      ...(count === 0 && { isRemoved: true }),
    });
    const clickedCartItem = cartState.cart.find((item) => item.id === id);
    if (count) {
      dispatch({
        cart: [
          ...cartState?.cart?.slice(0, clickedCartIndex),
          {
            ...clickedCartItem,
            attributes: {
              ...clickedCartItem.attributes,
              quantity: response?.data?.attributes?.quantity ?? count,
            },
          },
          ...cartState?.cart?.slice(clickedCartIndex + 1),
        ],
      });
    } else {
      dispatch({
        cart: [
          ...cartState?.cart?.slice(0, clickedCartIndex),
          ...cartState?.cart?.slice(clickedCartIndex + 1),
        ],
      });
    }
  }

  function emptyCart(cartIds, payload) {
    try {
      payload.map((product) => {
        updateProduct(product.id, { items: product.quantity });
      });
      cartIds.map((id) => {
        updateCart(id, {
          isPurchased: true,
        });
      });
      dispatch({ cart: [] });
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <CartContext.Provider
      value={{ cartState, addItem, cartInit, updateCount, emptyCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartProvider = () => useContext(CartContext);
