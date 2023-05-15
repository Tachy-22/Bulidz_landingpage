import { navArray } from "../../dummyDb/db";
import { Link } from "react-router-dom";
import Close from "./img/Close.svg";
import { RootContext } from "../../../Layouts/RootLayout";
import { useContext } from "react";
import Logo from "../../Shared/Logo";
function MobileNav() {
  const { mobileMenuView, setMobileMenuView } = useContext(RootContext);
  return (
    <aside
      className={`${
        !mobileMenuView
          ? " -left-[200%] "
          : "   top-0  left-0 right-0 bottom-0 tablet:hidden    "
      }  fixed  w-screen h-screen z-40  transition-all duration-700 bg-white text-black`}
    >
      <section
        className={`
          w-full flex flex-col h-full bg-white  justify-between   items-center `}
      >
        <section
          onClick={() => setMobileMenuView(!mobileMenuView)}
          className={`
           block absolute tablet:hidden bg-White w-fit2  top-0 grow right-0 p-4 m-2 rounded-md`}
        >
          <picture
            style={{ "--image-url": `url(${Close})` }}
            className={`flex items-end justify-center  bg-[image:var(--image-url)] bg-cover  bg-center bg-no-repeat opacity-80 hover:scale-[1.1]  h-[2rem] w-[2rem] hover:opacity-100 transition-all duration-700 rounded md hover:z-10`}
          ></picture>
        </section>
        <Link
          onClick={() => setMobileMenuView((prev) => !prev)}
          to="/"
          className="  w-[10rem] h-[6rem]    justify-center flex flex-col items-center"
        >
          <Logo />
        </Link>
        <nav className=" border-gray-500 border-y  w-full  justify-center   flex flex-col ">
          {navArray.map((page, index) => {
            return (
              <Link
                onClick={() => setMobileMenuView((prev) => !prev)}
                to={page.path}
                className="border-y text-xl grow border-gray-500 text-center  capitalize p-4  "
                key={index}
              >
                <p className="hover:scale-[1.2]">{page.page}</p>
              </Link>
            );
          })}
        </nav>
        <section className="  flex  w-fit items-end justify-center gap-4   p-4 h-fit"></section>
      </section>
    </aside>
  );
}

export default MobileNav;

// git status git add . git commit -m "link additions" git push
