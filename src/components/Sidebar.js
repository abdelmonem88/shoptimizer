import { AiOutlineClose } from "react-icons/ai";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Sidebar({ toggleSidebar, setToggleSidebar }) {
 return (
  <Wrapper>
   <div
    className={`${toggleSidebar ? "overlay show" : "overlay"}`}
    onClick={(e) => setToggleSidebar(false)}
   >
    <div className='sidebar' onClick={(e) => e.stopPropagation()}>
     <div className='close-icon' onClick={(e) => setToggleSidebar(false)}>
      <AiOutlineClose />
     </div>
     <h6>LINKS</h6>
     <ul className='sidebar__links mb-4'>
      <li className='sidebar__link'>
       <Link to='/'>Home</Link>
      </li>
      <li className='sidebar__link'>
       <Link to='/men'>Men</Link>
      </li>
      <li className='sidebar__link'>
       <Link to='/women'>Women</Link>
      </li>
      <li className='sidebar__link'>
       <Link to='/about'>About</Link>
      </li>
      <li className='sidebar__link'>
       <Link to='/contact'>Contact</Link>
      </li>
     </ul>
     <h6>BROWSE</h6>
     <ul className='btn-wrapper'>
      <li>
       <Link to='/'>My Acount</Link>
      </li>
      <li>
       <Link to='/'>Checkout</Link>
      </li>
     </ul>
    </div>
   </div>
  </Wrapper>
 );
}

export default Sidebar;

const Wrapper = styled.div`
 .show.overlay {
  opacity: 1;
  visibility: visible;
 }

 .show.overlay .sidebar {
  left: 0;
 }

 .overlay {
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  transition: var(--transition);
  opacity: 0;
  visibility: hidden;
 }

 .sidebar {
  width: 250px;
  height: 100vh;
  position: absolute;
  top: 0;
  left: -100%;
  background-color: #fff;
  padding: 1rem;
  transition: var(--transition);

  h6 {
   font-size: 13px;
   font-weight: lighter;
   margin-bottom: 0.25rem;
  }

  li {
   font-size: 20px;
   margin-bottom: 0.25rem;
  }

  li a {
   transition: var(--transition);
  }

  li:hover a {
   padding-left: 0.25rem;
   color: var(--orangeColor);
  }

  .close-icon {
   position: absolute;
   right: -60px;
   color: #fff !important;
   width: 40px;
   height: 40px;
   line-height: 40px;
   text-align: center;
   font-size: 35px;
   cursor: pointer;
  }
 }

 a {
  color: var(--darkColor);
 }

 @media (min-width: 992px) {
  .overlay {
   display: none;
  }
 }
`;
