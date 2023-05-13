import ResulltImage from "../../assets/Instant-analysis.svg";
function Results() {
  const monthlyChartArray = [
    { month: "Jan", percent: 30, percenttag: "70%" },
    { month: "Feb", percent: 10, percenttag: "90%" },
    { month: "Mar", percent: 20, percenttag: "80%" },
    { month: "Apr", percent: 50, percenttag: "50%" },
    { month: "May", percent: 40, percenttag: "60%" },
    { month: "Jun", percent: 10, percenttag: "90%" },
    { month: "Jul", percent: 20, percenttag: "80%" },
  ];
  return (
    <section className="px-[1rem] py-[4rem] laptop:p-[8rem]  h-full flex flex-col w-full ">
      <div className="w-full h-fit  gap-[6rem]  tablet:gap-0 items-center tablet:flex-row flex flex-col">
        <article className="  flex-col text-black  justify-center  flex gap-[2rem] laptop:w-[40%] w-fit h-full  ">
          <h2 className="  capitalize tablet:w-[50%]  w-full   h-fit    text-4xl font-bold">
            Our results
          </h2>
          <p className="  text-xl tablet:w-[80%]  w-full">
            we provide bussiness with all financial services including financial
            analysis of the enterprise
          </p>
          <button className="  uppercase w-[35%] max-w-[15rem] btn">
            Read More
          </button>
        </article>
        <div className="tablet:w-[70%] tablet:px-[4rem] w-full flex justify-between">
          {monthlyChartArray.map((bars, index) => {
            return (
              <div key={index} className="flex flex-col">
                <div className="h-[40rem] w-[2rem] bg-black max-w-[2rem]  flex-col items-baseline">
                  <div
                    className={`${
                      bars.percent === 30
                        ? "h-[30%]"
                        : bars.percent === 20
                        ? "h-[20%]"
                        : bars.percent === 50
                        ? "h-[50%]"
                        : bars.percent === 40
                        ? "h-[40%]"
                        : bars.percent === 10 && "h-[10%]"
                    }  relative transition-all duration-1000   text-black  `}
                  >
                    <span className="absolute laptop:-right-[110%] bg-gray-700 max-[1440px]:-top-10 tablet:bottom-0  -bottom-5">
                      {bars.percenttag}
                    </span>
                  </div>
                </div>
                <span className="text-black w-full  py-2 text-center">
                  {bars.month}
                </span>
              </div>
            );
          })}
        </div>
      </div>
      <div
        className="flex tablet:flex-row flex-col-reverse text-black
      justify-center items-center h-fit  py-[4rem]"
      >
        <div className="tablet:grow-0 grow   tablet:w-[50%] w-[100%]   h-[30rem]">
          <picture
            style={{ "--image-url": `url(${ResulltImage})` }}
            className="  block  bg-[image:var(--image-url)] bg-contain  bg-left bg-no-repeat  tablet:h-full h-[30rem]  w-full "
          ></picture>
        </div>
        <div className="flex-col flex grow justifiy-between p-[3rem]   tablet:w-[40%] w-full h-full tablet:gap-2 gap-[2rem] items-center">
          <div className="text-black/50">
            <h3 className="tablet:text-2xl text-xl  text-left font-bold uppercase">
              01 StartUps
            </h3>
            <p className="text-black/50 text-xl">
              Startuppers recieve assistance in financial, legal , economical
              and human resources
            </p>
          </div>
          <div className="text-black/50">
            <h3 className="tablet:text-2xl text-xl font-bold uppercase">
              02 Anti-Crisis
            </h3>
            <p className="text-black/50 text-xl">
              Startuppers recieve assistance in financial, legal , economical
              and human resources
            </p>
          </div>
          <div className="text-black/50">
            <h3 className="tablet:text-2xl text-xl font-bold uppercase">
              {" "}
              03 Finance
            </h3>
            <p className="text-black/50 text-xl">
              Startuppers recieve assistance in financial, legal , economical
              and human resources
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Results;
