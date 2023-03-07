import React from 'react';
import './Team.css';
import team1 from '../../imgs/team-01.jpg';
import team2 from '../../imgs/team-02.jpg';
import team3 from '../../imgs/team-03.jpg';
import team4 from '../../imgs/team-04.jpg';
import team5 from '../../imgs/team-05.png';
import team6 from '../../imgs/team-06.png';
import team7 from '../../imgs/team-07.jpg';
import team8 from '../../imgs/team-08.jpg';
import {
    FaFacebook, FaLinkedin, FaTwitter,
    FaYoutube
} from 'react-icons/fa';

function Team() {
    return (
        <div>
            <div className="team" id="team">
                <h2 className="main-title">Team Members</h2>
                <div className="container">
                    <div className="box">
                        <div className="data">
                            <img src={team1} alt="" />
                            <div className="social">
                                <a href="/">
                                    <i><FaFacebook /></i>
                                </a>
                                <a href="/">
                                    <i className="fab fa-twitter"><FaTwitter /></i>
                                </a>
                                <a href="/">
                                    <i className="fab fa-linkedin-in"><FaLinkedin /></i>
                                </a>
                                <a href="/">
                                    <i className="fab fa-youtube"><FaYoutube /></i>
                                </a>
                            </div>
                        </div>
                        <div className="info">
                            <h3>Name</h3>
                            <p>Simple Short Description</p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="data">
                            <img src={team2} alt="" />
                            <div className="social">
                                <a href="/">
                                    <i><FaFacebook /></i>
                                </a>
                                <a href="/">
                                    <i className="fab fa-twitter"><FaTwitter /></i>
                                </a>
                                <a href="/">
                                    <i className="fab fa-linkedin-in"><FaLinkedin /></i>
                                </a>
                                <a href="/">
                                    <i className="fab fa-youtube"><FaYoutube /></i>
                                </a>
                            </div>
                        </div>
                        <div className="info">
                            <h3>Name</h3>
                            <p>Simple Short Description</p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="data">
                            <img src={team3} alt="" />
                            <div className="social">
                                <a href="/">
                                    <i><FaFacebook /></i>
                                </a>
                                <a href="/">
                                    <i className="fab fa-twitter"><FaTwitter /></i>
                                </a>
                                <a href="/">
                                    <i className="fab fa-linkedin-in"><FaLinkedin /></i>
                                </a>
                                <a href="/">
                                    <i className="fab fa-youtube"><FaYoutube /></i>
                                </a>
                            </div>
                        </div>
                        <div className="info">
                            <h3>Name</h3>
                            <p>Simple Short Description</p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="data">
                            <img src={team4} alt="" />
                            <div className="social">
                                <a href="/">
                                    <i><FaFacebook /></i>
                                </a>
                                <a href="/">
                                    <i className="fab fa-twitter"><FaTwitter /></i>
                                </a>
                                <a href="/">
                                    <i className="fab fa-linkedin-in"><FaLinkedin /></i>
                                </a>
                                <a href="/">
                                    <i className="fab fa-youtube"><FaYoutube /></i>
                                </a>
                            </div>
                        </div>
                        <div className="info">
                            <h3>Name</h3>
                            <p>Simple Short Description</p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="data">
                            <img src={team5} alt="" />
                            <div className="social">
                                <a href="/">
                                    <i><FaFacebook /></i>
                                </a>
                                <a href="/">
                                    <i className="fab fa-twitter"><FaTwitter /></i>
                                </a>
                                <a href="/">
                                    <i className="fab fa-linkedin-in"><FaLinkedin /></i>
                                </a>
                                <a href="/">
                                    <i className="fab fa-youtube"><FaYoutube /></i>
                                </a>
                            </div>
                        </div>
                        <div className="info">
                            <h3>Name</h3>
                            <p>Simple Short Description</p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="data">
                            <img src={team6} alt="" />
                            <div className="social">
                                <a href="/">
                                    <i><FaFacebook /></i>
                                </a>
                                <a href="/">
                                    <i className="fab fa-twitter"><FaTwitter /></i>
                                </a>
                                <a href="/">
                                    <i className="fab fa-linkedin-in"><FaLinkedin /></i>
                                </a>
                                <a href="/">
                                    <i className="fab fa-youtube"><FaYoutube /></i>
                                </a>
                            </div>
                        </div>
                        <div className="info">
                            <h3>Name</h3>
                            <p>Simple Short Description</p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="data">
                            <img src={team7} alt="" />
                            <div className="social">
                                <a href="/">
                                    <i><FaFacebook /></i>
                                </a>
                                <a href="/">
                                    <i className="fab fa-twitter"><FaTwitter /></i>
                                </a>
                                <a href="/">
                                    <i className="fab fa-linkedin-in"><FaLinkedin /></i>
                                </a>
                                <a href="/">
                                    <i className="fab fa-youtube"><FaYoutube /></i>
                                </a>
                            </div>
                        </div>
                        <div className="info">
                            <h3>Name</h3>
                            <p>Simple Short Description</p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="data">
                            <img src={team8} alt="" />
                            <div className="social">
                                <a href="/">
                                    <i><FaFacebook /></i>
                                </a>
                                <a href="/">
                                    <i className="fab fa-twitter"><FaTwitter /></i>
                                </a>
                                <a href="/">
                                    <i className="fab fa-linkedin-in"><FaLinkedin /></i>
                                </a>
                                <a href="/">
                                    <i className="fab fa-youtube"><FaYoutube /></i>
                                </a>
                            </div>
                        </div>
                        <div className="info">
                            <h3>Name</h3>
                            <p>Simple Short Description</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="spikes"></div>
        </div>
    )
}
export default Team;