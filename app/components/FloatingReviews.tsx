"use client";

import { motion } from "framer-motion";
import { TrendingDown, Star } from "lucide-react";

const deals = [
  {
    game: "Clash of Clans",
    passName: "Gold Pass",
    originalPrice: 6.50,
    newPrice: 3.99,
    image: "/coc.png", // Cesta k obrázku v public/
    position: { top: "20%", left: "8%" },
    delay: 0,
    type: "deal",
  },
  {
    game: "Clash Royale",
    passName: "Royal Pass",
    originalPrice: 11.50,
    newPrice: 6.99,
    image: "/cr.png",
    position: { top: "15%", right: "10%" },
    delay: 0.3,
    type: "deal",
  },
  {
    game: "Brawl Stars",
    passName: "Brawl Pass",
    originalPrice: 9.99,
    newPrice: 6.49,
    image: "/bs.png",
    position: { bottom: "12%", right: "8%" },
    delay: 0.6,
    type: "deal",
  },
  {
    name: "Martin K.",
    text: "Super rýchle doručenie! Pass prišiel na druhý deň.",
    rating: 5,
    image: "/martin.png",
    position: { bottom: "20%", left: "6%" },
    delay: 0.9,
    type: "review",
  },
  {
    name: "Lucia P.",
    text: "Lepšie ceny ako v hre, určite odporúčam!",
    rating: 5,
    image: "/lucia.png",
    position: { top: "45%", right: "5%" },
    delay: 1.2,
    type: "review",
  },
];

export function FloatingReviews() {
  return (
    <>
      {deals.map((deal, index) => {
        const savings = (deal.type === "deal" && deal.originalPrice && deal.newPrice) 
  ? Math.round(((deal.originalPrice - deal.newPrice) / deal.originalPrice) * 100) 
  : 0;
        
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: deal.delay + 1.2 }}
            className="hidden lg:block absolute z-20 pointer-events-none"
            style={{ ...deal.position }}
          >
            <motion.div
              animate={{ 
                y: [0, -12, 0], 
                rotate: [0, 1, 0, -1, 0] 
              }}
              transition={{ 
                duration: 6 + index, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="backdrop-blur-xl rounded-2xl p-3 shadow-2xl border w-[200px]"
              style={{
                background: 'rgba(26, 26, 46, 0.85)',
                borderColor: 'rgba(138, 43, 226, 0.3)',
                boxShadow: '0 10px 40px rgba(0, 0, 0, 0.5)',
              }}
            >
              <div className="flex items-center gap-3 mb-2">
                {/* Obrázok/Ikona */}
                <div className="w-10 h-10 rounded-lg flex-shrink-0 overflow-hidden bg-gray-800 border border-white/10">
                  <img 
                    src={deal.image} 
                    alt={deal.game || deal.name} 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                       // Ak by sa obrázok nenačítal, dáme tam aspoň fialovú farbu
                       (e.target as any).style.display = 'none';
                       (e.target as any).parentElement.style.background = 'var(--gradient-btn)';
                    }}
                  />
                </div>
                
                <div className="flex-1 min-w-0">
                  <h4 className="font-bold truncate text-[13px] text-white">
                    {deal.game || deal.name}
                  </h4>
                  {deal.type === "deal" ? (
                    <p className="text-[11px] text-gray-400 truncate">{deal.passName}</p>
                  ) : (
                    <div className="flex gap-0.5">
                      {[...Array(deal.rating)].map((_, i) => (
                        <Star key={i} className="w-2.5 h-2.5 fill-[var(--secondary-neon)] text-[var(--secondary-neon)]" />
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {deal.type === "deal" ? (
                <div className="flex items-center justify-between mt-1">
                <div className="flex items-center gap-2">
                {/* Zobrazíme pôvodnú cenu, len ak existuje */}
                {deal.originalPrice !== undefined && (
                    <span className="text-[11px] line-through text-gray-500">
                    €{Number(deal.originalPrice).toFixed(2)}
                    </span>
                )}
                
                {/* Zobrazíme novú cenu, len ak existuje */}
                {deal.newPrice !== undefined && (
                    <span className="text-[14px] font-bold text-[var(--secondary-neon)]">
                    €{Number(deal.newPrice).toFixed(2)}
                    </span>
                )}
                </div>
                  <div className="bg-[var(--secondary-neon)]/10 border border-[var(--secondary-neon)]/30 px-2 py-0.5 rounded-md text-[10px] font-black text-[var(--secondary-neon)] flex items-center gap-1">
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