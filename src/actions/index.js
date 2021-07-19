import axios from "axios";
import {
 GET_PRODUCTS,
 ADD_CART_ITEM,
 TOGGLE_CART_ITEM_COUNT,
 DELETE_CART_ITEM,
} from "./types";

const productsURL =
 "https://clothes-shop-api.netlify.app/.netlify/functions/clothes";

export const getProducts = () => async (dispatch) => {
 const response = await axios.get(productsURL);

 dispatch({
  type: GET_PRODUCTS,
  payload: response.data,
 });
};

export const addToCart = (item) => {
 return {
  type: ADD_CART_ITEM,
  payload: item,
 };
};

export const toggleCartItemCount = (id, value) => {

 return {
  type: TOGGLE_CART_ITEM_COUNT,
  payload: { id, value },
 };
};

export const deleteCartItem = (id) => {

 return {
  type: DELETE_CART_ITEM,
  payload: id,
 };
};
