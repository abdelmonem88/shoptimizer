import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../../actions";
import { GoSettings } from "react-icons/go";
import Loading from "../../Loading";
import Navbar from "../../Navbar";
import DiscountBanner from "../../DiscountBanner";
import Sidebar from "../../Sidebar";
import Footer from "../../Footer";
import Filters from "../../Filters";
import ProductsList from "../../ProductsList";
import styled from "styled-components";
import menBannerImg from "../../../images/men_banner.webp";
import FiltersSidebar from "../../FiltersSidebar";
import SortProducts from "../../SortProducts";

function MenProducts() {
 const [toggleSidebar, setToggleSidebar] = useState(false);
 const [toggleFiltersSidebar, setToggleFiltersSidebar] = useState(false);
 const dispatch = useDispatch();
 const products = useSelector((state) => state.products);
 const menProducts = products.filter((product) => {
  return JSON.parse(product.fields.men) === true;
 });

 const [filteredProducts, setFilteredProducts] = useState(menProducts);

 useEffect(() => {
  dispatch(getProducts());
 }, [dispatch]);

 if (products.length < 1) {
  return <Loading />;
 }

 return (
  <Wrapper>
   <Navbar setToggleSidebar={setToggleSidebar} />
   <DiscountBanner />
   <Sidebar toggleSidebar={toggleSidebar} setToggleSidebar={setToggleSidebar} />
   <FiltersSidebar
    products={menProducts}
    filteredProducts={filteredProducts}
    filterProducts={setFilteredProducts}
    toggleFiltersSidebar={toggleFiltersSidebar}
    setToggleFiltersSidebar={setToggleFiltersSidebar}
    men
   />
   <div className='men-products pt-5'>
    <div className='container'>
     <div className='row justify-content-between'>
      <div className='col-md-2 filters'>
       <Filters
        filteredProducts={filteredProducts}
        products={menProducts}
        filterProducts={setFilteredProducts}
        men={true}
       />
      </div>
      <div className='col-lg-9 col-12 products'>
       <div className='row products__banner'>
        <div className='col-12'>
         <h2 className='products__title'>Men</h2>
        </div>
        <div className='banner__content'>
         <div className='col-lg-6 col-12 left d-flex align-items-center left'>
          <p>
           Explore men’s clothing that take you effortlessly from Spring into
           Summer. Shop our stunning collections and find the perfect style fit
           for you.
          </p>
         </div>
         <div className='col-lg-6 col-12'>
          <img src={menBannerImg} alt='' className='img-fluid' />
         </div>
        </div>
       </div>
       <div className='row'>
        <div className='col-12 filters-btn'>
         <div
          className='content'
          onClick={() => {
           setToggleFiltersSidebar(true);
          }}
         >
          <span className='filters-icon'>{<GoSettings />}</span>
          <h6>Filters</h6>
         </div>
        </div>
       </div>
       <SortProducts
        products={menProducts}
        filteredProducts={filteredProducts}
        FilterProducts={setFilteredProducts}
       />
       <div className='row'>
        <ProductsList products={filteredProducts} col_lg={4} />
       </div>
       {filteredProducts.length < 1 && (
        <div className='row'>
         <div className='col-12 px-4'>
          <h4 className='filter__error mb-4'>
           Sorry, No products matchs your filter!!
          </h4>
         </div>
        </div>
       )}
      </div>
     </div>
    </div>
   </div>
   <Footer />
  </Wrapper>
 );
}

export default MenProducts;

const Wrapper = styled.div`
 .filter__error {
  color: var(--orangeColor);
 }

 .products__title {
  font-size: 40px;
  font-weight: 600;
  margin-bottom: 1.25rem;
 }

 .products__banner {
  padding: 0 16px;
 }

 .banner__content {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 2rem;
 }

 .products__banner .left {
  background-color: #efeee3;
 }

 .products__banner p {
  font-size: 18px;
  padding: 16px;
 }

 .filters-btn {
  padding: 0 28px;
  margin-bottom: 1rem;
  display: none;

  .content {
   padding: 0.25rem 1rem;
   display: flex;
   align-items: center;
   box-shadow: 0 0 5px #eee;
   cursor: pointer;
  }

  .filters-icon {
   margin-right: 0.5rem;
   font-size: 20px;
   color: var(--darkColor);
  }
 }

 
 }

 @media (max-width: 767px) {
 }

 @media (max-width: 991px) {
  .banner__content {
   flex-flow: column-reverse;
  }

  .filters {
   display: none;
  }

  .filters-btn {
   display: block;
  }
`;
