import react from 'react'
import ReactDOM  from 'react-dom'

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

ReactDOM.render(
    

<div>

    <h1 style={coustmStyle}>good morning {time}</h1>

    <h1 style={coustmStyle1}>good morning {time1}</h1>

    <h1 style={coustmStyle2}>good morning {time2}</h1>

{/* <h1 className='heading' >good morning {time}</h1>

<h1 className='heading1' >good morning {time1}</h1>

<h1 className='heading2' >good morning {time2}</h1> */}


</div>

,document.getElementById("root")


)

























