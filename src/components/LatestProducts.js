import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../actions";
import styled from "styled-components";
import Product from "./Product";

function LatestProducts() {
 const dispatch = useDispatch();
 const products = useSelector((state) => state.products);
 const latestProducts = products.filter(
  (product) => JSON.parse(product.fields.latest) === true
 );

 const rendredProducts = latestProducts.map((product) => {
  return <Product key={product.id} {...product} col_lg={3} />;
 });

 useEffect(() => {
  dispatch(getProducts());
 }, [dispatch]);

 return (
  <Wrapper>
   <div className='latest py-2'>
    <h2>Our latest items</h2>
    <div className='container'>
     <div className='row'>{rendredProducts}</div>
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
