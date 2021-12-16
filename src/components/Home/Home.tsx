import { RefObject, useLayoutEffect, useRef } from "react";
import profile from "../../assets/jojos.png";
import { gsap } from "gsap";
import CV from "../../assets/ReynaldoVega.pdf";

interface IHome {
  reference: RefObject<HTMLElement>;
}

function Home(props: IHome) {
  const homeRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const q = gsap.utils.selector(homeRef);

    gsap.from(q(".home__img"), { opacity: 0, duration: 2, delay: 0.5, x: 60 });
    gsap.from(q(".home__data"), { opacity: 0, duration: 2, delay: 0.8, y: 25 });
    gsap.from(
      q(".home__greeting, .home__name, .home__profession, .home__button"),
      {
        opacity: 0,
        duration: 2,
        delay: 1,
        y: 25,
        ease: "expo.out",
        stagger: 0.2,
      }
    );
    gsap.from(q(".home__social-icon"), {
      opacity: 0,
      duration: 2,
      delay: 2.3,
      y: 25,
      ease: "expo.out",
      stagger: 0.2,
    });
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
              className="home__social-icon"
            >
              <i className="bx bxl-facebook-square"></i>
            </a>
            <a href="https://github.com/ReyVega" className="home__social-icon">
              <i className="bx bxl-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/reynaldo-vega-menchaca-1343501b4/"
              className="home__social-icon"
            >
              <i className="bx bxl-linkedin-square"></i>
            </a>
          </div>

          <div className="home__img">
            <img src={profile} alt="" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
