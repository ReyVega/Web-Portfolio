import { useRef } from "react";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";

function App() {
  const header = useRef<HTMLElement>(null);
  const scrolltop = useRef<HTMLAnchorElement>(null);
  // const sectionsRef = useRef<(HTMLElement | null)[]>([]);
  // const linksRef = useRef<HTMLAnchorElement[]>([]);

  const scrollHandler = () => {
    const scrollY = window.pageYOffset;

    if (scrollY >= 200) {
      header.current?.classList.add("scroll-header");
    } else {
      header.current?.classList.remove("scroll-header");
    }

    if (scrollY >= 560) {
      scrolltop.current?.classList.add("show-scroll");
    } else {
      scrolltop.current?.classList.remove("show-scroll");
    }

    // sectionsRef.current.forEach((ref, index) => {
    //   const sectionHeight = ref?.offsetHeight;
    //   const sectionTop = ref?.offsetTop;

    //     console.log(sectionHeight);
    //   if (sectionTop && sectionHeight) {
    //     if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
    //       linksRef.current[index].classList.add("active-link");
    //     } else {
    //       linksRef.current[index].classList.remove("active-link");
    //     }
    //   }
    // });
  };

  window.addEventListener("scroll", scrollHandler);
  return (
    <div>
      <Header header={header} scrollTop={scrolltop} />

      <main className="l-main">
        <Home />
      </main>
    </div>
  );
}

export default App;
