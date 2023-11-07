import { NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Avatar = () => {
  const { user, logOut } = useAuth();

  const handleLogout = () => {
    logOut();
  };
  return (
    <div className="relative  group">
      <img
        src={user.photoURL}
        className="h-11 object-cover border-2 border-secondary_color cursor-pointer shadow-drop-center  w-11 rounded-full"
        alt={`photo of ${user.displayName}`}
      />
      <div className=" origin-top absolute right-0 mt-2 w-56 rounded-md shadow-lg dark:bg-dark_component bg-primary_color ring-1 ring-black ring-opacity-5  transform scale-0 group-hover:scale-100 transition-transform duration-300">
        <ul className=" p-3 divide-y divide-gray-400 text-lg dark:text-text_color_dark">
          <h5 className="text-lg text-center font-bold mb-2">
            {user.displayName}
          </h5>
          <li>
            <NavLink
              to="/profile"
              className={({ isActive }) =>
                isActive
                  ? `after:bg-secondary_color after:h-[4px] after:w-full after:inline-block flex flex-col after:scale-100 after:duration-300 `
                  : `hover:after:scale-100 after:bg-secondary_color after:h-[4px] after:w-full after:inline-block flex flex-col after:scale-0 after:duration-300`
              }
            >
              My Profile
            </NavLink>
          </li>
          <li className="pt-4">
            <button
              onClick={handleLogout}
              className="flex gap-2 w-full border-2 border-transparent hover:bg-transparent hover:border-secondary_color hover:text-secondary_color active:scale-95  bg-secondary_color justify-center items-center py-2 rounded text-lg"
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
                  d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
                />
              </svg>
              Logout
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Avatar;
