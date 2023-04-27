import React,{useState} from "react";

function App()
{

     // const [fname, setfName]=useState("");
    // const [lname, setlname]=useState("");


    // 
    // function setFname(event)
    // {
        // console.log(event.target.value);
// 
        // const firstname=event.target.value
        // setfName(firstname);
// 
    // }
// 

// 
    // function setLname(event)
// {
    // const lastname=event.target.value
// 
    // console.log(event.target.value);
    // setlname(lastname);
// }
// 

    const [fullname,setFullname]=useState({

        fname:"",
        lname:""
    })

    function handleChange(event)
    {

        const newValue=event.target.value;



    }


    return (<div className="container">
            <h1>hello {fullname.fname}{fullname.lname}</h1>
            <input onChange={handleChange}
            name="fname"
            type="text" 
            placeholder="whats your name?"></input>


            <input onChange={handleChange}
            name="lname"
            type="text" 
            placeholder="whats lastname name?"></input>

           <button>Submit</button>
           
           
           
        </div>
    );
}

export default App;