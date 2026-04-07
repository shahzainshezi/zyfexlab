import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Services from "@/components/Services";
import TechStrip from "@/components/TechStrip";
import Process from "@/components/Process";
import Automation from "@/components/Automation";
import Metrics from "@/components/Metrics";
import Testimonials from "@/components/Testimonials";
import Guarantee from "@/components/Guarantee";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 selection:text-primary-foreground font-sans overflow-x-hidden">
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <TechStrip />
        <Process />
        <Automation />
        <Metrics />
        <Testimonials />
        <Guarantee />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
