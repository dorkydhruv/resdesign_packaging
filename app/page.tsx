import FAQ from "@/components/landing-page/FAQ";
import Footer from "@/components/landing-page/Footer";
import Header from "@/components/landing-page/Header";
import HeroSection from "@/components/landing-page/HeroSection";
import HowItWorks from "@/components/landing-page/HowItWorks";
import Pricing from "@/components/landing-page/Pricing";
// app/page.tsx
export default function Home() {
  return (
    <main className='flex flex-col min-h-screen h-full font-normal'>
      <Header />
      <HeroSection />
      <HowItWorks />
      <Pricing />
      <FAQ />
      <Footer />
    </main>
  );
}
