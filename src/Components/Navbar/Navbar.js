import React from 'react';
import './Navbar.css';
import megamenu from '../../imgs/megamenu.png';
import {
    FaBuilding, FaCalendarAlt, FaChartBar,
    FaCheckCircle, FaClipboard, FaComment, FaPercent,
    FaPlayCircle, FaServer, FaUser
} from 'react-icons/fa'

function Navbar() {
    return (
        <div className="header" id="header">
            <div className="container">
                <a href="/" className="logo">Elzero</a>
                <ul className="main-nav">
                    <li><a href="#articles">Articles</a></li>
                    <li><a href="#gallery">Gallery</a></li>
                    <li><a href="#features">Features</a></li>
                    <li>
                        <a href="/">Other Links</a>
                        <div className="mega-menu">
                            <div className="image">
                                <img src={megamenu} alt="" />
                            </div>
                            <ul className="links">
                                <li>
                                    <a href="/testimonials"><i><FaComment /></i> Testimonials</a>
                                </li>
                                <li>
                                    <a href="/team"><i><FaUser /></i> Team Members</a>
                                </li>
                                <li>
                                    <a href="/services"><i><FaBuilding /></i> Services</a>
                                </li>
                                <li>
                                    <a href="/our-skills"><i><FaCheckCircle /></i> Our Skills</a>
                                </li>
                                <li>
                                    <a href="/work-steps"><i><FaClipboard /></i> How It Works</a>
                                </li>
                            </ul>
                            <ul className="links">
                                <li>
                                    <a href="/events"><i><FaCalendarAlt /></i> Events</a>
                                </li>
                                <li>
                                    <a href="/pricing"><i><FaServer /></i>Pricing Plans</a>
                                </li>
                                <li>
                                    <a href="/video"><i><FaPlayCircle /></i> Top Videos</a>
                                </li>
                                <li>
                                    <a href="/stats"><i><FaChartBar /></i> Stats</a>
                                </li>
                                <li>
                                    <a href="/discount"><i><FaPercent /></i> Request A Discount</a>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default Navbar;