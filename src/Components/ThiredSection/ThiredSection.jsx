import React from 'react'
import AboutImg from './about-thumb.png'
import './ThiredSection.scss'
import {GrStatusGood} from 'react-icons/gr'

const ThiredSection = () => {
    return (
        <div className='third-section'>
            <div className="container">
                <div className="Box CBox">
                    <div className="title">
                        <div className="container">
                            <div className="TitleText">
                                About Us
                            </div>
                        </div>
                    </div>
                    <div className="Desc">
                        <h2>Increase your website’s traffic with the industry’s favorite SEO tool today.</h2>
                        <p>Your business the flexibility to innovate and accelerate your time to market with an account-to-account solution.</p>
                    </div>
                    <div className="Extentions">
                        <div className="container">
                            <div className="EXBox">
                                <div className="iconArea">
                                    <span><GrStatusGood className='GR'/></span>
                                </div>
                                <div className="TextArea">
                                    <p>Pro tibique rehensam</p>
                                </div>
                            </div>
                            <div className="EXBox">
                                <div className="iconArea">
                                    <span><GrStatusGood className='GR'/></span>
                                </div>
                                <div className="TextArea">
                                    <p>Social Media Analytics</p>
                                </div>
                            </div>
                            <div className="EXBox">
                                <div className="iconArea">
                                    <span><GrStatusGood className='GR'/></span>
                                </div>
                                <div className="TextArea">
                                    <p>Reach Your Audience</p>
                                </div>
                            </div>
                            <div className="EXBox">
                                <div className="iconArea">
                                    <span><GrStatusGood className='GR'/></span>
                                </div>
                                <div className="TextArea">
                                    <p>Save and secure</p>
                                </div>
                            </div>
                            <div className="EXBox">
                                <div className="iconArea">
                                    <span><GrStatusGood className='GR'/></span>
                                </div>
                                <div className="TextArea">
                                    <p>Social Media</p>
                                </div>
                            </div>
                            <div className="EXBox">
                                <div className="iconArea">
                                    <span><GrStatusGood className='GR'/></span>
                                </div>
                                <div className="TextArea">
                                    <p>Pro tibique rehensam</p>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    <div className="SubscribButton">
                        <button className='ABtn'>Get Started Today</button>
                    </div>
                </div>
                <div className="Box IBox">
                    <img src={AboutImg} alt="" />
                </div>
            </div>
        </div>
    )
}

export default ThiredSection