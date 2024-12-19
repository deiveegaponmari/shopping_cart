import React, { useEffect, useState } from "react";
import Navbar from "../../components/Header/Navbar";
import Template from "../../components/Template/Template";
import Products from "../../components/product/Products";
import Footer from "../../components/Footer/Footer";
export default function Home() {
  const [products, setProducts] = useState({ data: [] });
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5173/products.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data)
        setProducts(data)
      }).catch((error) => {
        console.log('ERROR is occured at the', error)
      })
  }, []);

  function handleAddcount(product){
  if(!cart.some((item)=>item.id===product.id)){
    const datacopy=[...cart];
    datacopy.push(product)
    setCart(datacopy)
  }}
 function handlesubcount(product){
  /* const dataCopy=[...cart];
  dataCopy.filter((item)=>item.id !==product);
  setCart(dataCopy) */
  setCart(cart.filter((item) => item.id !== product));
 }
 
 return <>
    <Navbar cart={cart}/>
    <Template />
    <Products products={products} cart={cart} 
    addToCart={handleAddcount} removeFromCart={handlesubcount} />
    <Footer />
  </>
}