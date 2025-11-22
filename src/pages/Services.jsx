import ButtonGradient from "../assets/svg/ButtonGradient.jsx";
import CTASection from "../components/CTASection";
import FaqSection from "../components/FaqSection.jsx";
import Footer from "../components/Footer";
import Header from "../components/Header";
import TestimonialSection from "../components/TestimonialSection";
import ServicesHero from "../components/ServicesHero.jsx";
import ServicesPSec from "../components/ServicesPSec.jsx";

const Services = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <ServicesHero />
        <ServicesPSec />
        <FaqSection />
        <TestimonialSection />
        <CTASection />
        <Footer />
      </div>
      <ButtonGradient />
    </>
  );
};

export default Services;
