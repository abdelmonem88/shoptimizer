import styled from "styled-components";
import { BiCopyright } from "react-icons/bi";

function Footer() {
 return (
  <Wrapper>
   <footer>
    <h5>
     All right reserved to
     <span>
      <BiCopyright />
     </span>
     Shoptimizer{`${new Date().getFullYear()}`}
    </h5>
   </footer>
  </Wrapper>
 );
}

export default Footer;

const Wrapper = styled.div`
 footer {
  background-color: var(--darkColor);
  color: #fff;
  text-align: center;
  padding: 1rem 0;

  span {
   margin: 0 0.25rem;
  }
 }
`;
