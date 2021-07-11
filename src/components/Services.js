import styled from "styled-components";
import serviceImg1 from "../images/light-bulb-outlined.webp";
import serviceImg2 from "../images/chatting-speech-bubbles.webp";
import serviceImg3 from "../images/shopping-cart-sketch.webp";

function Services() {
 return (
  <Wrapper>
   <div className='section-border section-pd'>
    <div className='section-title'>
     <h2>Why Shoptimizer?</h2>
     <p>
      We believe in easy access to things that are good for our mind, body and
      spirit. With a clever offering, superb support and a secure checkout
      you’re in good hands.
     </p>
    </div>
    <div className='container'>
     <div className='row'>
      <div className='col-md-4 col-sm-12 mb-3 text-center'>
       <div className='service__item'>
        <div className='service__item__img mb-4'>
         <img src={serviceImg1} alt='' />
        </div>
        <h3 className='service__item__title mb-3'>Smart ideas</h3>
        <p className='service__item__desc'>
         With dozens of intelligent concepts, you’ll find what you’re looking
         for in our store, and it will be unique and personalized to match.
        </p>
       </div>
      </div>
      <div className='col-md-4 col-sm-12 mb-3 text-center'>
       <div className='service__item'>
        <div className='service__item__img mb-4'>
         <img src={serviceImg2} alt='' />
        </div>
        <h3 className='service__item__title mb-3'>Outstanding support</h3>
        <p className='service__item__desc'>
         Our customer support is second to none – users rave about how we don’t
         rest until every issue is solved to their satisfaction.
        </p>
       </div>
      </div>
      <div className='col-md-4 col-sm-12 mb-3 text-center'>
       <div className='service__item'>
        <div className='service__item__img mb-4'>
         <img src={serviceImg3} alt='' />
        </div>
        <h3 className='service__item__title mb-3'>Secure checkout</h3>
        <p className='service__item__desc'>
         With 128-bit SSL security with advanced encryption you are guaranteed
         that your purchases are safe.
        </p>
       </div>
      </div>
     </div>
    </div>
   </div>
  </Wrapper>
 );
}

export default Services;

const Wrapper = styled.div`
 .service__item__img img {
  width: 100px;
 }

 .service__item__title {
  color: var(--darkColor);
  font-weight: 600;
 }
`;
