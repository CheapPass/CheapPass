"use client";

import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";

// Definícia typov, aby TypeScript vedel, čo sú tie dáta zač
interface PassCardProps {
  title: string;
  image: string;
  originalPrice?: number;
  discountedPrice?: number;
  discount?: number;
  features: string[];
  popular?: boolean;
}

export function PassCard({
  title,
  image,
  originalPrice = 0,
  discountedPrice = 0,
  discount = 0,
  features = [],
  popular = false,
}: PassCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="relative rounded-2xl overflow-hidden border flex flex-col h-full w-full"
      style={{
        background: 'rgba(26, 26, 46, 0.6)',
        borderColor: popular ? 'var(--primary-neon)' : 'rgba(138, 43, 226, 0.15)',
      }}
    >
      {popular && (
        <div className="absolute top-3 right-3 z-10">
          <div className="flex items-center gap-1 text-white px-2.5 py-1 rounded-lg text-[10px] font-black uppercase tracking-tighter" style={{ background: 'linear-gradient(135deg, #feca57 0%, #ff9f43 100%)' }}>
            <Star className="w-3 h-3 fill-current" /> Popular
          </div>
        </div>
      )}

      <div className="relative h-44 overflow-hidden bg-gray-900">
        <img src={image} alt={title} className="w-full h-full object-cover opacity-80" />
      </div>

      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-lg font-bold mb-3 text-white">{title}</h3>
        
        <div className="mb-5 flex items-baseline gap-2">
          {/* Pridané ? a predvolené hodnoty riešia chybu "possibly undefined" */}
          <span className="text-2xl font-black text-[var(--secondary-neon)]">
            €{discountedPrice?.toFixed(2)}
          </span>
          <span className="text-xs line-through text-gray-500">
            €{originalPrice?.toFixed(2)}
          </span>
          <span className="text-[10px] font-bold bg-red-500/20 text-red-500 px-1.5 py-0.5 rounded">
            -{discount}%
          </span>
        </div>

        <ul className="space-y-2 mb-6 flex-1">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2 text-xs text-gray-400">
              <Check className="w-3.5 h-3.5 text-[var(--secondary-neon)]" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <button className="w-full py-3 rounded-xl font-bold text-sm text-white" style={{ background: 'var(--gradient-btn)' }}>
          Kúpiť teraz
        </button>
      </div>
    </motion.div>
  );
}