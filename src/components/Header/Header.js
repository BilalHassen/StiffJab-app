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
    const burgerButton = document
      .querySelector(".nav__menu-button")
      .classList.toggle("nav__button-active");
  };

  return (
    <>
      <header>
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
      </header>
    </>
  );
}

export default Header;
