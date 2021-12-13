import { RefObject, createRef } from "react";
import Header from "./components/Header/Header";
import Home from "./components/Sections/Home";
import About from "./components/Sections/About";
import Qualification from "./components/Sections/Qualification";
import Portfolio from "./components/Sections/Portfolio";
import Contact from "./components/Sections/Contact";

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

      <main className="l-main">
        <Home reference={sectionRefs[0]} />
        <About reference={sectionRefs[1]} />
        <Qualification reference={sectionRefs[2]} />
        <Portfolio reference={sectionRefs[3]} />
        <Contact reference={sectionRefs[4]} />
      </main>
    </div>
  );
}

export default App;
