import React from "react";

var isDone=false;

function strike()
{
    isDone=true;

    //document.getElementById("root").style.textDecoration="line-through"
}

function unstrike()
{
    isDone=false;
    //document.getElementById("root").style.textDecoration=null;
}

function App()
{

    //this is declarative programing
    //var isDone= true
    //const strikeThrough={textDecoration:"line-through"}
    //return <p style={isDone ? strikeThrough   : null}>Buy milk</p>


    //this is imperitive programming
    return(
        <div>
            <p style={isDone ? {textDecoration: "line-through"}: null}>Buy Milk</p>

            <button onClick={strike}>change to strike through</button>
            <br/>

            <button onClick={unstrike}>unchange to strike through</button>
        </div>
    );
}

export default App;