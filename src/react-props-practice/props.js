import React from 'react'
import ReactDOM from 'react-dom'

function Card(props)
{
    console.log(props);
    return ( <div>
        <h2>{props.name}</h2>
        <img src={props.img}></img>
        <p>{props.tel}</p>
        <p>{props.email}</p>

    </div>



    );
}



/*

function Card(props)
{
    console.log(props);
    return ( <div>
        <h2>beyonce</h2>
        <img src=''></img>
        <p>+123 456 789</p>
        <p>b@beyonce.com</p>

    </div>



    );
}
*/


ReactDOM.render(
    <div>
        <h1>My contacts</h1>
        <Card name="Beyonc" 
        img="" 
        tel="+123 456 789" 
        email="b@beyonce.com"/>


    <Card name="usman" 
    img="" 
    tel="+123 456 789" 
    email="u@usman.com"/>

    </div>,document.getElementById("root")

);



//what is props?
//you think about your react components almost as a coustom html element then we can define these attribute 
//and in the react component world these attributes are called properties and you will usually hear them ////reffered to as props
