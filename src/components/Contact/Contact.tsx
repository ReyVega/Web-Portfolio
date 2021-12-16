import { RefObject } from "react";
import ContactForm from "./components/ContactForm";

interface IContact {
  reference: RefObject<HTMLElement>;
}

function Contact(props: IContact) {
  return (
    <div>
      <section
        ref={props.reference}
        className="contact section bd-container"
        id="contact"
      >
        <span className="section-subtitle">For projects</span>
        <h2 className="section-title">Contact Me</h2>

        <div className="contact__container bd-grid">
          <div className="contact__content bd-grid">
            <div className="contact__box">
              <i className="bx bx-home contact__icon"></i>
              <h3 className="contact__title">Location</h3>
              <span className="contact__description">Zapopan - Jalisco</span>
            </div>

            <div className="contact__box">
              <i className="bx bx-phone contact__icon"></i>
              <h3 className="contact__title">Phone</h3>
              <span className="contact__description">667-151-5706</span>
            </div>

            <div className="contact__box">
              <i className="bx bx-envelope contact__icon"></i>
              <h3 className="contact__title">Gmail</h3>
              <span className="contact__description contact__gmail">
                reynaldovega2010@gmail.com
              </span>
            </div>

            <div className="contact__box">
              <i className="bx bx-chat contact__icon"></i>
              <h3 className="contact__title">Chat</h3>
              <div>
                <a
                  href="https://wa.me/526671515706"
                  className="contact__social"
                >
                  <i className="bx bxl-whatsapp-square"></i>
                </a>
                <a href="https://t.me/ReyV10" className="contact__social">
                  <i className="bx bxl-telegram"></i>
                </a>
                <a
                  href="http://m.me/reynaldo.vegamenchaca/"
                  className="contact__social"
                >
                  <i className="bx bxl-messenger"></i>
                </a>
              </div>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </div>
  );
}

export default Contact;
