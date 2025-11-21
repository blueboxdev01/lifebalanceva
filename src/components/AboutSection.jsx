import aboutBg from "../assets/bgAbout.png";
import placeholderImg from "../assets/imgPlaceholder.png";
import { aboutus } from "../constants";

const AboutSection = () => {
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
          <div className="flex flex-col-reverse lg:flex-row gap-4 lg:gap-6 lg:gap-16 items-center">
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
                  ABOUT LBVA
                </p>
                <h2 className="text-4xl lg:text-5xl text-n-3 font-extrabold">
                  Transforming Business Through Virtual Excellence
                </h2>
              </div>
              <p className="text-n-3 text-lg font-medium">
                LifeBalanceVA is a people-first virtual assistant agency
                dedicated to pairing international businesses with skilled
                Filipino VAs. We believe great work comes from balanced lives,
                which is why our foundation is built on wellness, support and
                respect.
              </p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-6">
            {aboutus.map((item) => (
              <div
                className="card-item flex-1 p-4 lg:p-6 border rounded-xl flex flex-col gap-4"
                key={item.id}>
                <img
                  src={item.img}
                  alt={item.title}
                  width={56}
                  height={56}
                  className="object-fit"
                />
                <h3 className="text-3xl text-n-3 font-bold">{item.title}</h3>
                <p className="text-n-3 text-base font-medium text-base">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-n-4 flex items-center w-full p-4 lg:p-0 lg:pb-15">
        <div className="w-full lg:w-[80em] lg:mx-auto flex flex-col lg:flex-row py-4 lg:py-15 lg:pb-0 gap-6 lg:gap-16 justify-between items-center">
          <h3 className="text-3xl lg:text-4xl font-extrabold">
            Ready to transform your business? Let’s Talk{" "}
          </h3>
          <div className="block">
            <button className="button">Hire a Virtual Assistant Now</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;
