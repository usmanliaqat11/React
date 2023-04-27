//how to use javascript properties and attributes in jsx 

import React from 'react';
import ReactDom from 'react-dom';

const img="https://picsum.photos/200"

ReactDom.render(
    
    //html global attributes see contentEditable="true"
    //anything that you know of from html attributes you have to cahnge it to 
    //the camel case it is convention in react
    <div>
    <h1 className='heading' contentEditable="true">My food App</h1>
    <img src={img + "?grayscale"} />           



    {/* <div>
        
    
        <img   className="food-img" src= 'https://cdn.freshfruitportal.com/2021/07/Mango-shutterstock_193825010-1024x683.jpg' alt="Mango"></img>
        <img   className="food-img" src= 'https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/AN_images/health-benefits-of-apples-1296x728-feature.jpg?w=1155&h=1528' alt="Apple"></img>
   
        <img   className="food-img" src= 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBd4nbFzA-AIFwGYvWAf7DX_ONRmWlEnnXcw&usqp=CAU' alt="orange"></img>
    </div> */}

    
       
    </div>,document.getElementById('root') 
    )

//     <ul>
//     <li>strabery</li>
//         <br/>
//        <li>grapes</li>
//        <br/>
//        <li>apple</li>
//        <br/>
//    </ul>


    