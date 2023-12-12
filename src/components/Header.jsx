import React from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const isAbout = location.pathname === "/about";

  return (
    <div className="container mx-auto py-5 px-5 sm:px-0 sm:py-12">
      <div className="flex items-center justify-between">
        <img src="/logo.svg" alt="logo" className="w-36 sm:w-52" />
        <div className="flex items-center space-x-6 sm:space-x-14 text-[#FF6060] text-xs sm:text-2xl">
          <Link
            to="/"
            className={`${isHome ? "underline" : ""} hover:underline`}
          >
            Accueil
          </Link>
          <Link
            to="/about"
            className={`${isAbout ? "underline" : ""} hover:underline`}
          >
            A Propos
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
