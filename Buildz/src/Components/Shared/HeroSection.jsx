import HeroImage from "../../assets/Girl-busy-at-the-workplace.png";
function HeroSection() {
  return (
    <section className=" flex tablet:flex-row tablet:p-[2rem] tablet:h-[40rem] h-full  text-black flex-col laptop:justify-between tablet:px-[5rem] items-center w-full leading-8 px-[2rem] tablet:py-[0rem] py-[2rem] laptop:gap-[0rem] ">
      <article className="  flex-col    justify-center  flex gap-[1rem] talet:gap-[2rem] w-[100%] laptop:w-fit mid:w-[50%]  h-full  ">
        <h2 className="  capitalize tablet:w-[80%]   w-full   h-fit   laptop:text-6xl text-4xl font-bold">
          Making your bussiness ideas <strong>come true</strong>
        </h2>
        <p className="   tablet:text-3xl  text-xl tablet:w-[80%]  w-full">
          we provide bussiness with all financial services including financial
          analysis of the enterprise
        </p>
        <button className="  uppercase tablet:w-[35%] text-md max-w-[20rem] btn">
          Read More
        </button>
      </article>
      <div className=" grow   tablet:h-[40rem]  tablet:w-[60%] w-[100%]   h-[30rem]">
        <picture
          style={{ "--image-url": `url(${HeroImage})` }}
          className="  block  bg-[image:var(--image-url)] bg-contain laptop:bg-cover  bg-center bg-no-repeat  tablet:h-full h-[30rem]  w-full "
        ></picture>
      </div>
    </section>
  );
}

export default HeroSection;
