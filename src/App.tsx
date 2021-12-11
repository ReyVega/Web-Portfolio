import { useRef } from "react";
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
   const sectionsRef = useRef<(HTMLElement | null)[]>([]);


  const scrollHandler = () => {
     sectionsRef.current.forEach((ref, index) => {
      const sectionHeight = ref?.offsetHeight;
      const sectionTop = ref?.offsetTop;

      // if (sectionTop && sectionHeight) {
      //   if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      //     linksRef.current[index].classList.add("active-link");
      //   } else {
      //     linksRef.current[index].classList.remove("active-link");
      //   }
      // }
    });
  };

  return (
    <div>
      <Header />

      <main className="l-main">
        <Home ref={sectionsRef}/>
        <About ref={sectionsRef}/>
      </main>
    </div>
  );
}

export default App;
