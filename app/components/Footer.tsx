"use client";

import { Mail, Shield, Info, MessageSquare } from "lucide-react";

export function Footer() {
  return (
    <footer className="text-white py-10 px-4 sm:px-6 lg:px-8" style={{
      background: 'rgba(13, 13, 26, 0.95)',
      borderTop: '1px solid rgba(138, 43, 226, 0.15)'
    }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center p-1" style={{ background: 'var(--gradient-btn)' }}>
                <img src="/logo.png" alt="Logo" className="w-full h-full object-contain" />
              </div>
              <span className="font-bold text-lg">CheapPass.eu</span>
            </div>
            <p className="text-xs leading-relaxed" style={{ color: 'var(--text-muted)' }}>
              Vaša najlepšia voľba pre herné predplatné za skvelé ceny. Bezpečne a rýchlo doručené priamo do vašej hry.
            </p>
          </div>

          {/* Odkazy */}
          <div>
            <h4 className="text-sm font-bold mb-4 text-white">Rýchle odkazy</h4>
            <ul className="space-y-2 text-xs" style={{ color: 'var(--text-muted)' }}>
              <li><a href="#pricing" className="hover:text-[var(--secondary-neon)] transition-colors">Všetky passy</a></li>
              <li><a href="#features" className="hover:text-[var(--secondary-neon)] transition-colors">Ako to funguje</a></li>
              <li><a href="#" className="hover:text-[var(--secondary-neon)] transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Právne informácie */}
          <div>
            <h4 className="text-sm font-bold mb-4 text-white">Informácie</h4>
            <ul className="space-y-2 text-xs" style={{ color: 'var(--text-muted)' }}>
              <li><a href="#" className="hover:text-[var(--secondary-neon)] transition-colors">Obchodné podmienky</a></li>
              <li><a href="#" className="hover:text-[var(--secondary-neon)] transition-colors">Ochrana údajov</a></li>
              <li><a href="#" className="hover:text-[var(--secondary-neon)] transition-colors">Reklamačný poriadok</a></li>
            </ul>
          </div>

          {/* Kontakt a Podpora - TU JE TO PRIDANÉ */}
          <div>
            <h4 className="text-sm font-bold mb-4 text-white">Kontakt a Podpora</h4>
            <div className="space-y-3 text-xs" style={{ color: 'var(--text-muted)' }}>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[var(--secondary-neon)]" />
                <span>info@cheappass.eu</span>
              </div>
              <div className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-[var(--secondary-neon)]" />
                <span>Discord Support (24/7)</span>
              </div>
              <div className="flex items-center gap-2">
                <Info className="w-4 h-4 text-[var(--secondary-neon)]" />
                <span className="text-gray-200">24/7 Zákaznícka podpora</span>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <Shield className="w-4 h-4 text-green-500" />
                <span className="text-[10px] uppercase font-bold tracking-wider">100% Bezpečný nákup</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 text-center border-t border-white/5" style={{ color: 'var(--text-muted)' }}>
          <p className="text-[10px] tracking-widest uppercase">© 2026 CheapPass.eu. Všetky práva vyhradené.</p>
        </div>
      </div>
    </footer>
  );
}