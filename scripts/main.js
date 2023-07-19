/*********************************************************************************
 * 
 * Point d'entrée, c'est lui qui intialise le jeu et lance la boucle de jeu. 
 * 
 *********************************************************************************/

 // Gestion de l'événement réaliser lorsque l'utilisateur clique sur le bouton lancer le jeu
  const start = document.getElementById("start");
 start.addEventListener("click", () => {
    lancerJeu(); });


