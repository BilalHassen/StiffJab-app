import "./Hero.scss";
import { Link } from "react-router-dom";
function Hero(props) {
  return (
    <>
      <section className="hero">
        <div className="hero__text">
          <h1 className="hero__title">Elevate Your skills</h1>
          <p className="hero__para">Find you next sparring partner now!</p>

          <Link to="/opponent-match">
            <button className="hero__button">Learn More</button>
          </Link>
        </div>
      </section>
    </>
  );
}

export default Hero;
