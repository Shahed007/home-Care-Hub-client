import Container from "../../components/Container";
import Title from "../../components/title/Title";
import aboutImage from "../../assets/image/about-us.jpg";
import ButtonPrimary from "../../components/button/ButtonPrimary";

const About = () => {
  return (
    <section className="mt-32">
      <Container>
        <div className="flex justify-center items-center mb-14">
          <Title className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-10 h-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z"
              />
            </svg>
            About Us
          </Title>
        </div>
        <div className="flex md:flex-row flex-col items-center gap-6">
          <div className="md:w-2/6">
            <img
              className="h-full w-full rounded"
              src={aboutImage}
              alt="About us image"
            />
          </div>
          <div className="flex-1 shadow-drop-center p-6 rounded-md space-y-6 dark:bg-gray-800">
            <p className="text-justify text-base text-text_color_normal dark:text-text_color_dark">
              At HomeCareHub, we&apos;re committed to transforming the way you
              experience home services. We understand that finding reliable,
              skilled, and trustworthy professionals for your home can be a
              challenge. That&apos;s why we&apos;ve created a platform that
              connects homeowners with the best service providers in the
              industry.
            </p>
            <p className="text-justify text-base text-text_color_normal dark:text-text_color_dark">
              Our mission is to simplify your life and elevate your home service
              experience. We believe that everyone deserves a safe, comfortable,
              and well-maintained home, and we&apos;re here to make that a
              reality. Whether you need a plumber, electrician, landscaper,
              cleaner, or any other service, HomeCareHub is your go-to
              destination.
            </p>

            <ButtonPrimary className="inline-block">Learn more</ButtonPrimary>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;
