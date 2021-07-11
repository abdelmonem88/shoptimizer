import axios from "axios";
import { GET_PRODUCTS } from "./types";

const productsURL =
 "https://clothes-shop-api.netlify.app/.netlify/functions/clothes";

export const getProducts = () => async (dispatch) => {
 const response = await axios.get(productsURL);

 dispatch({
  type: GET_PRODUCTS,
  payload: response.data,
 });
};
