import { useState, useEffect } from "react";
import styled from "styled-components";

function SortProducts({ products, filteredProducts, FilterProducts }) {
 const [sort, setSort] = useState("");

 let sortedProducts = [...products];

 const sortProdcuts = (value) => {
  if (value === "highest") {
   sortedProducts.sort((a, b) => {
    return b.fields.price - a.fields.price;
   });
  }

  if (value === "lowest") {
   sortedProducts.sort((a, b) => {
    return a.fields.price - b.fields.price;
   });
  }

  if (value === "a-z") {
   sortedProducts.sort((a, b) => {
    return a.fields.name.localeCompare(b.fields.name);
   });
  }

  if (value === "z-a") {
   sortedProducts.sort((a, b) => {
    return b.fields.name.localeCompare(a.fields.name);
   });
  }
 };

 useEffect(() => {
  sortProdcuts(sort);
  FilterProducts(sortedProducts);
 }, [sort, FilterProducts]);

 return (
  <Wrapper>
   <div className='row align-items-center'>
    <div className='col-lg-6 col-12 sort-wrapper mb-3'>
     <div className='sort'>
      <select
       name=''
       id=''
       value={sort}
       onChange={(e) => {
        setSort(e.target.value);
       }}
      >
       <option value='' hidden>
        Sort by...
       </option>
       <option value='highest'>Price (highest to lowest)</option>
       <option value='lowest'>Price (lowest to highest)</option>
       <option value='a-z'>Name (A to Z)</option>
       <option value='z-a'>Name (Z to A)</option>
      </select>
     </div>
    </div>
    <div className='col-lg-6 col-12 mb-3'>
     <div className='products-count text-center'>
      <h6>Showing {filteredProducts.length} results</h6>
     </div>
    </div>
   </div>
  </Wrapper>
 );
}

export default SortProducts;

const Wrapper = styled.div`
 .sort-wrapper {
  padding: 0 28px;
 }
 .sort {
  padding: 0.5rem 1rem;
  box-shadow: 0 0 5px #eee;

  select {
   border: 0;
   width: 100%;
   outline: none;
   cursor: pointer;
  }

  option {
   font-size: 13px;
  }
 }
`;
