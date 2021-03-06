import styled from "styled-components";
import formatPrice from "../helpers/formatPrice";
import { Link, useHistory } from "react-router-dom";
import Stars from "./Stars";
import { addToCart } from "../actions";
import { useDispatch } from "react-redux";

function Product({ id, fields, col_lg }) {
 const history = useHistory();
 const dispatch = useDispatch();
 const { name, category, discount, stock, price, stars } = fields;
 const oldPrice = fields.oldPrice > price ? fields.oldPrice : "";
 const firstImage = fields.images[0].thumbnails.large.url;
 const secondImage = fields.images[1].thumbnails.large.url;
 const images = [firstImage, secondImage];
 const count = 1;
 const cartProduct = { id, name, images, price, stock, count };

 return (
  <>
   <Wrapper
    className={`${
     col_lg === 3
      ? "col-lg-3 col-md-6 col-sm-12 mb-3"
      : "col-lg-4 col-md-6 col-sm-12 mb-3"
    }`}
   >
    <div className='product'>
     {discount > 0 ? (
      <div className='product__discount'>-{discount * 100}%</div>
     ) : (
      ""
     )}
     {stock === 0 && <h6 className='out-of-stock'>Out of stock</h6>}
     <Link to={`products/${id}`}>
      <div className='product__img mb-3'>
       <img src={firstImage} alt='' className='img-fluid first' />
       <img src={secondImage} alt='' className='img-fluid second' />
      </div>
     </Link>
     <h6 className='product__category'>{category}</h6>
     <h5 className='product__name'>{name}</h5>
     <h5 className='product__stars'>
      <Stars starsCount={stars} />
     </h5>
     <h6 className='product__prices mb-3'>
      {oldPrice !== "" ? (
       <span className='old-price'>{formatPrice(oldPrice)}</span>
      ) : (
       ""
      )}
      <span className='price'>{formatPrice(price)}</span>
     </h6>
     {stock ? (
      <button
       className='btn product__btn'
       onClick={() => {
        dispatch(addToCart(cartProduct));
        history.push("/cart");
       }}
      >
       Add to cart
      </button>
     ) : null}
    </div>
   </Wrapper>
  </>
 );
}

export default Product;

const Wrapper = styled.div`
 .product {
  position: relative;
  transition: var(--transition);
  padding: 1rem;
 }

 .product__discount {
  color: #fff;
  background-color: var(--greenColor);
  width: 50px;
  height: 50px;
  line-height: 50px;
  border-radius: 50%;
  text-align: center;
  position: absolute;
  left: 8px;
  top: 5px;
 }

 .out-of-stock {
  position: absolute;
  background-color: #fff;
  border-radius: 10px;
  font-size: 13px;
  padding: 0 0.25rem;
  top: 25px;
  left: 50%;
  transform: translateX(-50%);
 }

 .product__img {
  transition: var(--transition);

  img.second {
   display: none;
  }
 }

 .product__category {
  color: #43454b;
  margin-bottom: 0.25rem;
  font-size: 14px;
 }

 .product__name {
  color: var(--darkColor);
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 0.25rem;
  text-transform: capitalize;
 }

 .product__prices {
  .price {
   color: var(--orangeColor);
   font-size: 15px;
  }

  .old-price {
   margin-right: 0.5rem;
   text-decoration: line-through;
   font-size: 14px;
   color: #a6a6a6;
  }
 }

 .product__btn {
  width: 100%;
  background-color: var(--greenColor);
  color: #fff;
  font-weight: 600;
  transition: var(--transition);
  opacity: 0;
  visibility: hidden;
 }

 .product:hover {
  box-shadow: 0px 0px 10px #ddd;
 }

 .product:hover .product__btn {
  opacity: 1;
  visibility: visible;
 }

 .product:hover img.first {
  display: none;
 }

 .product:hover img.second {
  display: block;
 }

 @media (max-width: 767px) {
  .product .product__btn {
   opacity: 1;
   visibility: visible;
  }
 }
`;
