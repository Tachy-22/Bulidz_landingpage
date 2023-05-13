import DesktopHeader from "../Desktop/DesktopHeader";
import MobileHeader from "../Mobile/MobileHeader";
import HeroSection from "../Shared/HeroSection";
import About from "../Shared/About";
import Results from "../Shared/Results";
import Cta_ from "../Shared/Cta_";
import Testimonials from "../Shared/Testimonials";
import Contacts from "../Shared/Contacts";
import Footer from "../Shared/Footer";

function Home() {
  return (
    <div className=" flex flex-col text-black ">
      <DesktopHeader />
      <MobileHeader />
      <HeroSection />
      <About />
      <Results />
      <Cta_ />
      <Testimonials />
      <Contacts />
      <Footer />
    </div>
  );
}

export default Home;
