import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/auth";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Header = () => {
  const [auth, setAuth] = useAuth();
  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    setTimeout(() => {
      toast.success("Logout Successfully");
    }, 1000);
  };

  const handleDonate = () => {
    setTimeout(() => {
      toast.error("You need to login First!");
    }, 500);
  };
  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Horizons
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/about">
                about
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/hire">
                Hire
              </Link>
            </li>
            {!auth.user ? (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/register">
                    Register
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    Login
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link onClick={handleLogout} className="nav-link" to="/login">
                    Logout
                  </Link>
                </li>
              </>
            )}
            {auth.user ? (
              <li className="nav-item">
                <Link
                  className="nav-link"
                  // to={`/Profile/${auth?.user?.role === 1 ? "delv" : "user"}`}
                  to={`/Profile/${
                    auth?.user?.role === 1
                      ? "delv"
                      : auth?.user?.role === 2
                      ? "admin"
                      : "user"
                  }`}
                >
                  Profile
                </Link>
              </li>
            ) : (
              ""
            )}
            {auth.user ? (
              auth.user.role === 0 ? (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/donate">
                      Donate
                    </Link>
                  </li>
                </>
              ) : (
                ""
              )
            ) : (
              <>
                <li className="nav-item">
                  <Link onClick={handleDonate} className="nav-link" to="/login">
                    Donate
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
