"use client"
import { useGetProductsQuery } from "@/state/api";
import { Header } from "../(components)/Header";
import React, { useState, useEffect } from "react";
import { SearchIcon } from "lucide-react";
import { Navbar } from "../(components)/Navbar";
import Logo from "./Logo";
import { Card1 } from "./Card1";
import Card2 from "./Card2";
import Card3 from "./Card3";
import Produ from "./Produ";
import ProducShop from "./ProducShop";
import ProductUnder from "./ProductUnder";
import Foother from "./Foother";
import Cards4 from "./Cards4";


export const Products = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [cart, setCart] = useState([]); 

  const { data: products, isLoading, isError } = useGetProductsQuery(searchTerm);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(savedCart);
  }, []);


  if (isLoading) return <div className="py-4">Cargando...</div>;
  if (isError || !products)
    return <div className="text-center text-red-500 py-4">Conexión fallida</div>;

  const product = products[0];

  const handleAddToCart = (product: any) => {
    let cart = JSON.parse(localStorage.getItem('cart') || '[]');
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert("Producto agregado al carrito.");
  };

  return (
    <> 
       <Navbar />
       <Logo/>
       <Card1/>
       <Card2/>
      <div className="mx-auto pb-5 w-full">
        <div className="mb-6">
          <div className="flex items-center w-40 h-10 border-2 border-gray-200 rounded-lg">
            <input
              type="text"
              className="w-full py-2 px-4 rounded bg-black"
              placeholder="Buscar productos"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <SearchIcon className="w-5 h-5 text-gray-500 m-2" />
          </div>
        </div>
        <div className="flex justify-between items-center mb-6">
          <Header name="Productos" />
          <div className="flex space-x-5 font-bold text-lg">
            <h1>Clothing</h1>
            <h1>Shoes</h1>
            <h1>Accessories</h1>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 items-center">
          {products.map((product) => (
            <div key={product.productId} className="hover:cursor-pointer border shadow rounded-md p-4 items-center flex flex-col space-y-4" >
              <img src="https://images.pexels.com/photos/10952361/pexels-photo-10952361.jpeg" 
                className="mb-3 rounded-2xl w-60 h-60"/>
              <button
                className={`bg-blue-300 rounded-md p-3  px-10 items-center ${
                  product.stockQuantity === 0 ? "opacity-50 cursor-not-allowed" : ""
                }`}
                onClick={() => handleAddToCart(product)}
                disabled={product.stockQuantity === 0}
              > {product.stockQuantity === 0 ? "Agotado" : "Añadir al carrito"}
              </button>
              <div className="flex flex-col items-center">
                <h2 className="text-xl font-semibold">{product.name}</h2>
                <p className="text-gray-500">{product.descripcion}</p>
                <span className="text-green-500 font-bold">${product.price}</span>
                
                <div className="flex items-center space-x-2">
                 <h1>Colores disponibles: </h1> 
                <div style={{backgroundColor: product.color,  }}
                  className="w-6 h-6 rounded-full border" >
                  </div>
              </div>
              </div>
            </div>
          ))}
        
      </div>
      <Card3/>
      
      <Produ/>
      <Cards4/>
     <ProducShop/>
     <ProductUnder/>
     <Foother/> 

      
    </div>
    </>
  )
}
export default Products