import react from 'react'

import ReactDOM from 'react-dom'

const date= new Date();

const hour=date.getHours();
console.log(hour)

let greeting;

if (hour<12)
{
    greeting="good morning";
    
}

if (hour<12)
{
    greeting="good morning";
    
}

else if(hour<18)
{
    greeting="good afternoon";
}


else{
    greeting="good night";
}


ReactDOM.render(

    <h1>hello world </h1>,document.getElementById("root")      


)