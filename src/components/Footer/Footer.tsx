function Footer() {
  return (
    <div>
      <footer className="footer">
        <div className="footer__container bd-container">
          <h1 className="footer__title">Rey Vega</h1>
          <p className="footer__description">
            Software Engineer
          </p>

          <div className="footer__social">
            <a
              href="https://www.facebook.com/reynaldo.vegamenchaca/"
              className="footer__link"
            >
              <i className="bx bxl-facebook-square" />
            </a>
            <a href="https://github.com/ReyVega" className="footer__link">
              <i className="bx bxl-github" />
            </a>
            <a
              href="https://www.linkedin.com/in/reynaldo-vega-menchaca-1343501b4/"
              className="footer__link"
            >
              <i className="bx bxl-linkedin" />
            </a>
          </div>
          <p className="footer__copy">
            &#169; 2022 Rey Vega. All rights reserved
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
