import { useRef, RefObject } from "react";

interface IHeader {
  reference: RefObject<HTMLAnchorElement>[];
}

function Header(props: IHeader) {
  const nav = useRef<HTMLDivElement>(null);
  const header = useRef<HTMLHeadingElement>(null);
  const scrollTop = useRef<HTMLAnchorElement>(null);

  const showMenu = () => {
    nav.current?.classList.toggle("show-menu");
  };

  const hideMenu = () => {
    nav.current?.classList.remove("show-menu");
  };

  const scrollHeaderHandler = () => {
    const scrollY = window.pageYOffset;

    if (scrollY >= 200) {
      header.current?.classList.add("scroll-header");
    } else {
      header.current?.classList.remove("scroll-header");
    }

    if (scrollY >= 560) {
      scrollTop.current?.classList.add("show-scroll");
    } else {
      scrollTop.current?.classList.remove("show-scroll");
    }
  };
  window.addEventListener("scroll", scrollHeaderHandler);

  return (
    <div>
      <a ref={scrollTop} href="/#" className="scrolltop">
        <i className="bx bxs-chevron-up scrolltop__icon" />
      </a>
      <header ref={header} className="l-header">
        <nav className="nav bd-container">
          <a href="/#" className="nav__logo">
            Rey Vega
          </a>

          <div ref={nav} className="nav__menu">
            <ul className="nav__list">
              <li className="nav__item">
                <a
                  ref={props.reference[0]}
                  href="/#"
                  className="nav__link"
                  onClick={hideMenu}
                >
                  Home
                </a>
              </li>

              <li className="nav__item">
                <a
                  ref={props.reference[1]}
                  href="#about"
                  className="nav__link"
                  onClick={hideMenu}
                >
                  About
                </a>
              </li>

              <li className="nav__item">
                <a
                  ref={props.reference[2]}
                  href="#qualification"
                  className="nav__link"
                  onClick={hideMenu}
                >
                  Qualification
                </a>
              </li>

              <li className="nav__item">
                <a
                  ref={props.reference[3]}
                  href="#portfolio"
                  className="nav__link"
                  onClick={hideMenu}
                >
                  Portfolio
                </a>
              </li>

              <li className="nav__item">
                <a
                  ref={props.reference[4]}
                  href="#contact"
                  className="nav__link"
                  onClick={hideMenu}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="nav__toggle" onClick={showMenu}>
            <i className="bx bx-menu" />
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Header;
