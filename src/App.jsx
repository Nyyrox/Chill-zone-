import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import HowItWorks from "./components/HowItWorks";
import Reviews from "./components/Reviews";
import CtaBand from "./components/CtaBand";
import Footer from "./components/Footer";
import MobileCallBar from "./components/MobileCallBar";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <HowItWorks />
        <Reviews />
        <CtaBand />
      </main>
      <Footer />
      <MobileCallBar />
    </>
  );
}
