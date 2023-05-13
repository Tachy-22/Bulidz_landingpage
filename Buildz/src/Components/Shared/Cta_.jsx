function Cta_() {
  const benefitsArray = [
    "Lorem ipsum theorh",
    "Lorem ipsum theorh",
    "Lorem ipsum theorh",
    "Lorem ipsum theorh",
  ];
  return (
    <section>
      <div className="bg-black text-white text-center items-center flex flex-col gap-6 p-[4rem]  w-full">
        <h3 className="capitalze text-4xl font-bold">
          Worried about experience
        </h3>
        <p className="tablet:text-xl text-lg text-white/75 ">
          The have over fifteen years of successful experience in the financial
          shere of the US
        </p>
        <button className="btn2 uppercase w-[30%] max-w-[15rem] min-w-[10rem]">
          Get started
        </button>
      </div>
      <div className="flex flex-col gap-4 px-[4rem] pb-[2rem] pt-[4rem] text-center w-full text-black">
        <h3 className="capitalze text-4xl font-bold">Our Pricing</h3>
        <p className="tablet:text-xl text-lg text-black/75">
          The service includes your bussiness analysis, marketing researchs and
          financial planning
        </p>
      </div>
      <div className="relative  h-full mb-[8rem] tablet:gap-0 gap-[2rem]  flex tablet:flex-row items-center laptop:p-[5rem] tablet:p-[2rem] p-[1rem] flex-col text-black justify-between ">
        <div className="tablet:w-[32vw]  w-[80%] flex flex-col justify-center items-center border  rounded-lg  h-[30rem] py-[2rem] bg-white    shadow-xl">
          <div className="grow  text-center text-xl  flex flex-col justify-center">
            <p className="laptop:text-xl text-md "> 1 user</p>
            <h3 className="laptop:text-2xl text-xl font-bold capitalize">
              Premium
            </h3>
            <p className="laptop:text-xl text-md ">100%/monthly</p>
          </div>
          {benefitsArray.map((benefit, index) => {
            return (
              <div
                key={index}
                className="grow laptop:text-2xl text-center text-xl items-center laptop:px-[3rem]  gap-4 w-fit  flex justify-between "
              >
                 <span className="material-symbols-outlined">check_circle</span>
                <p className="grow text-black/50">{benefit}</p>
              </div>
            );
          })}
          <button className="btn text-xl w-[10rem]">Buy now</button>
        </div>
        <div className="tablet:w-[32vw] w-[80%] flex flex-col justify-center items-center  rounded-lg h-[30rem] p-[2rem] z-10 bg-white tablet:absolute right-0 left-0 top-[8rem] bottom-0 tablet:m-auto border  shadow-xl">
          <div className="grow  text-center text-xl  flex flex-col justify-center">
            <p className="laptop:text-xl text-md "> 1 user</p>
            <h3 className="laptop:text-2xl text-xl font-bold capitalize">
              Premium
            </h3>
            <p className="laptop:text-xl text-md ">150%/month</p>
          </div>
          {benefitsArray.map((benefit, index) => {
            return (
              <div
                key={index}
                className="grow laptop:text-2xl text-center text-xl items-center laptop:px-[3rem]  gap-4 w-fit  flex justify-between "
              >
                <span className="material-symbols-outlined">check_circle</span>
                <p className=" grow  text-black/50">{benefit}</p>
              </div>
            );
          })}
          <button className="btn text-xl w-[10rem]">Buy now</button>
        </div>
        <div className="tablet:w-[32vw] w-[80%] flex flex-col justify-center items-center border  rounded-lg  h-[30rem] py-[2rem] bg-white   shadow-xl">
          <div className="grow  text-center text-xl  flex flex-col justify-center">
            <p className="laptop:text-xl text-md "> 1 user</p>
            <h3 className="laptop:text-2xl text-xl font-bold capitalize">
              Premium
            </h3>
            <p className="laptop:text-xl text-md ">200%/month</p>
          </div>
          {benefitsArray.map((benefit, index) => {
            return (
              <div
                key={index}
                className="grow  laptop:text-2xl text-center text-xl items-center laptop:px-[3rem] gap-4 w-fit  flex justify-center "
              >
                 <span className="material-symbols-outlined">check_circle</span>
                <p className=" grow text-black/50">{benefit}</p>
              </div>
            );
          })}
          <button className="btn text-xl w-[10rem]">Buy now</button>
        </div>
      </div>
    </section>
  );
}

export default Cta_;
