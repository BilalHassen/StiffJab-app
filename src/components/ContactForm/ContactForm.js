import "./ContactForm.scss";
import axios from "axios";
import { useEffect, useState } from "react";

//initial values of form
const initialValues = {
  name: "",
  email: "",
  message: "",
};

function ContactForm() {
  // to track the input values
  const [values, setValues] = useState(initialValues);
  // state to track errors
  const [formErrors, setFormErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formErrorsObject = validateForm(values);
    // update the state of the formErrors
    setFormErrors(formErrorsObject);

    /*condition to make the axios post request
    check if the keys length of the formErrorsObject is 0 
    meaning no errors
    */
    if (Object.keys(formErrorsObject).length === 0) {
      axios
        .post("http://localhost:8080/send-email/", values)
        .then((res) => {
          // alert the user of successful email sending
          alert("email sent!");
          // clear the form by updating the initial values state
          setValues({
            name: "",
            email: "",
            message: "",
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const validateForm = (formValues) => {
    // empty errors object to return
    const errors = {};
    // check if the input of the forms are empty
    if (!formValues.name) {
      // add a key and value to the error object
      errors.name = "Name is required";
    }
    if (!formValues.email) {
      // add a key and value to the error object
      errors.email = "Email is required";
    }
    if (!formValues.message) {
      // add a key and value to the error object
      errors.message = "Message is required";
    }
    // return the updated errors object
    return errors;
  };

  return (
    <>
      <h1 className="contact__form-header">Contact Us</h1>
      <form className="contact__form" onSubmit={handleSubmit}>
        <div className="contact__form-box">
          <h3 className="contact__form-title">Name</h3>
          <input
            className="contact__form-name"
            type="text"
            name="name"
            value={values.name}
            onChange={handleInputChange}
            placeholder="name..."
          />
          {/* add in error paragraphs */}
          <p className="contact__form-error">{formErrors.name}</p>
          <h3 className="contact__form-title">Email</h3>
          <input
            className="contact__form-email"
            type="text"
            name="email"
            value={values.email}
            onChange={handleInputChange}
            placeholder="email..."
          />
          <p className="contact__form-error">{formErrors.email}</p>
        </div>

        <div className="contact__form-box1">
          <h3 className="contact__form-title">Message</h3>
          <textarea
            className="contact__form-message"
            type="text"
            name="message"
            value={values.message}
            onChange={handleInputChange}
            placeholder="message..."
          />
          <p className="contact__form-error">{formErrors.message}</p>
          <br></br>
          <div className="contact__form-button-container">
            <button className="contact__form-button">submit</button>
          </div>
        </div>
      </form>
    </>
  );
}

export default ContactForm;
