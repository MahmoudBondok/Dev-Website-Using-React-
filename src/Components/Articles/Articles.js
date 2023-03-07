import React from 'react';
import './Articles.css';
import cat1 from "../../imgs/cat-01.jpg";
import cat2 from "../../imgs/cat-02.jpg";
import cat3 from "../../imgs/cat-03.jpg";
import cat4 from "../../imgs/cat-04.jpg";
import cat5 from "../../imgs/cat-05.jpg";
import cat6 from "../../imgs/cat-06.jpg";
import cat7 from "../../imgs/cat-07.jpg";
import cat8 from "../../imgs/cat-08.jpg";

function Articles() {
    return (
        <div>
            <div className="articles" id="articles">
                <h2 className="main-title">Articles</h2>
                <div className="container">
                    <div className="box">
                        <img src={cat1} alt="" />
                        <div className="content">
                            <h3>Test Title</h3>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit</p>
                        </div>
                        <div className="info">
                            <a href="/">Read More</a>
                            <i className="fas fa-long-arrow-alt-right"></i>
                        </div>
                    </div>
                    <div className="box">
                        <img src={cat2} alt="" />
                        <div className="content">
                            <h3>Test Title</h3>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit</p>
                        </div>
                        <div className="info">
                            <a href="/">Read More</a>
                            <i className="fas fa-long-arrow-alt-right"></i>
                        </div>
                    </div>
                    <div className="box">
                        <img src={cat3} alt="" />
                        <div className="content">
                            <h3>Test Title</h3>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit</p>
                        </div>
                        <div className="info">
                            <a href="/">Read More</a>
                            <i className="fas fa-long-arrow-alt-right"></i>
                        </div>
                    </div>
                    <div className="box">
                        <img src={cat4} alt="" />
                        <div className="content">
                            <h3>Test Title</h3>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit</p>
                        </div>
                        <div className="info">
                            <a href="/">Read More</a>
                            <i className="fas fa-long-arrow-alt-right"></i>
                        </div>
                    </div>
                    <div className="box">
                        <img src={cat5} alt="" />
                        <div className="content">
                            <h3>Test Title</h3>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit</p>
                        </div>
                        <div className="info">
                            <a href="/">Read More</a>
                            <i className="fas fa-long-arrow-alt-right"></i>
                        </div>
                    </div>
                    <div className="box">
                        <img src={cat6} alt="" />
                        <div className="content">
                            <h3>Test Title</h3>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit</p>
                        </div>
                        <div className="info">
                            <a href="/">Read More</a>
                            <i className="fas fa-long-arrow-alt-right"></i>
                        </div>
                    </div>
                    <div className="box">
                        <img src={cat7} alt="" />
                        <div className="content">
                            <h3>Test Title</h3>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit</p>
                        </div>
                        <div className="info">
                            <a href="/">Read More</a>
                            <i className="fas fa-long-arrow-alt-right"></i>
                        </div>
                    </div>
                    <div className="box">
                        <img src={cat8} alt="" />
                        <div className="content">
                            <h3>Test Title</h3>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit</p>
                        </div>
                        <div className="info">
                            <a href="/">Read More</a>
                            <i className="fas fa-long-arrow-alt-right"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div className="spikes"></div>
        </div>
    )
}
export default Articles;