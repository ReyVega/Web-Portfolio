import profile from "../../assets/jojos.png"


function Home() {
    return (
       <div>
            <section className="home" id="home">
                <div className="home__container bd-container bd-grid">

                    <div className="home__data">
                        <span className="home__greeting">Hello, my name is</span>
                        <h1 className="home__name">Rey Vega</h1>
                        <span className="home__profession">Software Engineer</span>
                        <a download="" href="#file" className="button button-light">Download CV</a>
                    </div>

                    <div className="home__social">
                        <a href="#f" className="home__social-icon"><i className='bx bxl-facebook-square'></i></a>
                        <a href="#f" className="home__social-icon"><i className='bx bxl-github'></i></a>
                        <a href="#f" className="home__social-icon"><i className='bx bxl-linkedin-square'></i></a>
                    </div>

                    <div className="home__img">
                        <img src={profile}  alt=""/>
                    </div>
                </div>
            </section>
       </div>
    )
}

export default Home;