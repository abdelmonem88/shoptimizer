import featured1 from "../images/home_feature_1.jpg";
import featured2 from "../images/home_feature_2.jpg";
import featured3 from "../images/home_feature_3.jpg";
import styled from "styled-components";
import { Link } from "react-router-dom";

function HomeFeatured() {
 return (
  <Wrapper>
   <div className='featured py-5'>
    <div className='container'>
     <div className='row'>
      <div className='col-lg-4 col-md-10 col-sm-12 mx-auto mb-4'>
       <div className='featured__item'>
        <div className='img-overlay'></div>
        <div className='featured__item__img'>
         <img src={featured1} alt='' className='img-fluid' />
        </div>
        <div className='featured__item__text'>
         <div className='content'>
          <h3 className='mb-1'>Men's Shirts</h3>
          <h6 className='mb-3'>from $40</h6>
          <button className='btn'>
           <Link to='/men'>Shop Now</Link>
          </button>
         </div>
        </div>
       </div>
      </div>
      <div className='col-lg-4 col-md-10 col-sm-12 mx-auto mb-4'>
       <div className='featured__item'>
        <div className='img-overlay'></div>
        <div className='featured__item__img'>
         <img src={featured2} alt='' className='img-fluid' />
        </div>
        <div className='featured__item__text'>
         <div className='content'>
          <h3 className='mb-1'>Men's Shirts</h3>
          <h6 className='mb-3'>from $40</h6>
          <button className='btn'>
           <Link to='/women'>Shop Now</Link>
          </button>
         </div>
        </div>
       </div>
      </div>
      <div className='col-lg-4 col-md-10 col-sm-12 mx-auto mb-4'>
       <div className='featured__item'>
        <div className='img-overlay'></div>
        <div className='featured__item__img'>
         <img src={featured3} alt='' className='img-fluid' />
        </div>
        <div className='featured__item__text'>
         <div className='content'>
          <h3 className='mb-1'>Men's Shirts</h3>
          <h6 className='mb-3'>from $40</h6>
          <button className='btn'>
           <Link to='women'>Shop Now</Link>
          </button>
         </div>
        </div>
       </div>
      </div>
     </div>
    </div>
   </div>
  </Wrapper>
 );
}

export default HomeFeatured;

const Wrapper = styled.div`
 .featured__item {
  overflow: hidden;
 }

 .featured__item,
 .featured__item__img {
  position: relative;
 }

 .img-overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 2;
 }

 .featured__item img {
  transition: var(--transition);
 }

 .featured__item:hover img {
  transform: scale(1.1);
 }

 .featured__item__text {
  color: #fff;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 3;
  display: flex;
  align-items: center;
  padding: 0 1rem;

  h3 {
   font-weight: 600;
  }

  button {
   background-color: var(--greenColor);
  }

  a {
   color: #fff;
  }
 }
`;
