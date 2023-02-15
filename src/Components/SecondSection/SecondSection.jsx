import React from 'react'
import './SecondSection.scss'
import {data} from './Data.js'
import { createElement } from 'react'


function CreateElements({BCN , ICN , IC , IS , O , H2 , P})  {
            return React.createElement('div' , {className : BCN},
            createElement('div' , {className : ICN}, 
            createElement('div' , {className : IC}, 
            createElement('img' , {src : IS})),
            ),
            createElement('div' , {className : O},
            createElement('h2' , null , H2),
            createElement('p' , null , P)
            )
            )
    }

    const Category = () => {
        for(let i = 0; i < data.length; i++) {
            content.push(<CreateElements 
                key={i}
                BCN={data[i].BoxclassName} 
                ICN={data[i].ImgClassName} 
                IC={data[i].ImgContainer}
                IS={data[i].ImgSrc}
                O={data[i].Others}
                H2={data[i].H2Text}
                P={data[i].PText}
                />) 
        }
        return content
    }

    const content = []

const SecondSection = () => {
    return (
        <div className='second-section'>
            <div className="container">
                <Category />
            </div>
        </div>
    )
}

export default SecondSection