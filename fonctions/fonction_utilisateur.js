// Fonction natives
// --

// alert('Hello There !');
// let name = prompt("Quel est ton nom ?");
// let isOk = confirm("Est ce que ça va ?");

// Fonction de chaine
// --
let myStr = "J'aime les chats";
console.log( myStr );

myStr = myStr.replace("chats", "chiens");
console.log( myStr );

myStr = myStr.toUpperCase();
console.log( myStr );


// Fonction de tableaux
// --

let fruits = ['Pommes', 'Poires'];
console.table( fruits );

fruits.push('Kiwis')
console.table( fruits );

// fruits.shift();
// console.table( fruits );

console.table( fruits.join(', ') );


// ------------------------------------
console.clear();
// FONCTION UTILISATEURS
// --


// Declaration
function doSomething()
{
    console.log("I do something... Yeah !!!");
}
// Appel de fonction 
doSomething();






// Declaration avec l'argument "username"
// --

function sayHello(username)
{
    console.log(`Hello ${username}`);
}

// Appel de la fonction avec passage de paramètre
sayHello("Bob");



// John DOE => John D.
function generateScreenName(firstname, lastname)
{
    lastname = lastname.substr(0, 1);
    return `${firstname} ${lastname}.`;
}
console.log( generateScreenName("John", "DOE") );
console.log( generateScreenName("Arnaud", "BODEL") );
console.log( generateScreenName("BODEL", "Arnaud") );


// Fonction avec valeur de retour
// --

function addition(a, b)
{
    const somme = a + b;

    return somme;
}

function multiply(a, b)
{
    const product = a * b;

    return product;
}

let result_addition = addition(10, 5);
let result_multiply = multiply(result_addition, 2);

console.log(result_addition);
console.log(result_multiply);

console.log( multiply( addition(10, 5), 2 ) );
console.log( multiply( 15, 2 ) );
console.log( 30 );



// Typage de la fonction
// --

console.log( typeof addition );
console.log( typeof addition(10,5) );
console.log( typeof sayHello );
console.log( typeof sayHello("Bob") );
