import "./Header.scss";
import { NavLink, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useState, useRef } from "react";
function Header() {
  const menuRef = useRef();
  // state to track if the menu is open or not
  const [open, setOpen] = useState(false);

  const menuToggle = () => {
    setOpen(!open);
    menuRef.current.classList.toggle("nav__active");
  };

  return (
    <>
      <nav className="nav">
        <div className="nav__title-box">
          <h1 className="nav__title">
            <span className="nav__span">STIFF</span>JAB
          </h1>
        </div>
        <button className="nav__menu-button" onClick={menuToggle}>
          <FontAwesomeIcon
            icon={faBars}
            fade
            style={{ color: "#fa0000" }}
            size="2x"
          />
        </button>
        <div className="nav__links-container" ref={menuRef}>
          <ul className="nav__list">
            <NavLink>
              <li className="nav__list-item">About</li>
            </NavLink>
            <NavLink>
              <li className="nav__list-item">Contact</li>
            </NavLink>
            <NavLink>
              <li className="nav__list-item">Booking</li>
            </NavLink>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Header;

/* <div className="header">
        <h1 className="header__title">
          <span>STIFF</span>JAB
        </h1>
        <button className="header__nav-menu-button" onClick={menuToggle}>
          <FontAwesomeIcon
            icon={faBars}
            fade
            style={{ color: "#fa0000" }}
            size="2x"
          />
        </button>
        <nav className="header__nav" ref={menuRef}>
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
      </div>*/
