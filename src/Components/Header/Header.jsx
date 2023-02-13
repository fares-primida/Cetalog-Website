import React from 'react'
import HeaderImage from './logo.png'
import './Header.scss'
import {AiFillCaretDown , AiOutlineSearch} from 'react-icons/ai'




const Header = () => {

    return (
        <header className='header'>
            <div className="container">
                <div className="box1">
                    <div className="HeaderImage">
                        <img src={HeaderImage} alt="" />
                    </div>
                </div>
                <div className="box2">
                    <div className="container">
                        <h2>Home <span><AiFillCaretDown /></span></h2>
                        <h2>Pages <span><AiFillCaretDown /></span></h2>
                        <h2>Portofolio <span><AiFillCaretDown /></span></h2>
                        <h2>Blog <span><AiFillCaretDown /></span></h2>
                    </div>
                </div>
                <div className="box3">
                    <div >
                        <button className="SearchButton">
                            <span><AiOutlineSearch /></span>
                        </button>
                        <button className="LoginButton">
                            <h3>login</h3>
                        </button>
                        <button className="ContactButton">
                            contact us
                        </button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
