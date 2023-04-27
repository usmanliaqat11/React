import react from 'react';

import ReactDOM   from 'react-dom';

const coustmStyle= {

    color:"red",
    fontSize:"40px",
    border:"1px solid black"




}

coustmStyle.color="blue";

ReactDOM.render(

    //we use style sheet previous lec in how to use javascript in jsx so why we do this inline style={{color:'red'}}
    //Answer: if we want to change colours in runtime for that reason we use this    
    <h1 style={coustmStyle}>hello world </h1>,
    document.getElementById("root")

    //he outer curly braces indicate that you want to embed a JavaScript expression, and the inner curly braces create an object literal.
)
