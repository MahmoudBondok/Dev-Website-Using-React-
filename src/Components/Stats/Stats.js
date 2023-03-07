import React from 'react';
import './Stats.css';
import { FaCode, FaGlobe, FaMoneyBill, FaUser } from 'react-icons/fa';

function Stats() {
    return (
        <div className="stats" id="stats">
            <h2>Our Awesome Stats</h2>
            <div className="container">
                <div className="box">
                    <i style={{ fontSize: '40px' }}><FaUser /></i>
                    <span className="number" data-goal="150">150</span>
                    <span className="text">Clients</span>
                </div>
                <div className="box">
                    <i style={{ fontSize: '40px' }}><FaCode /></i>
                    <span className="number" data-goal="135">135</span>
                    <span className="text">Projects</span>
                </div>
                <div className="box">
                    <i style={{ fontSize: '40px' }}><FaGlobe /></i>
                    <span className="number" data-goal="50">50</span>
                    <span className="text">Countries</span>
                </div>
                <div className="box">
                    <i style={{ fontSize: '40px' }}><FaMoneyBill /></i>
                    <span className="number" data-goal="500">500</span>
                    <span className="text">Money</span>
                </div>
            </div>
        </div>
    )
}
export default Stats;