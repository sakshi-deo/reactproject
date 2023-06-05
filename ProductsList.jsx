const ProductsList = ({products, title}) => {
    return ( 
        <div>
             <h1>{title}</h1>
      
  <div className="products">
{products.map((product)=>{
    return(
    <div className="product">
<img src={product.productImage} alt="img" width="200px" height="250px"/>
<h2>{product.productname}</h2>
<p>{product.brand}</p>
<p>{product.price}</p>
        </div>
        )
})}
</div>
        </div>);
}
 
export default ProductsList;