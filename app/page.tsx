import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { PricingSection } from "./components/PricingSection";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d0d1a] text-white">
      {/* Horná lišta */}
      <Header />

      {/* Hlavná Hero sekcia s bublinami */}
      <Hero />
      
      {/* Sekcia s výhodami (Features) */}
      <div id="features" className="relative z-10">
        <Features />
      </div>

      {/* Sekcia s ponukou passov (Pricing) */}
      <div id="pricing" className="relative z-10 py-10">
        {/* Jemná žiara v pozadí pod kartami */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-[var(--primary-neon)]/5 blur-[120px] pointer-events-none" />
        <PricingSection />
      </div>

      {/* Päta webu */}
      <Footer />
    </main>
  );
}