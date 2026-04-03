"use client";

import { motion } from "framer-motion";
import { ShoppingCart, MessageCircle, Gift, CheckCircle, Shield, Lock, Clock, Zap } from "lucide-react";

const steps = [
  {
    icon: ShoppingCart,
    title: "1. Vyberte si produkt",
    description: "Preskúmajte našu ponuku a vyberte si herný pass alebo top-up, ktorý potrebujete. Všetky ceny sú už s výraznou zľavou.",
  },
  {
    icon: MessageCircle,
    title: "2. Kontaktujte nás",
    description: "Napíšte nám na Discord alebo email s informáciou o produkte. Odpovedáme väčšinou hneď, určite do 24 hodín.",
  },
  {
    icon: Gift,
    title: "3. GIFT systém",
    description: "Po uhradení platby vám produkt zašleme cez oficiálny GIFT systém hry. Nepotrebujeme vaše prihlasovacie údaje.",
  },
  {
    icon: CheckCircle,
    title: "4. Užívajte si výhody",
    description: "Po prijatí giftu sa prihláste do hry a aktivujte si produkt. Môžete okamžite využívať všetky výhody!",
  },
];

const features = [
  { icon: Shield, title: "100% Legálne", description: "Oficiálny GIFT systém hry." },
  { icon: Lock, title: "Bezpečné", description: "Bez prístupu k vášmu účtu." },
  { icon: Clock, title: "Rýchle", description: "Doručenie už do pár minút." },
  { icon: Zap, title: "Lacné", description: "Úspora až 50% oproti hre." },
];

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen pt-24 pb-16 bg-[#0d0d1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
            Ako to <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">funguje?</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Získanie lacnejšieho passu nikdy nebolo jednoduchšie. Stačia vám tieto 4 kroky.
          </p>
        </motion.div>

        {/* Kroky */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-3xl border border-white/5 bg-white/5 hover:bg-white/10 transition-colors"
            >
              <div className="w-14 h-14 rounded-2xl bg-purple-500/20 flex items-center justify-center mb-6">
                <step.icon className="w-7 h-7 text-purple-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
              <p className="text-gray-400 leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Vlastnosti */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {features.map((f, i) => (
            <div key={i} className="text-center p-6">
              <f.icon className="w-10 h-10 text-cyan-400 mx-auto mb-4" />
              <h4 className="font-bold text-white mb-2">{f.title}</h4>
              <p className="text-xs text-gray-500">{f.description}</p>
            </div>
          ))}
        </div>

        {/* Gift System Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="p-10 rounded-[40px] bg-gradient-to-br from-purple-600/10 to-blue-600/10 border border-purple-500/20"
        >
          <div className="max-w-3xl mx-auto text-center">
            <Gift className="w-16 h-16 text-purple-500 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-white mb-6">Čo je GIFT systém?</h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              Ide o oficiálnu funkciu hier Supercell. Produkt vám príde priamo do hry ako darček. 
              <span className="text-purple-400 font-bold"> Nepotrebujeme vaše heslo</span>, stačí nám váš Player Tag. 
              Je to najbezpečnejší spôsob nákupu.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}