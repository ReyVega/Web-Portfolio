function ContactForm() {
  return (
    <form
      action="https://formsubmit.co/c7a6fbfd2ea331ba1db9e7a08d9b257b"
      method="POST"
      className="contact__form"
    >
      <div className="contact__inputs">
        <input
          type="text"
          name="Name"
          placeholder="Name"
          className="contact__input"
          required
        />
        <input
          type="email"
          name="Email"
          placeholder="Email"
          className="contact__input"
          required
        />
      </div>
      <div className="contact__inputs">
        <input
          type="text"
          name="_subject"
          placeholder="Subject"
          className="contact__input"
          required
        />
        <input
          type="tel"
          name="Phone"
          placeholder="Phone"
          className="contact__input"
          required
        />
      </div>

      <textarea
        name="Message"
        id=""
        cols={0}
        rows={7}
        placeholder="Message"
        className="contact__input"
        required
      ></textarea>
      <input
        type="submit"
        value="Send Message"
        className="button contact__button"
      />
    </form>
  );
}

export default ContactForm;
