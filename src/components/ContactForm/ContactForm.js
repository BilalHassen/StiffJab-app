import "./ContactForm.scss";

function ContactForm() {
  return (
    <>
      <form className="contact__form">
        <h1 className="contact__title">Contact Us</h1>
        <h3 className="contact__form-title">Name</h3>
        <input
          className="contact__form-name"
          type="text"
          name="name"
          placeholder="name..."
        />
        <h3 className="contact__form-title">Email</h3>
        <input
          className="contact__form-email"
          type="text"
          name="email"
          placeholder="email..."
        />
        <h3 className="contact__form-title">Message</h3>
        <textarea
          className="contact__form-message"
          type="text"
          name="message"
          placeholder="message..."
        />

        <br></br>
        <div className="contact__button-container">
          <button className="contact__form-button">find opponent</button>
        </div>
      </form>
    </>
  );
}

export default ContactForm;
