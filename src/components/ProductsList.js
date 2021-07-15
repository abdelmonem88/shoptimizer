import Product from "./Product";

function ProductsList({ products, col_lg }) {
 const rendredProducts = products.map((product) => {
  return <Product key={product.id} {...product} col_lg={col_lg} />;
 });

 return <>{rendredProducts}</>;
}

export default ProductsList;
