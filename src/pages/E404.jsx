import { Link } from "react-router-dom";

const E404 = () => {
  return (
    <div className="e404-container">
      <h1 className="e404-title">404</h1>
      <p className="e404-text">
        Oups! La page que vous demandez n’existe pas.
      </p>
      <Link to="/" className="e404-link">
        Retourner sur la page d’accueil
      </Link>
    </div>
  );
};

export default E404;