import { useParams } from "react-router-dom";

function SingelProduct() {
 const { id } = useParams();
 console.log(id);
 return (
  <div>
   <h1>Single Product</h1>
  </div>
 );
}

export default SingelProduct;
