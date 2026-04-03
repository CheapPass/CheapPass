"use client";

import { motion } from "framer-motion"; // Opravený import
import { Check, Star } from "lucide-react";

interface PassCardProps {
  title: string;
  image: string;
  originalPrice: number;
  discountedPrice: number;
  discount: number;
  features: string[];
  popular?: boolean;
}

export function PassCard({
  title,
  image,
  originalPrice,
  discountedPrice,
  discount,
  features,
  popular,
}: PassCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="relative rounded-2xl overflow-hidden border shadow-xl flex flex-col h-full"
      style={{
        background: 'rgba(26, 26, 46, 0.6)',
        borderColor: popular ? 'var(--primary-neon)' : 'rgba(138, 43, 226, 0.15)',
        boxShadow: popular ? '0 0 30px rgba(138, 43, 226, 0.2)' : undefined
      }}
    >
      {popular && (
        <div className="absolute top-3 right-3 z-10">
          <div className="flex items-center gap-1 text-white px-2.5 py-1 rounded-lg text-[10px] font-black uppercase tracking-tighter" style={{
            background: 'linear-gradient(135deg, #feca57 0%, #ff9f43 100%)'
          }}>
            <Star className="w-3 h-3 fill-current" /> Popular
          </div>
        </div>
      )}

      {/* Image */}
      <div className="relative h-40 overflow-hidden bg-gray-900">
        <img src={image} alt={title} className="w-full h-full object-cover opacity-70" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a2e] to-transparent" />
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-lg font-bold mb-3 text-white">{title}</h3>

        <div className="mb-5">
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-black text-[var(--secondary-neon)]">€{discountedPrice}</span>
            <span className="text-xs line-through text-gray-500">€{originalPrice}</span>
            <span className="text-[10px] font-bold bg-red-500/20 text-red-500 px-1.5 py-0.5 rounded">-{discount}%</span>
          </div>
        </div>

        <ul className="space-y-2 mb-6 flex-1">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2">
              <Check className="w-3.5 h-3.5 flex-shrink-0 mt-0.5 text-[var(--secondary-neon)]" />
              <span className="text-xs text-gray-400">{feature}</span>
            </li>
          ))}
        </ul>

        <button
          className="w-full py-3 rounded-xl font-bold text-sm text-white transition-all hover:brightness-110 active:scale-95"
          style={{ background: 'var(--gradient-btn)' }}
        >
          Kúpiť teraz
        </button>
      </div>
    </motion.div>
  );
}