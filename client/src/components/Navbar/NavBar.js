import React, { useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import { NavLink } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

function NavBar(props) {
  let history = useHistory();
  const { logout, isAuthicated } = useContext(UserContext);
  return (
    <nav className="navbar navbar-expand-lg bg-secondary ">
      <div className="container">
        <a className="navbar-brand color-white link" href="/">
          Todos
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <NavLink
                activeClassName="active"
                exact
                className="nav-link color-white link mr-2"
                to="/"
              >
                Home
              </NavLink>
            </li>
            {!isAuthicated ? (
              <>
                <li className="nav-item">
                  <NavLink
                    activeClassName="active"
                    exact={true}
                    className="nav-link color-white link mr-2"
                    to="/user/login"
                  >
                    Login
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    activeClassName="active"
                    exact={true}
                    className="nav-link color-white link"
                    to="/user/register"
                  >
                    Register
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <NavLink
                    activeClassName="active"
                    exact={true}
                    className="nav-link color-white link mr-2"
                    to="/todos"
                  >
                    Todos
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    activeClassName="active"
                    exact={true}
                    className="nav-link color-white link mr-2"
                    to="/todos/create"
                  >
                    Add Todo
                  </NavLink>
                </li>
                <li className="nav-item">
                  <button
                    onClick={() => {
                      logout();
                      history.push('/user/login');
                    }}
                    exact={true}
                    className="nav-link btn btn-danger color-white link"
                    to="/profile/dashboard"
                  >
                    logout
                  </button>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
