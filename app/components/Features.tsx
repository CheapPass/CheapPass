"use client";

import { motion } from "framer-motion";
import { Shield, Zap, Clock, Users } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "100% Bezpečné",
    subtitle: "Oficiálny Gift Systém",
    description: "Všetky passy doručujeme výhradne cez oficiálnu funkciu \"Donate\" priamo v hre. Žiadne prihlasovanie, žiadne riziko banu.",
    // Farby pre ikonky:
    color: "linear-gradient(135deg, #8a2be2 0%, #6a1bb2 100%)", // Fialová
  },
  {
    icon: Clock,
    title: "Do 24 hodín",
    subtitle: "Ručné spracovanie",
    description: "Garantujeme doručenie do 24 hodín od prijatia žiadosti o priateľstvo v hre. O stave vás budeme informovať.",
    color: "linear-gradient(135deg, #00f5ff 0%, #00c5cf 100%)", // Tyrkysová
  },
  {
    icon: Zap,
    title: "Discord podpora",
    subtitle: "Sme tu pre vás osobne",
    description: "Máte otázky? Pripojte sa na náš Discord! Sme online takmer stále a odpovedáme okamžite a ľudsky.",
    color: "linear-gradient(135deg, #ff6b9d 0%, #ff4081 100%)", // Ružová
  },
  {
    icon: Users,
    title: "Férový projekt",
    subtitle: "Budujeme komunitu",
    description: "Naším cieľom je priniesť férové ceny pre každého hráča. Každá objednávka je pre nás dôležitá.",
    color: "linear-gradient(135deg, #feca57 0%, #ff9f43 100%)", // Žltá/Oranžová
  },
];

export function Features() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8" style={{ background: 'var(--bg-color)' }}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-3" style={{
            background: 'var(--gradient-btn)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            Prečo si vybrať CheapPass?
          </h2>
          <p className="text-sm max-w-xl mx-auto" style={{ color: 'var(--text-muted)' }}>
            Poskytujeme najlepšie ceny a služby pre hráčov po celej Európe.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }} // Pridané jemné zväčšenie pri hoveri
              className="border rounded-2xl p-5 shadow-lg transition-all backdrop-blur-sm"
              style={{
                // OPRAVA: Pozadie karty je teraz priehľadné s jemným blur-om
                background: 'rgba(13, 13, 26, 0.2)', // Veľmi priehľadné tmavé
                borderColor: 'rgba(138, 43, 226, 0.1)',
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.15)'
              }}
            >
              {/* Ikonka s gradientom na pozadí */}
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110"
                style={{ background: feature.color }}
              >
                <feature.icon className="w-5 h-5 text-white" />
              </div>
              
              <h3 className="text-lg font-bold mb-1" style={{ color: 'var(--text-main)' }}>{feature.title}</h3>
              <p className="text-[10px] uppercase tracking-wider mb-2 font-black" style={{ color: 'var(--secondary-neon)' }}>{feature.subtitle}</p>
              <p className="text-xs leading-relaxed" style={{ color: 'var(--text-muted)' }}>{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}