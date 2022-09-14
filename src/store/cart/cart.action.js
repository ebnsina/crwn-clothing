import {
  addCartItem,
  clearCartItem,
  removeCartItem,
} from "../../utils/cart/cart.utlis";
import { createAction } from "../../utils/reducer/reducer.utlis";
import { CART_ACTION_TYPES } from "./cart.types";

export const setIsCartOpen = (bool) => {
  return createAction(CART_ACTION_TYPES.SET_CART_IS_OPEN, bool);
};

export const addItemToCart = (cartItems, productToAdd) => {
  const newCartItems = addCartItem(cartItems, productToAdd);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const newCartItems = removeCartItem(cartItems, cartItemToRemove);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const clearItemFromCart = (cartItems, cartItemToClear) => {
  const newCartItems = clearCartItem(cartItems, cartItemToClear);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};
