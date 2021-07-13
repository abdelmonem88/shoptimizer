import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../../../actions";
import styled from "styled-components";
import ProductsList from "../../ProductsList";

function LatestProducts() {
 const dispatch = useDispatch();
 const products = useSelector((state) => state.products);

 useEffect(() => {
  dispatch(getProducts());
 }, [dispatch]);

 return (
  <Wrapper>
   <div className='latest py-2'>
    <div className='section-title'>
     <h2>Our latest items</h2>
     <ProductsList products={products} />
    </div>
   </div>
  </Wrapper>
 );
}

export default LatestProducts;

const Wrapper = styled.div`
 .latest {
  h2 {
   text-align: center;
   font-weight: 600;
   margin-bottom: 2rem;
  }
 }
`;
