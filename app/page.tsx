import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import HowToLogin from '@/components/HowToLogin';
import WhyJoin from '@/components/WhyJoin';
import CTA from '@/components/CTA';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Features />
      <HowToLogin />
      <WhyJoin />
      <CTA />
      <FAQ />
      <Footer />
    </main>
  );
}