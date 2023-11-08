import PropTypes from "prop-types";
import backImage from "../../assets/image/mesh-833.png";
import { Link } from "react-router-dom";
const PageHeader = ({ children }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${backImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
      className="flex justify-center items-center h-48"
    >
      <div className="flex flex-col gap-3 items-center dark:text-text_color_dark">
        <h1 className="text-2xl font-semibold">{children}</h1>
        <Link
          to="/"
          className="flex gap-1 items-center text-lg font-medium hover:text-primary_color duration-150"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
            />
          </svg>
          <span className="underline">Home</span>
        </Link>
      </div>
    </div>
  );
};

PageHeader.propTypes = {
  children: PropTypes.node,
};

export default PageHeader;
