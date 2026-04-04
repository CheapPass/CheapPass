"use client";

import { useState, useEffect } from "react";
import { CartModal } from "./CartModal";

export function CartModalWrapper() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleOpenCart = () => setIsOpen(true);
    window.addEventListener("open-cart", handleOpenCart);
    return () => window.removeEventListener("open-cart", handleOpenCart);
  }, []);

  return <CartModal isOpen={isOpen} onClose={() => setIsOpen(false)} />;
}