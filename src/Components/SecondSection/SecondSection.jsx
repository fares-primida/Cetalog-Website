import React from 'react'
import './SecondSection.scss'
import Seo from './seo.png' 
import Social from './socila-marketing.png'
import Compititor from './competitor.png' 
import { createElement } from 'react'

const data =[
    {
        BoxclassName: "Box1",
        ImgClassName : 'imageDiv',
        ImgContainer : 'imageContainer',
        ImgSrc : Seo,
        Others : "Others",
        H2Text : 'SEO Consultancy',
        PText : 'From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly.'
    } ,
    {
        BoxclassName: "Box2",
        ImgClassName : 'imageDiv',
        ImgContainer : 'imageContainer',
        ImgSrc : Compititor,
        Others : "Others",
        H2Text : 'Competitor Analysis',
        PText : 'His defective nor convinced residence own. Connection has put impossible own apartments boisterous.'
    } ,
    {
        BoxclassName: "Box3",
        ImgClassName : 'imageDiv',
        ImgContainer : 'imageContainer',
        ImgSrc : Social,
        Others : "Others",
        H2Text : 'Social Marketing',
        PText : 'John he give of From they fine rich he. They age and draw mrs like. Improving end distrusts.'
    }
]


function CreateElements()  {
        for(let i = 0; i < data.length; i++) {
            return React.createElement('div' , {className : data[i].BoxclassName},
            createElement('div' , {className : data[i].ImgClassName}, 
            createElement('div' , {className : data[i].ImgContainer}, 
            createElement('img' , {src : data[i].ImgSrc})),
            ),
            createElement('div' , {className : data[i].Others},
            createElement('h2' , null , data[i].H2Text),
            createElement('p' , null , data[i].PText)
            )
            )
        }

    }
    const yy = []
    for(let i = 0; i < data.length; i++) {
                yy.push(<CreateElements key={i}/>)
    }

const SecondSection = () => {
    return (
        <div className='second-section'>
            <div className="container">
                {/* {<CreateElements key={2}/>} */}
                {yy}
            </div>
        </div>
    )
}

export default SecondSection