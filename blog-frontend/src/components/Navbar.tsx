import React from 'react';
import { Link } from 'react-router-dom'; // tkae out withRouter
import { useAuth0 } from '../contexts/auth0-context';

function Navbar() {
  const { isLoading, user, loginWithRedirect, logout, isAuthenticated } = useAuth0();
  return (
    <header>
      <div className="container-fluid position-relative no-side-padding">
        <span className="logo">
          {user && user.picture && <img src={user.picture} alt="My Avatar" />}
          {!user && <img src={'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/325/smiling-face-with-smiling-eyes_1f60a.png'} alt="My Avatar" />}
        </span>
        <div className="menu-nav-icon" data-nav-menu="#main-menu">
          <i className="ion-navicon" />
        </div>
        <ul className="main-menu visible-on-click" id="main-menu">
          <li><Link className={"nav-link"} to={"/"}> Blog Home </Link></li>
          <li>
            <Link className={"nav-link"} to={"/"}>
              {!isLoading && !user && (
                <>
                  <button className="btn btn-dark" onClick={loginWithRedirect}>
                    Sign In
                  </button>
                </>
              )}
              {!isLoading && user && (
                <>
                  <div>
                    <label className="mr-2">{user.name}</label>
                    <button className="btn btn-dark" onClick={() => logout({ returnTo: window.location.origin })}>
                      Sign Out
                    </button>
                  </div>
                </>
              )}
            </Link>
          </li>
          {isAuthenticated && (
          <li><Link className={"nav-link"} to={"/create"}> Create </Link></li>
          )}
        </ul>
      </div>
    </header>
  );
}
export default Navbar; // take out withRouter(Navbar)