import { Link } from "react-router-dom";
import styled from "styled-components";

function Error() {
 return (
  <Wrapper>
   <div className='content-wrapper'>
    <div className='content'>
     <h1>OOPS!</h1>
     <h5>404 - The page can't be found</h5>
     <Link to='/'>
      <button className='btn error-btn'>Go to home</button>
     </Link>
    </div>
   </div>
  </Wrapper>
 );
}

export default Error;

const Wrapper = styled.div`
 .content-wrapper {
  height: 100vh;
  display: grid;
  place-items: center;
  text-align: center;
 }

 .content {
  h1 {
   font-size: 6rem;
   color: var(--orangeColor);
   font-weight: 600;
  }

  h5 {
   margin-bottom: 1rem;
  }

  .error-btn {
   background-color: var(--orangeColor);
   color: #fff;
   font-weight: 600;
   outline: none;
   transition: var(--transition);
  }

  .error-btn:hover {
   background-color: #c28102;
  }
 }
`;
