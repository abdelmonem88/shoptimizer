import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../actions";

function MenProducts() {
 const dispatch = useDispatch();
 const products = useSelector((state) => state.products);

 console.log(products);

 useEffect(() => {
  dispatch(getProducts());
 }, [dispatch]);

 return (
  <div>
   <h1>products</h1>
  </div>
 );
}

export default MenProducts;
