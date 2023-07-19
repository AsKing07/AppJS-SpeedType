/*********************************************************************************
 * 
 * Point d'entrée, c'est lui qui intialise le jeu et lance la boucle de jeu. 
 * 
 *********************************************************************************/

 // Gestion de l'événement réaliser lorsque l'utilisateur clique sur le bouton lancer le jeu
  const start = document.getElementById("start");
 start.addEventListener("click", () => {
    lancerJeu(); });


// J'ai mis ce code en commentaire, nous pourrons le récupérer lorsque nous en auront besoin :

// let inputEcriture = document.getElementById("inputEcriture")
// console.log(inputEcriture)

// let btnValiderMot = document.getElementById("btnValiderMot")
// console.log(btnValiderMot)

// let zoneProposition = document.querySelector(".zoneProposition")
// console.log(zoneProposition)

// let spanScore = document.querySelector(".zoneScore span")
// console.log(spanScore)

// let listeBtnRadio = document.querySelectorAll(".optionSource input")
// console.log(listeBtnRadio)