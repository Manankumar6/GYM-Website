import React from "react";
const Cards = (props)=>{
    return(
        <>
         <div className="intro_card">

         <img src={props.imgsrc} alt="cardImg" />
                <div className="card_detail">

                <h2>{props.heading}</h2>
                <hr />
                <p>{props.details}</p>
                </div>
         </div>
        </>
    )
}

export default Cards;