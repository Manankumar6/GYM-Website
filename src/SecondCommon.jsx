import React from "react";

import CardData from "./CardData";
import Cards from "./Cards";


const SecondCommon = (props) => {



    return (
        <>
            <section className='home_more'>
                <div className="more_content white_bg" >
                    <h1 className="text_clr">{props.heading} <span className="span">COACH</span> </h1>
                    <h2 >{props.shot_heading}</h2>
                    <p className="white_text">{props.para}</p>
                    <div className="Card_container">
                         {
                                CardData.map((val, ind) => {
                                    return (
                                         <Cards
                                        key={ind}
                                        imgsrc={val.imgsrc}
                                        heading ={val.heading}
                                        details={val.details}
                                        />
                                    )
                                })
                            }

                        </div>

                    </div>
         
                <div className='home_Img '>
                    <img src="Image/img-9.jpg" alt="img" />

                </div>

            </section>
        </>
    )
}

export default SecondCommon;