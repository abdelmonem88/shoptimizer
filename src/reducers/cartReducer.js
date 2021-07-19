import {
 ADD_CART_ITEM,
 TOGGLE_CART_ITEM_COUNT,
 DELETE_CART_ITEM,
} from "../actions/types";

const getCart = () => {
 let cart = localStorage.getItem("cart");
 if (cart) {
  cart = JSON.parse(localStorage.getItem("cart"));
 } else {
  return [];
 }
 return cart;
};

const cartReducer = (state = getCart(), action) => {
 //Add item
 if (action.type === ADD_CART_ITEM) {
  const { id, name, price, count, stock } = action.payload;
  const image = action.payload.images[0];
  const currentItem = { id, name, image, price, count, stock };

  const tempItem = state.find((item) => {
   return item.id === id;
  });

  if (tempItem) {
   const tempCart = state.map((item) => {
    if (item.id === id) {
     let newCount = item.count + count;
     if (newCount > stock) {
      newCount = stock;
     }
     return { ...item, count: newCount };
    }
    return item;
   });

   return [...tempCart];
  } else {
   return [...state, currentItem];
  }
 }

 //toggle item count
 if (action.type === TOGGLE_CART_ITEM_COUNT) {
  let tempCart = state.map((item) => {
   const { id, value } = action.payload;
   if (item.id === id) {
    if (value === "inc") {
     const newCount = item.count + 1;
     if (newCount > item.stock) {
      return { ...item, count: item.stock };
     }
     return { ...item, count: newCount };
    } else {
     let newCount = item.count - 1;
     if (newCount < 1) {
      newCount = 1;
     }

     return { ...item, count: newCount };
    }
   }
   return item;
  });

  return [...tempCart];
 }

 //delete cart item
 if (action.type === DELETE_CART_ITEM) {
  let tempCart = state.filter((item) => item.id !== action.payload);

  return [...tempCart];
 }

 return state;
};

export default cartReducer;
