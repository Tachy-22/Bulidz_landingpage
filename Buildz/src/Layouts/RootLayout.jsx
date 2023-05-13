import { Outlet } from "react-router-dom";
import { createContext, useState } from "react";
import DesktopHeader from "../Components/Desktop/DesktopHeader";
import MobileHeader from "../Components/Mobile/MobileHeader";
import HeroSection from "../Components/Shared/HeroSection";
import About from "../Components/Shared/About";
import Results from "../Components/Shared/Results";
import Cta_ from "../Components/Shared/Cta_";
import Testimonials from "../Components/Shared/Testimonials";
import Contacts from "../Components/Shared/Contacts";

export const RootContext = createContext({});
function RootLayout() {
  const [mobileMenuView, setMobileMenuView] = useState();
  return (
    <RootContext.Provider value={{ mobileMenuView, setMobileMenuView }}>
      <div className=" flex flex-col ">
        <DesktopHeader />
        <MobileHeader />
        <HeroSection />
        <About />
        <Results />
        <Cta_ />
        <Testimonials />
        <Contacts/>
        <Outlet />
      </div>
    </RootContext.Provider>
  );
}

export default RootLayout;
