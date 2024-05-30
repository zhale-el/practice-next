"use client";
import { createContext, useState, useContext } from "react";

export const Context = createContext(null);

export function useCartContext() {
  return useContext(Context);
}

export default function UseContextProvider({ children }) {
  const [number, setNumber] = useState(0);

  const addToCart = () => {
    return setNumber((prev) => prev + 1);
  };

  return (
    <Context.Provider value={{ number, setNumber, addToCart }}>
      {children}
    </Context.Provider>
  );
}
