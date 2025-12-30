import { Link } from "react-router-dom";

export default function SubNavbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-light border-bottom">
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#subNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="subNavbar">
          <ul className="navbar-nav gap-3">

            <li className="nav-item">
              <Link className="nav-link fw-semibold" to="/dashboard">
                Dashboard
              </Link>
            </li>

            {/* Courses Dropdown */}
            <li className="nav-item dropdown">
              <span
                className="nav-link dropdown-toggle fw-semibold"
                role="button"
                data-bs-toggle="dropdown"
              >
                Courses
              </span>

              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/add-course">
                    Add Courses
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/get-courses">
                    Get All Courses
                  </Link>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <Link className="nav-link fw-semibold" to="/videos">
                Videos
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link fw-semibold" to="/students">
                Students
              </Link>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}
