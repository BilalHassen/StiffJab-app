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
              <div className="main__image-title">STEP: 1</div>
              <p className="main__fundamentals-para">
                We begin with the basics and drill the fundamentals as this is
                paramount to any boxers success. The fundamentals encompass all
                essential techniques including stance, throwing basic punches,
                and defensive maneuvers. Drilling these fundamentals allow
                students to develop good boxing habbits and ensures a solid
                understanding of the of the sports core principles. In addition,
                mastering these fundamentals also helps to minimize the risk of
                injury.
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
              <div className="main__image-title">STEP: 2</div>
              <p className="main__heavy-bag-para">
                We introduce punching bag training to the students, I will offer
                a myriad of different bags to work different skills. Among
                these, the heavy bag will be the focus of our training as it
                stands out as an important tool for developing striking power
                and teachnique. The heavy bag engages the entire body, demanding
                correct technique, endurance, and power. The heavy bag is also
                the key to developing the knockout! power that many students
                desire.
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
              <div className="main__image-title">STEP: 3</div>
              <p className="main__sparring-para">
                We introduce the art of sparring one of the most important tools
                in any combat training routine. It important to have developed
                your skills and have adequate levels of fitness to engage in
                sparring. Sparring is where all of the students boxing skills
                will be tested as this is the stage closest to a real fight.
                Sparring will serve as the litmus test for one's conditioning,
                cardio, and endurance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;
