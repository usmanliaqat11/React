import React,{useState} from "react";

function App()
{

const [headingText, setHeadingtext]=useState("hello");

const [isMousedOver,setMouseOver]=useState(false)


    function hendleClick()
    {
        setHeadingtext("submitted");


        

    }

    function handleMouseOver()
    {
        setMouseOver(true);
    }


    function handleMouseOut()
{
    setMouseOver(false);
}   



    return (<div className="container">
            <h1>{headingText} </h1>
            <input type="text" placeholder="whats your name?"></input>
            <button style={{backgroundColor: isMousedOver? "black" : "whaite"}} 
            onClick={hendleClick} 
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}>submit</button>
        </div>
    );
}

export default App;