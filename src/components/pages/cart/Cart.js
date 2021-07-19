import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Navbar from "../../Navbar";
import DiscountBanner from "../../DiscountBanner";
import Sidebar from "../../Sidebar";
import Footer from "../../Footer";
import styled from "styled-components";
import { RiCloseCircleLine } from "react-icons/ri";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
import formatPrice from "../../../helpers/formatPrice";
import { toggleCartItemCount, deleteCartItem } from "../../../actions";

function Cart() {
 const [toggleSidebar, setToggleSidebar] = useState(false);
 const dispatch = useDispatch();
 const cart = useSelector((state) => state.cart);
 const shipingFees = 500;

 const totalPrices = cart.reduce((total, item) => {
  total = total + item.count * item.price;
  return total;
 }, 0);

 useEffect(() => {
  localStorage.setItem("cart", JSON.stringify(cart));
 }, [cart]);

 return (
  <Wrapper>
   <Navbar setToggleSidebar={setToggleSidebar} />
   <DiscountBanner />
   <Sidebar toggleSidebar={toggleSidebar} setToggleSidebar={setToggleSidebar} />
   <div className='cart section-pd'>
    <div className='container'>
     <div className='row'>
      <div className='col-md-8 col-12 mb-3'>
       <div className='cart__items'>
        {cart.length < 1 && (
         <div className='empty-cart'>
          <h1>
           Your cart is empty!! <br />
          </h1>
          <button className='btn redirect-btn'>
           {<Link to='/'>Fill it</Link>}
          </button>
         </div>
        )}
        {cart.map((item) => {
         return (
          <div className='cart__item' key={item.id}>
           <div className='item__image'>
            <img src={item.image} alt='' className='img-fluid' />
           </div>
           <div className='item__details'>
            <div className='upper'>
             <div>
              <h6>{item.name}</h6>
              <h6>{formatPrice(item.price)}</h6>
             </div>
             <div
              className='delete-icon'
              onClick={() => {
               dispatch(deleteCartItem(item.id));
              }}
             >
              <RiCloseCircleLine />
             </div>
            </div>
            <div className='item__quantity'>
             <h6>Quantity:</h6>
             <div className='quantity-details'>
              <div className='quantity'>{item.count}</div>
              <div className='quantity-control'>
               <button
                onClick={() => {
                 dispatch(toggleCartItemCount(item.id, "inc"));
                }}
               >
                <MdKeyboardArrowUp />
               </button>
               <button
                onClick={() => {
                 dispatch(toggleCartItemCount(item.id, "dec"));
                }}
               >
                <MdKeyboardArrowDown />
               </button>
              </div>
             </div>
            </div>
            <div className='item-subtotal'>
             <h6>Subtotal:</h6>
             <h6>{formatPrice(item.count * item.price)}</h6>
            </div>
           </div>
          </div>
         );
        })}
       </div>
      </div>
      <div className='col-md-4 col-12 mb-3'>
       <div className='cart__totals'>
        <div className='subtotal'>
         <span>Subtotal</span>
         <span>{formatPrice(totalPrices)}</span>
        </div>
        <div className='shipping-fees'>
         <span>Shipping Fees</span>
         <span>{formatPrice(shipingFees)}</span>
        </div>
        <div className='total'>
         <span>Total</span>
         <span>{formatPrice(totalPrices + shipingFees)}</span>
        </div>
       </div>
       <div className='checkout_btn'>
        <button className='btn'>Proceed to check out</button>
       </div>
      </div>
     </div>
    </div>
   </div>
   <Footer />
  </Wrapper>
 );
}

export default Cart;

const Wrapper = styled.div`
 .cart {
  min-height: 80vh;
 }

 .cart__item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #e2e2e2;
  padding: 1rem 0;
  .item__image {
   flex-basis: 110px;
  }

  .item__details {
   flex-basis: 80%;
   padding-left: 1rem;
   .upper {
    display: flex;
    justify-content: space-between;
    text-transform: capitalize;
    border-bottom: 1px solid #f2f2f2;
    padding-bottom: 0.25rem;

    h6 {
     margin-bottom: 0.25rem;
    }

    .delete-icon svg {
     font-size: 20px;
     color: var(--grayColor);
     transition: var(--transition);
     cursor: pointer;
    }

    .delete-icon svg:hover {
     color: var(--darColor);
    }
   }

   .item__quantity {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #f2f2f2;
    padding: 0.5rem 0;

    h6 {
     font-weight: 600;
    }

    .quantity-details {
     display: flex;
     align-items: center;
    }

    .quantity {
     background-color: #eee;
     text-align: center;
     align-self: stretch;
     display: flex;
     align-items: center;
     padding: 0 0.75rem;
     font-weight: 600;
    }

    .quantity-control {
     display: flex;
     flex-direction: column;
     background-color: red;

     button {
      background-color: #fff;
      padding: 0;
      font-size: 18px;
      padding: 0 0.25rem;
      border: 1px solid #f2f2f2;
      color: var(--grayColor);
     }
    }
   }
  }
 }

 .item-subtotal {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 0;

  h6 {
   font-weight: 600;
  }
 }

 .cart__totals {
  background-color: #f9f9f9;
  padding: 0 1.5rem;
  border: 1px solid #e2e2e2;
 }

 .subtotal,
 .shipping-fees,
 .total {
  width: 100%;
  padding: 1rem 0;
  display: flex;
  justify-content: space-between;
 }

 .shipping-fees {
  padding-top: 0;
 }

 .total {
  border-top: 1px solid #e2e2e2;
  font-size: 18px;
  font-weight: 600;
 }

 .checkout_btn button {
  width: 100%;
  background-color: var(--greenColor);
  color: #fff;
  text-align: center;
  font-weight: 600;
  margin-top: 1rem;
  border-radius: 3px;
 }

 .empty-cart {
  font-size: 30px;

  h1 {
   margin-bottom: 1rem;
  }

  a {
   color: #fff;
   font-weight: 600;
  }

  .redirect-btn {
   background-color: var(--greenColor);
   outline: none;
  }
 }

 @media (max-width: 575px) {
  .cart {
   font-size: 13px;

   h6 {
    font-size: 13px;
   }
  }
 }
`;
