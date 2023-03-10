import React from 'react';
import './Features.css';
import features1 from "../../imgs/features-01.jpg";
import features2 from "../../imgs/features-02.jpg";
import features3 from "../../imgs/features-03.jpg";

function Features() {
    return (
        <div class="features" id="features">
            <h2 class="main-title">Features</h2>
            <div class="container">
                <div class="box quality">
                    <div class="img-holder"><img src={features1} alt="" /></div>
                    <h2>Quality</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit harum hic veniam eligendi minima</p>
                    <a href="/">More</a>
                </div>
                <div class="box time">
                    <div class="img-holder"><img src={features2} alt="" /></div>
                    <h2>Time</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit harum hic veniam eligendi minima</p>
                    <a href="/">More</a>
                </div>
                <div class="box passion">
                    <div class="img-holder"><img src={features3} alt="" /></div>
                    <h2>Passion</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit harum hic veniam eligendi minima</p>
                    <a href="/">More</a>
                </div>
            </div>
        </div>
    )
}
export default Features;