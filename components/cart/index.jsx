"use client";

import { useCartContext } from "../../context";
const Cart = () => {
  const { number, setNumber, addToCart } = useCartContext();
  return (
    <div className="p-3 m-4">
      <h3 className="text-2xl mb-3">Cart :{number}</h3>
    </div>
  );
};

export default Cart;
