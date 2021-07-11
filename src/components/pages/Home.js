import { useState } from "react";
import Navbar from "../Navbar";
import DiscountBanner from "../DiscountBanner";
import Sidebar from "../Sidebar";
import HeroSection from "../HeroSection";
import HomeFeatured from "../HomeFeatured";
import LatestProducts from "../LatestProducts";
import NewsLetter from "../NewsLetter";
import Services from "../Services";
import Testimonials from "../Testimonials";
import Brands from "../Brands";
import Footer from "../Footer";

function Home() {
 const [toggleSidebar, setToggleSidebar] = useState(false);

 return (
  <div>
   <Navbar setToggleSidebar={setToggleSidebar} />
   <DiscountBanner />
   <Sidebar toggleSidebar={toggleSidebar} setToggleSidebar={setToggleSidebar} />
   <HeroSection />
   <HomeFeatured />
   <LatestProducts />
   <NewsLetter />
   <Services />
   <Testimonials />
   <Brands />
   <Footer />
  </div>
 );
}

export default Home;
