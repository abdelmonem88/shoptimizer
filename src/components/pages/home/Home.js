import { useState } from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../../../actions";
import Navbar from "../../Navbar";
import DiscountBanner from "../../DiscountBanner";
import Sidebar from "../../Sidebar";
import HomeHero from "./HomeHero";
import HomeFeatured from "./HomeFeatured";
import LatestProducts from "./LatestProducts";
import NewsLetter from "./NewsLetter";
import Services from "../../Services";
import HomeTestimonials from "./HomeTestimonials";
import Brands from "./Brands";
import Footer from "../../Footer";
import Loading from "../../Loading";

function Home() {
 const [toggleSidebar, setToggleSidebar] = useState(false);

 const dispatch = useDispatch();
 const products = useSelector((state) => state.products);

 window.scroll(0, 0);

 useEffect(() => {
  dispatch(getProducts());
 }, [dispatch]);

 if (products.length < 1) {
  return <Loading />;
 }

 return (
  <div>
   <Navbar setToggleSidebar={setToggleSidebar} />
   <DiscountBanner />
   <Sidebar toggleSidebar={toggleSidebar} setToggleSidebar={setToggleSidebar} />
   <HomeHero />
   <HomeFeatured />
   <LatestProducts />
   <NewsLetter />
   <Services />
   <HomeTestimonials />
   <Brands />
   <Footer />
  </div>
 );
}

export default Home;