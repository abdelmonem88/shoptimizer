import { GET_PRODUCTS } from "../actions/types";


const productsReducer = (state = [], action) => {
 switch (action.type) {
  case GET_PRODUCTS:
   return [...action.payload];
  default:
   return state;
 }
};

export default productsReducer;
