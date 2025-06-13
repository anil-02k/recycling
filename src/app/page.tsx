import AboutSection from "@/components/about-section";
import BottomNavSection from "@/components/bottom-nav-section";
import ContactSection from "@/components/contact-section";
import CoursePromoSection from "@/components/course-promo-section";
import CTASection from "@/components/cta-section";
import FAQSection from "@/components/faq-section";
import HeroSection from "@/components/hero-section";
import PartnersSection from "@/components/partners-section";
import ServicesSection from "@/components/services-section";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <CoursePromoSection />
      <FAQSection />
      <ServicesSection />
      <ContactSection />
      <PartnersSection />
      <AboutSection />
      <CTASection />
      <BottomNavSection />
    </main>
  );
}
