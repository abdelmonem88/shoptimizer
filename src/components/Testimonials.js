import styled from "styled-components";
import testimonial1 from "../images/testimonial_01.webp";
import testimonial2 from "../images/testimonial_02.webp";

function Testimonials() {
 return (
  <Wrapper>
   <div className='section-border section-pd'>
    <div className='section-title'>
     <h2>Real talk from our real customers</h2>
     <p>
      Loyal customers, they don’t just come back, they don’t simply recommend
      you, they insist that their friends do business with you.
     </p>
    </div>
    <div className='container'>
     <div className='row align-items-center'>
      <div className='col-md-6 col-sm-12 mb-5'>
       <div className='testimonial__item pt-5'>
        <p>
         "I just can’t recommend Shoptimizer enough. I feel like I’m on a
         first-name basis with some of the crew, they’re just so unbelievably
         helpful, no matter what the question. Their products are also so
         beautifully well made and easy to maintain, they’ll last for years to
         come."
        </p>
        <h4>Laura Fitzgerald</h4>
       </div>
      </div>
      <div className='col-md-6 col-sm-12 mb-5'>
       <img src={testimonial1} alt='' className='img-fluid' />
      </div>
      <div className='col-md-6 col-sm-12 mb-5'>
       <img src={testimonial2} alt='' className='img-fluid' />
      </div>
      <div className='col-md-6 col-sm-12 mb-5'>
       <div className='testimonial__item pt-5'>
        <p>
         "Every order from Shoptimizer has been an amazing experience. their
         site provides lots of detail so I know exactly what I’m getting and
         their customer support is just outstanding. I needed to swap an item
         for a different size and they arranged everything for me within 24
         hours. "
        </p>
        <h4>Kevin Walsh</h4>
       </div>
      </div>
     </div>
    </div>
   </div>
  </Wrapper>
 );
}

export default Testimonials;

const Wrapper = styled.div`
 .testimonial__item {
  p {
   line-height: 26px;
   font-size: 18px;
   margin-bottom: 2rem;
  }

  h4 {
   font-size: 26px;
   font-weight: 600;
  }
 }
`;
