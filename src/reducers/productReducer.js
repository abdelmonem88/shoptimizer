import { GET_PRODUCT } from "../actions/types";

const productReducer = (state = {}, action) => {
 if (action.type === GET_PRODUCT) {
  const { name, discount, price, oldPrice, description, stars, stock } =
   action.payload.fields;
  const firstImage = action.payload.fields.images[0].thumbnails.large.url;
  const secondImage = action.payload.fields.images[1].thumbnails.large.url;
  const images = [firstImage, secondImage];
  return {
   name,
   discount,
   price,
   oldPrice,
   description,
   stars,
   stock,
   images,
  };
 }

 return state;
};

export default productReducer;
