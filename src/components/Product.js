import styled from "styled-components";
import formatPrice from "../helpers/formatPrice";
import { useHistory } from "react-router-dom";
import { BsFillStarFill, BsStar } from "react-icons/bs";

function Product({ id, fields, col_lg }) {
 const history = useHistory();
 const { name, category, discount, price, stars } = fields;
 const oldPrice = fields.oldPrice > price ? fields.oldPrice : "";
 const firstImage = fields.images[0].thumbnails.large.url;
 const secondImage = fields.images[1].thumbnails.large.url;
 const productStars = Array.from({ length: 5 }, (_, index) => {
  return (
   <span key={index}>
    {stars >= index + 1 ? <BsFillStarFill /> : <BsStar />}
   </span>
  );
 });

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
     <div className='product__img mb-3'>
      <img src={firstImage} alt='' className='img-fluid first' />
      <img src={secondImage} alt='' className='img-fluid second' />
     </div>
     <h6 className='product__category'>{category}</h6>
     <h5 className='product__name'>{name}</h5>
     <h5 className='product__stars'>{productStars}</h5>
     <h6 className='product__prices mb-3'>
      {oldPrice !== "" ? (
       <span className='old-price'>{formatPrice(oldPrice)}</span>
      ) : (
       ""
      )}
      <span className='price'>{formatPrice(price)}</span>
     </h6>
     <button className='btn product__btn' onClick={() => history.push("/cart")}>
      Add to cart
     </button>
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

 .product__stars {
  margin-bottom: 0.25rem;

  svg {
   color: #ffb900;
   font-size: 14px;
   margin-right: 2px;
  }
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
`;
