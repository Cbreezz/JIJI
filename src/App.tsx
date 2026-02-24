import { useState } from "react";
import LoadingScreen from "./components/LoadingScreen";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import NewArrivals from "./components/NewArrivals";
import ProductGrid from "./components/ProductGrid";
import Manifesto from "./components/Manifesto";
import SizeGuide from "./components/SizeGuide";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative min-h-screen bg-jiji-black selection:bg-jiji-red selection:text-jiji-white">
      {/* Grain Texture Overlay */}
      <div className="grain-overlay" />

      <LoadingScreen onComplete={() => setIsLoading(false)} />

      {!isLoading && (
        <>
          <Navbar />
          <main>
            <Hero />
            <Marquee />
            <NewArrivals />
            <ProductGrid />
            <Manifesto />
            <SizeGuide />
            <Contact />
          </main>
          <Footer />
          <FloatingWhatsApp />
        </>
      )}
    </div>
  );
}
