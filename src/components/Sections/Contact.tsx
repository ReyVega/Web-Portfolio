import { RefObject } from "react";

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
                    <i className='bx bx-home contact__icon'></i>
                    <h3 className="contact__title">Location</h3>
                    <span className="contact__description">#123 Lima -Peru</span>
                </div>
            </div>

            <div className="contact__content bd-grid">
                <div className="contact__box">
                    <i className='bx bx-phone contact__icon'></i>
                    <h3 className="contact__title">Phone</h3>
                    <span className="contact__description">999-888-777</span>
                </div>
            </div>

            <div className="contact__content bd-grid">
                <div className="contact__box">
                    <i className='bx bx-envelope contact__icon'></i>
                    <h3 className="contact__title">Gmail</h3>
                    <span className="contact__description">reynaldovega2010@gmail.com</span>
                </div>
            </div>

            <div className="contact__content bd-grid">
                <div className="contact__box">
                    <i className='bx bx-chat contact__icon'></i>
                    <h3 className="contact__title">Chat</h3>
                    <a href="/#" className="contact__social"> <i className='bx bxl-whatsapp-square contact__icon'></i></a>
                    <a href="/#" className="contact__social"> <i className='bx bxl-telegram contact__icon'></i></a>
                    <a href="/#" className="contact__social"> <i className='bx bxl-messenger contact__icon'></i></a>

                </div>
            </div>


            <form action="" className="contact__form">
                <div className="contact__inputs">
                    <input type="text" placeholder="Name" className="contact__input"/>
                    <input type="email" placeholder="Email" className="contact__input"/>
                </div>
                <div className="contact__inputs">
                    <input type="text" placeholder="Subject" className="contact__input"/>
                    <input type="number" placeholder="Number" className="contact__input"/>
                </div>

                <textarea name="" id="" cols={0} rows={7} placeholder="Message" className="contact__input"></textarea>
                <input type="submit" value="Send Message" className="button contact__button" />
            </form>
        </div>
      </section>
    </div>
  );
}

export default Contact;
