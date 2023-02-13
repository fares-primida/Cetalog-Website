import React from 'react'
import './SecondSection.scss'
import Seo from './seo.png' 
import Social from './socila-marketing.png'
import Compititor from './competitor.png' 

const SecondSection = () => {
    return (
        <div className='second-section'>
            <div className="container">
                <div className="Box1">
                    <div className="imageDiv">
                        <div className="imageContainer">
                            <img src={Seo} alt="" />
                        </div>
                    </div>
                    <div className="Others">
                        <h2>SEO Consultancy</h2>
                        <p>From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly.</p>
                    </div>
                </div>
                <div className="Box2">
                    <div className="imageDiv">
                        <div className="imageContainer">
                            <img src={Compititor} alt="" />
                        </div>
                    </div>
                    <div className="Others">
                        <h2>Competitor Analysis</h2>
                        <p>His defective nor convinced residence own. Connection has put impossible own apartments boisterous</p>
                    </div>
                </div>
                <div className="Box3">
                    <div className="imageDiv">
                        <div className="imageContainer">
                            <img src={Social} alt="" />
                        </div>
                    </div>
                    <div className="Others">
                        <h2>Social Marketing</h2>
                        <p>John he give of From they fine rich he. They age and draw mrs like. Improving end distrusts</p>
                    </div>
                </div>
                
                
            </div>
        </div>
    )
}

export default SecondSection