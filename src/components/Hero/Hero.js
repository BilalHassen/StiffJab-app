import "./Hero.scss";

function Hero(props) {
  return (
    <>
      <section className="hero">
        <div className="hero__text">
          <h1 className="hero__title">O.T.S.S</h1>
          <p className="hero__para">Only The Strong Survive,</p>
          <p className="hero__para-2">
            Join <span className="hero__span">STIFF</span>
            <span className="hero__span-2">JAB</span> training
          </p>
          <p className="hero__para-2">and join the strong side!</p>
          <button className="hero__button">Learn More</button>
        </div>
      </section>
    </>
  );
}

export default Hero;
