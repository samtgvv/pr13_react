import React, { Component } from "react";
import Slider from "react-slick";
import { products } from '../../data/data'
import { Card } from '../card/Card';

export function PauseOnHover() {
    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 1000,
        cssEase: "linear"
    };
    return (
        <div className="slider-container">
            <Slider {...settings}>
                {
                    products.map((product) => {
                        return (
                            <Card id={product.id} img={product.img} name={product.name} price={product.price} count={product.count} />
                        )
                    })
                }
            </Slider>
        </div>
    );
}