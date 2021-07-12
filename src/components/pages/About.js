import { useState } from "react";
import Navbar from "../Navbar";
import DiscountBanner from "../DiscountBanner";
import Sidebar from "../Sidebar";
import AboutHero from "../AboutHero";
import AboutSummary from "../AboutSummary";
import Team from "../Team";
import Reviews from "../Reviews";
import InThePress from "../InThePress";
import Footer from "../Footer";

function About() {
 const [toggleSidebar, setToggleSidebar] = useState(false);

 return (
  <div>
   <Navbar setToggleSidebar={setToggleSidebar} />
   <DiscountBanner />
   <Sidebar toggleSidebar={toggleSidebar} setToggleSidebar={setToggleSidebar} />
   <AboutHero />
   <AboutSummary />
   <Team />
   <Reviews />
   <InThePress />
   <Footer />
  </div>
 );
}

export default About;
