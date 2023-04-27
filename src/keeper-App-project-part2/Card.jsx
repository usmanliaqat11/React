import React from "react";

function Card(props)
{
    return(
        <div>
            <dl>
        <dt>{props.term}</dt>
           <dd>
           {props.detail}
           </dd>

        </dl>
        </div>

    )
}

export default Card;