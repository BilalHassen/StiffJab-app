import "./OpponentMatch.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import OpponentCard from "../../components/OpponentCard/OpponentCard";
import Footer from "../../components/Footer/Footer";
// initial values of the form inputs
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
  const [flexClass, setFlexClass] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  // get initial data from the server
  useEffect(() => {
    axios
      .get("http://localhost:8080/userdata")
      .then((res) => {
        let weightClasses = res.data[1][0].weightClasses;
        // update the data with data for weight classes dropdown
        setWeightClassData(weightClasses);
      })
      .catch((err) => {
        alert(`${err}`);
      });
    axios
      .get("http://localhost:8080/userdata")
      .then((res) => {
        let experienceData = res.data[1][1].experience;
        // update the data with data for experience levels dropdown
        setExperienceData(experienceData);
      })
      .catch((err) => {
        alert(`${err}`);
      });
  }, []);

  // tracks the changes in the input fields of the forms
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const findOpponent = (e) => {
    e.preventDefault();
    // validate the form inputs using the validate form function assign it to a variable
    const formErrorsObject = validateForm(values);
    // up date with the validation results
    setFormErrors(formErrorsObject);

    // check if there are any errors by checking the
    // the length of the formErrorsObject keys
    if (Object.keys(formErrorsObject).length === 0) {
      // make the post request with the values from the form given there are no errors
      axios
        .post("http://localhost:8080/userdata", values)
        .then((res) => {
          console.log(res.data.id);
          // get the newely created id from the new user and assing it
          let newUserId = res.data.id;
          // make a axios get call with the new user id
          return axios
            .get(`http://localhost:8080/userdata/${newUserId}`)
            .then((res) => {
              let opponentsData = res.data;
              // remove the new user from a potential list of opponents
              let filterOpponents = opponentsData.filter(
                (opponent) => opponent.id !== newUserId
              );
              setOpponent(filterOpponents);
              setFlexClass(true);
            });
        })
        .catch(() => {
          alert("couldn't add user");
        });
    }
  };

  const validateForm = (formValues) => {
    // empty errors object to return
    const errors = {};
    // check if the input of the forms are empty
    if (!formValues.name) {
      errors.name = "Name is required";
    }
    if (!formValues.email) {
      errors.email = "Email is required";
    }
    if (!formValues.location) {
      errors.location = "Location is required";
    }
    if (!formValues.weightClass) {
      errors.weightClass = "Weightclass is required";
    }
    if (!formValues.experience) {
      errors.experience = "Experience is required";
    }
    // return the updated errors object
    return errors;
  };

  return (
    <>
      <div className={flexClass ? "dynamic-wrapper" : "opponent-wrapper"}>
        <Header />

        <section className={flexClass ? "opponent-dynamic" : "opponent"}>
          <form className="opponent__form">
            <div className="opponent__form-1">
              <h1 className="opponent__title">Find Opponent</h1>
              <h3 className="opponent__form-title">Boxer Name</h3>
              <input
                className="opponent__form-name"
                type="text"
                name="name"
                onChange={handleInputChange}
                value={values.name}
                placeholder="name..."
              />
              <p className="opponent__form-error">{formErrors.name}</p>
              <h3 className="opponent__form-title">Boxer Email</h3>
              <input
                className="opponent__form-email"
                type="text"
                name="email"
                value={values.email}
                onChange={handleInputChange}
                placeholder="email..."
              />
              <p className="opponent__form-error">{formErrors.email}</p>
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
              <p className="opponent__form-error">{formErrors.weightClass}</p>
            </div>
            <div className="opponent__form-2">
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
              <p className="opponent__form-error">{formErrors.location}</p>
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
              <p className="opponent__form-error">{formErrors.experience}</p>
              <br></br>
              <div className="opponent__button-container">
                <button
                  className="opponent__form-button"
                  onClick={findOpponent}
                >
                  find opponent
                </button>
              </div>
            </div>
          </form>
          <section className="opponent__found">
            {opponent.map((opponent) => (
              <OpponentCard
                id={opponent.id}
                name={opponent.name}
                email={opponent.email}
                weight={opponent.weight}
                location={opponent.location}
                experience={opponent.experience}
              />
            ))}
          </section>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default OpponentMatch;
