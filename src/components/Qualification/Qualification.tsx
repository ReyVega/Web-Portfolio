import { RefObject } from "react";
import QualificationItem from "./components/QualificationItem";

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
              <QualificationItem
                title="ITESM - Software Engineer"
                subtitle="ITESM - Jalisco"
                iconSubtitle="bx bx-briefcase-alt"
                iconDate="bx bx-calendar-alt"
                date="Aug 2021 - Dec 2021"
              />
              <QualificationItem
                title="Toshiba Intern - Software Test Engineer"
                subtitle="Toshiba GCS - Jalisco"
                iconSubtitle="bx bx-briefcase-alt"
                iconDate="bx bx-calendar-alt"
                date="Aug 2022 - Dec 2022"
              />
            </div>
          </div>

          <div className="qualification__content">
            <h2 className="qualification__title">
              <i className="bx bx-book-bookmark qualification__title-icon" />
              Education
            </h2>

            <div className="bd-grid">
              <QualificationItem
                title="Software Engineering - BSE"
                subtitle="ITESM - Jalisco"
                iconSubtitle="bx bx-book-alt"
                iconDate="bx bx-calendar-alt"
                date="Aug 2018 - Aug 2022"
              />

              <QualificationItem
                title="High School - HSD"
                subtitle="ITESM - Sinaloa"
                iconSubtitle="bx bx-book-alt"
                iconDate="bx bx-calendar-alt"
                date="Aug 2015 - June 2018"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Qualification;
