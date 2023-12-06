import React from "react";
import { Link } from "react-router-dom";

const E404 = () => {
  return (
    <div className="container mx-auto text-center text-[#FF6060] space-y-28 sm:space-y-32  py-28 sm:py-32">
      <h1 className="font-bold text-8xl sm:text-[288px]">404</h1>
      <p className="text-lg sm:text-4xl">
        Oups! La page que vous demandez n’existe pas.
      </p>
      <Link to="/" className="text-xs sm:text-lg hover:underline block">
        Retourner sur la page d’accueil
      </Link>
    </div>
  );
};

export default E404;
