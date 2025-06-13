import Navbar from "@/app/components/Navbar";
import HeroSection from "@/app/components/HeroSection";
import HowItWorks from "@/app/components/howItWorks";
import LatestSummaries from "@/app/components/Latest";
import Footer from "@/app/components/Footer"

export default function page() {
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
