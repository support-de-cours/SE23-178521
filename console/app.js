console.time("myTimer");

let a = "42";
let b = 42;

console.log( a );
console.log( b );

console.error("Une erreur s'est produite !");
console.warn("Attention ! Cette opération peut être dangereuse.");
console.info("Informations importantes : ...");
// console.clear();


const data = [
    { name: "John", age: 30 },
    { name: "Jane", age: 25 }
];
console.table(data);

const person = { name: "Alice", age: 28 };
console.dir(person);

console.assert(1 === 2, "Ceci est une assertion incorrecte !");

console.log( a );
console.log( b );

// Code à mesurer
console.timeEnd("myTimer");


console.group("Section A");
console.log("Message 1");
console.log("Message 2");
console.groupEnd();

console.group("Section B");
console.log("Message 3");
console.log("Message 4");
console.groupEnd();