'use strict';

console.log( myVar );

// Declaration de variable avec le mot clé "var"
// --
var myVar = "Valeur de myVar";

console.log( "Valeur: ", myVar );
console.log( "Type: ",  typeof myVar );

myVar = "42";

console.log( "Valeur: ", myVar );
console.log( "Type: ",  typeof myVar );
console.log( "-------" );



// Declaration de variable avec le mot clé "let"
// --
let mySecondVar = "Valeur de mySecondVar";

console.log( "Valeur: ", mySecondVar );
console.log( "Type: ",  typeof mySecondVar );

mySecondVar = 42;

console.log( "Valeur: ", mySecondVar );
console.log( "Type: ",  typeof mySecondVar );
console.log( "-------" );



// Declaration de constante avec le mot clé "const"
// --
const myConst = "Valeur de myConst";

console.log( "Valeur: ", myConst );
console.log( "Type: ",  typeof myConst );

// On ne peut pas modif la valeur d'une constante
// myConst = 42;

console.log( "Valeur: ", myConst );
console.log( "Type: ",  typeof myConst );




// -----------------------------------------
console.log( "------------------------------------------------" );

let i = 42;

for (let i=0; i<3; i++)
{
    console.log(i);
}

console.log(i);


let _1 = 1;
let n_age = 42;
console.log( n_age );







function doSomething()
{
    return "Something i do !!"
}
const abc = doSomething();

console.log( abc );