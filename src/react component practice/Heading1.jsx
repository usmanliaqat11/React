import React from "react";





function Heading1()

{


    const time="12pm";

const time1="3pm";

const time2="6pm";

const coustmStyle={

    color:"red"


}

const coustmStyle1={

    color:"green"
    

}


const coustmStyle2={

    color:"blue"
    

}




   return ( <div>
    
    <h1 style={coustmStyle}>good morning {time}</h1>

    <h1 style={coustmStyle1}>good afternoon {time1}</h1>

    <h1 style={coustmStyle2}>good evening{time2}</h1>


    </div>


   )
}


export default Heading1;


















