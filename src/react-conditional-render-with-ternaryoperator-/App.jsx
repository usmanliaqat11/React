import React from "react";

import login from "./login";

var isloggedIn=false
//


//ternary operator
//
// function App()
// {//
    //// return <div className="container">
        {/* isloggedIn===true? <h1>hello</h1>: <login/> */}
    {/* </div> */}
// }


// function renderConditionally()
// 
// {
    // if (isloggedIn===true)
    // {
        // return(<h1>hello</h1>)
    // }
// 
    // else
    // {

    //<login/> loigin component call


        // return(
        // <form className="form">
        {/* <input type="text" placeholder="username"/> */}
        {/* <input type="password" placeholder="password"/> */}
        {/* <button type="submit">login</button> */}
        {/* </form> */}
        // )
    // }
// }

function  App()
{
    return(
        <div className="container">
            {renderConditionally()}

        </div>
    )
}

export default App;