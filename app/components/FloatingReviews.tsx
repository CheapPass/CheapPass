"use client";

import { motion } from "framer-motion"; // Opravený import
import { TrendingDown, Star } from "lucide-react";

const deals = [
  {
    game: "Clash of Clans",
    passName: "Gold Pass",
    originalPrice: 6.50,
    newPrice: 3.99,
    color: "#ffcc00", // Placeholder farba
    position: { top: "20%", left: "8%" },
    delay: 0,
    type: "deal",
  },
  {
    game: "Clash Royale",
    passName: "Royal Pass",
    originalPrice: 11.50,
    newPrice: 6.99,
    color: "#ff0044", 
    position: { top: "15%", right: "10%" },
    delay: 0.3,
    type: "deal",
  },
  {
    game: "Brawl Stars",
    passName: "Brawl Pass",
    originalPrice: 9.99,
    newPrice: 6.49,
    color: "#00aaff",
    position: { bottom: "12%", right: "8%" },
    delay: 0.6,
    type: "deal",
  },
  {
    name: "Martin K.",
    text: "Super rýchle doručenie! Pass prišiel na druhý deň.",
    rating: 5,
    color: "#8a2be2",
    position: { bottom: "20%", left: "6%" },
    delay: 0.9,
    type: "review",
  },
  {
    name: "Lucia P.",
    text: "Lepšie ceny ako v hre, určite odporúčam!",
    rating: 5,
    color: "#00f5ff",
    position: { top: "45%", right: "5%" },
    delay: 1.2,
    type: "review",
  },
];

export function FloatingReviews() {
  return (
    <>
      {deals.map((deal: any, index) => {
        const savings = deal.type === "deal" ? Math.round(((deal.originalPrice - deal.newPrice) / deal.originalPrice) * 100) : 0;
        
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: deal.delay + 1.2 }}
            className="hidden lg:block absolute z-20"
            style={{ ...deal.position }}
          >
            <motion.div
              animate={{ y: [0, -10, 0], x: [0, 5, 0] }}
              transition={{ duration: 5 + index, repeat: Infinity, ease: "easeInOut" }}
              className="backdrop-blur-xl rounded-2xl p-3 shadow-2xl border w-[190px]"
              style={{
                background: 'rgba(26, 26, 46, 0.8)',
                borderColor: 'rgba(138, 43, 226, 0.3)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
              }}
            >
              <div className="flex items-center gap-3 mb-2">
                <div 
                  className="w-8 h-8 rounded-lg flex-shrink-0"
                  style={{ background: deal.color || 'var(--gradient-btn)' }}
                />
                <div className="flex-1 min-w-0">
                  <h4 className="font-bold truncate text-[13px] text-white">
                    {deal.game || deal.name}
                  </h4>
                  {deal.type === "deal" ? (
                    <p className="text-[11px] text-gray-400 truncate">{deal.passName}</p>
                  ) : (
                    <div className="flex gap-0.5">
                      {[...Array(deal.rating)].map((_, i) => (
                        <Star key={i} className="w-2 h-2 fill-cyan-400 text-cyan-400" />
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {deal.type === "deal" ? (
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] line-through text-gray-500">€{deal.originalPrice}</span>
                    <span className="text-[13px] font-bold text-cyan-400">€{deal.newPrice}</span>
                  </div>
                  <div className="bg-cyan-500/10 border border-cyan-500/30 px-1.5 py-0.5 rounded text-[10px] font-bold text-cyan-400 flex items-center gap-1">
                    <TrendingDown className="w-3 h-3" /> -{savings}%
                  </div>
                </div>
              ) : (
                <p className="text-[11px] text-gray-300 italic leading-snug">"{deal.text}"</p>
              )}
            </motion.div>
          </motion.div>
        );
      })}
    </>
  );
}