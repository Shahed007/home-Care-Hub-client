import Container from "../components/Container";
import logo from "../assets/logo.png";
import { Link, NavLink } from "react-router-dom";
import ButtonPrimary from "../components/button/ButtonPrimary";

const links = (
  <>
    <li>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? `after:bg-secondary_color after:h-[4px] after:w-full after:inline-block flex flex-col after:scale-100 after:duration-300 `
            : `hover:after:scale-100 after:bg-secondary_color after:h-[4px] after:w-full after:inline-block flex flex-col after:scale-0 after:duration-300`
        }
      >
        Home
      </NavLink>
    </li>
    <li>
      <NavLink
        to="about"
        className={({ isActive }) =>
          isActive
            ? `after:bg-secondary_color after:h-[4px] after:w-full after:inline-block flex flex-col after:scale-100 after:duration-300 `
            : `hover:after:scale-100 after:bg-secondary_color after:h-[4px] after:w-full after:inline-block flex flex-col after:scale-0 after:duration-300`
        }
      >
        About
      </NavLink>
    </li>
    <li>
      <NavLink
        to="services"
        className={({ isActive }) =>
          isActive
            ? `after:bg-secondary_color after:h-[4px] after:w-full after:inline-block flex flex-col after:scale-100 after:duration-300 `
            : `hover:after:scale-100 after:bg-secondary_color after:h-[4px] after:w-full after:inline-block flex flex-col after:scale-0 after:duration-300`
        }
      >
        Services
      </NavLink>
    </li>
  </>
);

const dropdown = (
  <>
    <li className="w-full block border-b ">
      <NavLink
        to="services"
        className={({ isActive }) =>
          isActive
            ? `after:bg-secondary_color after:h-[4px] pb-1 w-full after:w-full after:inline-block flex flex-col after:scale-100 after:duration-300 `
            : `hover:after:scale-100 after:bg-secondary_color w-full pb-1 after:h-[4px] after:w-full after:inline-block flex flex-col after:scale-0 after:duration-300`
        }
      >
        My Services
      </NavLink>
    </li>
    <li className="w-full block ">
      <NavLink
        to="services"
        className={({ isActive }) =>
          isActive
            ? `after:bg-secondary_color after:h-[4px] pb-1 w-full after:w-full after:inline-block flex flex-col after:scale-100 after:duration-300 `
            : `hover:after:scale-100 after:bg-secondary_color pb-1 w-full after:h-[4px] after:w-full after:inline-block flex flex-col after:scale-0 after:duration-300`
        }
      >
        Add Services
      </NavLink>
    </li>
    <li className="w-full block ">
      <NavLink
        to="services"
        className={({ isActive }) =>
          isActive
            ? `after:bg-secondary_color after:h-[4px] w-full  after:w-full after:inline-block flex flex-col after:scale-100 after:duration-300 `
            : `hover:after:scale-100 after:bg-secondary_color  w-full after:h-[4px] after:w-full after:inline-block flex flex-col after:scale-0 after:duration-300`
        }
      >
        My Schedules
      </NavLink>
    </li>
  </>
);

const Navbar = () => {
  return (
    <Container>
      <nav className="flex justify-between items-center h-full relative z-50">
        <Link to="/">
          <img src={logo} className="w-60" alt="home care hub logo" />
        </Link>
        <ul className="flex items-center gap-5 text-lg font-medium text-text_color_normal main-nav">
          {links}
          <li className="relative inline-block w-full group">
            <NavLink
              to="contact"
              className={({ isActive }) =>
                isActive
                  ? `after:bg-secondary_color after:h-[4px] after:w-full after:inline-block flex flex-col after:scale-100 after:duration-300 `
                  : `hover:after:scale-100 after:bg-secondary_color after:h-[4px] after:w-full after:inline-block flex flex-col after:scale-0 after:duration-300`
              }
            >
              <span className="flex gap-1 items-center">
                Dashboard
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
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </span>
            </NavLink>
            <div className=" origin-top absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-primary_color ring-1 ring-black ring-opacity-5  transform scale-0 group-hover:scale-100 transition-transform duration-300">
              <ul className="main-nav p-3 divide-y divide-gray-400">
                {dropdown}
              </ul>
            </div>
          </li>
        </ul>
        <div className="flex items-center gap-3 ">
          <div className="bg-white h-10 w-10 rounded-full flex justify-center items-center shadow-inset-center">
            <button>
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
                  d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                />
              </svg>
            </button>
          </div>
          <ButtonPrimary
            link="/login"
            className="flex items-center gap-2 shadow-pop-tr"
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
                d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
              />
            </svg>
            Login
          </ButtonPrimary>
        </div>
      </nav>
    </Container>
  );
};

export default Navbar;
