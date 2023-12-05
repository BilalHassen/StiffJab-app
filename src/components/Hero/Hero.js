import "./Hero.scss";

function Hero(props) {
  return (
    <>
      <section className="hero">
        <div className="hero__text">
          <h1 className="hero__title">Elevate Your skills</h1>
          <p className="hero__para">
            Ignite Your Passion and Embrace The Journey to Peak Performance
          </p>

          <button className="hero__button">Learn More</button>
        </div>
      </section>
    </>
  );
}

export default Hero;
