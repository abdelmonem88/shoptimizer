import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";

function AddToCart({ stock, productId }) {
 const [count, setCount] = useState(1);
 return (
  <Wrapper>
   <div className='product__add'>
    <div className='count-control'>
     <div className='count'>{count}</div>
     <div className='controls'>
      <button
       className='increase'
       onClick={() => {
        stock > count && setCount(count + 1);
       }}
      >
       {<MdKeyboardArrowUp />}
      </button>
      <button
       className='decrease'
       onClick={() => {
        count > 1 && setCount(count - 1);
       }}
      >
       {<MdKeyboardArrowDown />}
      </button>
     </div>
    </div>
    <Link to='/cart' className='cart-link'>
     <button className='btn add-btn'>Add to cart</button>
    </Link>
   </div>
  </Wrapper>
 );
}

export default AddToCart;

const Wrapper = styled.div`
 .product__add,
 .count-control {
  display: flex;
 }

 .product__add {
  justify-content: space-between;
  gap: 0.5rem;
  margin-bottom: 1rem;
 }

 .count-control {
  background-color: #fff;
  border: 1px solid #ddd;
 }

 .controls {
  display: flex;
  flex-direction: column;

  .increase,
  .decrease {
   background-color: transparent;
   border: none;
   outline: none;
   padding: 0 0.5rem;
   cursor: pointer;

   svg {
    font-size: 16px;
   }
  }
 }

 .count {
  padding: 0.5rem 1rem;
  display: flex;
  align-items: center;
  border-right: 1px solid #ddd;
 }

 .cart-link {
  width: 85%;
  background-color: var(--greenColor);
  display: flex;
  border-radius: 2px;

  button {
   width: 100%;
   color: #fff;
   font-weight: 600;
   outline: none;
  }
 }
`;
