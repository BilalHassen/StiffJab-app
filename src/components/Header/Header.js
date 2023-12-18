import "./Header.scss";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useState, useRef, useEffect } from "react";
import { Link } from "react-scroll";
import { useNavigate, useLocation } from "react-router-dom";
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

  const navigate = useNavigate();
  const location = useLocation();
  const homePage = location.pathname === "/";

  const scrollToAbout = () => {
    if (homePage) {
      document.getElementById("about").scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
      //navigate back the homepage
      navigate("/");
      // then scroll to about
      // set timeout is used to ensure the page changes then scrolls
      setTimeout(() => {
        const aboutElement = document.getElementById("about");
        if (aboutElement) {
          aboutElement.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 0);
    }
  };

  return (
    <>
      <header>
        <nav className="nav">
          <div className="nav__title-box">
            <NavLink to="/">
              <h3 className="nav__title">
                <span className="nav__span">STIFF</span>JAB
              </h3>
            </NavLink>
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
              {homePage ? (
                <Link to="about" smooth={true} duration={1500}>
                  <li className="nav__list-item" onClick={scrollToAbout}>
                    ABOUT
                  </li>
                </Link>
              ) : (
                <NavLink to="/" smooth={true} duration={1500}>
                  <li className="nav__list-item" onClick={scrollToAbout}>
                    ABOUT
                  </li>
                </NavLink>
              )}
              <NavLink to={"/contact-page"}>
                <li className="nav__list-item">CONTACT</li>
              </NavLink>
              <NavLink to={"/opponent-match"}>
                <li className="nav__list-item">FIND</li>
              </NavLink>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
