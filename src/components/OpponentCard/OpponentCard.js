import "./OpponentCard.scss";

function OpponentCard({ id, name, email, location, weight, experience }) {
  return (
    <>
      <div className="opponent__found-card">
        <h4 className="opponent__name">name: {name}</h4>
        <p className="opponent__email">email: {email}</p>
        <p className="opponent__email">location: {location}</p>
        <p className="opponent__email">weight class: {weight}</p>
        <p className="opponent__email">experience: {experience}</p>
      </div>
    </>
  );
}

export default OpponentCard;
