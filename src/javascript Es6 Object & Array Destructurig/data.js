const animal=[
    {name:"cat", sound:"meow",
     foodRequirements:{
        food:2,
        water:3

     }},
    {name :"dog", sound:"woof"}

];


function useAnimals(animal)
{
    return        [animal.name, 
        function(){ 
            console.log(animal.sound);
    }
              ];
}

export default animal;

export {useAnimals};