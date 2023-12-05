console.clear();

let fruits = ['Pommes','Poires','Bananes','Kiwis'];

for ( let i=0; i<fruits.length; i++)
{
    console.log( i, fruits[i] );
}

console.log( '--------------- ');

// while (fruits.length) 
// {
//     console.log( fruits[0], fruits.length, fruits );
//     fruits.shift();
//     // fruits.pop();
// }

console.log('Sortie de boucle');


console.log( '--------------- ');
console.clear();

for (let i = 0; i < 5; i++) {
    console.log(i);
}

console.log( '--------------- ');

let j = 10;
while (j < 5)
{
    console.log(j);
    j++;
}

console.log( '--------------- ');

let k = 10;
do {
    console.log(k);
    k++;
}
while(k < 5);



console.log( '--------------- ');
console.clear();

let user = {
    firstname: "John",
    lastname: "DOE",
    age: 42,
};

// console.log( user.firstname );

for (let index in user)
{
    console.log( index, user[index] );
}

for (const fruit of fruits)
{
    console.log( fruit );
}



console.log( '--------------- ');
console.clear();

/*
fruits.forEach( function(fruit, index){
    console.log( index, fruit );
    
    fruits[index] = fruit.toUpperCase();
} );
*/

fruits.forEach( (fruit, index) => fruits[index] = fruit.toUpperCase() );
//fruits.forEach( fruit => console.log(fruit.toUpperCase()) );
console.log(fruits);


// fruits = fruits.map(fruit => fruit.toLowerCase());
fruits = fruits.map( function(fruit){
    return fruit.toLowerCase()
});

console.log(fruits);

const nombres = [1, 2, 3, 4, 5];
const somme = nombres.reduce((acc, val) => acc + val, 0);

console.log(somme);

