import './MainHeader.css';
import { Link } from 'react-router-dom';
import logo1 from '../assets/logo/logo.png';
function MainHeader() {
    return (
        <header className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img src={logo1} alt="Bootstrap" width="190" height="50"/>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav p-4">
                        <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/servicioClientes">About Us</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/productos">Why Us</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Blog</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Protfolio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Shortcodes</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contact Us</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <i class="fa-solid fa-magnifying-glass"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}
export default MainHeader