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
        <div className="hero__icon-container">
          <div className="hero__icon-1">
            <img
              className="hero__icon-gloves"
              src={props.glovesIcon}
              alt="boxing gloves icon"
            ></img>
            <p className="hero__icon-p">sparring</p>
          </div>
          <div className="hero__icon-2">
            <img
              className="hero__icon-bag"
              src={props.boxingBag}
              alt="boxing bag icon"
            ></img>
            <p className="hero__icon-p">heavy-bag</p>
          </div>
          <div className="hero__icon-3">
            <img
              className="hero__icon-dumbell"
              src={props.dumbellIcon}
              alt="dumbell icon"
            ></img>
            <p className="hero__icon-p">strength</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
