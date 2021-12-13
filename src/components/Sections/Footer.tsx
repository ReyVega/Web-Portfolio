
function Footer() {
    return (
        <div>
            <footer className="footer">
                <div className="footer__container bd-container">
                    <h1 className="footer__title">Rey Vega</h1>
                    <p className="footer__description">I'm Rey Vega and this is my personal website</p>

                    <div className="footer__social">
                        <a href="/#" className="footer__link"><i className='bx bxl-facebook-square' /></a>
                        <a href="/#" className="footer__link"><i className='bx bxl-github' /></a>
                        <a href="/#" className="footer__link"><i className='bx bxl-linkedin' /></a>
                    </div>
                    <p className="footer__copy">&#169; 2021 Rey Vega. All rights reserved</p>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
