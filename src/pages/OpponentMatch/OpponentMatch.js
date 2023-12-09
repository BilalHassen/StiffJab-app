import "./OpponentMatch.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import Header from "../../components/Header/Header";

const initialValues = {
  name: "",
  email: "",
  location: "",
  weightClass: "",
  experience: "",
};

function OpponentMatch() {
  const [weightClassData, setWeightClassData] = useState([]);
  const [experienceData, setExperienceData] = useState([]);
  const [opponent, setOpponent] = useState([]);
  const [values, setValues] = useState(initialValues);

  useEffect(() => {
    axios
      .get("http://localhost:8080/userdata")
      .then((res) => {
        // console.log(res.data[1][0].weightClasses);
        let weightClasses = res.data[1][0].weightClasses;
        setWeightClassData(weightClasses);
      })
      .catch((err) => {
        alert(`${err}`);
      });
    axios
      .get("http://localhost:8080/userdata")
      .then((res) => {
        let experienceData = res.data[1][1].experience;
        // console.log(experienceData);
        setExperienceData(experienceData);
      })
      .catch((err) => {
        alert(`${err}`);
      });
  }, []);

  useEffect(() => {
    console.log(opponent);
  }, [opponent]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };
  // console.log(values);

  const findOpponent = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:8080/userdata", values)
      .then((res) => {
        console.log(res.data.id);
        let newUserId = res.data.id;
        return axios
          .get(`http://localhost:8080/userdata/${newUserId}`)
          .then((res) => {
            console.log(res.data);
            let opponentsData = res.data;
            console.log("from line 61", newUserId);
            let filterOpponents = opponentsData.filter(
              (opponent) => opponent.id !== newUserId
            );
            console.log({ filterOpponents });
            setOpponent(filterOpponents);
          });
      })
      .catch(() => {
        alert("couldnt add user");
      });
  };

  return (
    <>
      <div className="opponent-wrapper">
        <Header />
        <section className="opponent">
          <form className="opponent__form">
            <h3 className="opponent__form-title">Boxer Name</h3>
            <input
              className="opponent__form-name"
              type="text"
              name="name"
              onChange={handleInputChange}
              value={values.name}
              placeholder="name..."
            />
            <h3 className="opponent__form-title">Boxer Email</h3>
            <input
              className="opponent__form-email"
              type="text"
              name="email"
              value={values.email}
              onChange={handleInputChange}
              placeholder="email..."
            />
            <h3 className="opponent__form-title">Boxer Weight Class</h3>
            <select
              className="opponent__form-weightClass"
              type="text"
              name="weightClass"
              value={values.weightClass}
              onChange={handleInputChange}
              placeholder="email..."
            >
              <option value="" disabled selected>
                choose weight class
              </option>
              {weightClassData.map((data, index) => (
                <option key={index} value={data}>
                  {data}
                </option>
              ))}
            </select>

            <h3 className="opponent__form-title">boxer location</h3>
            <select
              className="opponent__form-province"
              type="text"
              name="location"
              values={values.location}
              onChange={handleInputChange}
              placeholder="province"
            >
              <option value="" disabled selected>
                choose province
              </option>
              <option>Ontario</option>
            </select>

            <h3 className="opponent__form-title">boxer experience level</h3>
            <select
              className="opponent__form-experience"
              type="text"
              name="experience"
              value={values.experience}
              onChange={handleInputChange}
              placeholder="province"
            >
              <option value="" disabled selected>
                experience level
              </option>
              {experienceData.map((data, index) => (
                <option key={index} value={data}>
                  {data}
                </option>
              ))}
            </select>
            <br></br>
            <button className="opponent__form-button" onClick={findOpponent}>
              find opponent
            </button>
          </form>
          <section className="opponent__found-container"></section>
        </section>
      </div>
    </>
  );
}

export default OpponentMatch;
