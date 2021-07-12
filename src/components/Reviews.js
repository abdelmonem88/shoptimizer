import styled from "styled-components";
import reviewsBackground from "../images/reviews-bg.webp";
import review1 from "../images/reviews01.jpg";
import review2 from "../images/reviews02.jpg";

function Reviews() {
 return (
  <Wrapper>
   <div
    className='reviews'
    style={{
     backgroundImage: `url(${reviewsBackground})`,
     backgroundSize: "cover",
     backgroundPosition: "center center",
    }}
   >
    <div className='container'>
     <div className='row'>
      <div className='col-md-6 col-12 mb-3'>
       <div className='review__item left'>
        <p>
         I’m so happy with the service from Shoptimizer – my order was delivered
         within 48 hours and the thought and care they put into their products
         really stands out. Plus, their support is just awesome!
        </p>
        <div className='reviwer__details'>
         <div className='img-wrapper'>
          <img src={review1} alt='' className='img-fluid' />
         </div>
         <div className='text'>
          <h4>Sean Walsh</h4>
          <h5>London, UK</h5>
         </div>
        </div>
       </div>
      </div>
      <div className='col-md-6 col-12 mb-3'>
       <div className='review__item right'>
        <p>
         Fabulous top bought as a birthday gift for a friend who wears it almost
         every day. Smart packaging which looks exciting and special. Very good
         on delivery. Will purchase it again as a gift and for myself!
        </p>
        <div className='reviwer__details'>
         <div className='img-wrapper'>
          <img src={review2} alt='' className='img-fluid' />
         </div>
         <div className='text'>
          <h4>Astrid Sorensen</h4>
          <h5>Oslo, Norway</h5>
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

export default Reviews;

const Wrapper = styled.div`
 .reviews {
  padding: 6rem 0;
  color: #fff;
 }

 .review__item.left {
  padding-right: 0.75rem;
 }
 .review__item.right {
  padding-left: 0.75rem;
 }

 .review__item {
  p {
   font-size: 19px;
   text-align: center;
   margin-bottom: 2rem;
   line-height: 1.7;
  }
 }

 .reviwer__details {
  display: flex;
  justify-content: center;
  align-items: center;

  .img-wrapper {
   width: 90px;
   height: 90px;
   margin-right: 1rem;

   img {
    border-radius: 50%;
   }
  }

  .text {
   h4,
   h5 {
    text-align: left;
   }

   h5 {
    color: rgba(255, 255, 255, 0.7);
   }
  }
 }

 @media (max-width: 767px) {
  .review__item.left,
  .review__item.right {
   padding: 0;
  }
 }
`;
