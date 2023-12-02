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
    menuRef.current.classList.toggle("nav-active");
  };

  return (
    <>
      <div className="header">
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
        <nav className="header__nav">
          <ul className="header__nav-list" ref={menuRef}>
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
