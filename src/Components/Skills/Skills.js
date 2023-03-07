import React from 'react';
import './Skills.css';
import skills from "../../imgs/skills.png";

function Skills() {
    return (
        <div className="our-skills" id="our-skills">
            <h2 className="main-title">Our Skills</h2>
            <div className="container">
                <img src={skills} alt="" />
                <div className="skills">
                    <div className="skill">
                        <h3>HTML <span>90%</span></h3>
                        <div className="the-progress">
                            <span style={{ width: "90%" }} data-width="90%"></span>
                        </div>
                    </div>
                    <div className="skill">
                        <h3>CSS <span>85%</span></h3>
                        <div className="the-progress">
                            <span style={{ width: "85%" }} data-width="85%"></span>
                        </div>
                    </div>
                    <div className="skill">
                        <h3>JavaScript <span>75%</span></h3>
                        <div className="the-progress">
                            <span style={{ width: "75%" }} data-width="75%"></span>
                        </div>
                    </div>
                    <div className="skill">
                        <h3>Python <span>65%</span></h3>
                        <div className="the-progress">
                            <span style={{ width: "65%" }} data-width="65%"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Skills;