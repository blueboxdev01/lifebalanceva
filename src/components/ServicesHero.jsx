import herobgImg from "../assets/hero/lbva-bg.png";

const ServicesHero = () => {
  return (
    <section
      className="hero-bg bg-cover bg-center flex items-center w-full p-4 lg:p-0 pb-0 lg:pb-20"
      style={{ backgroundImage: `url(${herobgImg})`, backgroundSize: "cover" }}>
      <div className="w-full lg:w-[80em] lg:mx-auto flex flex-col lg:flex-row py-2 pb-0 lg:py-20 lg:pb-0 gap-10 items-end">
        <h1 className="text-4xl lg:text-6xl lg:leading-[1em] font-extrabold">
          Services We Offer
        </h1>
      </div>
    </section>
  );
};

export default ServicesHero;
