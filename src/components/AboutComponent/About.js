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
              Over the past decade of training boxing, I've encountered a
              growing challenge in securing formidable sparring partners who
              offer both a robust challenge and an effective workout. Whether In
              my local gym or others across Ontario, the sparring partners
              consist of individuals who are merely training at the facility.
              When seeking to improve my skills or prepare for an upcoming
              fight, the necessity for a sparring partner capable of pushing me
              beyond my physical limits becomes crucial. In the relentless pace
              of a boxing match there are no breaks. This is precisely why I
              developed the StiffJab app - a tool to effortlessly connect you
              with skilled sparring partners.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
