import React from 'react';
import { NavLink } from 'react-router-dom';

// import s from './AuthNav.module.css';

const AuthNav = () => (
  <div>
    <ul className="Navbar">
      <li
      // className={s.ItemAuth}
      >
        <NavLink
          to="/register"
          exact
          className="NavLink"
          activeClassName="NavLink--active"
        >
          Сheck in
        </NavLink>
      </li>
      <li
      // className={s.ItemNav}
      >
        <NavLink
          to="/login"
          exact
          className="NavLink"
          activeClassName="NavLink--active"
        >
          Login
        </NavLink>
      </li>
    </ul>
  </div>
);

export default AuthNav;
