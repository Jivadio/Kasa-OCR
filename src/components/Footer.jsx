import React from "react";

const Footer = () => {
  return (
    <div className="w-full bg-black py-8">
      <div className="flex flex-col items-center justify-center space-y-8">
        <img src="/logo_white.svg" alt="logo" className="w-32" />
        <p className="text-white text-xs sm:text-2xl">
          © 2020 Kasa. All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
