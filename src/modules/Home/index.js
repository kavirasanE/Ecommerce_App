import React, { useEffect, useState } from "react";
import Hero from "../../components/Hero";
import Products from "../../components/ProductsCard";
import FeatureCards from "../../components/FeatureCards";
import StatsCard from  "../../components/StatsCard";
const Home = () => {
  const [products, setProducts ] = useState ([])
useEffect(() => {
  const fetchproducts =async () => {
    const response = await fetch('https://fakestoreapi.com/products?limit=12')
    const data = await response .json();
    console.log(data); 
    setProducts(data)
  }
 fetchproducts( )
},[]
)

  return (
    <>
      <Hero />
      <div className="text-center mb-20">
        <h2 className="text-xs text -indigo-500 tracking-widest font-medium title-font mb-1">
          PRODUCTS
        </h2>
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
          Most Popular Products
        </h1>
      </div>{
       products.length > 0 ?
       <Products products = {products} />
       :
       <div> Loading......</div> 
      }

      <Products />
      <FeatureCards />
      <StatsCard />
    </>
  );
};
export default Home;
