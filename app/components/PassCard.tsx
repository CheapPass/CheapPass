"use client";

import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";
import Link from "next/link"; // Importované pre navigáciu

// Definícia typov pre TypeScript (rozšírené o buttonText a buttonLink)
interface PassCardProps {
  title: string;
  image: string;
  originalPrice?: number;
  discountedPrice?: number;
  discount?: number;
  features: string[];
  popular?: boolean;
  buttonText?: string; // Nová voliteľná vlastnosť
  buttonLink?: string; // Nová voliteľná vlastnosť
}

export function PassCard({
  title,
  image,
  originalPrice = 0,
  discountedPrice = 0,
  discount = 0,
  features = [],
  popular = false,
  buttonText = "Kúpiť teraz", // Predvolený text, ak sa nepošle iný
  buttonLink = "#",           // Predvolený link
}: PassCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="relative rounded-2xl overflow-hidden border flex flex-col h-full w-full transition-shadow hover:shadow-2xl hover:shadow-purple-500/10 group"
      style={{
        background: 'rgba(26, 26, 46, 0.6)',
        borderColor: popular ? 'var(--primary-neon)' : 'rgba(138, 43, 226, 0.15)',
      }}
    >
      {/* Štítok pre populárne produkty */}
      {popular && (
        <div className="absolute top-3 right-3 z-10">
          <div className="flex items-center gap-1 text-white px-2.5 py-1 rounded-lg text-[10px] font-black uppercase tracking-tighter" style={{ background: 'linear-gradient(135deg, #feca57 0%, #ff9f43 100%)' }}>
            <Star className="w-3 h-3 fill-current" /> Popular
          </div>
        </div>
      )}

      {/* Obrázok produktu */}
      <div className="relative h-44 overflow-hidden bg-gray-900">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-500" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a2e] to-transparent opacity-60"></div>
      </div>

      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-lg font-bold mb-3 text-white tracking-tight">{title}</h3>
        
        {/* Cenová sekcia */}
        <div className="mb-5 flex items-center gap-2.5">
          <span className="text-2xl font-black text-[var(--secondary-neon)]">
            €{discountedPrice.toFixed(2)}
          </span>
          <span className="text-xs line-through text-gray-500/80">
            €{originalPrice.toFixed(2)}
          </span>
          
          {/* Zelené percentá zľavy */}
          <span 
            className="text-[10px] font-bold px-2 py-0.5 rounded-md uppercase tracking-wider" 
            style={{ 
              background: 'rgba(0, 245, 255, 0.15)', 
              color: 'var(--secondary-neon)',      
              border: '1px solid rgba(0, 245, 255, 0.1)'
            }}
          >
            -{discount}%
          </span>
        </div>

        {/* Zoznam výhod */}
        <ul className="space-y-2.5 mb-6 flex-1">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2.5 text-[11px] text-gray-400 leading-tight">
              <Check className="w-3.5 h-3.5 mt-0.5 text-[var(--secondary-neon)] shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        {/* Tlačidlo nákupu / Link na produkty */}
        <Link href={buttonLink} className="w-full outline-none">
          <button 
            className="w-full py-3.5 rounded-xl font-bold text-sm text-white shadow-lg shadow-purple-500/10 hover:shadow-purple-500/20 active:scale-[0.98] transition-all outline-none" 
            style={{ background: 'var(--gradient-btn)' }}
          >
            {buttonText}
          </button>
        </Link>
      </div>
    </motion.div>
  );
}