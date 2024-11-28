import React, { useEffect, useState } from "react";
import { ShoppingBagIcon } from "lucide-react";
import Link from 'next/link';

const ShoppingBag = () => {
  const [itemCount, setItemCount] = useState(0);

  // Contar los productos en el carrito desde localStorage
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedCart = JSON.parse(localStorage.getItem('cart') || '[]');
      setItemCount(storedCart.length); // Contar los productos en el carrito
    }
  }, []);

  return (
    <div className="relative">
      <Link href="/carrito">
        <ShoppingBagIcon
          className="cursor-pointer text-gray-500"
          size={24}
        />
        {itemCount > 0 && (
          <span
            className="absolute -top-2 -right-2 inline-flex items-center justify-center 
            px-[0.4rem] py-1 text-xs font-semibold leading-none text-red-400 rounded-full bg-white"
          >
            {itemCount}
          </span>
        )}
      </Link>
    </div>
  );
};

export default ShoppingBag;
