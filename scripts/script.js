

/**
 * Cette fonction construit et affiche l'email. 
 * @param {string} nom : le nom du joueur
 * @param {string} email : l'email de la personne avec qui il veut partager son score
 * @param {string} score : le score. 
 */
function afficherEmail(nom, email, score) {
    let mailto = `mailto:${email}?subject=Partage du score SpeedType&body=Salut, je suis ${nom} et je viens de réaliser le score ${score} sur le site de SpeedType !`
    location.href = mailto
}


/**
 * Cette fonction prend un nom en paramètre et valide qu'il est au bon format
 * ici : deux caractères au minimum
 * @param {string} nom 
 * @return {boolean}
 */
function validerNom(nom) {
    if (nom.length < 2) {
        throw new Error("Le nom est trop court. ")
    }
}

/**
 * Cette fonction prend un email en paramètre et valide qu'il est au bon format. 
 * @param {string} email 
 * @return {boolean}
 */
function validerEmail(email) {
    let emailRegExp = new RegExp("[a-z0-9._-]+@[a-z0-9._-]+\\.[a-z0-9._-]+")
    if (!emailRegExp.test(email)) {
        throw new Error("L'email n'est pas valide.")
    }
}

/**
 * Cette fonction affiche le message d'erreur passé en paramètre. 
 * Si le span existe déjà, alors il est réutilisé pour ne pas multiplier
 * les messages d'erreurs. 
 * @param {string} message 
 */
function afficherMessageErreur(message) {
    
    let spanErreurMessage = document.getElementById("erreurMessage")

    if (!spanErreurMessage) {
        let popup = document.querySelector(".popup")
        spanErreurMessage = document.createElement("span")
        spanErreurMessage.id = "erreurMessage"
        
        popup.append(spanErreurMessage)
    }
    
    spanErreurMessage.innerText = message
}


function gererFormulaire(scoreEmail)
{
    try 
    {
        let baliseNom = document.getElementById("nom")
        let nom = baliseNom.value
        validerNom(nom)

        let baliseEmail = document.getElementById("email")
        let email = baliseEmail.value
        validerEmail(email)
        afficherMessageErreur("")
        afficherEmail(nom, email, scoreEmail)

    } 
    catch(erreur) 
    {
        afficherMessageErreur(erreur.message)
    }
}



function verifierMot(motApp,motUser,scores) 
{

    switch (motUser) {
        case motApp:
            alert("Bravo!Continuez comme ça")
            console.log("Bravo !")
            scores[0]+=1
            break
        case "Gredin":
            console.log("Restez correct !")
            break
        case "Mécréant":
            console.log("Restez correct !")
            break
        case "Vilain":
            console.log("Soyez gentil !")
            break
        default:
            console.log("Vous avez fait une erreur de frappe.")
            alert("Vous avez fait une erreur de frappe")
    }
    
}

function afficherResultats(score, nombreQuestions) 
{
      // Récupération de la zone dans laquelle on va écrire le score
      let spanScore = document.querySelector(".zoneScore span")
      // Ecriture du texte
      let affichageScore = `${score} / 80` 
      // On place le texte à l'intérieur du span. 
      spanScore.innerText = affichageScore
    let message = 'Votre score est de ' + score + ' sur 80' 
    console.log(message)
}



function afficherProposition(mot)
{
    let affichageMot = document.querySelector(".zoneProposition")
    affichageMot.innerText = mot
}



function lancerJeu() {
    // Initialisations
    let score = 0;
    let nbMotsProposes = 0;
    let listeProposition = listeMots; // Nous utilisons toujours la liste de mots par défaut
    let total=0;
  
    let i = 0;
    let startTime = 0; // Variable pour stocker le temps de début de chaque mot
    let gameIsOver = false; // Variable pour vérifier si le jeu est terminé

  
    // Fonction pour mettre à jour le score et l'afficher à l'écran
    function afficherScore(score) {
      const spanScore = document.querySelector(".zoneScore span");
      spanScore.innerText = score;
    }
  
    // Fonction pour calculer le score en fonction du temps écoulé
    function calculerScore(temps) 
    {
      if (temps < 8000) 
      {
        return 8;
      } 
      else if (temps >= 8000 && temps <= 16000) 
      {
        return 4;
      } 
      else 
      {
        return 2;
      }
    }
  
    // Fonction pour afficher le temps écoulé pendant la saisie
    function afficherTempsEcoule(temps) 
    {
      const zoneTemps = document.querySelector(".zoneTemps");
      zoneTemps.innerText = `Temps écoulé : ${temps / 1000} secondes`;
    }
  
    // Gestion de l'événement réaliser lorsque l'utilisateur clique sur le bouton valider
    const Valider = document.getElementById("btnValiderMot");
    Valider.addEventListener("click", () => {
      const motEntre = document.getElementById("inputEcriture");
      const motCourant = listeProposition[i];
  
      if (motEntre.value === motCourant) 
      {
        const endTime = new Date().getTime();
        const tempsEcoule = endTime - startTime;
        const scoreMot = calculerScore(tempsEcoule);
  
        score += scoreMot;
        total+=1;
        afficherScore(score);
      }
     
       
  
        i++;
        if (listeProposition[i] === undefined) 
        {
            let fin = `Le jeu est fini!!!! ${total} entrées exactes sur 10 propositions totales`
            afficherProposition(fin);
            Valider.disabled = true;
            nbMotsProposes = listeProposition.length;
            afficherResultats(score, nbMotsProposes);
            gameIsOver = true; // Le jeu est terminé, on arrête le compteur de temps
            clearInterval(timerInterval); // Arrêter le rafraîchissement du compteur
        }
        else 
        {
          afficherProposition(listeProposition[i]);
          motEntre.value = "";
          startTime = new Date().getTime(); // Mettre à jour le temps de début pour le prochain mot
        }
      
      
    });
  
    // Gestion de l'événement change sur les boutons radios.
    const listeBtnRadio = document.querySelectorAll(".optionSource input");
    for (let index = 0; index < listeBtnRadio.length; index++) {
      listeBtnRadio[index].addEventListener("change", (event) => {
        if (event.target.value === "1") {
          listeProposition = listeMots;
        } else {
          listeProposition = listePhrases;
        }
        afficherProposition(listeProposition[i]);
        startTime = new Date().getTime(); // Début du compteur de temps pour le premier mot ou phrase 
        score = 0;
      });
    }
  
    // Initialisation pour le premier mot
    afficherProposition(listeProposition[i]);
    startTime = new Date().getTime(); // Début du compteur de temps pour le premier mot
    afficherScore(score);
  
    // Affichage du compteur de temps en continu
  const timerInterval = setInterval(() => {
    if (!gameIsOver) { // Arrêter le compteur lorsque le jeu est terminé
      const currentTime = new Date().getTime();
      const tempsEcoule = currentTime - startTime;
      afficherTempsEcoule(tempsEcoule);
    }
  }, 100); // Rafraîchissement toutes les 100 millisecondes




    // Récupération de l'élément input pour la zone de saisie
  const inputEcriture = document.getElementById("inputEcriture");

  // Placer le curseur dans la zone de saisie dès que la page est chargée
  inputEcriture.focus();

  // Fonction pour gérer l'événement "keypress" sur la zone de saisie
  function onKeyPress(event) {
    // Vérifier si la touche pressée est la touche "Entrée" (code 13)
    if (event.keyCode === 13) 
    {
        const motEntre = document.getElementById("inputEcriture");
        const motCourant = listeProposition[i];
    
        if (motEntre.value === motCourant) 
        {
          const endTime = new Date().getTime();
          const tempsEcoule = endTime - startTime;
          const scoreMot = calculerScore(tempsEcoule);
    
          score += scoreMot;
          total+=1;
          afficherScore(score);
        }
       
         
    
          i++;
          if (listeProposition[i] === undefined) 
          {
              let fin = `Le jeu est fini!!!! ${total} entrées exactes sur 10 propositions totales`
              afficherProposition(fin);
              Valider.disabled = true;
              nbMotsProposes = listeProposition.length;
              afficherResultats(score, nbMotsProposes);
              gameIsOver = true; // Le jeu est terminé, on arrête le compteur de temps
              clearInterval(timerInterval); // Arrêter le rafraîchissement du compteur
          }
          else 
          {
            afficherProposition(listeProposition[i]);
            motEntre.value = "";
            startTime = new Date().getTime(); // Mettre à jour le temps de début pour le prochain mot
          }
    }
  }

  // Ajouter l'écouteur d'événement "keypress" sur la zone de saisie
  inputEcriture.addEventListener("keypress", onKeyPress);

}
  



