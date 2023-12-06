import "./OpponentMatch.scss";
import axios from "axios";
import { useEffect, useState } from "react";

function OpponentMatch() {
  const [weightClassData, setWeightClassData] = useState([]);
  const [experienceData, setExperienceData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/userdata").then((res) => {
      console.log(res.data[1][0].weightClasses);
      let weightClasses = res.data[1][0].weightClasses;
      setWeightClassData(weightClasses);
    });
    axios.get("http://localhost:8080/userdata").then((res) => {
      let experienceData = res.data[1][1].experience;
      console.log(experienceData);
      setExperienceData(experienceData);
    });
  }, []);

  const findOpponent = (e) => {
    e.preventDefault();
  };

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
            {weightClassData.map((data) => (
              <option>{data}</option>
            ))}
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
            {experienceData.map((data) => (
              <option>{data}</option>
            ))}
          </select>
          <button className="opponent__form-button">find opponent</button>
        </form>
      </section>
    </>
  );
}

export default OpponentMatch;
