import React from "react";
import { Carousel } from "react-bootstrap";
import doctor1 from "./doctors 1.png";
import doctor2 from "./doctors 2.jpg";
import doctor3 from "./doctors 3.jpg";
import "./Header.css";

const Header = () => {
    return (
        <div className="mx-auto carousel-div">
            <Carousel variant="dark">
                <Carousel.Item>
                    <img className="d-block w-100" src={doctor1} alt="First slide" height="600px" />
                    <Carousel.Caption className="carousel-caption-text">
                        <h1>THE BEST DOCTORS</h1>
                        <h3>
                            Most populer,experienced and expart doctors are here! Waiting for you...
                        </h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={doctor2}
                        alt="Second slide"
                        height="600px"
                    />
                    <Carousel.Caption className="carousel-caption-text">
                        <h1>HEALTHY LIFESTYLE</h1>
                        <h3>
                            Expertize doctors will take care of you properly. with their advicement
                            you'll get healthy life!
                        </h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src={doctor3} alt="Third slide" height="600px" />
                    <Carousel.Caption className="carousel-caption-text">
                        <h1>MODERN MEDICINE</h1>
                        <h3>
                            Our doctors always prefer modern,updated and active medicine,that will
                            be suitable for you
                        </h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Header;
