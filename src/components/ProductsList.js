import Product from "./Product";

function ProductsList({ products }) {
 const latestProducts = products.filter(
  (product) => JSON.parse(product.fields.latest) === true
 );

 const rendredProducts = latestProducts.map((product) => {
  return <Product key={product.id} {...product} col_lg={3} />;
 });

 return (
  <div className='container'>
   <div className='row'>{rendredProducts}</div>
  </div>
 );
}

export default ProductsList;
