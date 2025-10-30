import React from "react";
import { FaGithub } from "react-icons/fa6";
import { Link, NavLink } from "react-router";

const Header = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm flex justify-between">
      <div className="lg:navbar-start ">
        <Link to="/" className="flex justify-between items-center">
          <img src={"/public/assets/logo.png"} className="w-4 h-4" alt="" />
          <p className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent  font-semibold">
            HERO.IO
          </p>
        </Link>
      </div>
      <div className="navbar-center lg:flex">
        <ul className="flex flex-row gap-x-2 ">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? " border-b-4 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent  font-semibold"
                  : "font-semibold text-black hover:bg-gradient-to-r hover:from-[#632EE3] hover:to-[#9F62F2] hover:bg-clip-text hover:text-transparent"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Apps"
              className={({ isActive }) =>
                isActive
                  ? "border-b-4 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent  font-semibold"
                  : "font-semibold text-black hover:bg-gradient-to-r hover:from-[#632EE3] hover:to-[#9F62F2] hover:bg-clip-text hover:text-transparent"
              }
            >
              Apps
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Installed"
              className={({ isActive }) =>
                isActive
                  ? " border-b-4 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent  font-semibold"
                  : "font-semibold text-black hover:bg-gradient-to-r hover:from-[#632EE3] hover:to-[#9F62F2] hover:bg-clip-text hover:text-transparent"
              }
            >
              Installed
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end  ">
        <div className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] ">
          <div>
            <FaGithub></FaGithub>
          </div>
          <p>Contribute</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
