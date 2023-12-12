import "./Main.scss";
import glovesIcon from "../../assets/images/boxing-gloves.png";
import boxingBagIcon from "../../assets/images/boxing.png";
import boxerIcon from "../../assets/images/boxer.png";
import IconContainer from "../IconContainer/IconContainer";

function Main(props) {
  return (
    <main>
      <div className="main">
        <IconContainer
          glovesIcon={glovesIcon}
          boxingBag={boxingBagIcon}
          boxerIcon={boxerIcon}
        />
        <div className="main__image-container">
          <div className="main__image-1">
            <img
              className="main__boxing-fundamentals"
              src={props.boxingFundamentals}
              alt="boxing fundamentals img"
            ></img>
            <div className="main__image-text">
              <div className="main__image-title">STEP 1:</div>
              <p className="main__fundamentals-para">
                Input your information into the website and we will match you
                with potential sparring oppoenents in the Ontario region.
                Whether you're a seasoned boxer or an itermediate fighter the
                platform will connect you with like minded individuals to
                sharpen your skills.
              </p>
            </div>
          </div>
          <div className="main__image-1">
            <img
              className="main__boxing-fundamentals"
              src={props.boxingBag}
              alt="boxing bag img"
            ></img>
            <div className="main__image-text">
              <div className="main__image-title">STEP 2:</div>
              <p className="main__heavy-bag-para">
                Our platforms advanced algorithms will match you with potential
                opponents based on the following accolades weight class,
                location, and experience. Sit back and we will expedite the
                process of finding the perfect sparring partner so you can
                improve or prepare for an upcoming fight.
              </p>
            </div>
          </div>
          <div className="main__image-1">
            <img
              className="main__boxing-fundamentals"
              src={props.boxingSparring}
              alt="boxing sparring img"
            ></img>
            <div className="main__image-text">
              <div className="main__image-title">STEP 3:</div>
              <p className="main__sparring-para">
                Discover your perfect sparring match effortlessly all the heavy
                lifting is done, we provide you with tailored results. All
                that's left to do is schedule a training session that works for
                you. Take the next step and elevate your training and experience
                the thrill of competition.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;
