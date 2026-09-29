import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
      <div className="container">

        <Link className="navbar-brand fw-bold text-primary" to="/">
       Job Portal
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">

          <ul className="navbar-nav ms-auto ">

            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/jobs">Jobs</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/companies">Companies</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>

            <li className="nav-item ms-2">
              <Link className="btn btn-outline-primary" to="/login">
                Login
              </Link>
            </li>

            <li className="nav-item ms-2">
              <Link className="btn btn-primary" to="/register">
                Register
              </Link>
            </li>

          </ul>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;