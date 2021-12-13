import { RefObject } from "react";

interface IQualification {
  reference: RefObject<HTMLElement>;
}

function Qualification(props: IQualification) {
  return (
    <div>
      <section
        ref={props.reference}
        className="qualification section bd-container"
        id="qualification"
      >
        <span className="section-subtitle">Experience and education</span>
        <h2 className="section-title">Qualification</h2>

        <div className="qualification__container bd-grid">
          <div className="qualification__content">
            <h2 className="qualification__title">
              <i className="bx bx-briefcase-alt qualification__title-icon" />
              Work Experience
            </h2>
            <div className="bd-grid">
              <div className="qualification__data">
                <h3 className="qualification__area">
                  Senior Frontend Developer
                </h3>

                <div className="qualification__box">
                  <span className="qualification__work">
                    <i className="bx bx-briefcase-alt qualification__icon" />
                    Adobe New York
                  </span>

                  <span className="qualification__work">
                    <i className="bx bx-calendar-alt qualification__icon" />
                    Jan 2019 - Aug 2019
                  </span>
                </div>
              </div>

              <div className="qualification__data">
                <h3 className="qualification__area">UI/UX Design</h3>

                <div className="qualification__box">
                  <span className="qualification__work">
                    <i className="bx bx-briefcase-alt qualification__icon" />
                    Figma Lima
                  </span>

                  <span className="qualification__work">
                    <i className="bx bx-calendar-alt qualification__icon" />
                    Oct 2019 - Dec 2019
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="qualification__content">
            <h2 className="qualification__title">
              <i className="bx bx-book-bookmark qualification__title-icon" />
              Education
            </h2>
            <div className="bd-grid">
              <div className="qualification__data">
                <h3 className="qualification__area">Software Engineering</h3>

                <div className="qualification__box">
                  <span className="qualification__work">
                    <i className="bx bx-book-alt qualification__icon" />
                    Zapopan - Tecnológico de Monterrey
                  </span>

                  <span className="qualification__work">
                    <i className="bx bx-calendar-alt qualification__icon" />
                    Aug 2018 - Dec 2022
                  </span>
                </div>
              </div>

              <div className="qualification__data">
                <h3 className="qualification__area">High School</h3>

                <div className="qualification__box">
                  <span className="qualification__work">
                    <i className="bx bx-book-alt qualification__icon" />
                    Sinaloa - Tecnológico de Monterrey
                  </span>

                  <span className="qualification__work">
                    <i className="bx bx-calendar-alt qualification__icon" />
                    Aug 2015 - June 2018
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Qualification;
