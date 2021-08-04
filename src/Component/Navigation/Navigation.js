import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../routes';
import { useSelector } from 'react-redux';
import { authSelectors } from '../../redux/auth';
import './Navigation.css';

export default function Navigation() {
  const isLoggedIn = useSelector(authSelectors.getIsAuthenticated);

  return (
    <nav>
      <ul className="Navbar">
        <li>
          <NavLink
            exact
            to={routes.home}
            className="NavLink"
            activeClassName="NavLink--active"
          >
            Home
          </NavLink>
        </li>
        {isLoggedIn && (
          <li>
            <NavLink
              to={routes.contacts}
              className="NavLink"
              activeClassName="NavLink--active"
            >
              Contacts
            </NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
}

// const Navigation = ({ isLoggedIn }) => {
//   return (
//     <nav>
//       <ul className="Navbar">
//         <li>
//           <NavLink
//             exact
//             to={routes.home}
//             className="NavLink"
//             activeClassName="NavLink--active"
//           >
//             Home
//           </NavLink>
//         </li>
//         {isLoggedIn && (
//           <li>
//             <NavLink
//               to={routes.contacts}
//               className="NavLink"
//               activeClassName="NavLink--active"
//             >
//               Contacts
//             </NavLink>
//           </li>
//         )}
//       </ul>
//     </nav>
//   );
// };

// const mapStateToProps = state => ({
//   isLoggedIn: authSelectors.getIsAuthenticated(state),
// });

// export default connect(mapStateToProps)(Navigation);
