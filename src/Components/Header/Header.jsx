import React from 'react'
import HeaderImage from './logo.png'
import './Header.scss'
import {AiFillCaretDown , AiOutlineSearch} from 'react-icons/ai'




const Header = () => {

    return (
        <header className='header'>
            <div className="container">
                <div className='box1'>
                    <img src={HeaderImage} alt="" />
                </div>
                <div className='box2'>
                    <h2>Home <span><AiFillCaretDown /></span></h2>
                    <h2>Pages <span><AiFillCaretDown /></span></h2>
                    <h2>Portofolio <span><AiFillCaretDown /></span></h2>
                    <h2>Blog <span><AiFillCaretDown /></span></h2>
                </div>
                <div className='box3'>
                    <div className='Box S'>
                        <button><span><AiOutlineSearch /></span></button>
                    </div>
                    <div className='Box L'>
                        <button>Login</button>
                    </div>
                    <div className='Box C'>
                        <button>Contact Us</button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
