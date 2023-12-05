"use strict";

const url = "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0";
const target = document.querySelector('[rel=js-pokemons]');




async function httpGet(uri)
{
    const response = await fetch(uri);
    const data = await response.json();

    return data;
}



function showPokemons(pokemons)
{
    Array.from(pokemons, pokemon => {

        let node_a = document.createElement('a');
            node_a.href = "#poke";
            node_a.innerText = pokemon.name;

        let node_span = document.createElement('span');
            node_span.innerHTML = " <strong>+ d'infos</strong>";

        let node_li = document.createElement('li');
            node_li.append(node_a);
            node_li.append(node_span);

        target.append(node_li);
    })
}


(async function(){
    let pokemons = await httpGet(url);

    showPokemons(pokemons.results);
})();











// 


// fetch(url)
//     .then( response => response.json() )
//     .then( data => { 

//         const pokemons = data.results;
//         Array.from(pokemons, pokemon => {

//             let node_a = document.createElement('a');
//                 node_a.href = "#poke";
//                 node_a.innerText = pokemon.name;

//             let node_span = document.createElement('span');
//                 node_span.innerHTML = " <strong>+ d'infos</strong>";

//             let node_li = document.createElement('li');
//                 node_li.append(node_a);
//                 node_li.append(node_span);

//             target.append(node_li);
//         })
//     })
//     .catch( error => console.error(error) )
// ;




// const response = await fetch(url);
// console.log(response);













// // Fetch va chercher des données stockées sur l'URL
// fetch(url)

//     // Quand fetch reçois les données, on les conveties en JSON
//     .then( response => response.json() )

//     // "data" = les données en JSON
//     .then( data => { 

//         // Filtre le JSON pour recup la propriété "results" fournie par l'API
//         const pokemons = data.results;

//         // Boucle sur la liste des pokemon stockée dans "results" de l'API
//         Array.from(pokemons, pokemon => {

//             // Injection HTML de la balise
//             // <li><a href="#">nom du pokemon</a></li>
//             // --
//             // 1. Inject de la balise <li> dans la balise <ol id="pokemons">
//             // 2. Création de la balise <li>
//             // 2.a et 2.b inject les balise <a> et <span> dans la balise <li>
//             // 3. Creation de la balise <span>
//             // 4. Creation de la balise <a>
//             // 4.a Ajout de l'attribut "href" sur la balis <a>
//             // 4.b Ajout du texte dans la balis <a>

//             // 4.
//             let node_a = document.createElement('a');
//                 // 4.a
//                 node_a.href = "#poke";
//                 // 4.b
//                 node_a.innerText = pokemon.name;

//             // 3.
//             let node_span = document.createElement('span');
//                 node_span.innerHTML = " <strong>+ d'infos</strong>";

//             // 2.
//             let node_li = document.createElement('li');
//                 // 2.a
//                 node_li.append(node_a);
//                 // 2.b
//                 node_li.append(node_span);

//             // 1.
//             target.append(node_li);

//         })
//     })
//     .catch( error => console.error(error) )
// ;

console.log( url );
