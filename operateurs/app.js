// let x = 5;
// console.log(x);
// console.log( x++ );
// console.log(x);
// console.log( ++x );

// let a;

console.clear();
// console.log(`5 == "5" `, 5 == "5" );
// console.log(`5 === "5" `, 5 === "5" );
// console.log(`a = "5" `, a = "5" );
// console.log(`10 != 20 `, 10 != 20 );
// console.log(`10 !== "10" `, 10 !== "10" );
// console.log(`10 > "10" `, 10 > "10" );
// console.log(`10 >= "10" `, 10 >= "10" );


// let age = 18;

// if (age >= 18)
// {
//     console.log("adult");
// }
// else
// {
//     console.log("bébé");
// }




// OPERATEUR LOGIQUE
// --

// console.log( false && false ); 
// console.log( false && true );
// console.log( true && false );
// console.log( true && true );

// let a = 42;
// let b = 0;
// let c = 22;



// if (a > b && b + c === a && b < c)
// if (true && true && true)
// if (true && true)
// if (true)
// if (a > b && b + c != a && b < c)
// if (true && false && true)
// if (true && false)
// if (false)
// {
//     console.log("OK");
// }
// else 
// {
//     console.log("Pas OK");
// }


// console.log( !true ); // false
// console.log( !false ); // true

// console.log( a, typeof a );
// console.log( !!a );
// console.log( !!b );


//  OPERATEUR D'AFFECTATION
// --

// let a = 42;
// console.log( a );

// // a = a + 8;
// a += 8;
// console.log( a );


// var texte = "Bonjour, ";
// texte += "mon ami."; // Concaténation de chaînes
// console.log( texte );


// AFFECTATION DESCRUTURANTE
// --

// let personne = { nom: "John", age: 30 };
// // let nom = personne.nom;
// // let age = personne.age;
// let { nom } = personne;

// console.log( nom );
// console.log( personne.nom );
// // console.log( age );



// AFFECTATION + CONCATENATION
// --


// var listeDeCourses = ["Pommes", "Bananes", "Poires"];
// var message = "J'ai besoin d'acheter : ";

// for (var i = 0; i < listeDeCourses.length; i++) {
//     message += listeDeCourses[i] + ", ";
// }

// message = message.slice(0, -2); 


// console.log( message );



// OPERATEUR TERNAIRE
// --

// let age = 10;
// let message_1 = '';

// if (age >= 18)
// {
//     message_1 = "adulte";
// }
// else if (age >= 13)
// {
//     message_1 = "ado";
// }
// else 
// {
//     message_1 = "bébé";
// }

// console.log( message_1 );




// let message_2 = (age >= 18) ? "adulte" : "bébé";
// console.log( message_2 );

// // NE PAS ECRIRE CETTE SYNTAXE
// // let message_2 = (age >= 18) ? "adulte" : (age >= 13) ? "ado" : "bébé";
// // console.log( message_2 );


// // let isAdult = age >= 18 ? true : false;
// let isAdult = age >= 18;
// console.log(isAdult);
// console.log(age >= 18);



// OPERATEUR DE TYPE

// // let price = "21.5";
// let price = "42";
// let promo = -5;

// if (isNaN(price))
// {
//     console.error(`Le prix "${price}" doit etre un nombre`);
// }

// if (typeof price != 'number')
// {
//     price = Number(price);
// }

// let total = price + promo;
// console.log( total );
// // console.log( price , typeof price);




// OPERATEUR DE COALESCENCE

// let age;
// let result = age ?? 0;

// // if (age != undefined && age != null)
// // {
// //     result = age;
// // }
// // else 
// // {
// //     result = 0;
// // }


// console.log( result );



// OPERATEUR NULLSAFE 
// --

const user = {
    name: "John",
    address: {
      street: "123 Main St",
      city: "Paris",
    //   country: "France"
    },
};
  
console.log( user.name );
console.log( user.address.city );
console.log( user?.address?.country?.toUpperCase() ?? "Pas de pays" );


if (user !== undefined && user !== null)
{
    if (user.address !== undefined && user.address != null)
    {
        if (user.address.country !== undefined && user.address.country != null)
        {
            console.log( user.address.country.toUpperCase() );
        }
    }
}

console.log( typeof null );
console.log( typeof undefined );