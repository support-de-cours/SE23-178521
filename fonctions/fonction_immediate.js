(function(){
    console.log("Je suis la fonction masquée");
})();

let a = 42;
let b = "AZER";

(b => { 
    console.log(b)
})(a);
