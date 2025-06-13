import BenefitsDashboard from "@/components/benefits-dashboard";
import CTASection from "@/components/cta-section";
import Footer from "@/components/footer";
import HeroSection from "@/components/hero-section";
import InstantReturnFlow from "@/components/instant-return-flow";
import PartnersTestimonials from "@/components/partners-testimonials";
import ProblemSection from "@/components/problem-section";
import RetailerSolution from "@/components/retailer-solution";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ProblemSection />
      <InstantReturnFlow />
      <BenefitsDashboard />
      <RetailerSolution />
      <PartnersTestimonials />
      <CTASection />
    </main>
  );
}