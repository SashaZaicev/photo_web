import React from "react";
import Slider from "react-slick";


import slide_one from "../../img/img1.jpg";
import slide_two from "../../img/img2.jpg";
import slide_three from "../../img/img3.jpg";

const Carousel = () => {
    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 500
    };
    return (
        <div
            className="carrousel_wrapper"
            style={{
                height: `${window.innerHeight}px`,
                overflow: "hidden"
            }}>
            <Slider {...settings}>
                <div>
                    <div
                        className="carrousel_image"
                        style={{
                            // background: `url(${slide_one})`,
                            height: `${window.innerHeight}px`,
                            width: `${window.innerWidth}px`
                        }}>
                        <img src={slide_three} alt=""/>
                    </div>
                </div>
                <div>
                    <div
                        className="carrousel_image"
                        style={{
                            // background: `url(${slide_two})`,
                            height: `${window.innerHeight}px`,
                            width: `${window.innerWidth}px`
                        }}>
                        <img src={slide_two} alt=""/>
                    </div>
                </div>
                <div>
                    <div
                        className="carrousel_image"
                        style={{
                            // background: `url(${slide_three})`,
                            height: `${window.innerHeight}px`,
                            width: `${window.innerWidth}px`
                        }}>
                        <img src={slide_one} alt=""/>
                    </div>
                </div>
            </Slider>
        </div>
    );
};

export default Carousel;