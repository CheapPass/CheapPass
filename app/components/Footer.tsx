"use client";

import { Mail, Shield, Info } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="text-white py-12 px-4 sm:px-6 lg:px-8 border-t" style={{
      background: 'rgba(13, 13, 26, 0.98)',
      borderColor: 'rgba(138, 43, 226, 0.1)'
    }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* O nás / Logo */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4 group outline-none">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center p-1.5 transition-transform group-hover:scale-110" style={{ background: 'var(--gradient-btn)' }}>
                <img src="/logo.png" alt="Logo" className="w-full h-full object-contain" />
              </div>
              <span className="font-bold text-lg tracking-tight text-white">
                CheapPass
                <span style={{
                  background: 'var(--gradient-btn)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}>.eu</span>
              </span>
            </Link>
            <p className="text-[11px] leading-relaxed text-gray-400">
              Prémiové herné predplatné za zlomok ceny. Bezpečne, legálne a s okamžitým doručením priamo na váš účet.
            </p>
          </div>

          {/* Navigácia */}
          <div>
            <h4 className="text-sm font-bold mb-4">Navigácia</h4>
            <ul className="space-y-2 text-xs text-gray-500">
              <li>
                <Link href="/ponuka" className="hover:text-[var(--secondary-neon)] transition-colors">
                  Ponuka produktov
                </Link>
              </li>
              <li>
                <Link href="/ako-to-funguje" className="hover:text-[var(--secondary-neon)] transition-colors">
                  Ako to funguje
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-[var(--secondary-neon)] transition-colors">
                  Časté otázky (FAQ)
                </Link>
              </li>
            </ul>
          </div>

          {/* Právne info */}
          <div>
            <h4 className="text-sm font-bold mb-4">Právne info</h4>
            <ul className="space-y-2 text-xs text-gray-500">
              <li>
                <Link href="/obchodne-podmienky" className="hover:text-[var(--secondary-neon)] transition-colors">
                  Obchodné podmienky
                </Link>
              </li>
              <li>
                <Link href="/ochrana-udajov" className="hover:text-[var(--secondary-neon)] transition-colors">
                  Ochrana osobných údajov
                </Link>
              </li>
            </ul>
          </div>

          {/* Podpora */}
          <div>
            <h4 className="text-sm font-bold mb-4">Podpora</h4>
            <div className="space-y-3 text-xs text-gray-400">
              <a href="mailto:info@cheappass.eu" className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail className="w-4 h-4 text-[var(--secondary-neon)]" />
                <span>info@cheappass.eu</span>
              </a>
              <div className="flex items-center gap-2">
                <Info className="w-4 h-4 text-blue-400" />
                <span className="text-gray-400">24/7 Zákaznícka podpora</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-emerald-500" />
                <span className="text-[10px] font-black tracking-widest text-gray-400 uppercase">
                  100% Bezpečné
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 text-center border-t border-white/5">
          <p className="text-[10px] text-gray-600 uppercase tracking-[0.2em]">
            © 2026 CheapPass.eu • Made for gamers
          </p>
        </div>
      </div>
    </footer>
  );
}