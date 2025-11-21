import solutionBg from "../assets/solutionsBG.png";
import { solutions } from "../constants";

const SolutionsSection = () => {
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
        <h2 className="text-3xl lg:text-5xl font-extrabold text-center text-n-1">
          Solutions We Provide
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {solutions.map((item) => (
            <div
              className="card-item flex-1 p-4 lg:p-6 border rounded-xl flex flex-col lg:flex-row gap-8 bg-n-1 items-start"
              key={item.id}>
              <img
                src={item.img}
                alt={item.title}
                width={56}
                height={5}
                className="object-fit w-full lg:w-1/3"
              />
              <div className="w-full lg:w-2/3 flex flex-col gap-2">
                <h3 className="text-2xl text-n-3 font-bold">{item.title}</h3>
                <p className="text-n-3 text-base font-medium text-base">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
