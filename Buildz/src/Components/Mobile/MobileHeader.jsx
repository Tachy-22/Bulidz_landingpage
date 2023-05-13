import MobileMenu from "../MobileMenu/MobileMenu";
import HamburgerMenu from "../MobileMenu/HamburgerMenu";
import Logo from "../Shared/Logo";

function MobileHeader() {
  return (
    <>
      <MobileMenu />
      <div className="flex p-[1rem]  tablet:hidden   w-full  justify-between items-center">
        <Logo />
        <HamburgerMenu />
      </div>
    </>
  );
}

export default MobileHeader;
