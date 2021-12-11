import { RefObject, useRef } from "react";

// const sections = document.querySelectorAll('section[id]')

// function scrollActive() {
//     const scrollY = window.pageYOffset

//     sections.forEach(current =>{
//         const sectionHeight = current.offsetHeight
//         const sectionTop = current.OffsetTop - 50

//         const sectionId = current.getAttribute('id')

//         if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
//             document.querySelector('nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
//         } else {
//             document.querySelector('nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
//         }
//     });
// }
// window.addEventListener('scroll', scrollActive)



interface IHeader {
  header: RefObject<HTMLElement>;
  scrollTop: RefObject<HTMLAnchorElement>;
}

function Header(props: IHeader) {
  const nav = useRef<HTMLDivElement>(null);

  const showMenu = () => {
    nav.current?.classList.toggle("show-menu");
  };

  const hideMenu = () => {
    nav.current?.classList.remove("show-menu");
  };

  return (
    <div>
      <a ref={props.scrollTop} href="#r" className="scrolltop">
        <i className="bx bxs-chevron-up scrolltop__icon" />
      </a>
      <header ref={props.header} className="l-header">
        <nav className="nav bd-container">
          <a href="#rey" className="nav__logo">
            Rey Vega
          </a>

          <div ref={nav} className="nav__menu">
            <ul className="nav__list">
              <li className="nav__item">
                <a
                  href="#home"
                  className="nav__link"
                  onClick={hideMenu}
                >
                  Home
                </a>
              </li>
              <li className="nav__item">
                <a href="#about" className="nav__link" onClick={hideMenu}>
                  About
                </a>
              </li>
              <li className="nav__item">
                <a href="#services" className="nav__link" onClick={hideMenu}>
                  Services
                </a>
              </li>
              <li className="nav__item">
                <a href="#portfolio" className="nav__link" onClick={hideMenu}>
                  Portfolio
                </a>
              </li>
              <li className="nav__item">
                <a href="#contact" className="nav__link" onClick={hideMenu}>
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
