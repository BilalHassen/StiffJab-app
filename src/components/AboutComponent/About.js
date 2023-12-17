import "./About.scss";
import AboutMeImg from "../../assets/images/aboutMeImage.jpeg";

function About() {
  return (
    <>
      <section className="about" id="about">
        <div className="about__header-container">
          <h1 className="about__header">About Me</h1>
        </div>
        <div className="about__card-wrapper">
          <div className="about__image-container">
            <img
              className="about__image"
              src={AboutMeImg}
              alt="picture of Bilal"
            ></img>
          </div>

          <div className="about__text-container">
            <p className="about__paragraph">
              Over the past decade of training in boxing, I've come across a
              growing challenge in finding formidable sparring partners who
              offer both a robust challenge and an effective workout, in both my
              local gym and others within the Ontario region, the sparring
              partners consist of individuals who are merely training at the
              facility. When looking to improve my skills or prepare for an
              upcoming fight, the need for a sparring partner that pushes me
              past my physical limits is paramount. All be it, there are no
              rests in a boxing match. This is reason I created the stiffjab app
              to easily find good sparring partners and help you focus on
              training.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
