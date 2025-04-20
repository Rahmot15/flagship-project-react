import React from "react";
import { Link, NavLink } from "react-router";
import { MdBookmarkAdd, MdShoppingCart } from "react-icons/md";

const Navbar = () => {
  return (
    <div className="bg-[#2c155ab4] shadow-sm">
      <div className="navbar  w-11/12 p-0 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden mx-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <NavLink className={({isActive}) => (isActive ? "text-blue-500 underline" : "") } to={"/"}>Home</NavLink>
              </li>
              <li>
                <NavLink className={({isActive}) => (isActive ? "text-blue-500 underline" : "") } to={"/about"}>About</NavLink>
              </li>
            </ul>
          </div>
          <Link to={"/"} className="font-bold text-2xl">
            {" "}
            FlagshipFaceOff
          </Link>
        </div>

        <div className="navbar-end">
          <ul className="px-1 flex items-center md:gap-7 gap-2">
            <li className="hidden lg:flex">
              <NavLink className={({isActive}) => (isActive ? "text-blue-500 underline" : "") } to={"/"}>Home</NavLink>
            </li>
            <li className="hidden lg:flex">
              <NavLink className={({isActive}) => (isActive ? "text-blue-500 underline" : "") } to={"/about"}>About</NavLink>
            </li>
            <li>
              <NavLink className={({isActive}) => (isActive ? "text-blue-500" : "") } to={"/cart"}> <MdShoppingCart size={22}/> </NavLink>
            </li>
            <li>
              <NavLink className={({isActive}) => (isActive ? "text-blue-500" : "") } to={"/favorites"}> <MdBookmarkAdd size={22}/> </NavLink>
            </li>
          </ul>

        </div>
      </div>
    </div>
  );
};

export default Navbar;
