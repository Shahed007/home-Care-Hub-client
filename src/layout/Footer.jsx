import Container from "../components/Container";
import Logo from "../components/logo/Logo";
import { FaFacebook } from "react-icons/fa";
import {
  AiFillTwitterCircle,
  AiFillInstagram,
  AiFillYoutube,
} from "react-icons/ai";
import moment from "moment/moment";

const Footer = () => {
  return (
    <>
      <Container>
        <div className="footer p-10">
          <aside>
            <Logo></Logo>
            <h2 className="text-base">
              Bringing Care Home, Where Your Heart Is.
            </h2>
          </aside>
          <nav>
            <header className="font-semibold text-lg">Services</header>

            <a className="link link-hover font-medium text-base">Cooking</a>
            <a className="link link-hover font-medium text-base">
              Laundry Services
            </a>
            <a className="link link-hover font-medium text-base">Babysitting</a>
            <a className="link link-hover font-medium text-base">Pet Care</a>
          </nav>
          <nav>
            <header className="font-semibold text-lg">Contact</header>
            <p className="text-base font-medium">
              123 Main Street <br />
              Anytown,New York, <br />
              USA, CA 12345
              <br />
              (123) 456-7890
            </p>
          </nav>
          <nav>
            <header className="font-semibold text-lg">Legal</header>
            <a className="link link-hover font-medium text-base">
              Terms & conditions
            </a>
            <a className="link link-hover font-medium text-base">
              Privacy policy
            </a>
            <a className="link link-hover font-medium text-base">
              Cookie policy
            </a>
          </nav>
        </div>

        <div className="border-t dark:border-text_color_dark border-gray-800 py-10 gap-4 flex flex-col justify-center items-center">
          <ul className="flex items-center gap-3 text-3xl text-dark_component dark:text-secondary_color">
            <li>
              <FaFacebook />
            </li>
            <li>
              <AiFillTwitterCircle />
            </li>
            <li>
              <AiFillInstagram />
            </li>
            <li>
              <AiFillYoutube />
            </li>
          </ul>
          <p className="text-base font-semibold dark:text-text_color_dark text-center">
            © {moment().format("YYYY")} Copyright all rights reserved
            HomeCareHub. Developed by
            <span className="text-primary dark:text-secondary_color">
              {" "}
              Shahed
            </span>
          </p>
        </div>
      </Container>
    </>
  );
};

export default Footer;
