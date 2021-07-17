import { BsFillStarFill, BsStar } from "react-icons/bs";
import styled from "styled-components";

function Stars({ starsCount }) {
 return (
  <Wrapper>
   <div className='stars'>
    {Array.from({ length: 5 }, (_, index) => {
     return (
      <span key={index}>
       {starsCount >= index + 1 ? <BsFillStarFill /> : <BsStar />}
      </span>
     );
    })}
   </div>
  </Wrapper>
 );
}

export default Stars;

const Wrapper = styled.div`
 .stars {
  margin-bottom: 0.25rem;

  svg {
   color: #ffb900;
   font-size: 14px;
   margin-right: 2px;
  }
 }
`;
