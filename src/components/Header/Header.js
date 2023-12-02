import "./Header.scss";
import { NavLink, Link } from "react-router-dom";
function Header() {
  return (
    <>
      <div className="header">
        <h1 className="header__title">
          <span>STIFF</span>JAB
        </h1>
        <nav className="header__nav">
          <ul className="header__nav-list">
            <NavLink>
              <li className="header__nav-list-item">About</li>
            </NavLink>
            <NavLink>
              <li className="header__nav-list-item">Contact</li>
            </NavLink>
            <NavLink>
              <li className="header__nav-list-item">Booking</li>
            </NavLink>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Header;
