import React from 'react'
import './FourSection.scss'
import LineImg from './fact-shape.png'

const FourSection = () => {
    return (
        <div className='four-section'>
            <div className='BackBox'>
                <div className="container">
                    <div className="BoxF">
                        <h2>Let’s work together</h2>
                        <p>Do You Know What It Takes To Grow Your Busniess Online? <br /> Do You Want Know</p>
                    </div>
                    <div className="BoxS">
                        <button className="StartBtn">
                            Get Started Today
                        </button>
                    </div>
                </div>
            </div>
            <div className="LineImg">
                <img src={LineImg} alt="" />
            </div>
        </div>
    )
}

export default FourSection