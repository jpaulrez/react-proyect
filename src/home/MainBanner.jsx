import slide1 from '../assets/pictures/1-2.jpg';
import slide2 from '../assets/pictures/3-2.jpg';
import slide3 from '../assets/pictures/2-2.jpg';
import slide4 from '../assets/pictures/3-5.jpg';

import './MainBanner.css';
function MainBanner() {
    return (
        <div id="carouselExampleCaptions" className="carousel slide">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active"
                    aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={slide1} className="d-block w-100" alt="..."/>
                        <div className="carousel-caption d-none d-md-block">
                            <h1>We Make Dream Home a Reality</h1>
                            <p>Some representative placeholder content for the first slide.</p>
                        </div>
                </div>
                <div className="carousel-item">
                    <img src={slide2} className="d-block w-100" alt="..."/>
                        <div className="carousel-caption d-none d-md-block">
                            <h1>We Design Dream House</h1>
                            <p>Some representative placeholder content for the second slide.</p>
                        </div>
                </div>
                <div className="carousel-item">
                    <img src={slide3} className="d-block w-100" alt="..."/>
                        <div className="carousel-caption d-none d-md-block">
                            <h1>Beautiful Home Strats Here</h1>
                            <p>Some representative placeholder content for the third slide.</p>
                        </div>
                </div>
                <div className="carousel-item">
                    <img src={slide4} className="d-block w-100" alt="..."/>
                        <div className="carousel-caption d-none d-md-block">
                            <h1>Beautiful Office</h1>
                            <p>Some representative placeholder content for the third slide.</p>
                        </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default MainBanner