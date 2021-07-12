import styled from "styled-components";

function NewsLetter() {
 return (
  <Wrraper>
   <div className='newsletter section-pd'>
    <div className='container'>
     <div className='row align-items-center'>
      <div className='col-lg-6 col-md-12 mb-3'>
       <h3>Sign up to our newsletter and receive 10% off your first order!</h3>
      </div>
      <div className='col-lg-6 col-md-12'>
       <form>
        <div className='input-control'>
         <input type='text' placeholder='Your Email Address' />
        </div>
        <div className='input-control'>
         <button type='submit' className='btn form-btn'>
          Sign Up
         </button>
        </div>
       </form>
      </div>
     </div>
    </div>
   </div>
  </Wrraper>
 );
}

export default NewsLetter;

const Wrraper = styled.div`
 .newsletter {
  background-color: #222;

  h3 {
   color: #fff;
   font-size: 2.3vw;
  }

  form {
   position: relative;

   input[type="text"] {
    width: 100%;
    line-height: 1.5;
    padding: 0.42rem 0.75rem;
    padding-right: 6rem;
    border: none;
    outline: none;
    border-radius: 0.25rem;
   }

   button {
    color: #fff;
    position: absolute;
    background-color: var(--orangeColor);
    top: 0;
    right: 0;
   }
  }
 }

 @media (max-width: 567px) {
  .newsletter {
   h3 {
    font-size: 16px;
   }
  }
 }
`;
