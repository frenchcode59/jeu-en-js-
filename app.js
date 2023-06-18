console.log("connecté");
// je cree une constante qui sera mon titre
const titre = document.getElementById("titre");
const timeout = 10000
//le style de mon titre
titre.style.color ="green";


//je cree une constante qui sera mon bouton rouge
const btnRed = document.getElementById("btn-red");
const btnBlue = document.getElementById("btn-blue");


// variable de mon compteur et je l'initialise a 0 ;
let compteur = 0;


function add () {
    compteur = compteur + 1;
    console.log(compteur , "compteur apres click");
    titre.innerHTML = compteur;
    }
    
setTimeout(() => {
    console.log("fin du chrono");    
}, timeout);

//je cree un evenement avec une fonction qui au clic rajoutera 1 au compteur  rouge
btnRed.addEventListener("click", function() {
   add()
}); 

//je cree un evenement avec une fonction qui au clic rajoutera 1 au compteur bleu
 btnBlue.addEventListener("click", function () {
        add()
       
        });