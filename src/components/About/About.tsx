import { RefObject } from "react";
import Profile from "../../assets/profile_2.jpeg";

interface IAbout {
  reference: RefObject<HTMLElement>;
}

function About(props: IAbout) {
  return (
    <div>
      <section
        ref={props.reference}
        className="about section bd-container"
        id="about"
      >
        <span className="section-subtitle">My history</span>
        <h2 className="section-title">About me</h2>

        <div className="about__container bd-grid">
          <div className="about__data bd-grid">
            <p className="about__description">
              <span>
                Hello, I am a . . . <br />
              </span>
              Software engineer, I am passionate about creating and solving
              complex computer systems and software issues. Looking to use my
              programming skills to elevate the user experience through
              thoughtful and innovative work processes.
            </p>

            <div>
              <span className="about__number">04</span>
              <span className="about__achievement">Years of experience</span>
            </div>

            <div>
              <span className="about__number">14+</span>
              <span className="about__achievement">Projects completed</span>
            </div>

            <div>
              <span className="about__number">02</span>
              <span className="about__achievement">Best work awards</span>
            </div>
          </div>

          <img src={Profile} alt="" className="about__img" />
        </div>
      </section>
    </div>
  );
}

export default About;
