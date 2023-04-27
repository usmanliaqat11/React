//map -create a new arrray by doing something with each item on an array.


var numbers=[3,56,2,48,5];
// 
// function double(x)
// {
    // return x*2;
// } 
// 
// const  Newnumber=numbers.map(double);
// console.log(Newnumber);



//------------------------------------------for Each---------------------------------------------
var newNumber=[]


function double(x)
{
    newNumber.push(x*2);
}
numbers.forEach(double)
//     


//map fun is more consie than foreach in foreach every time we create emepty array 
//and push the data but map fun does it it self.


//---------------------------------filter-----------------------------

//filter- creates a new array by keeping the items taht return true

// var number=[2,5,56,89,90]
// 
//  const newNumber1=number.filter(function(x)
// {
    // return x>10
// }
// );

//console.log(newNumber1);


//---------------------------reduce----------------------------------

var nubers=[2,3,4,5,6,7]
// var newNumber=number.reduce(function(accumilator,currentnumber)
// {
    // return accumilator+currentnumber
// });
// 

//----------------------------find the value that is in the first value in the array

numbers.find(function(x)
{
    return num>10;
})









