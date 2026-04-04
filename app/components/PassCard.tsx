"use client";

import { motion } from "framer-motion";
import { Check, Star, ShoppingCart, ArrowRight } from "lucide-react";
import { useCart } from "../context/CartContext";
import Link from "next/link";

interface PassCardProps {
  id?: string;
  title: string;
  image: string;
  originalPrice?: number;
  discountedPrice?: number;
  discount?: number;
  features: string[];
  popular?: boolean;
  category?: string;
  // Pridané props pre odstránenie TS chyby
  buttonText?: string;
  buttonLink?: string;
}

export function PassCard({
  id,
  title,
  image,
  originalPrice = 0,
  discountedPrice = 0,
  discount = 0,
  features = [],
  popular = false,
  category = "pass",
  buttonText,
  buttonLink,
}: PassCardProps) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      id: id || title.toLowerCase().replace(/\s+/g, "-"),
      title,
      image,
      discountedPrice,
      originalPrice,
      category,
      quantity: 1,
    });
  };

  // Ak máme buttonLink, vyrenderujeme Link, inak klasické Add to Cart tlačidlo
  const renderButton = () => {
    if (buttonLink) {
      return (
        <Link 
          href={buttonLink}
          className="w-full py-3.5 rounded-xl font-bold text-sm text-white transition-all flex items-center justify-center gap-2 hover:scale-[1.02]"
          style={{ background: 'var(--gradient-btn)' }}
        >
          {buttonText || "Pozrieť ponuku"}
          <ArrowRight className="w-4 h-4" />
        </Link>
      );
    }

    return (
      <button 
        onClick={handleAddToCart}
        className="w-full py-3.5 rounded-xl font-bold text-sm text-white transition-all flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98]" 
        style={{ background: 'var(--gradient-btn)' }}
      >
        <ShoppingCart className="w-4 h-4" />
        {buttonText || "Pridať do košíka"}
      </button>
    );
  };

  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="relative rounded-2xl overflow-hidden border flex flex-col h-full w-full transition-shadow hover:shadow-2xl hover:shadow-purple-500/10 group"
      style={{
        background: 'rgba(26, 26, 46, 0.6)',
        borderColor: popular ? 'rgba(138, 43, 226, 0.5)' : 'rgba(138, 43, 226, 0.15)',
      }}
    >
      {/* Badge pre Popular/Zľavu */}
      <div className="absolute top-3 right-3 z-10 flex flex-col gap-2">
        {popular && (
          <div className="flex items-center gap-1 text-white px-2.5 py-1 rounded-lg text-[10px] font-black uppercase tracking-tighter" style={{ background: 'linear-gradient(135deg, #feca57 0%, #ff9f43 100%)' }}>
            <Star className="w-3 h-3 fill-current" /> Popular
          </div>
        )}
        {discount > 0 && (
          <div className="bg-red-500/20 border border-red-500/30 text-red-400 text-[10px] font-bold px-2 py-1 rounded-lg text-center">
            -{discount}%
          </div>
        )}
      </div>

      {/* Obrázok s maskou */}
      <div className="relative h-44 overflow-hidden bg-gray-900">
        <img src={image} alt={title} className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-500" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d1a] to-transparent"></div>
      </div>

      {/* Obsah */}
      <div className="p-5 flex flex-col flex-1 bg-[#0d0d1a]/80 backdrop-blur-sm">
        <h3 className="text-lg font-bold mb-3 text-white tracking-tight">{title}</h3>
        
        <div className="mb-5 flex items-center gap-2.5">
          <span className="text-2xl font-black text-cyan-400">
            €{discountedPrice.toFixed(2)}
          </span>
          <span className="text-xs line-through text-gray-500">
            €{originalPrice.toFixed(2)}
          </span>
        </div>

        <ul className="space-y-2.5 mb-6 flex-1">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2.5 text-[11px] text-gray-400 leading-tight">
              <Check className="w-3.5 h-3.5 mt-0.5 text-cyan-500 shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        {renderButton()}
      </div>
    </motion.div>
  );
}