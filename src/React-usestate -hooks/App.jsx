import React from "react";

import ReactDOM  from "react-dom";



function App()
{
    const [count,setCount]=React.useState(123)
    //useState fun takes 2 value(one is initial value in our case is 123, and second take it fun that in
    // our case is setCount)




function plus()
{
    setCount(count+1)
    //count++
}


function plus()
{
    setCount(count-1)
    //count++
}


return(
    <div className="container">
        <h1>{count}</h1>
        <button onClick={plus}>+</button>
        <button onClick={plus}>-</button>

    </div>
)

}

export default App;






// var count=0;
// 
// 
// function plus()
// {
    // count++
    // ReactDOM.render(
        // <div className="container">
            {/* <h1>{count}</h1> */}
            {/* <button onClick={plus}>+</button> */}
        {/* </div>,document.getElementById("root")); */}
// }
// 
// ReactDOM.render(
    // <div className="container">
        {/* <h1>{count}</h1> */}
        {/* <button onClick={plus}>+</button> */}
    {/* </div>,document.getElementById("root")); */}