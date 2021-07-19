import React from "react";
import { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { IoIosAirplane } from "react-icons/io";
import { BiUserCircle } from "react-icons/bi";
import { FiArrowRightCircle } from "react-icons/fi";
import { BsBag } from "react-icons/bs";
import { GoThreeBars } from "react-icons/go";
import Logo from "../images/logo.webp";
import LogoSmall from "../images/logo_small.webp";
import { Link } from "react-router-dom";
import formatPrice from "../helpers/formatPrice";
import { useHistory } from "react-router-dom";

function Navbar({ setToggleSidebar }) {
 const [fixedNav, setFixedNav] = useState(false);

 let navBottom = useRef();
 let navBottomOffsetTop = null;

 const cart = useSelector((state) => state.cart);
 const { totalCount, totalPrices } = cart.reduce(
  (total, item) => {
   total.totalCount = total.totalCount + item.count;
   total.totalPrices = total.totalPrices + item.count * item.price;
   return total;
  },
  { totalCount: 0, totalPrices: 0 }
 );

 const history = useHistory();

 useEffect(() => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  navBottomOffsetTop = navBottom.current.offsetTop;
 }, [navBottom]);

 useEffect(() => {
  const fixedNav = (e) => {
   if (window.scrollY > navBottomOffsetTop) {
    setFixedNav(true);
   } else {
    setFixedNav(false);
   }
  };
  document.addEventListener("scroll", fixedNav);
 });

 return (
  <Wrapper>
   <nav className='main-nav'>
    <div className='top-nav'>
     <div className='container'>
      <h6>
       <span className='icon'>
        <IoIosAirplane />
       </span>
       Free worldwide shipping on all orders
       <span className='bold'>over $50.00</span>
      </h6>
     </div>
    </div>
    <div className='middle-nav py-3'>
     <div className='container'>
      <div className='content'>
       <div className='logo'>
        <Link to='/'>
         <img src={Logo} alt='' width='300px' />
        </Link>
       </div>
       <div className='list'>
        <button className='text-center'>
         <span className='icon'>
          <BiUserCircle />
         </span>
         <h6>My Account</h6>
        </button>
        <button className='text-center'>
         <span className='icon'>
          <FiArrowRightCircle />
         </span>
         <h6>Checkout</h6>
        </button>
       </div>
      </div>
     </div>
    </div>
    <div
     className={`${fixedNav ? "bottom-nav py-2 fixed" : "bottom-nav py-2"}`}
     ref={navBottom}
    >
     <div className='container'>
      <div className='content'>
       <div className='list d-flex'>
        <div className='list__links'>
         <img
          src={LogoSmall}
          alt=''
          width='25px'
          className={`${fixedNav ? "show" : ""}`}
         />
         <div className='list__link'>
          <Link to='/'>Home</Link>
         </div>
         <div className='list__link'>
          <Link to='/men'>Men</Link>
         </div>
         <div className='list__link'>
          <Link to='/women'>Women</Link>
         </div>
         <div className='list__link'>
          <Link to='/about'>About</Link>
         </div>
         <div className='list__link'>
          <Link to='/contact'>Contact</Link>
         </div>
        </div>
       </div>
       <div className='cart-details'>
        <div className='total-price'>
         <span>{formatPrice(totalPrices)}</span>
        </div>
        <div
         className='icon'
         onClick={() => {
          history.push("/cart");
         }}
        >
         <BsBag />
         <span className='count'>{totalCount}</span>
        </div>
       </div>
      </div>
     </div>
    </div>
   </nav>

   <nav className='alt-nav'>
    <div className='container-fluid'>
     <div className='content'>
      <div
       className='alt-nav__icon'
       onClick={() => {
        setToggleSidebar(true);
       }}
      >
       <GoThreeBars />
      </div>
      <div className='alt-nav__logo'>
       <img src={Logo} alt='' />
      </div>
      <div
       className='cart-icon'
       onClick={() => {
        history.push("/cart");
       }}
      >
       <BsBag />
       <span className='count'>{totalCount}</span>
      </div>
     </div>
    </div>
   </nav>
  </Wrapper>
 );
}

export default Navbar;

const Wrapper = styled.div`
 /* main-nav */
 .top-nav {
  border-bottom: 1px solid #ddd;

  h6 {
   text-align: center;
   padding: 0.5rem 0;

   .icon {
    margin-right: 0.25rem;
    font-size: 20px;
   }

   .bold {
    margin-left: 0.25rem;
   }

   .icon,
   .bold {
    color: var(--darkColor);
    font-weight: 700;
   }
  }
 }

 .middle-nav {
  .content {
   display: flex;
   justify-content: space-between;
   align-items: center;

   .list {
    display: flex;
    align-self: center;
    height: 100% !important;

    button {
     color: #404040;
     background: none;
     border: none;

     .icon {
      font-size: 24px;
     }
    }

    button:nth-child(2) {
     margin-left: 0.5rem;
    }
   }
  }
 }

 .bottom-nav {
  background-color: var(--darkColor);

  .content {
   display: flex;
   justify-content: space-between;
   align-items: center;
  }

  .list {
   color: #fff;

   img {
    position: absolute;
    left: -25%;
    transform: scale(0);
    transition: var(--transition);
   }

   img.show {
    left: 0;
    transform: scale(1);
   }

   .list__links {
    display: flex;
    transition: var(--transition);
    position: relative;

    .list__link {
     margin-right: 1rem;
     position: relative;

     a {
      color: #fff;
     }
    }

    .list__link::before {
     content: "";
     position: absolute;
     width: 0;
     height: 1px;
     bottom: 0;
     left: 0;
     background-color: var(--orangeColor);
     transition: width 0.5s ease-in-out;
    }

    .list__link:hover::before {
     width: 100%;
    }
   }

   .list__links:hover .list__link:not(:hover) {
    a {
     color: rgba(255, 255, 255, 0.75);
    }
   }
  }

  .cart-details {
   display: flex;
   align-items: center;

   .total-price {
    color: #fff;
    margin-right: 0.5rem;
   }

   .icon {
    position: relative;
    color: var(--orangeColor);
    line-height: 15px;
    cursor: pointer;

    svg {
     font-size: 34px;
     margin-bottom: 0.5rem;
    }

    .count {
     font-size: 13px;
     position: absolute;
     top: 14px;
     left: 10.5px;
    }
   }
  }
 }

 .fixed {
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 999;
 }

 .fixed .list__links {
  padding-left: 3.5rem;
 }

 /* alt-nav */
 .alt-nav {
  .content {
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding: 1rem 0;

   .alt-nav__icon {
    display: flex;
    align-items: center;
    font-size: 16px;
    cursor: pointer;

    svg {
     font-size: 22px;
    }
   }

   .alt-nav__logo {
    img {
     width: 250px;
    }
   }

   .cart-icon {
    font-size: 30px;
    position: relative;
    color: var(--orangeColor);
    cursor: pointer;

    svg {
     margin-bottom: 0.5rem;
    }

    .count {
     font-size: 14px;
     position: absolute;
     top: 14px;
     left: 8px;
    }
   }
  }
 }

 @media (max-width: 991px) {
  .main-nav {
   display: none;
  }
 }

 @media (min-width: 992px) {
  .alt-nav {
   display: none;
  }
 }

 @media (max-width: 767px) {
  .alt-nav__logo {
   img {
    width: 190px !important;
   }
  }
 }
`;
