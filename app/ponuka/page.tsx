"use client";

import { motion } from "framer-motion"; // Opravené na framer-motion
import { Filter, Search } from "lucide-react";
import { useState } from "react";
import { PassCard } from "../components/PassCard";

interface Product {
  id: string;
  title: string;
  image: string;
  originalPrice: number;
  discountedPrice: number;
  discount: number;
  features: string[];
  popular?: boolean;
  category: "pass" | "topup";
  game: "clash-of-clans" | "clash-royale";
}

const products: Product[] = [
  {
    id: "coc-gold-pass",
    title: "Clash of Clans Gold Pass",
    image: "/coc.png",
    originalPrice: 6.50,
    discountedPrice: 3.99,
    discount: 39,
    features: ["Exkluzívne predmety", "20% zľava v obchode", "Bonus stavebník"],
    popular: true,
    category: "pass",
    game: "clash-of-clans",
  },
  {
    id: "cr-royal-pass",
    title: "Clash Royale Royal Pass",
    image: "/cr.png",
    originalPrice: 11.50,
    discountedPrice: 6.99,
    discount: 39,
    features: ["Truhlica s odmenami", "Tower skiny", "Bonus emotes"],
    popular: true,
    category: "pass",
    game: "clash-royale",
  },
  // Tu si doplň tie ďalšie top-upy čo si mal...
];

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState<"all" | "pass" | "topup">("all");
  const [selectedGame, setSelectedGame] = useState<"all" | "clash-of-clans" | "clash-royale">("all");
  const [sortBy, setSortBy] = useState<"price-low" | "price-high" | "discount">("price-low");
  const [searchQuery, setSearchQuery] = useState("");

  let filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
    const matchesGame = selectedGame === "all" || product.game === selectedGame;
    const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesGame && matchesSearch;
  });

  filteredProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === "price-low") return a.discountedPrice - b.discountedPrice;
    if (sortBy === "price-high") return b.discountedPrice - a.discountedPrice;
    if (sortBy === "discount") return b.discount - a.discount;
    return 0;
  });

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text" style={{ backgroundImage: 'var(--gradient-btn)' }}>
            Naša ponuka
          </h1>
          <p className="text-gray-400">{filteredProducts.length} produktov</p>
        </motion.div>

        {/* Filtre */}
        <div className="rounded-2xl border p-6 mb-8 bg-[#16162d] border-purple-500/20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
              <input 
                type="text" placeholder="Hľadať..." 
                className="w-full pl-10 pr-4 py-2 rounded-lg bg-[#0d0d1a] border border-purple-500/30 text-white outline-none focus:border-purple-500"
                value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <select className="bg-[#0d0d1a] border border-purple-500/30 p-2 rounded-lg outline-none" value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value as any)}>
              <option value="all">Všetky kategórie</option>
              <option value="pass">Mesačné passy</option>
              <option value="topup">Top-up (Gems)</option>
            </select>

            <select className="bg-[#0d0d1a] border border-purple-500/30 p-2 rounded-lg outline-none" value={selectedGame} onChange={(e) => setSelectedGame(e.target.value as any)}>
              <option value="all">Všetky hry</option>
              <option value="clash-of-clans">Clash of Clans</option>
              <option value="clash-royale">Clash Royale</option>
            </select>

            <select className="bg-[#0d0d1a] border border-purple-500/30 p-2 rounded-lg outline-none" value={sortBy} onChange={(e) => setSortBy(e.target.value as any)}>
              <option value="price-low">Cena: Od najnižšej</option>
              <option value="price-high">Cena: Od najvyššej</option>
              <option value="discount">Najväčšia zľava</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <PassCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </div>
  );
}