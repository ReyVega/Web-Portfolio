import { RefObject, createRef } from "react";
import Header from "./components/Header/Header";
import Home from "./components/Sections/Home";
import About from "./components/Sections/About";

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

function App() {
  const sectionRefs: RefObject<HTMLElement>[] = Array.from({ length: 4 }, () =>
    createRef()
  );
  const linkRefs: RefObject<HTMLAnchorElement>[] = Array.from(
    { length: 4 },
    () => createRef()
  );

  const scrollActiveHandler = () => {
    const scrollY = window.pageYOffset;

    sectionRefs.forEach((ref, index) => {
      const sectionHeight = ref.current?.offsetHeight;
      const sectionTop = (ref.current) ? ref.current?.offsetTop - 50 : 0;

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
      <Header reference={linkRefs}/>

      <main className="l-main">
        <Home reference={sectionRefs[0]} />
        <About reference={sectionRefs[1]} />
      </main>
    </div>
  );
}

export default App;
