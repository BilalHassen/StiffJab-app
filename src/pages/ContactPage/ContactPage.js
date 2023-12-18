import "./ContactPage.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import ContactForm from "../../components/ContactForm/ContactForm";
function ContactPage() {
  return (
    <>
      {/* container for header of the contact page */}
      <div className="contact-header">
        <Header />
      </div>
      {/* container for contact section and the form */}
      <section className="contact">
        <div className="contact__form-container">
          <ContactForm />
        </div>
      </section>
      <Footer />
    </>
  );
}

export default ContactPage;
