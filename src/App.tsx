import { RefObject, createRef } from "react";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Qualification from "./components/Qualification/Qualification";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  const numberOfSections = 5;

  const sectionRefs: RefObject<HTMLElement>[] = Array.from(
    { length: numberOfSections },
    () => createRef()
  );
  const linkRefs: RefObject<HTMLAnchorElement>[] = Array.from(
    { length: numberOfSections },
    () => createRef()
  );

  const scrollActiveHandler = () => {
    const scrollY = window.pageYOffset;

    sectionRefs.forEach((ref, index) => {
      const sectionHeight = ref.current?.offsetHeight;
      const sectionTop = ref.current ? ref.current?.offsetTop - 50 : 0;

      if (sectionTop && sectionHeight) {
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          linkRefs[index].current?.classList.add("active-link");
        } else {
          linkRefs[index].current?.classList.remove("active-link");
        }
      }
    });
  };

  window.addEventListener("scroll", scrollActiveHandler);

  return (
    <div>
      <Header reference={linkRefs} />
      <Home reference={sectionRefs[0]} />
      <About reference={sectionRefs[1]} />
      <Qualification reference={sectionRefs[2]} />
      <Portfolio reference={sectionRefs[3]} />
      <Contact reference={sectionRefs[4]} />
      <Footer />
    </div>
  );
}

export default App;
