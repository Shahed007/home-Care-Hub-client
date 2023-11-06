import Container from "../components/Container";
import logoDark from "../assets/fav-icon.png";
import { Link, NavLink } from "react-router-dom";
import ButtonPrimary from "../components/button/ButtonPrimary";
import { useEffect, useState } from "react";
import Logo from "../components/logo/Logo";

// desktop and mobile links
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
// MOBILE LINKS
const Mobilelinks = (
  <>
    <li>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? `text-secondary_color` : "")}
      >
        Home
      </NavLink>
    </li>
    <li>
      <NavLink
        to="about"
        className={({ isActive }) => (isActive ? `text-secondary_color` : "")}
      >
        About
      </NavLink>
    </li>
    <li>
      <NavLink
        to="services"
        className={({ isActive }) => (isActive ? `text-secondary_color` : "")}
      >
        Services
      </NavLink>
    </li>
  </>
);

// dropdown links
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
const Mobiledropdown = (
  <>
    <li className="w-full block ">
      <NavLink
        to="services"
        className={({ isActive }) => (isActive ? `text-secondary_color` : "")}
      >
        My Services
      </NavLink>
    </li>
    <li className="w-full block ">
      <NavLink
        to="services"
        className={({ isActive }) => (isActive ? `text-secondary_color` : "")}
      >
        Add Services
      </NavLink>
    </li>
    <li className="w-full block ">
      <NavLink
        to="services"
        className={({ isActive }) => (isActive ? `text-secondary_color` : "")}
      >
        My Schedules
      </NavLink>
    </li>
  </>
);

const Navbar = () => {
  const [darkMode, setDarkMode] = useState("light");
  const [navbarToggle, setNavbarToggle] = useState(false);
  const [dropdownToggle, setDropdownToggle] = useState(false);

  // handle dark mode
  const handleChangeMod = () => {
    const html = document.documentElement;
    if (darkMode === "light") {
      html.classList.remove("light");
      html.classList.add("dark");
      setDarkMode("dark");
      localStorage.setItem("homeCareHub", "dark");
    } else {
      html.classList.remove("dark");
      html.classList.add("light");
      setDarkMode("light");
      localStorage.setItem("homeCareHub", "light");
    }
  };

  // getting mode from localStorage
  useEffect(() => {
    const mod = localStorage.getItem("homeCareHub");
    const html = document.documentElement;
    html.classList.add(mod);
    setDarkMode(mod);
  }, []);

  return (
    <>
      <Container>
        <nav className="flex justify-between items-center h-full relative z-50">
          <Logo></Logo>
          <ul className="lg:flex hidden items-center gap-5 text-lg font-medium dark:text-text_color_dark text-text_color_normal main-nav">
            {links}
            <li className="relative inline-block w-full group">
              <button
                className={`after:bg-secondary_color after:h-[4px] hover:after:scale-100 after:w-full after:inline-block flex flex-col after:duration-300  after:duration-300 after:scale-0`}
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
              </button>
              <div className=" origin-top absolute left-0 mt-2 w-56 rounded-md shadow-lg dark:bg-dark_component bg-primary_color ring-1 ring-black ring-opacity-5  transform scale-0 group-hover:scale-100 transition-transform duration-300">
                <ul className="main-nav p-3 divide-y divide-gray-400">
                  {dropdown}
                </ul>
              </div>
            </li>
          </ul>
          <div className="flex items-center gap-3 ">
            <button
              onClick={handleChangeMod}
              className={` ${
                darkMode === "dark" ? "bg-gray-700" : "bg-white"
              } h-10 w-10 rounded-full  justify-center items-center shadow-inset-center md:flex hidden`}
            >
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className={`w-6 h-6 ${
                    darkMode === "dark"
                      ? "relative rotate-180 duration-300 text-white"
                      : "hidden duration-300"
                  }`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                  />
                </svg>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className={`w-6 h-6 ${
                    darkMode === "light"
                      ? " duration-300 text-text_color_normal"
                      : "hidden duration-300"
                  }`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                  />
                </svg>
              </div>
            </button>
            <ButtonPrimary
              link="/login"
              className="md:flex items-center gap-2 shadow-pop-tr md:px-[32px] px-4 hidden"
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
            <button
              onClick={() => setNavbarToggle(true)}
              className="lg:hidden flex h-10 w-10  active:scale-95 dark:bg-gray-700 dark:text-text_color_dark bg-white rounded-full justify-center items-center shadow-sm ring-1 ring-gray-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-7 h-7"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
        </nav>
      </Container>

      {/* MOBILE NAV */}
      <div
        className={`absolute top-0 duration-500 dark:text-text_color_dark ${
          navbarToggle ? "left-0" : "-left-[999px]"
        }  w-full sm:w-1/2 h-screen z-[60] backdrop-blur bg-primary_color/60  dark:bg-dark_component`}
      >
        <div className="flex justify-between items-center m-4">
          <button
            onClick={handleChangeMod}
            className={` ${
              darkMode === "dark" ? "bg-gray-700" : "bg-white"
            } h-10 w-10 rounded-full  justify-center items-center shadow-inset-center md:hidden flex`}
          >
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className={`w-6 h-6 ${
                  darkMode === "dark"
                    ? "relative rotate-180 duration-300 text-white"
                    : "hidden duration-300"
                }`}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                />
              </svg>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className={`w-6 h-6 ${
                  darkMode === "light"
                    ? " duration-300 text-text_color_normal"
                    : "hidden duration-300"
                }`}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                />
              </svg>
            </div>
          </button>
          <button
            onClick={() => setNavbarToggle(false)}
            className="lg:hidden flex h-10 w-10  active:scale-95 dark:bg-gray-700 dark:text-text_color_dark bg-white rounded-full justify-center items-center shadow-sm ring-1 ring-gray-200"
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
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="flex flex-col  items-center mx-3">
          <ul className="w-full flex mb-5 flex-col gap-5 text-lg font-medium divide-y divide-gray-400">
            {Mobilelinks}
            <li className="w-full">
              <button
                className="flex justify-between items-center w-full"
                onClick={() => setDropdownToggle(!dropdownToggle)}
              >
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
              </button>
              <ul
                className={`my-3 flex flex-col gap-5 divide-y divide-gray-400  ${
                  dropdownToggle ? "relative" : "absolute -top-[999px]"
                }`}
              >
                {Mobiledropdown}
              </ul>
            </li>
          </ul>
          <ButtonPrimary
            link="/login"
            className="flex gap-2 items-center w-full"
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
      </div>
      {/* MOBILE NAV OVERLAY */}
      <div
        onClick={() => setNavbarToggle(false)}
        className={`absolute top-0 z-50 left-0 bg-text_color_normal/10 ${
          navbarToggle ? "w-full h-screen" : "w-0 h-0"
        }`}
      ></div>
    </>
  );
};

export default Navbar;
