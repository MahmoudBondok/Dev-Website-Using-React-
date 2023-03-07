import React from 'react';
import './Services.css';
import {
    FaBullhorn, FaLaptopCode, FaMapMarked,
    FaPalette, FaTools, FaUserShield
} from 'react-icons/fa';

function Services() {
    return (
        <div className="services" id="services">
            <h2 className="main-title">Services</h2>
            <div className="container">
                <div className="box">
                    <i><FaUserShield style={{ fontSize: '70px' }} /></i>
                    <h3>Security</h3>
                    <div className="info">
                        <a href="/">Details</a>
                    </div>
                </div>
                <div className="box">
                    <i className="fas fa-tools fa-4x"><FaTools style={{ fontSize: '70px' }} /></i>
                    <h3>Fixing Issues</h3>
                    <div className="info">
                        <a href="/">Details</a>
                    </div>
                </div>
                <div className="box">
                    <i className="fas fa-map-marked-alt fa-4x"><FaMapMarked style={{ fontSize: '70px' }} /></i>
                    <h3>Location</h3>
                    <div className="info">
                        <a href="/">Details</a>
                    </div>
                </div>
                <div className="box">
                    <i className="fas fa-laptop-code fa-4x"><FaLaptopCode style={{ fontSize: '70px' }} /></i>
                    <h3>Coding</h3>
                    <div className="info">
                        <a href="/">Details</a>
                    </div>
                </div>
                <div className="box">
                    <i className="fas fa-palette fa-4x"><FaPalette style={{ fontSize: '70px' }} /></i>
                    <h3>Security</h3>
                    <div className="info">
                        <a href="/">Design</a>
                    </div>
                </div>
                <div className="box">
                    <i className="fas fa-bullhorn fa-4x"><FaBullhorn style={{ fontSize: '70px' }} /></i>
                    <h3>Marketing</h3>
                    <div className="info">
                        <a href="/">Details</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Services;