import logoDark from "../../assets/fav-icon.png";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/">
      <div className="flex items-center gap-3">
        <img src={logoDark} alt="dark mode logo" className="md:w-8 w-6" />
        <h1 className="dark:text-text_color_dark text-text_color_normal text-xl md:text-2xl font-medium">
          HomeCareHub
        </h1>
      </div>
    </Link>
  );
};

export default Logo;
