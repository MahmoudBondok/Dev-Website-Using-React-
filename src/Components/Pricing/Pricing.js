import React from 'react';
import './Pricing.css';
import hosting1 from '../../imgs/hosting-basic.png';
import hosting2 from '../../imgs/hosting-advanced.png';
import hosting3 from '../../imgs/hosting-professional.png';
import { FaCheck } from 'react-icons/fa';

function Pricing() {
    return (
        <div className="pricing" id="pricing">
            <div className="dots dots-up"></div>
            <div className="dots dots-down"></div>
            <h2 className="main-title">Pricing Plans</h2>
            <div className="container">
                <div className="box">
                    <div className="title">Basic</div>
                    <img src={hosting1} alt="" />
                    <div className="price">
                        <span className="amount">$15</span>
                        <span className="time">Per Month</span>
                    </div>
                    <ul>
                        <li><span><FaCheck /></span>10GB HDD Space</li>
                        <li><span><FaCheck /></span>5 Email Addresses</li>
                        <li><span><FaCheck /></span>2 Subdomains</li>
                        <li><span><FaCheck /></span>4 Databases</li>
                        <li><span><FaCheck /></span>Basic Support</li>
                    </ul>
                    <a href="/">Choose Plan</a>
                </div>
                <div className="box popular">
                    <div className="label">Most Popular</div>
                    <div className="title">Advanced</div>
                    <img src={hosting2} alt="" />
                    <div className="price">
                        <span className="amount">$25</span>
                        <span className="time">Per Month</span>
                    </div>
                    <ul>
                        <li><span><FaCheck /></span>20GB HDD Space</li>
                        <li><span><FaCheck /></span>10 Email Addresses</li>
                        <li><span><FaCheck /></span>5 Subdomains</li>
                        <li><span><FaCheck /></span>8 Databases</li>
                        <li><span><FaCheck /></span>Advanced Support</li>
                    </ul>
                    <a href="/">Choose Plan</a>
                </div>
                <div className="box">
                    <div className="title">Professional</div>
                    <img src={hosting3} alt="" />
                    <div className="price">
                        <span className="amount">$45</span>
                        <span className="time">Per Month</span>
                    </div>
                    <ul>
                        <li><span><FaCheck /></span>50GB HDD Space</li>
                        <li><span><FaCheck /></span>20 Email Addresses</li>
                        <li><span><FaCheck /></span>10 Subdomains</li>
                        <li><span><FaCheck /></span>20 Databases</li>
                        <li><span><FaCheck /></span>Professional Support</li>
                    </ul>
                    <a href="/">Choose Plan</a>
                </div>
            </div>
        </div>
    )
}
export default Pricing;