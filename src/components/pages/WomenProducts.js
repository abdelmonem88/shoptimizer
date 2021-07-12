import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../actions";
import Navbar from "../Navbar";
import DiscountBanner from "../DiscountBanner";
import Sidebar from "../Sidebar";

function WomenProducts() {
 const [toggleSidebar, setToggleSidebar] = useState(false);
 const dispatch = useDispatch();
 const products = useSelector((state) => state.products);

 console.log(products);

 useEffect(() => {
  dispatch(getProducts());
 }, [dispatch]);

 return (
  <div>
   <Navbar setToggleSidebar={setToggleSidebar} />
   <DiscountBanner />
   <Sidebar toggleSidebar={toggleSidebar} setToggleSidebar={setToggleSidebar} />
   <h1>women products</h1>
  </div>
 );
}

export default WomenProducts;
