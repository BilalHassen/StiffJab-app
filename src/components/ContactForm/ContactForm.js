import "./ContactForm.scss";
import axios from "axios";
import { useEffect, useState } from "react";

const initialValues = {
  name: "",
  email: "",
  message: "",
};

function ContactForm() {
  const [values, setValues] = useState(initialValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  console.log(values);

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:8080/send-email/", values)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
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
          <h3 className="contact__form-title">Email</h3>
          <input
            className="contact__form-email"
            type="text"
            name="email"
            value={values.email}
            onChange={handleInputChange}
            placeholder="email..."
          />
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

          <br></br>
          <div className="contact__form-button-container">
            <button className="contact__form-button" type="submit">
              submit
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default ContactForm;
