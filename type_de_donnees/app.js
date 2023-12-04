// NUMBER 
// --

let a = 42;
let b = "abc";
console.log( a, typeof a );
console.log( b, typeof b );

let c = a + b;
console.log( c , typeof c);

let d = a * b;
console.log( d , typeof d);
console.log( isNaN(d) );
console.log( '---------------------------');



// STRING
// --

let name = "John";
console.log(name, typeof name);
console.log(name[2]);

console.log( "Hello "+name );
console.log( "Hello ".concat(name) );
console.log( `Hello ${name}` ); // interpolation de variable


function formatName(name) {
    return name.toUpperCase();
}
console.log( `Hello ${formatName(name)}` ); 
console.log( '---------------------------');



// ARRAY
// --

let arr_1 = [];
console.log( arr_1 , typeof arr_1 );

let arr_2 = new Array();
console.log( arr_2 , typeof arr_2 );


let arr_3 = [10]; // Un tableau avec un index (0) de valeur 10
console.log( arr_3 , typeof arr_3 );

let arr_4 = new Array(10); // un tableau avec 10 index de valeur Undefined
console.log( arr_4 , typeof arr_4 );
console.log( arr_4[2] );



// FUNCTION
// --

function multiplyBy5(num)
{
    const result = num * 5;
    console.log( result );
}

multiplyBy5(0);
multiplyBy5(1);
multiplyBy5(2);
multiplyBy5(3);
multiplyBy5(4);
multiplyBy5(5);
multiplyBy5(6);
multiplyBy5(7);
multiplyBy5(8);
multiplyBy5(9);