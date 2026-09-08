import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Services from "@/components/Services";
import Expertise from "@/components/Expertise";
import Approach from "@/components/Approach";
import OurOffice from "@/components/OurOffice";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Intro />
      <Services />
      <Expertise />
      <Approach />
      <OurOffice />
      <FAQ />
      <CTASection />
      <Footer />
    </main>
  );
}
