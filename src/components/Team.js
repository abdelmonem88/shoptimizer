import styled from "styled-components";
import team1 from "../images/team1.webp";
import team2 from "../images/team2.webp";
import team3 from "../images/team3.webp";
import team4 from "../images/team4.webp";

function Team() {
 return (
  <Wrapper>
   <div className='team section-pd'>
    <div className='section-title'>
     <h2>Our incredible team are here for you</h2>
    </div>
    <div className='container'>
     <div className='row'>
      <div className='col-md-3 col-12 mb-3'>
       <div className='team__item text-center'>
        <img src={team1} alt='' className='img-fluid' />
        <h3>Nicole Williams</h3>
        <h5>Company Director</h5>
        <p>
         "Profit in business comes from repeat customers; customers that boast
         about your product and service, and that bring friends."
        </p>
       </div>
      </div>
      <div className='col-md-3 col-12 mb-3'>
       <div className='team__item text-center'>
        <img src={team2} alt='' className='img-fluid' />
        <h3>Bjorn Gunnarson</h3>
        <h5>Head of Design</h5>
        <p>
         "Loyal customers, they don’t just come back, they don’t simply
         recommend you, they insist that their friends do business with you."
        </p>
       </div>
      </div>
      <div className='col-md-3 col-12 mb-3'>
       <div className='team__item text-center'>
        <img src={team3} alt='' className='img-fluid' />
        <h3>Charlotte Banks</h3>
        <h5>Research & Development</h5>
        <p>
         "You’ll never have a product or price advantage again. They can be
         easily duplicated, but a strong customer focus can’t be copied."
        </p>
       </div>
      </div>
      <div className='col-md-3 col-12 mb-3'>
       <div className='team__item text-center'>
        <img src={team4} alt='' className='img-fluid' />
        <h3>Sam Gallagher</h3>
        <h5>Customer Support</h5>
        <p>
         "Get closer than ever to your customers. So close that you tell them
         what they need well before they realize it themselves."
        </p>
       </div>
      </div>
     </div>
    </div>
   </div>
  </Wrapper>
 );
}

export default Team;

const Wrapper = styled.div`
 .team {
  background-color: #f2f2f2;
 }

 .team__item {
  img {
   margin-bottom: 1.25rem;
  }

  h3 {
   margin-bottom: 0.5rem;
  }

  h5 {
   margin-bottom: 1.25rem;
   color: #8e8e8e;
  }
 }
`;
