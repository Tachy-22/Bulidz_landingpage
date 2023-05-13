import HeroImage from "../../assets/Girl-busy-at-the-workplace.png";
function HeroSection() {
  return (
    <section className=" flex tablet:flex-row tablet:p-[2rem] tablet:h-[40rem] h-full  text-black flex-col laptop:justify-between tablet:px-[3rem] items-center w-full leading-8 px-[2rem] tablet:py-[0rem] py-[2rem] laptop:gap-[0rem] gap-[2rem]">
      <article className="  flex-col   justify-center  flex gap-[2rem] laptop:w-fit w-fit h-full  ">
        <h2 className="  capitalize tablet:w-[80%]  w-full   h-fit   laptop:text-6xl text-5xl font-bold">
          Making your bussiness ideas <strong>come true</strong>
        </h2>
        <p className="  tablet:text-3xl  text-2xl tablet:w-[80%]  w-full">
          we provide bussiness with all financial services including financial
          analysis of the enterprise
        </p>
        <button className="  uppercase tablet:w-[35%]  w-[50%] max-w-[20rem] btn">
          Read More
        </button>
      </article>
      <div className="  grow  tablet:w-[50%] w-[100%]   h-[30rem]">
        <picture
          style={{ "--image-url": `url(${HeroImage})` }}
          className="  block  bg-[image:var(--image-url)] bg-contain  bg-center bg-no-repeat  tablet:h-full h-[30rem]  w-full "
        ></picture>
      </div>
    </section>
  );
}

export default HeroSection;
