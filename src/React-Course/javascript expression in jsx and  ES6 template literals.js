import react from 'react'
import ReactDom from 'react-dom';

const fname="usman"
const lname="liaqat"

ReactDom.render(
<div>
    <h1>  {fname} {lname}</h1>

    <p>your lucky number is {Math.floor(Math.random()*10)}</p>





</div>,document.getElementById('root'))