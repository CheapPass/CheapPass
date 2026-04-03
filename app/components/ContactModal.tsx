"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Mail, MessageCircle } from "lucide-react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Pozadie (Backdrop) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[60]"
          />

          {/* Samotné okno modalu */}
          <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", duration: 0.5, bounce: 0.3 }}
              className="relative w-full max-w-md rounded-3xl border p-8 shadow-2xl pointer-events-auto"
              style={{
                background: "#16162d", // Tmavé pozadie ladiace s webom
                borderColor: "rgba(138, 43, 226, 0.3)",
                boxShadow: "0 0 50px rgba(138, 43, 226, 0.2)",
              }}
            >
              {/* Tlačidlo na zatvorenie (X) */}
              <button
                onClick={onClose}
                className="absolute top-5 right-5 p-2 rounded-xl transition-all hover:bg-white/10 text-gray-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Nadpis */}
              <div className="mb-8">
                <h2
                  className="text-3xl font-black mb-3"
                  style={{
                    background: "var(--gradient-btn)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Kontaktujte nás
                </h2>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Máte otázku k objednávke alebo potrebujete poradiť? Sme tu pre vás na Discorde aj e-maile.
                </p>
              </div>

              {/* Možnosti kontaktu */}
              <div className="space-y-4">
                {/* Discord link */}
                <motion.a
                  href="https://discord.gg/cheappass"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02, x: 5 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-4 p-4 rounded-2xl border border-white/5 bg-[#5865F2]/10 hover:bg-[#5865F2]/20 transition-all cursor-pointer group"
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-[#5865F2] shadow-lg shadow-[#5865F2]/30">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white group-hover:text-[#5865F2] transition-colors">Discord Server</h3>
                    <p className="text-xs text-gray-500">Odpovedáme takmer okamžite</p>
                  </div>
                </motion.a>

                {/* Email link */}
                <motion.a
                  href="mailto:support@cheappass.eu"
                  whileHover={{ scale: 1.02, x: 5 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-4 p-4 rounded-2xl border border-white/5 bg-purple-500/10 hover:bg-purple-500/20 transition-all cursor-pointer group"
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br from-purple-500 to-blue-500 shadow-lg shadow-purple-500/30">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white group-hover:text-purple-400 transition-colors">E-mailová podpora</h3>
                    <p className="text-xs text-gray-500">support@cheappass.eu</p>
                  </div>
                </motion.a>
              </div>

              {/* Päta modalu */}
              <div className="mt-8 pt-6 border-t border-white/5 text-center">
                <p className="text-[10px] uppercase tracking-widest font-bold text-gray-500">
                  Dostupnosť: Pon - Ned (9:00 - 22:00)
                </p>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}