import Ecosystem from '@/components/sections/Ecosystem';
import Enterprise from '@/components/sections/Enterprise';
import FAQ from '@/components/sections/FAQ';
import Features from '@/components/sections/Features';
import Footer from '@/components/sections/Footer';
import GetStarted from '@/components/sections/GetStarted';
import Hero from '@/components/sections/Hero';
import HowItWorks from '@/components/sections/HowItWorks';
import Nav from '@/components/sections/Nav';
import Ours from '@/components/sections/Ours';

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main">
        <Hero />
        <Ours />
        <Features />
        <HowItWorks />
        <Ecosystem />
        <Enterprise />
        <FAQ />
        <GetStarted />
      </main>
      <Footer />
    </>
  );
}
