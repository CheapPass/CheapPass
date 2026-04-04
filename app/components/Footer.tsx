"use client";

import { Mail, Shield, Info, CreditCard } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="text-white py-16 px-4 sm:px-6 lg:px-8 border-t border-white/5" style={{
      background: '#0a0a12', // Tmavšie pozadie podľa dizajnu
    }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* O nás / Logo */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3 group outline-none">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center p-2 transition-transform group-hover:scale-110" style={{ background: 'var(--gradient-btn)' }}>
                <img src="/logo.png" alt="Logo" className="w-full h-full object-contain" />
              </div>
              <span className="font-black text-xl tracking-tight text-white">
                CheapPass.eu
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-gray-400 max-w-[250px]">
              Vaša najlepšia voľba pre herné predplatné za skvelé ceny.
            </p>
          </div>

          {/* Rýchle odkazy */}
          <div>
            <h4 className="text-base font-bold mb-5 text-white">Rýchle odkazy</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link href="/ponuka" className="hover:text-white transition-colors">Všetky passy</Link></li>
              <li><Link href="/#features" className="hover:text-white transition-colors">Ako to funguje</Link></li>
              <li><Link href="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
              <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
            </ul>
          </div>

          {/* Podpora - Právne veci */}
          <div>
            <h4 className="text-base font-bold mb-5 text-white">Podpora</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link href="/kontakt" className="hover:text-white transition-colors">Kontakt</Link></li>
              <li><Link href="/vratenie-penazi" className="hover:text-white transition-colors">Vrátenie peňazí</Link></li>
              <li><Link href="/bezpecnost" className="hover:text-white transition-colors">Bezpečnosť</Link></li>
              <li><Link href="/obchodne-podmienky" className="hover:text-white transition-colors">Obchodné podmienky</Link></li>
            </ul>
          </div>

          {/* Kontaktujte nás - Ikonky bez farieb na konci */}
          <div>
            <h4 className="text-base font-bold mb-5 text-white">Kontaktujte nás</h4>
            <div className="space-y-4 text-sm text-gray-400">
              <a href="mailto:info@cheappass.eu" className="flex items-center gap-3 hover:text-white transition-colors">
                <Mail className="w-5 h-5 text-gray-500" />
                <span>info@cheappass.eu</span>
              </a>
              <div className="flex items-center gap-3">
                <Shield className="w-5 h-5 text-gray-500" />
                <span>100% Bezpečné platby</span>
              </div>
              <div className="flex items-center gap-3">
                <Info className="w-5 h-5 text-gray-500" />
                <span>24/7 Zákaznícka podpora</span>
              </div>
            </div>
          </div>
        </div>

        {/* Spodná lišta */}
        <div className="pt-8 text-center border-t border-white/5">
          <p className="text-xs text-gray-500 tracking-wide">
            © 2026 CheapPass.eu. Všetky práva vyhradené.
          </p>
        </div>
      </div>
    </footer>
  );
}