import "./Footer.scss";

function Footer() {
  return (
    <>
      <footer className="footer">
        <h1 className="footer__title">
          <span className="footer__span">STIFF</span>JAB
        </h1>
        <p className="footer__para">
          Join us today and become the best version of yourself.
        </p>
        <div className="footer__socials-container">
          <div className="footer__icon-container">
            <img
              className="footer__instagram"
              //   src={instaIcon}
              alt="instagram icon"
            ></img>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
