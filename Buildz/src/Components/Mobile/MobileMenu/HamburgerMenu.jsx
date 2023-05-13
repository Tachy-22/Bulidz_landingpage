import Menu from "./img/Menu.svg";
import { RootContext } from "../../../Layouts/RootLayout";
import { useContext } from "react";
function HamburgerMenu() {
  const { mobileMenuView, setMobileMenuView } = useContext(RootContext);
  return (
    <section
      onClick={() => setMobileMenuView(!mobileMenuView)}
      className="w-fit  tablet:hidden    block p-2 m-2 rounded-md"
    >
      <picture
        style={{ "--image-url": `url(${Menu})` }}
        className=" flex items-end justify-center  bg-[image:var(--image-url)] bg-cover  bg-center bg-no-repeat opacity-80 hover:scale-[1.1]  h-[2rem] w-[3rem] hover:opacity-100 transition-all duration-700 rounded md hover:z-10"
      ></picture>
    </section>
  );
}

export default HamburgerMenu;

//RootLayout Imports
// import { Outlet } from "react-router-dom";
// import { createContext, useState } from "react";
// import MobileMenu from "../Components/MobileMenu/MobileMenu";
// import HamburgerMenu from "../Components/MobileMenu/HamburgerMenu";
// export const RootContext = createContext({});
