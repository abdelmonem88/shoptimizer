import axios from "axios";
import { GET_PRODUCTS, GET_PRODUCT } from "./types";

const productsURL =
 "https://clothes-shop-api.netlify.app/.netlify/functions/clothes";

export const getProducts = () => async (dispatch) => {
 const response = await axios.get(productsURL);

 dispatch({
  type: GET_PRODUCTS,
  payload: response.data,
 });
};

export const getProduct = (id) => async (dispatch) => {
 const response = await axios.get(`${productsURL}?id=${id}`);

 dispatch({
  type: GET_PRODUCT,
  payload: response.data,
 });
};
