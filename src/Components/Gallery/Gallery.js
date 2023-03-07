import React from 'react';
import './Gallery.css';
import gallery1 from "../../imgs/gallery-01.png";
import gallery2 from "../../imgs/gallery-02.png";
import gallery3 from "../../imgs/gallery-03.jpg";
import gallery4 from "../../imgs/gallery-04.png";
import gallery5 from "../../imgs/gallery-05.jpg";
import gallery6 from "../../imgs/gallery-06.png";

function Gallery() {
    return (
        <div class="gallery" id="gallery">
            <h2 class="main-title">Gallery</h2>
            <div class="container">
                <div class="box">
                    <div class="image">
                        <img src={gallery1} alt="" />
                    </div>
                </div>
                <div class="box">
                    <div class="image">
                        <img src={gallery2} alt="" />
                    </div>
                </div>
                <div class="box">
                    <div class="image">
                        <img src={gallery3} alt="" />
                    </div>
                </div>
                <div class="box">
                    <div class="image">
                        <img src={gallery4} alt="" />
                    </div>
                </div>
                <div class="box">
                    <div class="image">
                        <img src={gallery5} alt="" />
                    </div>
                </div>
                <div class="box">
                    <div class="image">
                        <img src={gallery6} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Gallery;