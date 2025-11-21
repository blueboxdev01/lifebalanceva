import serviceBg from "../assets/serviceBg.png";
import starsImg from "../assets/starImages.png";
import { testimonials } from "../constants";

const TestimonialSection = () => {
  return (
    <section
      className="hero-bg bg-cover bg-center flex items-center w-full p-4 lg:p-0 lg:pb-20"
      style={{
        backgroundImage: `url(${serviceBg})`,
        backgroundSize: "cover",
        backgroundPositionX: "center",
        backgroundPositionY: "center",
      }}>
      <div className="w-full lg:w-[80em] lg:mx-auto flex flex-col py-4 lg:py-15 lg:pb-0 gap-6 lg:gap-16 justify-between items-center">
        <div className="flex flex-col gap-4 lg:gap-6 w-full lg:w-5/6 lg:mx-auto text-n-3 text-center">
          <h2 className="text-4xl lg:text-5xl text-n-3 font-extrabold">
            Real Results from Business Owners Like You
          </h2>
        </div>
        <div className="flex flex-col lg:flex-row gap-6 w-full">
          {testimonials.map((item) => (
            <div
              className="card-item flex-1 p-4 lg:p-6 border rounded-xl flex flex-col gap-4 bg-white/50 justify-between"
              key={item.id}>
              <div className="flex flex-col gap-4">
                <img
                  src={starsImg}
                  width={136}
                  height={24}
                  className="object-fit"
                />
                <p className="text-n-3 text-lg font-medium">{item.quote}</p>
              </div>
              <div className="flex flex-row gap-6 items-center">
                <div className="block">
                  <img src={item.img} width={48} height={48} />
                </div>
                <div className="flex flex-col">
                  <span className="text-n-3 font-bold text-lg">
                    {item.name}
                  </span>
                  <span className="text-n-3 font-normal">
                    {item.position} | {item.company}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="block">
          <button className="button">Book a Consultation Now</button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
