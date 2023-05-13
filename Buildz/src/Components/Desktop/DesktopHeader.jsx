import Logo from "../Shared/Logo";
import { navArray } from "../dummyDb/db";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { RootContext } from "../../Layouts/RootLayout";

function DesktopHeader() {
  const { setMobileMenuView } = useContext(RootContext);
  return (
    <div className="text-black py-[2rem] tablet:flex hidden items-center justify-between w-full px-[4rem]">
      <Logo />
      <nav className=" w-[60%] gap-4 uppercase justify-between flex ">
        {navArray.map((page, index) => {
          return (
            <Link
              onClick={() => setMobileMenuView((prev) => !prev)}
              to={page.path}
              className=" "
              key={index}
            >
              <p>{page.page}</p>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}

export default DesktopHeader;
