import { useState } from "react";
import Navbar from "../Navbar";
import DiscountBanner from "../DiscountBanner";
import Sidebar from "../Sidebar";
import HomeHero from "../HomeHero";
import HomeFeatured from "../HomeFeatured";
import LatestProducts from "../LatestProducts";
import NewsLetter from "../NewsLetter";
import Services from "../Services";
import HomeTestimonials from "../HomeTestimonials";
import Brands from "../Brands";
import Footer from "../Footer";

function Home() {
 const [toggleSidebar, setToggleSidebar] = useState(false);

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
