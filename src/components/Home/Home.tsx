import { RefObject, useLayoutEffect, useRef } from "react";
import Profile from "../../assets/profile.jpg";
import { gsap } from "gsap";
import CV from "../../assets/Reynaldo_Vega.pdf";

interface IHome {
  reference: RefObject<HTMLElement>;
}

function Home(props: IHome) {
  const homeRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from([".home__img"], { opacity: 0, duration: 2, delay: 0.5, x: 60 });
      gsap.from([".home__data"], {
        opacity: 0,
        duration: 2,
        delay: 0.8,
        y: 25,
      });
      gsap.from(
        [
          ".home__greeting",
          ".home__name",
          ".home__profession",
          ".home__button",
        ],
        {
          opacity: 0,
          duration: 2,
          delay: 1,
          y: 25,
          ease: "expo.out",
          stagger: 0.2,
        }
      );
      gsap.from([".animated__icon"], {
        opacity: 0,
        duration: 2,
        delay: 2.3,
        y: 25,
        ease: "expo.out",
        stagger: 0.2,
      });
    }, homeRef);

    return () => ctx.revert();
  }, []);

  return (
    <div>
      <section ref={props.reference} className="home" id="home">
        <div ref={homeRef} className="home__container bd-container bd-grid">
          <div className="home__data">
            <span className="home__greeting">Hello, my name is</span>
            <h1 className="home__name">Rey Vega</h1>
            <span className="home__profession">Software Engineer</span>
            <a
              download="Reynaldo Vega"
              href={CV}
              className="button button-light"
            >
              Download CV
            </a>
          </div>

          <div className="home__social">
            <a
              href="https://www.facebook.com/reynaldo.vegamenchaca/"
              className="home__social__icon"
            >
              <i className="bx bxl-facebook-square animated__icon"></i>
            </a>
            <a href="https://github.com/ReyVega" className="home__social__icon">
              <i className="bx bxl-github animated__icon"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/rey-vega-1343501b4/"
              className="home__social__icon"
            >
              <i className="bx bxl-linkedin-square animated__icon"></i>
            </a>
          </div>

          <div className="home__img">
            <img src={Profile} alt="" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
