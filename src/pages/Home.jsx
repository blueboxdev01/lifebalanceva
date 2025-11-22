import ButtonGradient from "../assets/svg/ButtonGradient.jsx";
import AboutSection from "../components/AboutSection";
import CTASection from "../components/CTASection";
import FaqSection from "../components/FaqSection";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Hiring from "../components/Hiring";
import ServiceSection from "../components/ServiceSection";
import SolutionsSection from "../components/SolutionsSection";
import TeamSection from "../components/TeamSection";
import TestimonialSection from "../components/TestimonialSection";

const Home = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Hiring />
        <AboutSection />
        <SolutionsSection />
        <ServiceSection />
        <TeamSection />
        <FaqSection />
        <TestimonialSection />
        <CTASection />
        <Footer />
      </div>

      <ButtonGradient />
    </>
  );
};

export default Home;
