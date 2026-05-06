import { FaHome } from "react-icons/fa";
import { ImStatsDots } from "react-icons/im";
import { IoMdTime } from "react-icons/io";
import { NavLink } from "react-router";

const NavBar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm px-4 sm:px-10">

      {/* Logo */}
      <div className="flex-1">
        <a className="text-xl sm:text-2xl font-bold">
          Keen<span className="text-[#244d3f] font-semibold">Keeper</span>
        </a>
      </div>

      {/* Mobile Hamburger Menu */}
      <div className="flex-none md:hidden">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-44 p-2 shadow">
            <li>
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  `font-semibold text-base ${isActive ? "text-gray-50 bg-[#244d3f]" : ""}`
                }
              >
                <div className="flex items-center gap-1.5">
                  <FaHome />
                  <span>Home</span>
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/timeline"}
                className={({ isActive }) =>
                  `font-semibold text-base ${isActive ? "text-gray-50 bg-[#244d3f]" : ""}`
                }
              >
                <div className="flex items-center gap-1.5">
                  <IoMdTime />
                  <span>Timeline</span>
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/chart"}
                className={({ isActive }) =>
                  `font-semibold text-base ${isActive ? "text-gray-50 bg-[#244d3f]" : ""}`
                }
              >
                <div className="flex items-center gap-1.5">
                  <ImStatsDots />
                  <span>Stats</span>
                </div>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>

      {/* Desktop Menu */}
      <div className="flex-none hidden md:flex">
        <ul className="menu menu-horizontal px-1 space-x-2">
          <li>
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                `font-semibold text-base ${isActive ? "text-gray-50 bg-[#244d3f]" : ""}`
              }
            >
              <div className="flex justify-center items-center gap-1.5">
                <FaHome />
                <span>Home</span>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/timeline"}
              className={({ isActive }) =>
                `font-semibold text-base ${isActive ? "text-gray-50 bg-[#244d3f]" : ""}`
              }
            >
              <div className="flex justify-center items-center gap-1.5">
                <IoMdTime />
                <span>Timeline</span>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/chart"}
              className={({ isActive }) =>
                `font-semibold text-base ${isActive ? "text-gray-50 bg-[#244d3f]" : ""}`
              }
            >
              <div className="flex justify-center items-center gap-1.5">
                <ImStatsDots />
                <span>Stats</span>
              </div>
            </NavLink>
          </li>
        </ul>
      </div>

    </div>
  );
};

export default NavBar;