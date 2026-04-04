"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCart, X, Plus, Minus, Trash2, MessageCircle } from "lucide-react";
import { useCart, CartItem } from "../context/CartContext";
import { useState } from "react";

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CartModal({ isOpen, onClose }: CartModalProps) {
  const { items, updateQuantity, removeFromCart, getTotalPrice } = useCart();
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
          />

          {/* Panel košíka */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed right-0 top-0 h-full w-full sm:w-[480px] z-[70] flex flex-col shadow-2xl"
            style={{ background: "rgba(13, 13, 26, 0.98)", borderLeft: "1px solid rgba(138, 43, 226, 0.2)" }}
          >
            {/* Header košíka */}
            <div className="flex items-center justify-between p-6 border-b border-white/5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/20" style={{ background: "var(--gradient-btn)" }}>
                  <ShoppingCart className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white">Váš Košík</h2>
                  <p className="text-xs text-gray-400">{items.length} položiek v ponuke</p>
                </div>
              </div>
              <button onClick={onClose} className="p-2 hover:bg-white/5 rounded-lg transition-colors text-gray-400 outline-none">
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Zoznam položiek */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center space-y-4 opacity-50">
                  <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center">
                    <ShoppingCart className="w-10 h-10 text-gray-600" />
                  </div>
                  <p className="text-gray-400 font-medium">Váš košík je momentálne prázdny</p>
                </div>
              ) : (
                items.map((item: CartItem) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 group hover:border-purple-500/20 transition-colors"
                  >
                    <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0 border border-white/10">
                      <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-white text-sm truncate">{item.title}</h3>
                      <div className="flex items-center justify-between mt-3">
                        <span className="text-[var(--secondary-neon)] font-bold">€{(item.discountedPrice * item.quantity).toFixed(2)}</span>
                        
                        <div className="flex items-center gap-3 bg-black/40 rounded-xl p-1.5 border border-white/5">
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-1 text-gray-500 hover:text-white transition-colors outline-none"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="text-white text-xs font-bold w-4 text-center">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-1 text-gray-500 hover:text-white transition-colors outline-none"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        <button 
                          onClick={() => removeFromCart(item.id)}
                          className="p-2 text-gray-600 hover:text-red-400 transition-colors outline-none"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))
              )}
            </div>

            {/* Footer košíka s cenou */}
            {items.length > 0 && (
              <div className="p-6 border-t border-white/5 bg-black/40 backdrop-blur-md">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-gray-400 text-sm font-medium uppercase tracking-wider">Celková suma</span>
                  <span className="text-3xl font-black text-[var(--secondary-neon)] drop-shadow-[0_0_10px_rgba(0,245,255,0.3)]">
                    €{getTotalPrice().toFixed(2)}
                  </span>
                </div>
                <button
                  onClick={() => setIsContactOpen(true)}
                  className="w-full py-4 rounded-2xl text-white font-black uppercase tracking-widest text-xs flex items-center justify-center gap-3 transition-all hover:scale-[1.02] shadow-xl shadow-purple-500/20 active:scale-[0.98] outline-none"
                  style={{ background: "var(--gradient-btn)" }}
                >
                  <MessageCircle className="w-5 h-5" />
                  Objednať cez Discord / Email
                </button>
              </div>
            )}
          </motion.div>

          {/* Checkout Info Modal (Popup v rámci košíka) */}
          <AnimatePresence>
            {isContactOpen && (
              <>
                <motion.div 
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }} 
                  exit={{ opacity: 0 }} 
                  className="fixed inset-0 bg-black/80 backdrop-blur-md z-[80]" 
                  onClick={() => setIsContactOpen(false)} 
                />
                <motion.div 
                  initial={{ scale: 0.9, opacity: 0 }} 
                  animate={{ scale: 1, opacity: 1 }} 
                  exit={{ scale: 0.9, opacity: 0 }} 
                  className="fixed inset-0 flex items-center justify-center z-[90] p-4 pointer-events-none"
                >
                  <div className="bg-[#0d0d1a] border border-purple-500/30 p-8 rounded-[2rem] max-w-sm w-full text-center shadow-2xl shadow-purple-500/20 pointer-events-auto">
                    <div className="w-16 h-16 bg-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <MessageCircle className="w-8 h-8 text-purple-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">Posledný krok!</h3>
                    <p className="text-gray-400 text-sm mb-8 leading-relaxed">
                      Pre dokončenie objednávky za <span className="text-[var(--secondary-neon)] font-bold">€{getTotalPrice().toFixed(2)}</span> nás prosím kontaktujte.
                    </p>
                    <div className="space-y-3">
                      <a 
                        href="https://discord.gg/cheappass" 
                        target="_blank" 
                        className="flex items-center justify-center gap-3 w-full py-4 bg-[#5865F2] rounded-xl text-white font-bold transition-all hover:scale-[1.03] hover:shadow-lg hover:shadow-[#5865F2]/20"
                      >
                        Discord: cheappass
                      </a>
                      <a 
                        href="mailto:support@cheappass.eu" 
                        className="flex items-center justify-center gap-3 w-full py-4 bg-white/5 border border-white/10 rounded-xl text-white font-bold hover:bg-white/10 transition-all"
                      >
                        Email Support
                      </a>
                      <button 
                        onClick={() => setIsContactOpen(false)} 
                        className="text-gray-500 text-xs mt-6 hover:text-white transition-colors outline-none"
                      >
                        Vrátiť sa k pokladni
                      </button>
                    </div>
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </>
      )}
    </AnimatePresence>
  );
}