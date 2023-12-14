import "./ContactPage.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import ContactForm from "../../components/ContactForm/ContactForm";
function ContactPage() {
  return (
    <>
      <div className="contact-header">
        <Header />
      </div>
      <section className="contact">
        <div className="contact__form-container">
          <h1>this is the contact page</h1>
          <ContactForm />
        </div>
      </section>
    </>
  );
}

export default ContactPage;
