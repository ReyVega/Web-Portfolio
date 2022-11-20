import { useRef, RefObject, useLayoutEffect } from "react";
import { gsap } from "gsap";
import NavItem from "./components/NavItem";

interface IHeader {
  reference: RefObject<HTMLAnchorElement>[];
}

function Header(props: IHeader) {
  const nav = useRef<HTMLDivElement>(null);
  const header = useRef<HTMLHeadingElement>(null);
  const scrollTop = useRef<HTMLAnchorElement>(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from([".nav__logo", "nav__toggle"], {
        opacity: 0,
        duration: 2,
        delay: 1.5,
        y: 25,
        ease: "expo.out",
        stagger: 0.2,
      });

      gsap.from([".nav__item"], {
        opacity: 0,
        duration: 2,
        delay: 1.8,
        y: 25,
        ease: "expo.out",
        stagger: 0.2,
      });
    }, header);

    return () => ctx.revert();
  }, []);

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
              <NavItem
                reference={props.reference[0]}
                href="/#"
                title="Home"
                hideMenu={hideMenu}
                isActive={true}
              />

              <NavItem
                reference={props.reference[1]}
                href="#about"
                title="About"
                hideMenu={hideMenu}
              />

              <NavItem
                reference={props.reference[2]}
                href="#qualification"
                title="Qualification"
                hideMenu={hideMenu}
              />

              <NavItem
                reference={props.reference[3]}
                href="#portfolio"
                title="Portfolio"
                hideMenu={hideMenu}
              />

              <NavItem
                reference={props.reference[4]}
                href="#contact"
                title="Contact"
                hideMenu={hideMenu}
              />
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
