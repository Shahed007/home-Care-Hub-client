import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ButtonPrimary = ({ link, className, children }) => {
  return (
    <Link
      to={link}
      className={`${className} px-[32px] py-[10px] rounded bg-secondary_color/60 text-text_color_normal font-semibold text-lg border-transparent border-[2px] duration-200 hover:border-secondary_color hover:text-secondary_color hover:bg-transparent active:scale-95 shadow-drop-center`}
    >
      {children}
    </Link>
  );
};

ButtonPrimary.propTypes = {
  link: PropTypes.string,
  text: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
};

export default ButtonPrimary;
