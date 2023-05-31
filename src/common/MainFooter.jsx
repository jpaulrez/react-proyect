import './MainFooter.css';
import logo1 from '../assets/logo/logo.png';
function MainFooter() {
    return (
        <footer className="bg-dark text-light">
            <div className="container p-4">
                <div className="row justify-content-between">
                    <div className="col-md-6 text-center text-md-left p-4">
                        <a className="navbar-brand footer-logo" href="#">
                            <img src={logo1} alt="Bootstrap" width="190" height="50" />
                        </a>
                    </div>
                    <div className="col-md-5 col-sm- col-xs-12 p-4">
                        <p><i className="fas fa-envelope"></i> : info@scalaarquitectos.com</p>
                        <p><i className="fas fa-phone"></i> : +51 123 456 789</p>
                        <p><i className="fas fa-map-marker-alt"></i> : Lince, Lima, Perú</p>
                    </div>
                </div>
                <div className="container text-center">
                    <p>2023 - Todos los derechos reservados</p>
                </div>
            </div>
        </footer>
    )
}

export default MainFooter