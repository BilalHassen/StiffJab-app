import "./OpponentCard.scss";
import defaultUser from "../../assets/icons/user.png";
function OpponentCard({ id, name, email, location, weight, experience }) {
  return (
    <>
      <div className="opponent-card">
        <div className="opponent-card__name-container">
          <img
            className="opponent-card__img"
            src={defaultUser}
            alt="default user image"
          ></img>
          <h4 className="opponent-card__name">{name}</h4>
        </div>
        <div className="opponent-card__information-wrapper">
          <div className="opponent-card__contact-box">
            <a href={`mailto:${email}`}>
              <p className="opponent-card__email">{email}</p>
            </a>
            <p className="opponent-card__location"> {location}</p>
          </div>
          <div className="opponent-card__accolades-box">
            <p className="opponent-card__weight">weight: {weight}</p>
            <p className="opponent-card__experience">
              experience: {experience}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default OpponentCard;
