import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FiCheck } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { BiCheckCircle } from "react-icons/bi";
import Navbar from "../../Navbar";
import DiscountBanner from "../../DiscountBanner";
import Sidebar from "../../Sidebar";
import Footer from "../../Footer";
import Loading from "../../Loading";
import formatPrice from "../../../helpers/formatPrice";
import Stars from "../../Stars";
import styled from "styled-components";
import { getProduct } from "../../../actions";
import AddToCart from "../../AddToCart";
import trustSymbols from "../../../images/trust-symbols.webp";

function SingelProduct() {
 const { id } = useParams();
 const [toggleSidebar, setToggleSidebar] = useState(false);
 const dispatch = useDispatch();
 const product = useSelector((state) => state.product);
 const [mainImage, setMainImage] = useState(0);

 const { name, discount, price, oldPrice, description, stars, stock, images } =
  product;

 console.log(stars);

 const rendredImages = images
  ? images.map((img, index) => {
     return (
      <img
       src={img}
       alt=''
       key={index}
       className={`${mainImage === index ? "active" : "null"}`}
       onClick={() => {
        setMainImage(index);
       }}
      />
     );
    })
  : null;

 useEffect(() => {
  dispatch(getProduct(id));

  return () => {
   dispatch(getProduct(id));
  };
 }, [dispatch, id]);

 if (!images) {
  return <Loading />;
 }

 return (
  <Wrapper>
   <Navbar setToggleSidebar={setToggleSidebar} />
   <DiscountBanner />
   <Sidebar toggleSidebar={toggleSidebar} setToggleSidebar={setToggleSidebar} />
   <div className='product section-pd'>
    <div className='container'>
     <div className='row'>
      <div className='col-md-6 col-12 mb-3 row justify-content-center'>
       <img src={images[mainImage]} alt='' />
       <div className='product__images'>{rendredImages}</div>
      </div>
      <div className='col-md-6 col-12 mb-3'>
       <div className='product__info'>
        <h5 className='product__sale'>{discount ? "Sale!" : null}</h5>
        <h2 className='product__name'>{name}</h2>
        <div className='product__price'>
         <div className='prices'>
          <span className='old-price'>{formatPrice(oldPrice)}</span>
          <span className='current-price'>{formatPrice(price)}</span>
         </div>
         <div className='product__discount'>-{discount * 100}%</div>
        </div>
        <p className='product__description'>{description}</p>
        <div className='product__stars'>
         <Stars starsCount={stars} />
        </div>
        <div className='hr'></div>
        <div className='product__stock'>
         {stock ? (
          <h6 className='in-label'>
           <FiCheck /> <span>In stock</span>
          </h6>
         ) : (
          <h6 className='out-label'>
           <MdClose /> <span>Out of stock</span>
          </h6>
         )}
        </div>
        {stock > 0 ? <AddToCart stock={stock} productId={id} /> : null}
        <div className='product__shipping'>
         <h6>Free worldwide shipping on all orders over $50.00</h6>
         <h6>
          <BiCheckCircle /> 30 days easy returns
         </h6>
         <h6>
          <BiCheckCircle /> Order yours before 2.30pm for same day dispatch
         </h6>
        </div>
        <div className='trust-symbols'>
         <h6 className='heading'>Guaranteed Safe Checkout</h6>
         <img src={trustSymbols} alt='' className='img-fluid' />
        </div>
       </div>
      </div>
     </div>
    </div>
   </div>
   <Footer />
  </Wrapper>
 );
}

export default SingelProduct;

const Wrapper = styled.div`
 .product {
  background-color: #f4f4f4;
 }

 .product__images {
  display: flex;
  /* background-color: red; */
  justify-content: center;
  margin-top: 1.5rem;

  img {
   width: 75px;
   margin: 0 0.5rem;
   cursor: pointer;
   opacity: 0.6;
  }

  img.active {
   opacity: 1;
  }
 }

 .product__sale,
 .product__name,
 .product__price,
 .product__stock {
  margin-bottom: 0.5rem;
 }

 .product__sale {
  color: var(--greenColor);
 }

 .product__name {
  color: var(--darkColor);
  text-transform: capitalize;
  font-weight: 600;
 }

 .product__price {
  display: flex;
  align-items: center;

  .prices {
   .old-price {
    text-decoration: line-through;
    color: var(--grayColor);
    font-size: 15px;
    margin-right: 0.5rem;
   }

   .current-price {
    color: var(--orangeColor);
    margin-right: 1rem;
   }
  }
  .product__discount {
   position: relative;
   font-size: 10px;
   background-color: var(--greenColor);
   color: #fff;
   width: 32px;
   text-align: left;
  }

  .product__discount::before {
   content: "";
   position: absolute;
   top: 0;
   left: -15px;
   border-style: solid;
   border-width: 7.5px;
   border-color: transparent var(--greenColor) transparent transparent;
  }
 }

 .product__description {
  margin: 0;
 }

 .product__stars {
  margin: 0.5rem 0;
 }

 .product__stock {
  .in-label {
   color: var(--greenColor);
  }

  .out-label {
   color: red;
  }
 }

 .product__shipping {
  margin-bottom: 2.5rem;

  h6:first-child {
   font-weight: 600;
   margin-bottom: 1rem;
  }

  h6:not(:first-child) {
   margin-bottom: 0.5rem;
   font-size: 14px;
  }
 }

 .trust-symbols {
  position: relative;
  width: 100%;
  border: 1px solid #ddd;
  padding: 1rem 1.5rem;

  .heading {
   position: absolute;
   padding: 0 0.5rem;
   left: 50%;
   transform: translateX(-50%);
   top: -11px;
   background-color: #f4f4f4;
   font-weight: 600;
  }
 }
`;