import solutionBg from "../assets/solutionsBG.png";
import { teams } from "../constants";

const TeamSection = () => {
  return (
    <section
      className="hero-bg bg-cover bg-center flex items-center w-full p-4 lg:p-0 lg:pb-20"
      style={{
        backgroundImage: `url(${solutionBg})`,
        backgroundSize: "cover",
        backgroundPositionX: "center",
        backgroundPositionY: "center",
      }}>
      <div className="w-full lg:w-[80em] lg:mx-auto flex flex-col lg:flex-col py-4 lg:py-20 lg:pb-0 gap-6 lg:gap-16 justify-center">
        <h2 className="text-3xl lg:text-7xl font-extrabold text-center text-n-1">
          OUR TEAM
        </h2>
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-10">
          {teams.map((item) => (
            <div
              className="flex-1 p-4 lg:p-6 flex flex-col gap-4 lg:gap-8 items-center"
              key={item.id}>
              <img
                src={item.img}
                alt={item.name}
                width={372}
                height={417}
                className="w-full"
              />
              <div className="w-full flex flex-col gap-1 text-white text-center">
                <h3 className="text-3xl text-n-1 font-bold">{item.name}</h3>
                <p className="font-medium text-lg text-[#FF1FF8]">{item.pos}</p>
                <p className="text-n-1 font-medium text-base">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
