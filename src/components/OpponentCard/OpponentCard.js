import "./OpponentCard.scss";

function OpponentCard({ id, name, email, location, weight, experience }) {
  return (
    <>
      <section className="opponent__found">
        <div className="opponent__found-card">
          <h4 className="opponent__name">name: {name}</h4>
          <p className="opponent__email">email: {email}</p>
          <p className="opponent__email">location: {location}</p>
          <p className="opponent__email">weight class: {weight}</p>
          <p className="opponent__email">experience: {experience}</p>
        </div>
      </section>
    </>
  );
}

export default OpponentCard;
