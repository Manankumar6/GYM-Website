import React from "react";
import abtData from "./abtData";


const About = () => {
    return (
        <>
            <div className="about_container">
                <h1>Follow Me On <strong>#manankumar_06</strong> </h1>
                <div className="about_card">

        
            <video controls>
                <source src="/Videos/vdo.mp4" />
            </video>
            <video  controls > 
                <source src="/Videos/vdo_2.mp4" />
            </video>
       
                    {
                        abtData.map((val, ind) => {
                            return (
                                <>
                                    <div className="abt_img" key={ind}>
                                        <img src={val.imgsrc} alt="abt_img" />
                                    </div >
                                </>
                            )
                        })
                    }
                        
          
                        
                </div>
            </div>
        </>
    )
}
export default About;