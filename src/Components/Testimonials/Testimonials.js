import React from 'react';
import './Testimonials.css';
import avatar1 from "../../imgs/avatar-01.png";
import avatar2 from "../../imgs/avatar-02.png";
import avatar3 from "../../imgs/avatar-03.png";
import avatar4 from "../../imgs/avatar-04.png";
import avatar5 from "../../imgs/avatar-05.png";
import avatar6 from "../../imgs/avatar-06.png";
import StarRatings from 'react-star-ratings';

function Testimonials() {
    return (
        <div className="testimonials" id="testimonials">
            <h2 className="main-title">Testimonials</h2>
            <div className="container">
                <div className="box">
                    <img src={avatar1} alt="" />
                    <h3>Mohamed Farag</h3>
                    <span className="title">Full Stack Developer</span>
                    <div className="rate">
                        <StarRatings
                            rating={3.403}
                            starDimension="20px"
                            starSpacing="1px"
                            starRatedColor="#ffc107"
                        />
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Maiores et reiciendis voluptatum, amet est natus
                        quaerat ducimus
                    </p>
                </div>
                <div className="box">
                    <img src={avatar2} alt="" />
                    <h3>Mohamed Ibrahim</h3>
                    <span className="title">Full Stack Developer</span>
                    <div className="rate">
                        <StarRatings
                            rating={4}
                            starDimension="20px"
                            starSpacing="1px"
                            starRatedColor="#ffc107"
                        />
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Maiores et reiciendis voluptatum, amet est natus
                        quaerat ducimus
                    </p>
                </div>
                <div className="box">
                    <img src={avatar3} alt="" />
                    <h3>Shady Nabil</h3>
                    <span className="title">Full Stack Developer</span>
                    <div className="rate">
                        <StarRatings
                            rating={4.403}
                            starDimension="20px"
                            starSpacing="1px"
                            starRatedColor="#ffc107"
                        />
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Maiores et reiciendis voluptatum, amet est natus
                        quaerat ducimus
                    </p>
                </div>
                <div className="box">
                    <img src={avatar4} alt="" />
                    <h3>Amr Hendawy</h3>
                    <span className="title">Full Stack Developer</span>
                    <div className="rate">
                        <StarRatings
                            rating={5}
                            starDimension="20px"
                            starSpacing="1px"
                            starRatedColor="#ffc107"
                        />
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Maiores et reiciendis voluptatum, amet est natus
                        quaerat ducimus
                    </p>
                </div>
                <div className="box">
                    <img src={avatar5} alt="" />
                    <h3>Sherief Ashraf</h3>
                    <span className="title">Full Stack Developer</span>
                    <div className="rate">
                        <StarRatings
                            rating={2}
                            starDimension="20px"
                            starSpacing="1px"
                            starRatedColor="#ffc107"
                        />
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Maiores et reiciendis voluptatum, amet est natus
                        quaerat ducimus
                    </p>
                </div>
                <div className="box">
                    <img src={avatar6} alt="" />
                    <h3>Osama Mohamed</h3>
                    <span className="title">Full Stack Developer</span>
                    <div className="rate">
                        <StarRatings
                            rating={3}
                            starDimension="20px"
                            starSpacing="1px"
                            starRatedColor="#ffc107"
                        />
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Maiores et reiciendis voluptatum, amet est natus
                        quaerat ducimus
                    </p>
                </div>
            </div>
        </div>
    )
}
export default Testimonials;