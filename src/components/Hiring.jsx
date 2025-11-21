import hiringBg from "../assets/bg-2-down.png";
import briefIcon from "../assets/briefIcon.png";
import hpIcon from "../assets/hpIcon.png";

const Hiring = () => {
  return (
    <section
      className="hero-bg bg-cover bg-center flex items-center w-full p-4 lg:p-0 lg:pb-20"
      style={{
        backgroundImage: `url(${hiringBg})`,
        backgroundSize: "cover",
        backgroundPositionX: "center",
        backgroundPositionY: "center",
      }}>
      <div className="w-full lg:w-[80em] lg:mx-auto flex flex-col lg:flex-col py-4 lg:py-20 lg:pb-0 gap-6 lg:gap-16 justify-center">
        <h2 className="text-3xl lg:text-5xl font-extrabold text-center">
          Are You Looking For...
        </h2>
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-16 items-center w-full lg:w-[70em] lg:mx-auto">
          <div className="flex flex-col gap-4 lg:gap-8 bg-[#03293D]/60 border border-[#03293D]/40 rounded-lg p-6">
            <img src={briefIcon} width={56} height={56} />
            <div className="flex flex-col gap-2">
              <h3 className="text-xl lg:text-3xl font-bold">
                Virtual Assistant looking to jump start your business
              </h3>
              <p className="font-light">
                If you need a skilled VA to help streamline tasks and boost
                productivity, we’re here to support your business.
              </p>
            </div>
            <div className="block">
              <button className="button">Hire a Virtual Assistant</button>
            </div>
          </div>
          <div className="flex flex-col gap-4 lg:gap-8 bg-[#03293D]/60 border border-[#03293D]/40 rounded-lg p-6">
            <img src={hpIcon} width={56} height={56} />
            <div className="flex flex-col gap-2">
              <h3 className="text-xl lg:text-3xl font-bold">
                Opportunities as a Virtual Assistant to jump start your career
              </h3>
              <p className="font-light">
                If you’re passionate about virtual assistance and want to be
                part of VA Master, we’d love to connect with you.
              </p>
            </div>
            <div className="block">
              <button className="button">Join as a Virtual Assistant</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hiring;
