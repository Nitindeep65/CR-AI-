import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import HowItWorks from "./components/howItWorks";
import LatestSummaries from "./components/Latest";
import Footer from "./components/Footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <Navbar />
      <HeroSection />
      <HowItWorks />
      <LatestSummaries />
      <Footer />
    </div>
  );
}
