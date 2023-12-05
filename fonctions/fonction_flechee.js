// Anonymous function
// --

// setInterval(function(){
//     console.clear();
//     const date = new Date();
//     console.log( `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}` );
// }, 1000);


// Arrow function
// --
// setInterval(() => {
//     console.clear();
//     const date = new Date();
//     console.log( `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}` );
// }, 1000);



// SYNTAXE
// --

// function(){}
// () => return ...
// () => {...}

// function(arg1){}
// (arg1) => return ...
// (arg1) => {...}
// arg1 => ...
// arg1 => {...}

// function(arg1, arg2){}
// (arg1, arg2) => ...
// (arg1, arg2) => {...}



// ---------
console.clear();

let fruits = [
    'Pommes',
    'Poires',
    'Bananes',
    'Kiwis'
];
console.log(fruits);


function upperCaseFruit(str)
{
    return str.toUpperCase();
}


// for (let i=0; i< fruits.length; i++)
// {
//     fruits[i] = upperCaseFruit(fruits[i]);
// }

// fruits = fruits.map( function(fruit){
//     return upperCaseFruit(fruit);
// } );

// fruits = fruits.map( fruit => {
//     return upperCaseFruit(fruit);
// } );

// fruits = fruits.map( fruit => upperCaseFruit(fruit) );

// fruits = fruits.map( fruit => fruit.toUpperCase() );



// Filtre de tableau

fruits = fruits.filter( fruit => fruit.toLowerCase().includes('i') );

console.log(fruits);

