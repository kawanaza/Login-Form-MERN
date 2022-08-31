import React from 'react';
import { Link } from 'react-router-dom';
import '../App.scss';
import logos from '../images/logos.png';
import { logout } from '../api/user';
import { toast } from 'react-toastify';
import { UserContext } from '../UserContext';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  /*  const { user, setUser } = UserContext(UserContext); */
  const navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();

    logout()
      .then((res) => {
        toast.success(res.message);
        // set user to null
        // redirect the user to login
        navigate('/login', { replace: true });
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="nav_container_style">
      <nav className=" Navbar  navbar navbar-expand-lg ">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            <img src={logos} className="logo ms-5" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/signup">
                  Sign Up
                </Link>
              </li>
              <li class="nav-item">
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </li>
              <li class="nav-item">
                <span
                  className="nav-link"
                  style={{ cursor: 'pointer' }}
                  onClick={handleLogout}
                >
                  Logout
                </span>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
