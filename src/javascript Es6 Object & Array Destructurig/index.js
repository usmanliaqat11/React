import animal ,{ useAnimals } from "./data";

//console.log(animal);

//destructuring this array of object literls


//--------------------destructure an Array--------------------------------
//in array for destructing name will the same or not be same  which is used in property like {cat:dog}
const [cat,dog]=animal;

//-----------------------------------use stae hooks call here

const [animals, makesound] =useAnimals(cat);
console.log(animal);
makesound()




//--------------------destructure of object--------------------------------


//in object for destructing name will the same which is used in property like {name: sound}
//const {name,sound}=cat;
//console.log(cat);

//------------------------------assigining values to objects----------------------

//const { name1="fluffy", sound1="furr"}=cat;


//---------------------------------nested objects----------------------------------


//const {name,sound,foodRequirements}=cat
//console.log(foodRequirements);

// import React from "react";
// import ReactDOM  from "react-dom";
// 
// 
// ReactDOM.render(<h1>hello wolrld</h1>,document.getElementById("root"));
// 

