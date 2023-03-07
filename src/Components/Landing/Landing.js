import React from 'react';
import './Landing.css';
import LandingImage from '../../imgs/landing-image.png';
import { FaAngleDoubleDown } from 'react-icons/fa';

function Landing() {
    return (
        <div className="landing">
            <div className="container">
                <div className="text">
                    <h1>Welcome, To Elzero World</h1>
                    <p>Here Iam gonna share everything about my life. Books Iam reading, Games Iam Playing, Stories and Events</p>
                </div>
                <div className="image">
                    <img src={LandingImage} alt="" />
                </div>
            </div>
            <a href="/articles" className="go-down">
                <i className='go-down'><FaAngleDoubleDown /></i>
            </a>
        </div>
    )
}
export default Landing;