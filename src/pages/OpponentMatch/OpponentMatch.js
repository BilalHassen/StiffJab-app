import "./OpponentMatch.scss";

function OpponentMatch() {
  return (
    <>
      <section className="opponent">
        <form className="opponent__form">
          <h3>Boxer Name</h3>
          <input
            className="opponent__form-name"
            type="text"
            name="name"
            placeholder="name..."
          />
          <h3>Boxer Email</h3>
          <input
            className="opponent__form-email"
            type="text"
            name="email"
            placeholder="email..."
          />
          <h3>Boxer Weight Class</h3>
          <select
            className="opponent__form-email"
            type="text"
            name="email"
            placeholder="email..."
          >
            <option value="" disabled selected>
              choose weight class
            </option>
            <option>super featherweight, 130-134 pounds</option>
            <option>lightweight, 135-139 pounds</option>
            <option>super lightweight, 140-146 pounds</option>
            <option>welterweight, 147-153 pounds</option>
            <option>super welterweight, 154-159 pounds</option>
            <option>middleweight, 160-167pounds</option>
            <option>super middleweight, 168-174 pounds</option>
            <option>light heavyweight, 175-200 pounds</option>
            <option>heavyweight, 200+ pounds</option>
          </select>

          <h3>boxer location</h3>
          <select
            className="opponent__form-province"
            type="text"
            name="email"
            placeholder="province"
          >
            <option value="" disabled selected>
              choose province
            </option>
            <option>Ontario</option>
          </select>

          <h3>boxer experience level</h3>
          <select
            className="opponent__form-province"
            type="text"
            name="email"
            placeholder="province"
          >
            <option value="" disabled selected>
              experience level
            </option>
            <option>intermiediate</option>
            <option>advanced</option>
            <option>pro</option>
          </select>
        </form>
      </section>
    </>
  );
}

export default OpponentMatch;
