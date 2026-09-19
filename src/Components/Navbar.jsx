import { NavLink } from "react-router-dom";
import { useTheme } from "../context/useTheme";
function Navbar({
  loggedIn,
  setLoggedIn
}) {

  const {
    theme,
    toggleTheme
  } = useTheme();

  return (
    <header className="navbar">

      <div className="nav-inner">

        <NavLink
          className="brand"
          to="/"
        >
          ReactLab
        </NavLink>

        <nav>

          <NavLink to="/">
            Home
          </NavLink>

          <NavLink to="/todo">
            Todo
          </NavLink>

          <NavLink to="/register">
            Register
          </NavLink>

          <NavLink to="/weather">
            Weather
          </NavLink>

          <NavLink to="/about">
            About
          </NavLink>

        </nav>

        <button
          className="theme-btn"
          onClick={toggleTheme}
        >
          {theme === "light"
            ? "🌙 Dark"
            : "☀️ Light"}
        </button>

        <button
          className="login-btn"
          onClick={() =>
            setLoggedIn(!loggedIn)
          }
        >
          {loggedIn ? "Logout" : "Login"}
        </button>

      </div>

    </header>
  );
}

export default Navbar;