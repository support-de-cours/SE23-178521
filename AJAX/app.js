// API URL
// --
const url = "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0";
// const url = "https://api.livetunes.io/api/v1/stations";


// HTMLNodes
// --
const target = document.querySelector('[rel=js-pokemons]');
const btn = document.querySelector('[rel=js-my-btn]');


// Buttons events
// --
// btn.addEventListener('click', getData);
btn.onclick = getData;


// Actions
// --
function getData(event)
{
    // console.log("On part à la chasse aux pokemeon...");

    // fetch(url)
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log( data );
    //         console.log("On à attraper tous les pokemons");
    //     });

    // console.log(".... on pas encoretrouvé de pokemens");

    // XHR Instance
    const xhr = new XMLHttpRequest();

    // Préparation de la requete
    xhr.open('GET', url);
    
    // Execution de la requete
    xhr.send();

    xhr.onreadystatechange = () => {
        // console.log(`ON READYSTATE CHANGE`);
        // console.log(xhr.readyState);

        switch (xhr.readyState)
        {
            case 0: console.log(`ReadyState: ${xhr.readyState} : UNSENT`); break;
            case 1: console.log(`ReadyState: ${xhr.readyState} : OPENED`); break;
            case 2: console.log(`ReadyState: ${xhr.readyState} : HEADERS_RECEIVED`); break;
            case 3: console.log(`ReadyState: ${xhr.readyState} : LOADING`); break;
            case 4: console.log(`ReadyState: ${xhr.readyState} : DONE`); 
                    console.log(`Request Status: ${xhr.status}`);

                switch (xhr.status)
                {
                    case 200:
                        // Injecter le contenu du fichier dans la balise #txtValue
                        // console.log( xhr.response );
                        // target.innerText = xhr.response;
                        break;

                    case 404:
                        console.log(`Le fichier ${src} est introuvable sur le serveur.`);
                        break;
                }
            break;
        }

    }



    xhr.onload = () => {
        console.log(`ON LOAD`);

        // console.log( xhr.readyState );
        // console.log( xhr.status );
        // console.log( xhr.response );
        // console.log( JSON.parse(xhr.response).results );

        const response = xhr.response;
        const data = JSON.parse(response);

        const pokemons = data?.results;

        // console.log( pokemons );
        showPokemons(pokemons);
    };


    xhr.onerror = () => {
        console.log(`ON ERROR`);
    }


    xhr.onprogress = (event) => {
        console.log(`ON PROGRESS`);
        console.log(event.loaded);
        console.log(event.total);
    }

}

// getData();




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