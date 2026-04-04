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
  const { items, updateQuantity, removeFromCart, getTotalPrice, clearCart } = useCart();
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed right-0 top-0 h-full w-full sm:w-[480px] z-50 flex flex-col shadow-2xl"
            style={{ background: "rgba(13, 13, 26, 0.98)", borderLeft: "1px solid rgba(138, 43, 226, 0.2)" }}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "var(--gradient-btn)" }}>
                  <ShoppingCart className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white">Košík</h2>
                  <p className="text-xs text-gray-400">{items.length} položiek</p>
                </div>
              </div>
              <button onClick={onClose} className="p-2 hover:bg-white/5 rounded-lg transition-colors text-gray-400">
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center space-y-4 opacity-50">
                  <ShoppingCart className="w-12 h-12 text-gray-600" />
                  <p className="text-gray-400">Košík je prázdny</p>
                </div>
              ) : (
                items.map((item: CartItem) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex gap-4 p-3 rounded-xl bg-white/5 border border-white/5"
                  >
                    <img src={item.image} alt={item.title} className="w-16 h-16 object-cover rounded-lg" />
                    <div className="flex-1">
                      <h3 className="font-bold text-white text-sm">{item.title}</h3>
                      <div className="flex items-center justify-between mt-2">
                        <span className="text-[var(--secondary-neon)] font-bold">€{item.discountedPrice.toFixed(2)}</span>
                        <div className="flex items-center gap-2 bg-black/40 rounded-lg p-1">
                          <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="p-1 text-gray-400 hover:text-white"><Minus className="w-3 h-3" /></button>
                          <span className="text-white text-xs w-4 text-center">{item.quantity}</span>
                          <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="p-1 text-gray-400 hover:text-white"><Plus className="w-3 h-3" /></button>
                        </div>
                        <button onClick={() => removeFromCart(item.id)} className="text-gray-500 hover:text-red-400"><Trash2 className="w-4 h-4" /></button>
                      </div>
                    </div>
                  </motion.div>
                ))
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="p-6 border-t border-white/5 bg-black/20">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-gray-400 text-sm">Spolu:</span>
                  <span className="text-3xl font-black text-[var(--secondary-neon)]">€{getTotalPrice().toFixed(2)}</span>
                </div>
                <button
                  onClick={() => setIsContactOpen(true)}
                  className="w-full py-4 rounded-xl text-white font-black uppercase tracking-widest text-xs flex items-center justify-center gap-3 transition-transform hover:scale-[1.02]"
                  style={{ background: "var(--gradient-btn)" }}
                >
                  <MessageCircle className="w-5 h-5" />
                  Objednať
                </button>
              </div>
            )}
          </motion.div>

          {/* Checkout Info Modal */}
          <AnimatePresence>
            {isContactOpen && (
              <>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black/80 backdrop-blur-md z-[60]" onClick={() => setIsContactOpen(false)} />
                <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} className="fixed inset-0 flex items-center justify-center z-[70] p-4">
                  <div className="bg-[#0d0d1a] border border-purple-500/30 p-8 rounded-3xl max-w-sm w-full text-center shadow-2xl shadow-purple-500/20">
                    <h3 className="text-2xl font-bold text-white mb-4">Posledný krok!</h3>
                    <p className="text-gray-400 text-sm mb-6">Napíš nám na Discord/Email a objednávku za <b>€{getTotalPrice().toFixed(2)}</b> hneď vybavíme.</p>
                    <div className="space-y-3">
                      <a href="https://discord.gg/cheappass" target="_blank" className="block w-full py-3 bg-[#5865F2] rounded-xl text-white font-bold transition-transform hover:scale-105">Discord: cheappass</a>
                      <a href="mailto:support@cheappass.eu" className="block w-full py-3 bg-white/5 border border-white/10 rounded-xl text-white font-bold hover:bg-white/10">Email Support</a>
                      <button onClick={() => setIsContactOpen(false)} className="text-gray-500 text-xs mt-4">Zavrieť</button>
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