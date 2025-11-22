import aboutBg from "../assets/bgAbout.png";
import placeholderImg from "../assets/imgPlaceholder.png";
import servicebg from "../assets/serviceBg.png";
import { services } from "../constants";
import Button from "./Button";

const ServiceSection = () => {
  return (
    <>
      <section
        className="hero-bg bg-cover bg-center flex items-center w-full p-4 lg:p-0 lg:pb-20"
        style={{
          backgroundImage: `url(${aboutBg})`,
          backgroundSize: "cover",
          backgroundPositionX: "center",
          backgroundPositionY: "center",
        }}>
        <div className="w-full lg:w-[80em] lg:mx-auto flex flex-col lg:flex-col py-4 lg:py-20 lg:pb-0 gap-6 lg:gap-16 justify-center">
          <div className="flex flex-col-reverse lg:flex-row gap-4 lg:gap-6 items-center">
            <div className="flex-1">
              <img
                src={placeholderImg}
                alt="About Image"
                width={590}
                height={470}
              />
            </div>
            <div className="flex flex-col gap-4 lg:gap-6 flex-1">
              <div className="flex flex-col gap-2 lg:gap-3.5">
                <p className="text-n-2 text-lg lg:text-xl tracking-widest uppercase font-bold">
                  OUR EXPERTISE
                </p>
                <h2 className="text-3xl lg:text-5xl text-n-3 font-extrabold">
                  Mastering Virtual Workforce Solutions
                </h2>
              </div>
              <p className="text-n-3 text-lg font-medium">
                At LVBA, we excel in transforming businesses through expert
                virtual talent management. Our comprehensive skill set ensures
                your business gets the most qualified Filipino virtual
                assistants across diverse functional areas:
              </p>
            </div>
          </div>
        </div>
      </section>
      <section
        className="hero-bg bg-cover bg-center flex items-center w-full p-4 lg:p-0 lg:pb-20"
        style={{
          backgroundImage: `url(${servicebg})`,
          backgroundSize: "cover",
          backgroundPositionX: "center",
          backgroundPositionY: "center",
        }}>
        <div className="w-full lg:w-[80em] lg:mx-auto flex flex-col py-4 lg:py-15 lg:pb-0 gap-6 lg:gap-16 justify-between items-center">
          <div className="flex flex-col gap-4 lg:gap-6 w-full lg:w-5/6 lg:mx-auto text-n-3 text-center">
            <h2 className="text-4xl lg:text-5xl text-n-3 font-extrabold">
              Industries We Excel In
            </h2>
            <p className="text-n-3 text-lg font-medium">
              We work across e-commerce, real estate, coaching and consulting,
              wellness, digital marketing, finance, logistics, online retail,
              education and service-based businesses — always aligning the VA’s
              strengths with your industry needs.
            </p>
          </div>
          <div className="flex flex-col lg:flex-row gap-6 w-full">
            {services.map((item) => (
              <div
                className="card-item flex-1 p-4 lg:p-6 border rounded-xl flex flex-col gap-4 bg-white/50"
                key={item.id}>
                <img
                  src={item.img}
                  alt={item.title}
                  width={56}
                  height={56}
                  className="object-fit"
                />
                <h3 className="text-2xl text-n-3 font-bold">{item.title}</h3>
                <p className="text-n-3 text-base font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="block">
            <Button className="button" href="#cta-section">
              Book a Consultation Now
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceSection;
