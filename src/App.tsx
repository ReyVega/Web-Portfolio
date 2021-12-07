import React from 'react';

function App() {
  return (
    <body>
        <header className="l-header" id="header">
            <nav className="nav bd-container">
                <a href="#" className="nav__logo">Rey Vega</a>

                <div className="nav__menu" id="nav-menu">
                    <ul className="nav__list">
                        <li className="nav__item"><a href="#home" className="nav__link">Home</a></li>
                        <li className="nav__item"><a href="#about" className="nav__link">About</a></li>
                        <li className="nav__item"><a href="#services" className="nav__link">Services</a></li>
                        <li className="nav__item"><a href="#portfolio" className="nav__link">Portfolio</a></li>
                        <li className="nav__item"><a href="#contact" className="nav__link">Contact</a></li>
                    </ul>
                </div>

                <div className="nav__toggle" id="nav-toggle">
                    <i className='bx bx-menu'></i>
                </div>
            </nav>
        </header>
    </body>
  );
}

export default App;
