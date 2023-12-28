import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const isAbout = location.pathname === "/about";

  return (
    <div className="header-container">
      <div className="header-logo-container">
        <img src="/logo.svg" alt="logo" className="header-logo" />
        <div className="header-links">
          <Link
            to="/"
            className={`header-link ${isHome ? "header-link--active" : ""}`}
          >
            Accueil
          </Link>
          <Link
            to="/about"
            className={`header-link ${isAbout ? "header-link--active" : ""}`}
          >
            A Propos
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
