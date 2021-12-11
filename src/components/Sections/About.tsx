import profile from "../../assets/jojos.png";


function About() {
    return (
        <div>
            <section className="about section bd-container" id="about">
                <span className="section-subtitle">My history</span>
                <h2 className="section-title">About me</h2>


                <div className="about__container bd-grid">
                    <div className="about__data bd-grid">
                        <p className="about__description">
                            <span>Hello, I am <br/></span>
                            Freelance Software engineer, I am passionate about creating and solving digital world-wide problems.
                        </p>

                        <div>
                            <span className="about__number">05</span>
                            <span className="about__achievement">Years off Experience</span>
                        </div>

                        <div>
                            <span className="about__number">29+</span>
                            <span className="about__achievement">Projects completes</span>
                        </div>

                        <div>
                            <span className="about__number">07</span>
                            <span className="about__achievement">Best work awards</span>
                        </div>
                    </div>

                    <img src={profile} alt="" className="about__img"/>
                </div>
            </section>
        </div>
    )
}

export default About;
