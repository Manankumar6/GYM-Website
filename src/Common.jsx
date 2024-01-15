import React from "react";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import { NavLink } from "react-router-dom";

const Common =(props)=>{
    return  (
        <>
        <section className='home_more'>
        <div className='home_Img '>
        <img src="Image/img-4.jpg" alt="img" />
                                     
        </div>
        <div className="more_content " >
              <h1>{props.heading}</h1>
              <h2>{props.shot_heading}</h2>
              <p>{props.para}</p>
              <NavLink to="/service"> <button className='btn'>{props.btn_name}<ArrowForwardIcon/></button> </NavLink>
        </div>

    </section>
        </>
    )
}

export default Common;