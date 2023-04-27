import react from "react"

import  ReactDOM  from "react-dom"

const name="usman"
const currentDate= new Date(2023,2,28);
console.log(currentDate);
const year=currentDate.getFullYear() 

ReactDOM.render(<div>

    <h1>My first app</h1>

    <p1>created by {name} </p1>

    <br/>

    <p2>copyright {year}</p2>




    </div>,document.getElementById('root'));