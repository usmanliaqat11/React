import React from "react";

function Card(props)
{
    return(
        <div className="card">
        <div className="top">
        <p>{props.id}</p>
         <h2>{props.name}</h2>
         <img src={props.img} alt="Avatar img"/>
         </div>
         <div className="bottom">
           <p>{props.tel}</p>
           <p>{props.email}</p>
           <p>{props.graph}</p>   
          
         </div> 
       </div>
    );

}

export default Card;