import { FaHome } from "react-icons/fa";
import { ImStatsDots } from "react-icons/im";
import { IoMdTime } from "react-icons/io";
import { NavLink } from "react-router";

const NavBar = () => {
  return (
    <>
      <div className="navbar bg-base-100 shadow-sm px-10">
        <div className="flex-1">
          <a className="text-xl font-bold">
            Keen<span className="text-[#244d3f] font-semibold">Keeper</span>
          </a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 space-x-2">
            <li>
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  `font-semibold ${isActive ? "text-gray-50 bg-[#244d3f]" : ""}`
                }
              >
                <div className="flex justify-center items-center gap-1.5">
                  <FaHome />
                  <h4>Home</h4>
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/timeline"}
                className={({ isActive }) =>
                  `font-semibold ${isActive ? "text-gray-50 bg-[#244d3f]" : ""}`
                }
              >
                <div className="flex justify-center items-center gap-1.5">
                  <IoMdTime />
                  <h4>Timeline</h4>
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink
              to={'/chart'}
                className={({isActive}) => `font-semibold ${isActive ? 'text-gray-50 bg-[#244d3f]' : ''}`}
              >
                <div className="flex justify-center items-center gap-1.5">
                  <ImStatsDots />
                  <h4>Stats</h4>
                </div>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavBar;
