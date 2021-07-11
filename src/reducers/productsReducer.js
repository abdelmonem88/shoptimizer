import { GET_PRODUCTS } from "../actions/types";

// eslint-disable-next-line
export default (state = [], action) => {
 switch (action.type) {
  case GET_PRODUCTS:
   return [...action.payload];
  default:
   return state;
 }
};
