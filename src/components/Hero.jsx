import heroImg from "../assets/hero/heroImage.png";
import herobgImg from "../assets/hero/lbva-bg.png";
import starImg from "../assets/starImages.png";

const Hero = () => {
  return (
    <section
      className="hero-bg bg-cover bg-center flex items-center w-full p-4 lg:p-0 pb-0 lg:pb-20"
      style={{ backgroundImage: `url(${herobgImg})`, backgroundSize: "cover" }}>
      <div className="w-full lg:w-[80em] lg:mx-auto flex flex-col lg:flex-row py-2 pb-0 lg:py-20 lg:pb-0 gap-10 items-end">
        <div className="flex-1 flex flex-col items-end gap-5 lg:gap-20">
          <div className="flex flex-col gap-6">
            <h1 className="text-4xl lg:text-[4em] lg:leading-[1em] font-extrabold">
              LifeBalanceVA — Powered by Talent. Rooted in Balance.
            </h1>
            <p className="text-base lg:text-xl lg:leading-[1.5em] font-light">
              We connect global businesses with exceptional Filipino Virtual
              Assistants who succeed because they work in a culture that values
              balance, well-being and long-term performance.
            </p>
            <div className="block">
              <button className="button">Hire a Virtual Assistant Now</button>
            </div>
          </div>
          <div className="flex flex-col gap-4 bg-[#03293D]/60 border border-[#03293D]/40 rounded-lg p-6">
            <img src={starImg} alt="" width={125} height={20} />
            <p className="font-light">
              “LifeBalanceVA gave us a VA who feels like part of our core team.
              Her consistency comes from the balance and support she receives,
              and we see it in the quality of her work.”
            </p>
            <p className="font-bold">
              {" "}
              — Michael Turner, CEO, Turner Global Logistics
            </p>
          </div>
        </div>
        <div>
          <img
            src={heroImg}
            alt="Hero Image"
            width={650}
            height={720}
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
