"use client";
import { useCartContext } from "../../context";

const AddButton = () => {
  const { addToCart, setNumber } = useCartContext();
  return (
    <div>
      <button
        className="border rounded bg-blue-400 px-4 py-2"
        onClick={() => addToCart()}
      >
        add to cart
      </button>
    </div>
  );
};

export default AddButton;
