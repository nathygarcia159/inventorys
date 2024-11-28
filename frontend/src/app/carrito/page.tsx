'use client';

import { useEffect, useState } from "react";
import { Navbar } from "../(components)/Navbar";


interface Product {
  productId: string;
  name: string;
  price: number;
}

const Carrito = () => {
  const [cart, setCart] = useState<Product[]>([]);

  // Cargar los productos del carrito desde localStorage
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedCart = JSON.parse(localStorage.getItem('cart') || '[]');
      setCart(storedCart);
    }
  }, []);

  // Eliminar un producto del carrito
  const handleRemoveFromCart = (productId: string) => {
    if (confirm('¿Estás seguro de que quieres eliminar este producto?')) {
      const updatedCart = cart.filter(product => product.productId !== productId);
      setCart(updatedCart);
      localStorage.setItem('cart', JSON.stringify(updatedCart));
    }
  };

  // Enviar pedido y vaciar el carrito
  const handleSendOrder = () => {
    const previousOrders = JSON.parse(localStorage.getItem('orders') || '[]');
    const updatedOrders = [...previousOrders, ...cart];
    localStorage.setItem('orders', JSON.stringify(updatedOrders));
    setCart([]);
    localStorage.removeItem('cart');
    alert('Pedido enviado correctamente.');
  };

  return ( 
    <>
     <Navbar/>
    <div className="p-4">
      <h1 className="text-4xl font-bold text-center">Carrito de Compras</h1>
      {cart.length === 0 ? (
        <div className="text-center py-10">No hay productos en tu carrito.</div>
      ) : (
        cart.map((product) => (
          <div 
            key={product.productId} 
            className="flex justify-between items-center p-4 border-b"
          >
            <div>
              <h3 className="text-2xl">{product.name}</h3>
              <p>${product.price.toFixed(2)}</p>
            </div>
            <button 
              onClick={() => handleRemoveFromCart(product.productId)}
              className="bg-red-500 text-white px-4 py-2 rounded-lg"
              aria-label={`Eliminar ${product.name} del carrito`}
            >
              Eliminar
            </button>
          </div>
        ))
      )}

      <div className="mt-6 text-center">
        <button 
          onClick={handleSendOrder}
          className={`px-8 py-2 rounded-lg mr-4 ${
            cart.length > 0 ? 'bg-blue-500 text-white' : 'bg-gray-400 text-gray-700 cursor-not-allowed'
          }`}
          disabled={cart.length === 0}
        >
          Enviar Pedido
        </button>
      </div>
    </div>
    </>
  );
};

export default Carrito;
