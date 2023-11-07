import { motion } from "framer-motion";
import image from "../../assets/image/mesh-833.png";
import Container from "../../components/Container";
import { Link } from "react-router-dom";
import { useState } from "react";
import googleLogo from "../../assets/icon/google.png";

const Login = () => {
  const [loginInfo, setLoginInfo] = useState({
    email: null,
    password: null,
  });

  console.log(loginInfo.email, loginInfo.password);
  const handleLogin = (e) => {
    e.preventDefault();
  };
  return (
    <section className="bg-gradient-to-l px-3 to-transparent flex justify-center items-center  from-secondary_color/30 md:h-screen relative overflow-hidden ">
      <motion.div
        initial={{ top: 300, x: 500 }}
        animate={{ x: -20, top: -50 }}
        transition={{ type: "spring", damping: 500 }}
        className="md:h-64 h-20 md:w-64 w-20 -z-10 bg-secondary_color/20 top-0 left-0 backdrop-blur-md rounded-full  absolute"
      ></motion.div>
      <motion.div
        initial={{ top: 300, x: 500 }}
        animate={{ x: 1150, bottom: -100 }}
        transition={{ type: "spring", damping: 500 }}
        className="md:h-64 h-20 md:w-64 w-20 bg-gray-50/60 backdrop-blur-md bottom-0 right-0 rounded-full  absolute"
      ></motion.div>

      <div className="md:flex-row relative shadow-drop-center my-6 flex flex-col items-center md:max-w-5xl w-full mx-auto rounded-lg  ">
        <Link
          to="/"
          className="top-2 left-2 absolute flex items-center gap-4 dark:text-text_color_dark"
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
              d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
            />
          </svg>
          Back to home
        </Link>
        <div className="md:flex-1  w-full py-8 md:px-6 mt-8 dark:text-text_color_dark  rounded-l-lg  md:text-start text-center">
          <h1 className="text-3xl font-semibold uppercase ">Welcome back</h1>
          <p className="text-xl ">
            You can sign in to access with your existing services
          </p>
        </div>
        <div className="md:flex-1 w-full    py-8 px-6 h-full rounded-r-lg flex flex-col items-center justify-center dark:text-text_color_dark">
          <div>
            <h1 className="uppercase text-3xl font-semibold text-center">
              login
            </h1>
            <p className="text-lg mt-2 md:text-start text-center">
              Please enter your login information
            </p>
          </div>
          <form className="mt-6 w-full  space-y-8" onSubmit={handleLogin}>
            <div className="relative h-11 w-full ">
              <input
                onBlur={(e) =>
                  setLoginInfo({ ...loginInfo, email: e.target.value })
                }
                type="text"
                className="peer h-full w-full block border-b-[2px] border-text_color_normal/30 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-pink-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                placeholder=" "
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 absolute right-0 top-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>

              <label className="after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-pink-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:after:scale-x-100 peer-focus:after:border-pink-500 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                Email
              </label>
            </div>
            <div className="relative h-11 w-full ">
              <input
                onBlur={(e) =>
                  setLoginInfo({ ...loginInfo, password: e.target.value })
                }
                type="password"
                className="peer h-full w-full block border-b-[2px] border-text_color_normal/30 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-pink-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                placeholder=" "
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 absolute right-0 top-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                />
              </svg>

              <label className="after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-pink-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:after:scale-x-100 peer-focus:after:border-pink-500 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                Password
              </label>
            </div>

            <button
              type="submit"
              className="bg-secondary_color w-full block p-3 text-lg font-bold rounded-md active:scale-95"
            >
              Log in
            </button>
          </form>
          <p className="mt-5">
            To create a account?{" "}
            <Link
              to="/registration"
              className="text-primary hover:text-secondary dark:text-accent dark:hover:text-white"
            >
              registration
            </Link>
          </p>

          <button className="btn btn-block btn-ghost mt-5">
            Google Login
            <img src={googleLogo} alt="google login" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Login;
