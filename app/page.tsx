"use client";

import { motion } from "framer-motion";
import { Filter, Search } from "lucide-react";
import { useState } from "react";
// Importy z tvojich komponentov
import { PassCard } from "../components/PassCard";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export default function ProductsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  
  const products = [
    {
      id: "1",
      title: "Clash of Clans Gold Pass",
      image: "/coc.png",
      originalPrice: 6.50,
      discountedPrice: 3.99,
      discount: 39,
      features: ["Všetky výhody", "Rýchly support"],
      popular: true,
      category: "pass",
      game: "clash-of-clans"
    }
  ];

  return (
    <main className="min-h-screen bg-[#0d0d1a]">
      <Header />
      <div className="pt-32 pb-20 max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-black mb-10 text-transparent bg-clip-text text-center" style={{ backgroundImage: 'var(--gradient-btn)' }}>
          Naša ponuka
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((p) => (
            <PassCard key={p.id} {...p} />
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
}