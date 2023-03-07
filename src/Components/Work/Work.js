import React from 'react';
import './Work.css';
import step from '../../imgs/work-steps.png';
import step1 from '../../imgs/work-steps-1.png';
import step2 from '../../imgs/work-steps-2.png';
import step3 from '../../imgs/work-steps-3.png';

function Work() {
    return (
        <div className="work-steps" id="work-steps">
            <h2 className="main-title">How It Works ?</h2>
            <div className="container">
                <img src={step} alt="" className="image" />
                <div className="info">
                    <div className="box">
                        <img src={step1} alt="" />
                        <div className="text">
                            <h3>Business Analysis</h3>
                            <p>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                Enim nesciunt obcaecati quisquam quis laborum
                                recusandae debitis vel
                            </p>
                        </div>
                    </div>
                    <div className="box">
                        <img src={step2} alt="" />
                        <div className="text">
                            <h3>Architecture</h3>
                            <p>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                Enim nesciunt obcaecati quisquam quis laborum
                                recusandae debitis vel
                            </p>
                        </div>
                    </div>
                    <div className="box">
                        <img src={step3} alt="" />
                        <div className="text">
                            <h3>Developement</h3>
                            <p>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                Enim nesciunt obcaecati quisquam quis laborum
                                recusandae debitis vel
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Work;