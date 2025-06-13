import BenefitsDashboard from "@/components/benefits-dashboard";
import BlockchainTransparency from "@/components/blockchain-transparency";
import CarbonTicker from "@/components/carbon-ticker";
import CTASection from "@/components/cta-section";
import Footer from "@/components/footer";
import HeroSection from "@/components/hero-section";
import InstantReturnFlow from "@/components/instant-return-flow";
import PartnersTestimonials from "@/components/partners-testimonials";
import ProblemSection from "@/components/problem-section";
import RetailerSolution from "@/components/retailer-solution";
import ARExperience from "@/components/ar-experience";

export default function Home() {
  return (
    <main>
      <CarbonTicker />
      <HeroSection />
      <ProblemSection />
      <InstantReturnFlow />
      <BenefitsDashboard />
      <RetailerSolution />
      <BlockchainTransparency />
      <ARExperience />
      <PartnersTestimonials />
      <CTASection />
    </main>
  );
}