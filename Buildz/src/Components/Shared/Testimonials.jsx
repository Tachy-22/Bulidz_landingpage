import Testimonial1 from "../../assets/pexels-rdne-stock-project-8069384.jpg";
import Testimonial2 from "../../assets/pexels-fauxels-3182781.jpg";
import Testimonial3 from "../../assets/pexels-rdne-stock-project-7647951.jpg";
import Skeleton from "react-loading-skeleton";
function Testimonials() {
  const testimonialsArray = [
    {
      title: " Networking in bussiness and security",
      editor: "Admin february 19 , 2011",
      summary: "",
      img: Testimonial1,
    },
    {
      title: "The uncharted reseach in market research",
      editor: "Admin february 19 , 2011",
      summary: "",
      img: Testimonial2,
    },
    {
      title: "It securities and it's shackles",
      editor: "Admin february 19 , 2011",
      summary: "",
      img: Testimonial3,
    },
  ];
  return (
    <section className="text-black h-fit  tablet:flex-row flex flex-col tablet:justify-between  items-center tablet:gap-[3%] gap-[2rem] max-[5400px]:px-6 pb-[4rem]  laptop:px-[6rem] py-[2rem]">
      {testimonialsArray.map((testimonial, index) => {
        return (
          <div
            key={index}
            className=" h-full w-[90%] hover:scale-[1.07] transition-all duration-700 flex flex-col"
          >
            <div className="  grow     laptop:h-[25rem] h-[18rem]">
              {testimonialsArray ? (
                <picture
                  style={{ "--image-url": `url(${testimonial.img})` }}
                  className="  block  bg-[image:var(--image-url)] bg-cover  bg-center bg-no-repeat   h-full  w-full "
                ></picture>
              ) : (
                <Skeleton />
              )}
            </div>
            <div className="py-[2rem] flex-col h-fit tablet:h-[15rem]  flex justify-around bg-black/10 px-4">
              <h3 className="font-bold pb-3 text-xl h-fit flex items-center  capitalize">
                {testimonial.title}
              </h3>
              <p className="uppercase grow text-black/50">
                <strong className="uppercase text-black">Posted by</strong>{" "}
                {testimonial.editor}
              </p>
            </div>
          </div>
        );
      })}
    </section>
  );
}

export default Testimonials;
