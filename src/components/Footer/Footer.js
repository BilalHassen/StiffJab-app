import "./Footer.scss";
import faceBookIcon from "../../assets/icons/facebook-96.png";
import instagramIcon from "../../assets/icons/instagram-96.png";
import twitterIcon from "../../assets/icons/twitter-96.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className="footer footer1">
        <div className="footer__text-container">
          <h1 className="footer__title">
            <span className="footer__span">STIFF</span>JAB
          </h1>
          <p className="footer__para">
            Join us today and become the best version of yourself.
          </p>
        </div>
        <div className="footer__socials-container">
          <div className="footer__icon-container">
            <a href="https://www.facebook.com">
              <img
                className="footer__facebook-icon"
                src={faceBookIcon}
                alt="facebook icon"
              ></img>
            </a>
          </div>
          <div className="footer__icon-container">
            <a href="https://www.instagram.com/">
              <img
                className="footer__instagram-icon"
                src={instagramIcon}
                alt="instagram icon"
              ></img>
            </a>
          </div>
          <div className="footer__icon-container">
            <a href="https://twitter.com/">
              <img
                className="footer__twitter-icon"
                src={twitterIcon}
                alt="twitter icon"
              ></img>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
