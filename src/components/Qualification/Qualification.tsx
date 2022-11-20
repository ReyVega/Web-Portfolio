import { RefObject } from "react";
import { experienceItems, educationItems } from "./data/data";
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
              {experienceItems &&
                experienceItems.map((item, index) => {
                  return (
                    <QualificationItem
                      key={index}
                      title={item.title}
                      subtitle={item.subtitle}
                      iconSubtitle={item.iconSubtitle}
                      iconDate={item.iconDate}
                      date={item.date}
                    />
                  );
                })}
            </div>
          </div>

          <div className="qualification__content">
            <h2 className="qualification__title">
              <i className="bx bx-book-bookmark qualification__title-icon" />
              Education
            </h2>

            <div className="bd-grid">
              {educationItems &&
                educationItems.map((item, index) => {
                  return (
                    <QualificationItem
                      key={index}
                      title={item.title}
                      subtitle={item.subtitle}
                      iconSubtitle={item.iconSubtitle}
                      iconDate={item.iconDate}
                      date={item.date}
                    />
                  );
                })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Qualification;
