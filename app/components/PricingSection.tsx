"use client";

import { motion } from "framer-motion";
import { PassCard } from "../components/PassCard";

const passes = [
{
    title: "Clash of Clans Gold Pass",
    image: "/coc.png",
    originalPrice: 6.50,
    discountedPrice: 3.99,
    discount: 39,
    features: [
      "Exkluzívne herné predmety",
      "Skin na hrdinu",
      "Bonus loot",
      "Magické predmety každý deň",
    ],
    popular: true,
  },
  {
    title: "Clash Royale Royal Pass",
    image: "/cr.png", // Opravená cesta k obrázku
    originalPrice: 11.50,
    discountedPrice: 6.99,
    discount: 39,
    features: [
      "Neobmedzené truhlice",
      "Exkluzívne tower skiny",
      "Bonus emotes",
      "Prémiové odmeny denne",
    ],
    popular: true,
  },
  {
    title: "Clash of Clans Event Pass",
    image: "/coc.png", // Opravená cesta k obrázku
    originalPrice: 4.00,
    discountedPrice: 3.00,
    discount: 25,
    features: [
      "Event hrdinovia",
      "Bonus event body",
      "Rýchlejšie eventy",
      "Špeciálne dekorácie",
    ],
    popular: true,
  },
];

export function PricingSection() {
  return (
    <section id="pricing" className="py-16 px-4 sm:px-6 lg:px-8" style={{ background: 'var(--bg-color)' }}>
      <div className="max-w-6xl mx-auto">
        
        {/* Nadpis sekcie */}
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
            backgroundClip: 'text',
            display: 'inline-block'
          }}>
            Dostupné herné passy
          </h2>
          <p className="text-sm max-w-xl mx-auto" style={{ color: 'var(--text-muted)' }}>
            Vyberte si zo širokej ponuky herných predplatných za najlepšie ceny.
          </p>
        </motion.div>

        {/* Grid s kartami */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {passes.map((pass, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex justify-center"
            >
              <PassCard {...pass} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}