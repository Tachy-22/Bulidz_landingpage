function About() {
  return (
    <section className=" bg-black relative tablet:mt-[10rem] mt-[55rem]   h-fit flex  items-center   text-white w-full  ">
      <div className=" absolute tablet:-top-[8rem] -top-[110%] w-full tablet:flex-row flex flex-col  h-fit tablet:gap-0 gap-[1rem]   text-black tablet:justify-around justify-center items-center">
        <div className="card tablet:w-[25%] items-center w-[80%] text-center flex flex-col justify-between py-[3rem] h-[17rem] bg-white rounded-md p-4 shadow-xl border-2">
          <lord-icon
            src="https://cdn.lordicon.com/slduhdil.json"
            trigger="loop"
            delay="1000"
            colors="primary:#0000"
          ></lord-icon>

          <p className="font-semibold uppercase text-xl">Branding</p>
          <p className="text-black/50">
            Regular Business Law Assistance service includes monitoring the
            legal sphere of your bussiness
          </p>
        </div>
        <div className=" card tablet:w-[25%] items-center w-[80%] text-center flex flex-col justify-between py-[3rem] h-[17rem] bg-white rounded-md p-4 shadow-xl border-2">
          <lord-icon
            src="https://cdn.lordicon.com/gsvbkwao.json"
            trigger="loop"
            delay="1000"
            colors="primary:#0000"
          ></lord-icon>
          <p className="font-semibold uppercase text-xl">Finance</p>
          <p className="text-black/50">
            We provide businesses with all financial services including
            consultations
          </p>
        </div>
        <div className=" card tablet:w-[25%] w-[80%] text-center flex flex-col justify-between items-center py-[3rem] h-[17rem] bg-white rounded-md p-4 shadow-xl border-2">
          <lord-icon
            trigger="loop"
            delay="1000"
            colors="primary:#0000"
            src="https://cdn.lordicon.com/zchxlapl.json"
          ></lord-icon>

          <p className="font-semibold uppercase text-xl">Marketing</p>
          <p className="text-black/50">
            Good marketing plan is crucial for businessmen who want to develop
            their business
          </p>
        </div>
      </div>
      <div className=" grow flex flex-col justify-center items-center  gap-[2rem] tablet:py-[12rem]  py-[6rem]">
        <div className="  flex justify-center text-center items-center flex-col tablet:w-full  gap-[3rem] h-fit w-[80%]">
          <h2 className="text-4xl font-bold">Our Achievements</h2>
          <p className="text-gray-200/75 text-center text-xl tablet:w-1/2">
            Buildz is a base for future bussiness project which includes all
            aspects and makes a forcast about your project&apos;s payback
          </p>
        </div>
        <div className=" flex tablet:flex-row flex-col gap-[2rem] tablet:gap-[10%] justify-center h-fit py-[1rem]">
          <div className=" flex flex-col text-center items-center">
            <p className="text-4xl font-bold">600</p>
            <p className="uppercase text-xl"> Awards won</p>
          </div>
          <div className=" flex flex-col text-center items-center">
            <p className="text-4xl font-bold">670</p>
            <p className="uppercase text-xl"> satisfied clients</p>
          </div>
          <div className=" flex flex-col text-center items-center">
            <p className="text-4xl font-bold">670</p>
            <p className="uppercase text-xl"> stardup Growth</p>
          </div>
          <div className=" flex flex-col text-center items-center">
            <p className="text-4xl font-bold">500</p>
            <p className="uppercase text-xl"> Average prices</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
