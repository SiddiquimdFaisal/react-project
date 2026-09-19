import { Link } from "react-router-dom";

function NotFound() {

  return (
    <div className="card center">

      <h1>404</h1>

      <p>
        Page not found.
      </p>

      <Link
        className="btn"
        to="/"
      >
        Go Home
      </Link>

    </div>
  );
}

export default NotFound;