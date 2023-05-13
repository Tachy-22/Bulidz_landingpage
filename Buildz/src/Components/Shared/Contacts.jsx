import ContactImage from "../../assets/Contact-us.svg";
function Contacts() {
  return (
    <section className="flex flex-col justify-center items-center  text-black">
      <h3 className="text-5xl font-bold capitalize py-4">Get in touch</h3>
      <p className=" tablet:w-3/4  px-4 text-center">
        Finance and jurisprudence are our main directions and we know how to
        deal with many financial issues and how to bussiness in today&apos;s
        reality and conditions
      </p>
      <div className="flex mid:flex-row  flex-col justify-between px-[1rem] tablet:px-[2rem] items-center w-full  pb-[4rem]">
        <picture
          style={{ "--image-url": `url(${ContactImage})` }}
          className="  block  bg-[image:var(--image-url)] mid:bg-center laptop:bg-cover mid:bg-cover bg-contain  bg-top  bg-no-repeat   tablet:h-[45rem] mid:h-[35rem] h-[25rem]   w-full "
        ></picture>

        <form className="flex flex-col justify-between h-full gap-[1rem]  w-full  grow">
          <div className="flex   flex-col gap-2 text-black/50">
            <label className="tablet:text-2xl text-xl capitalize">
              Your name <small className="lowercase ">(required)</small>
            </label>
            <input
              required=""
              placeholder="Jane Doe"
              type="text"
              className="bg-white border-[2px] border-black/25 outline-none w-full px-[1rem] py-[1rem] hover:shadow-xl"
            />
          </div>

          <div className="flex  flex-col gap-2 text-black/50">
            <label className="tablet:text-2xl text-xl capitalize">
              Your email <small className="lowercase ">(required)</small>
            </label>
            <input
              required=""
              placeholder="sample@email.com"
              type="email"
              className="bg-white border-[2px] border-black/25 outline-none w-full px-[1rem] py-[1rem] hover:shadow-xl"
            />
          </div>

          <div className="flex  flex-col gap-2 text-black/50">
            <label className="tablet:text-2xl text-xl capitalize">subject </label>
            <input
              required=""
              type="tel"
              placeholder="subject"
              className="bg-white border-[2px] border-black/25 outline-none w-full px-[1rem] py-[1rem] hover:shadow-xl"
            />
          </div>

          <label className="flex  flex-col gap-2 text-black/50">
            <label className="tablet:text-2xl text-xl capitalize">Your message</label>
            <textarea
              required=""
              rows="5"
              placeholder="This message is concerning ..."
              className="bg-white border-[2px] border-black/25 outline-none w-full px-[1rem] py-[1rem] hover:shadow-xl "
            ></textarea>
          </label>

          <button className="btn text-xl rounded-sm py-4">Submit</button>
        </form>
      </div>
    </section>
  );
}

export default Contacts;
