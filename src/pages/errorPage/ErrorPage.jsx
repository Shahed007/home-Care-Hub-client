import { Link, isRouteErrorResponse, useRouteError } from "react-router-dom";
import errorPage from "../../assets/image/404.jpg";

const ErrorPage = () => {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    if (error.status === 404) {
      return (
        <div className="h-screen w-full flex justify-center items-center  relative">
          <Link className="flex  gap-4 text-xl absolute top-4 left-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
              />
            </svg>
            Back to home
          </Link>
          <img className="h-full w-full" src={errorPage} alt="" />
        </div>
      );
    }
  }
};

export default ErrorPage;
