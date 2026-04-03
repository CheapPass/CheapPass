import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { PricingSection } from "./components/PricingSection";

export default function Page() {
  return (
    <main>
      <Hero />
      <Features />
      <PricingSection />
    </main>
  );
}