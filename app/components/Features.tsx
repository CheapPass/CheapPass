"use client";

import { motion } from "framer-motion";
import { Shield, Zap, Clock, Users } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "100% Bezpečné",
    subtitle: "Oficiálny Gift Systém",
    description: "Všetky passy doručujeme výhradne cez oficiálnu funkciu \"Donate\" priamo v hre.",
    color: "#8a2be2", // Fialová
    bgLight: "rgba(138, 43, 226, 0.1)", // Jemné fialové pozadie
    glow: "rgba(138, 43, 226, 0.2)"
  },
  {
    icon: Clock,
    title: "Do 24 hodín",
    subtitle: "Ručné spracovanie",
    description: "Garantujeme doručenie do 24 hodín od prijatia žiadosti o priateľstvo v hre.",
    color: "#00f5ff", // Tyrkysová
    bgLight: "rgba(0, 245, 255, 0.08)", // Jemné tyrkysové pozadie
    glow: "rgba(0, 245, 255, 0.15)"
  },
  {
    icon: Zap,
    title: "Discord podpora",
    subtitle: "Sme tu pre vás osobne",
    description: "Máte otázky? Pripojte sa na náš Discord! Sme online takmer stále.",
    color: "#ff6b9d", // Ružová
    bgLight: "rgba(255, 107, 157, 0.08)", // Jemné ružové pozadie
    glow: "rgba(255, 107, 157, 0.15)"
  },
  {
    icon: Users,
    title: "Férový projekt",
    subtitle: "Budujeme komunitu",
    description: "Naším cieľom je priniesť férové ceny pre každého hráča.",
    color: "#feca57", // Oranžová
    bgLight: "rgba(254, 202, 87, 0.08)", // Jemné oranžové pozadie
    glow: "rgba(254, 202, 87, 0.15)"
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
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="relative border rounded-3xl p-6 transition-all overflow-hidden group"
              style={{
                // TU JE ZMENA: Každá karta má teraz svoje vlastné farebné pozadie
                background: feature.bgLight,
                borderColor: 'rgba(255, 255, 255, 0.05)',
                boxShadow: `0 10px 30px -10px ${feature.glow}`
              }}
            >
              {/* Dekoratívny odlesk v rohu */}
              <div 
                className="absolute -right-4 -top-4 w-16 h-16 blur-2xl rounded-full opacity-20"
                style={{ background: feature.color }}
              />

              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 shadow-lg"
                style={{ background: `linear-gradient(135deg, ${feature.color} 0%, #000 150%)` }}
              >
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              
              <h3 className="text-xl font-bold mb-1 text-white">{feature.title}</h3>
              <p className="text-[10px] uppercase tracking-widest mb-3 font-black" style={{ color: feature.color }}>
                {feature.subtitle}
              </p>
              <p className="text-xs leading-relaxed text-gray-400">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}