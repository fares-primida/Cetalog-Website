import React from 'react'
import './MainSection.scss'
import Line from './hero-shape.png'
import {BsFillPlayFill} from 'react-icons/bs'
import Header from '../Header/Header'

const MainSection = () => {
    return (
        <div className='content'>
            <Header />
            <div className="category">
                <h1>i think your busniess find <br /> seo solutions...</h1>
                <div className="buttons">
                    <button className='ServiceB'>
                        See Our All Services
                    </button>
                    <div className="workB">
                        <span className="icon">
                            <BsFillPlayFill />
                        </span>
                        <p>How It Works</p>
                    </div>
                </div>
            </div>
            <div className="image">
                <img src={Line} alt="" />
            </div>
        </div>
    )
}

export default MainSection