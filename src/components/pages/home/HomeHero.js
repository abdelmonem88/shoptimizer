import { CgArrowLongRight } from "react-icons/cg";
import styled from "styled-components";
import heroImgae from "../../../images/hero_girl_optimized_0321.jpg";

function HomeHero() {
 return (
  <Wrapper>
   <div className='hero'>
    <div className='container'>
     <div className='row'>
      <div className='col-lg-6 col-sm-12 mx-auto mb-5'>
       <div className='hero__text'>
        <div className='hero__text__content'>
         <h2 className='hero__title mb-4'>Up to 50% off!</h2>
         <p className='hero__desc mb-4'>
          Don't miss out on some very special items at{" "}
          <span>extraordinary</span> sale prices. For a limited time!
         </p>
         <button className='btn hero__btn mb-4'>
          Pick up a bargain <CgArrowLongRight />
         </button>
         <h6 className='hero__code'>With code: SUMMERSALE</h6>
        </div>
       </div>
      </div>
      <div className='col-lg-6 col-sm-6 mx-auto'>
       <div className='hero__img'>
        <img src={heroImgae} alt='' className='img-fluid' />
       </div>
      </div>
     </div>
    </div>
   </div>
  </Wrapper>
 );
}

export default HomeHero;

const Wrapper = styled.div`
 .hero {
  background-color: #e1e6ef;
  padding-top: 2rem;
 }

 .hero__text {
  height: 100%;
  display: flex;
  align-items: center;

  .hero__text__content {
   height: 100%;
   padding-top: 3rem;
  }
 }

 .hero__title {
  font-size: 3rem;
  font-weight: 600;
  color: var(--darkColor);
 }

 .hero__desc {
  font-size: 18px;

  span {
   font-weight: 600;
  }
 }

 .hero__btn {
  background-color: var(--greenColor);
  color: #fff;
  padding: 1rem 2rem !important;
  font-weight: 600;
  letter-spacing: 1px;
  transition: var(--transition);
 }

 .hero__btn:hover {
  transform: scale(1.1);
 }
`;
