import Logo from "./Logo";
import { navArray } from "../dummyDb/db";
import {  NavLink } from "react-router-dom";
import { useContext } from "react";
import { RootContext } from "../../Layouts/RootLayout";

function Footer() {
  const { setMobileMenuView } = useContext(RootContext);
  //   let x = 3;
  //   let y = 2;
  //   let z = 0;

  //   if ((x = y)) {
  //     console.log(x);
  //   } else if ((x = y)) {
  //     console.log(x);
  //   } else {
  //     console.log(z);
  //   }
  return (
    <footer className="h-fit flex flex-col justify-between bg-black w-full tablet:px-[4rem] px-[1rem] py-[1rem] text-white">
      <div className="grow  pt-[2rem] justify-between flex-wrap pb-[1rem] tablet:pb-[3rem] flex tablet:flex-row flex-col  ">
        <Logo className="flex justify-center items-center"></Logo>
        <nav className=" tablet:w-[65%] justify-center gap-4 tablet:p-0 p-[1rem] tablet:h-fit h-[10rem]   items-start tablet:flex-row flex-col flex-wrap  uppercase tablet:justify-start flex ">
          {navArray.map((page, index) => {
            return (
              <NavLink
                onClick={() => setMobileMenuView((prev) => !prev)}
                to={page.path}
                className=" text-start   grow "
                key={index}
              >
                <p>{page.page}</p>
              </NavLink>
            );
          })}
        </nav>
      </div>
      <div className="w-full h-[2px] bg-white/40"></div>
      <div className="capitalize text-xl text-white/75 py-[1rem]">
        <p>2019 Zetter all rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
