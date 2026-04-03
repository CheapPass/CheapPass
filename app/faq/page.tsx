"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import * as Accordion from "@radix-ui/react-accordion";
import { useState } from "react";

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqCategory {
  title: string;
  items: FaqItem[];
}

const faqData: FaqCategory[] = [
  {
    title: "Všeobecné otázky",
    items: [
      {
        question: "Čo je CheapPass.eu?",
        answer: "CheapPass.eu je platforma špecializujúca sa na predaj herných mesačných passov a top-up kreditov za zľavnené ceny. Ponúkame legálne produkty pre hry ako Clash of Clans a Clash Royale s úsporou až 50%.",
      },
      {
        question: "Sú vaše produkty legálne?",
        answer: "Áno, 100%! Všetky produkty posielame cez oficiálny GIFT systém hier. Je to rovnaké, ako keby ste dostali darček od priateľa v hre. Neporušujeme žiadne pravidlá a váš účet je v bezpečí.",
      },
      {
        question: "Prečo sú vaše ceny nižšie ako oficiálne?",
        answer: "Kupujeme produkty vo väčších množstvách a v regiónoch s nižšími cenami, vďaka čomu môžeme ponúknuť úsporu až 50%. Tieto úspory prenášame priamo na vás!",
      },
      {
        question: "Ako rýchlo dostanem svoj produkt?",
        answer: "Väčšinu objednávok spracujeme okamžite, akonáhle potvrdíme platbu. V zriedkavých prípadoch to môže trvať až 24 hodín. Odpovedáme väčšinou hneď!",
      },
    ],
  },
  {
    title: "GIFT systém a bezpečnosť",
    items: [
      {
        question: "Čo je GIFT systém?",
        answer: "GIFT systém je oficiálna funkcia v hrách Supercell (Clash of Clans, Clash Royale), ktorá umožňuje hráčom posielať herné predmety ako darčeky iným hráčom. Je to úplne legálne a bezpečné.",
      },
      {
        question: "Potrebujete moje prihlasovacie údaje?",
        answer: "NIE! Nepotrebujeme vaše heslo ani žiadne prihlasovacia údaje. Stačí nám váš hráčsky tag alebo názov klanu. GIFT systém funguje bez potreby prístupu k vášmu účtu.",
      },
      {
        question: "Môžem dostať ban za použitie vašich služieb?",
        answer: "Nie! Keďže používame oficiálny GIFT systém, neporušujete žiadne pravidlá hry. Je to rovnako bezpečné ako dostať darček od priateľa v hre. Supercell túto funkciu vytvoril práve na tento účel.",
      },
    ],
  },
  {
    title: "Objednávka a platba",
    items: [
      {
        question: "Ako si objednám produkt?",
        answer: "1) Vyberte si produkt z našej ponuky. 2) Kontaktujte nás cez Discord alebo email. 3) Potvrdíme detaily a zašleme platobné údaje. 4) Po úhrade vám produkt zašleme cez GIFT systém.",
      },
      {
        question: "Aké platobné metódy akceptujete?",
        answer: "Akceptujeme bankové prevody, PayPal a kryptomeny. Detaily platby vám zašleme po potvrdení objednávky.",
      },
    ],
  },
];

export default function FaqPage() {
  return (
    <div className="min-h-screen pt-24 pb-16 bg-[#0d0d1a]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">
            Často kladené otázky
          </h1>
          <p className="text-lg text-gray-400">
            Všetko, čo potrebujete vedieť o CheapPass.eu
          </p>
        </motion.div>

        {/* FAQ Categories */}
        <div className="space-y-12">
          {faqData.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            >
              <h2 className="text-2xl font-bold mb-6 text-white border-l-4 border-purple-500 pl-4">
                {category.title}
              </h2>

              <Accordion.Root type="single" collapsible className="space-y-4">
                {category.items.map((item, itemIndex) => (
                  <Accordion.Item
                    key={itemIndex}
                    value={`item-${categoryIndex}-${itemIndex}`}
                    className="rounded-2xl border border-white/10 bg-white/5 overflow-hidden transition-all hover:border-purple-500/30"
                  >
                    <Accordion.Header>
                      <Accordion.Trigger className="w-full flex items-center justify-between p-6 text-left group">
                        <span className="font-bold text-gray-200 group-hover:text-white transition-colors">
                          {item.question}
                        </span>
                        <ChevronDown className="w-5 h-5 text-purple-400 transition-transform duration-300 group-data-[state=open]:rotate-180" />
                      </Accordion.Trigger>
                    </Accordion.Header>
                    <Accordion.Content className="overflow-hidden data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
                      <div className="px-6 pb-6 text-gray-400 leading-relaxed">
                        {item.answer}
                      </div>
                    </Accordion.Content>
                  </Accordion.Item>
                ))}
              </Accordion.Root>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="mt-20 p-8 rounded-3xl border border-purple-500/30 bg-gradient-to-br from-purple-900/20 to-cyan-900/20 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-4">Nenašli ste odpoveď?</h3>
          <p className="text-gray-400 mb-8">Sme k dispozícii 24/7 na našom Discorde.</p>
          <a
            href="https://discord.gg/cheappass"
            className="inline-block px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold hover:shadow-lg hover:shadow-purple-500/25 transition-all"
          >
            Otvoriť Discord
          </a>
        </motion.div>
      </div>
    </div>
  );
}