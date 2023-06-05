import { useEffect, useState } from "react";
import ProductsList from "./ProductsList";

const Home = () => {
    let [products, setProducts]=useState(null);
    useEffect(()=>{
        setTimeout(()=>{
            fetch("http://localhost:4000/products")
        .then((res)=>{return res.json()})
        .then((data)=>{console.log(data);
                     setProducts(data);
                    })
                },3000)
    },[])
        
    return (
        
         <div className="home">
              {products==null && <h1>Loading.......</h1>}
              {products && <>
       <ProductsList products={products} title="All products"/>
       <ProductsList products={products.filter((p)=>{return p.rating>4.5})} title="Top rated products"/>
       

       </>}
         </div>);
}
 
export default Home;