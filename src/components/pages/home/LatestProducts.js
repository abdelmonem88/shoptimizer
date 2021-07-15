import { useSelector } from "react-redux";
import styled from "styled-components";
import ProductsList from "../../ProductsList";

function LatestProducts() {
 const products = useSelector((state) => state.products);

 const latestProducts = products.filter(
  (product) => JSON.parse(product.fields.latest) === true
 );

 return (
  <Wrapper>
   <div className='latest py-2'>
    <div className='section-title'>
     <h2>Our latest items</h2>
     <div className='container'>
      <div className='row'>
       <ProductsList products={latestProducts} col_lg={3} />
      </div>
     </div>
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
