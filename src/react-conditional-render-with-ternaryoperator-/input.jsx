import React from "react";

function input(props)
{
    return(
        <input type={props.type} placeholder={props.placeholder}/>
        // <input type="password" placeholder="password"/>
    )
}

export default input;