import Container from "../../components/Container";
import heroBanner from "../../assets/image/hero-banner.jpg";
import { Typewriter } from "react-simple-typewriter";
import plumber from "../../assets/image/plumber.png";
import ButtonPrimary from "../../components/button/ButtonPrimary";

const Hero = () => {
  return (
    <section
      className="mt-[65px] h-screen relative "
      style={{
        backgroundImage: `url(${heroBanner})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <div className="h-full w-full absolute z-10 top-0 left-0 bg-text_color_normal/30 "></div>
      <Container>
        <div className="relative  z-20 h-full flex md:flex-row  justify-center lg:justify-between items-center">
          <div className="lg:w-4/5 lg:text-start text-center space-y-7 text-text_color_dark">
            <h1 className="md:text-[45px] text-2xl sm:text-3xl font-bold text-secondary_color">
              <Typewriter
                words={["Welcome to Your", "Home Service Solution"]}
                loop={Infinity}
                cursor={true}
                cursorBlinking={true}
              />
            </h1>
            <p className="text-[17px] font-medium mb-7">
              Connecting Homeowners with Trusted Service Providers.{" "}
              <br className="md:block hidden" /> Find, Hire, and Review Home
              Services Easily!
            </p>
            <ButtonPrimary className="inline-block">Get Started</ButtonPrimary>
          </div>
          <div className="lg:w-3/12 flex-1 h-full hidden lg:flex justify-end items-end">
            <img
              className="lg:h-72 lg:w-72 object-cover"
              src={plumber}
              alt="plum ber image"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
