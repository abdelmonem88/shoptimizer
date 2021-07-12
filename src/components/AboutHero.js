import styled from "styled-components";
import heroBackground from "../images/about-bg.webp";

function AboutHero() {
 return (
  <Wrapper>
   <div
    className='about-hero'
    style={{
     backgroundImage: `url(${heroBackground})`,
     backgroundPosition: "top",
     backgroundSize: "cover",
    }}
   >
    <div className='container'>
     <div className='row'>
      <div className='col-md-6 col-12'>
       <div className='content'>
        <div className='text-content'>
         <h2>About us</h2>
         <p>
          We are a brand which has been born into mother nature. It's time to
          create a new feeling.
         </p>
        </div>
       </div>
      </div>
      <div className='col-md-6 col-12'></div>
     </div>
    </div>
   </div>
  </Wrapper>
 );
}

export default AboutHero;

const Wrapper = styled.div`
 .about-hero {
  height: 415px;
 }

 .content {
  height: 415px;
  display: flex;
  align-items: center;
 }

 .text-content {
  color: #fff;

  h2 {
   font-size: 40px;
   margin-bottom: 1rem;
  }

  p {
   font-size: 24px;
   color: rgba(255, 255, 255, 0.75);
  }

  @media (max-width: 767px) {
   p {
    font-size: 18px;
   }
  }
 }
`;
