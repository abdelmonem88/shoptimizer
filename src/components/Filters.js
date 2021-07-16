import { useState, useEffect } from "react";
import styled from "styled-components";

function Filters({ products, filterProducts, men, filteredProducts }) {
 const menCategories = [
  ...new Set([
   "all",
   ...products
    .map((product) => {
     if (product.fields.men === "true") {
      return product.fields.category;
     }
     return null;
    })
    .filter((category) => category !== undefined),
  ]),
 ];

 const womenCategories = [
  ...new Set([
   "all",
   ...products
    .map((product) => {
     if (product.fields.women === "true") {
      return product.fields.category;
     }
     return null;
    })
    .filter((category) => category !== undefined),
  ]),
 ];

 const maxPrice = Math.max(
  ...new Set(
   products.map((product) => {
    return product.fields.price;
   })
  )
 );

 const [searchTerm, setSearchTrem] = useState("");
 const [category, setCategory] = useState("all");
 const [price, setPrice] = useState(maxPrice);

 const searchFiltered = products.filter((product) => {
  return product.fields.name.includes(searchTerm);
 });
 useEffect(() => {
  filterProducts(searchFiltered);
  // eslint-disable-next-line react-hooks/exhaustive-deps
 }, [searchTerm]);

 const categoryFiltred = products.filter((product) => {
  if (category === "all") {
   return filteredProducts;
  } else {
   return product.fields.category === category;
  }
 });

 useEffect(() => {
  filterProducts(categoryFiltred);

  // eslint-disable-next-line react-hooks/exhaustive-deps
 }, [category]);

 const priceFiltred = products.filter((product) => {
  return product.fields.price <= price;
 });

 useEffect(() => {
  filterProducts(priceFiltred);
  // eslint-disable-next-line react-hooks/exhaustive-deps
 }, [price]);

 return (
  <Wrapper>
   <div className='filters'>
    <div className='filter__item search'>
     <h5 className='filter__title'>Filter by name</h5>
     <input
      type='text'
      value={searchTerm}
      onChange={(e) => {
       setSearchTrem(e.target.value);
      }}
     />
    </div>
    <div className='filter__item categories'>
     <h5 className='filter__title'>Filter by category</h5>
     {men
      ? menCategories.map((cat, index) => {
         return (
          <h6
           className={`${cat === category ? "category active" : "category"}`}
           key={index}
           data-category={cat}
           onClick={(e) => setCategory(e.target.dataset.category)}
          >
           {cat}
          </h6>
         );
        })
      : womenCategories.map((cat, index) => {
         return (
          <h6
           className={`${cat === category ? "category active" : "category"}`}
           key={index}
           data-category={cat}
           onClick={(e) => setCategory(e.target.dataset.category)}
          >
           {cat}
          </h6>
         );
        })}
    </div>
    <div className='filter__item price'>
     <h5 className='filter__title'>Filter by price</h5>
     <input
      type='range'
      min={0}
      max={maxPrice}
      value={price}
      onChange={(e) => setPrice(e.target.value)}
     />
    </div>
   </div>
  </Wrapper>
 );
}

export default Filters;

const Wrapper = styled.div`
 .filter__item {
  margin-bottom: 2rem;
 }

 .filter__item.search {
  input {
   border: 1px solid var(--orangeColor);
   outline: none;
   width: 100%;
  }
 }

 .filter__title {
  margin-bottom: 0.5rem;
  font-weight: 600;
 }

 .filter__item .category {
  text-transform: capitalize;
  margin-bottom: 0.25rem;
  color: var(--grayColor);
  cursor: pointer;
  transition: var(--transition);
 }

 .filter__item .category:hover,
 .filter__item .category.active {
  color: var(--darkColor);
 }

 .filter__item.price input {
  -webkit-appearance: none;
  width: 100%;
  background: var(--orangeColor);
  border-radius: 20px;
  height: 5px;
  position: relative;
 }

 .filter__item.price input::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 21px;
  height: 21px;
  border-radius: 50%;
  background-color: transparent;
  box-shadow: 0 0 5px #bbb;
  position: relative;
  border: 8px solid #fff;
 }

 .filter__item.price input:before {
  content: "";
  position: absolute;
  width: 21px;
  height: 21px;
  top: -8px;
  left: 0px;
  background-color: transparent;
  border-radius: 50%;
  border: 8px solid #fff;
  box-shadow: 0 0 5px #bbb;
 }
`;
