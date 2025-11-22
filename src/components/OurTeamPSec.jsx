import aboutBg from "../assets/bgAbout.png";
import { teams } from "../constants";

const OurTeamPSec = () => {
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
        <div className="w-full lg:w-[80em] lg:mx-auto flex flex-col py-4 lg:py-15 lg:pb-0 gap-6 lg:gap-16 justify-between items-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 w-full">
            <div className="flex flex-col gap-4 lg:gap-6 w-full lg:w-5/6 lg:mx-auto text-left text-n-3 justify-center">
              <h2 className="text-4xl lg:text-5xl text-n-3 font-extrabold">
                We Are Here To Help
              </h2>
              <p className="text-n-3 text-lg font-medium">
                We work across e-commerce, real estate, coaching and consulting,
                wellness, digital marketing, finance, logistics, online retail,
                education and service-based businesses — always aligning the
                VA’s strengths with your industry needs.
              </p>
            </div>
            {teams.map((item) => (
              <div
                className="card-item flex-1 p-4 lg:p-6 border rounded-xl flex flex-col lg:flex-row gap-8 bg-white/50"
                key={item.id}>
                <div className="w-full lg:w-1/2">
                  <img
                    src={item.img}
                    alt={item.title}
                    width={590}
                    height={470}
                    className="object-fit"
                  />
                </div>
                <div className="w-full lg:w-1/2 flex flex-col gap-1 text-white">
                  <h3 className="text-3xl text-n-3 font-bold">{item.name}</h3>
                  <p className="font-medium text-lg text-[#FF1FF8]">
                    {item.pos}
                  </p>
                  <p className="text-n-3 font-medium text-base">{item.title}</p>
                  <p className="text-n-3 font-medium text-base">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ipsa atque quisquam qui ad dolores possimus, ut sit nihil
                    debitis obcaecati aperiam libero beatae vel, fuga ratione
                    saepe adipisci ullam dolorum!
                  </p>
                </div>
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

export default OurTeamPSec;
