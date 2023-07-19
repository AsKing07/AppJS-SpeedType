/**
 * Cette fonction construit et affiche l'email de partage du score.
 * @param {string} nom - Le nom du joueur.
 * @param {string} email - L'email de la personne avec qui le score est partagé.
 * @param {string} score - Le score réalisé.
 */
 function afficherEmail(nom, email, score) 
  {
        let mailto = `mailto:${email}?subject=Partage du score SpeedType&body=Salut, je suis ${nom} et je viens de réaliser le score ${score} sur le site de SpeedType ! Viens essayer de battre mon score sur https://asking07.github.io/AppJS-SpeedType/`;
        location.href = mailto;
  }
  
  /**
   * Valide si le nom est au bon format (au moins deux caractères).
   * @param {string} nom - Le nom à valider.
   * @throws {Error} Le nom est trop court.
   */
  function validerNom(nom) 
  {
    if (nom.length < 2) 
    {
      throw new Error("Le nom est trop court.");
    }
  }
  
  /**
   * Valide si l'email est au bon format.
   * @param {string} email - L'email à valider.
   * @throws {Error} L'email n'est pas valide.
   */
  function validerEmail(email) 
  {
    let emailRegExp = new RegExp("[a-z0-9._-]+@[a-z0-9._-]+\\.[a-z0-9._-]+");
    if (!emailRegExp.test(email)) 
    {
      throw new Error("L'email n'est pas valide.");
    }
  }
  
  /**
   * Affiche le message d'erreur passé en paramètre.
   * Si le span existe déjà, il est réutilisé pour éviter les doublons.
   * @param {string} message - Le message d'erreur à afficher.
   */
  function afficherMessageErreur(message) 
  {
    let spanErreurMessage = document.getElementById("erreurMessage");
  
    if (!spanErreurMessage) 
    {
      let popup = document.querySelector(".popup");
      spanErreurMessage = document.createElement("span");
      spanErreurMessage.id = "erreurMessage";
      popup.append(spanErreurMessage);
    }
  
    spanErreurMessage.innerText = message;
  }
  
  /**
   * Gère la soumission du formulaire de partage de score.
   * @param {string} scoreEmail - Le score à partager.
   */
  function gererFormulaire(scoreEmail) 
  {
    try 
    {
      let baliseNom = document.getElementById("nom");
      let nom = baliseNom.value;
      validerNom(nom);
  
      let baliseEmail = document.getElementById("email");
      let email = baliseEmail.value;
      validerEmail(email);
      afficherMessageErreur("");
      afficherEmail(nom, email, scoreEmail);
    } 
    catch (erreur) 
    {
      afficherMessageErreur(erreur.message);
    }
  }
  
  
  /**
   * Affiche les résultats du jeu (score obtenu sur le nombre total de questions).
   * @param {number} score - Le score réalisé.
   * @param {number} nombreQuestions - Le nombre total de questions.
   */
  function afficherResultats(score, nombreQuestions) {
    let spanScore = document.querySelector(".zoneScore span");
    let affichageScore = `${score} / 80`;
    spanScore.innerText = affichageScore;
  
    let message = `Votre score est de ${score} sur 80`;
    console.log(message);
  }
  
  /**
   * Affiche la proposition de mot.
   * @param {string} mot - Le mot à afficher.
   */
  function afficherProposition(mot) 
  {
    let affichageMot = document.querySelector(".zoneProposition");
    affichageMot.innerText = mot;
  }
  
  /**
   * Lance le jeu SpeedType.
   */
  function lancerJeu() 
  {
    // Initialisations
    let score = 0;
    let nbMotsProposes = 0; 
    let listeProposition = listeMots; // Nous utilisons toujours la liste de mots par défaut
    let total = 0; //Le nombre total d'entrées exactes de l'utilisateur
  
    let i = 0;
    let startTime = 0; // Variable pour stocker le temps de début de chaque mot
    let gameIsOver = false; // Variable pour vérifier si le jeu est terminé

    // Initialisation pour le premier mot
    afficherProposition(listeProposition[i]);
    startTime = new Date().getTime(); // Début du compteur de temps pour le premier mot
    afficherScore(score);
  
    // Fonction pour mettre à jour le score et l'afficher à l'écran
    function afficherScore(score) 
    {
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

    // Affichage du compteur de temps en continu
    const timerInterval = setInterval(() => 
    {
        if (!gameIsOver) 
        {
          // Arrêter le compteur lorsque le jeu est terminé
          const currentTime = new Date().getTime();
          const tempsEcoule = currentTime - startTime;
          afficherTempsEcoule(tempsEcoule);
        }
      }, 100); // Rafraîchissement toutes les 100 millisecondes


  
    // Gestion de l'événement réalisé lorsque l'utilisateur clique sur le bouton "Valider"
    const Valider = document.getElementById("btnValiderMot");
    Valider.addEventListener("click", () => 
    {
      const motEntre = document.getElementById("inputEcriture");
      const motCourant = listeProposition[i];
  
      if (motEntre.value === motCourant) 
      {
        const endTime = new Date().getTime();
        const tempsEcoule = endTime - startTime;
        const scoreMot = calculerScore(tempsEcoule);
  
        score += scoreMot;
        total += 1;
        afficherScore(score);
      }
  
      i++;
      if (listeProposition[i] === undefined) 
      {
        let fin = `Le jeu est fini ! ${total} entrées exactes sur 10 propositions totales`;
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
  
    
   
  
    // Récupération de l'élément input pour la zone de saisie
    const inputEcriture = document.getElementById("inputEcriture");
  
    // Placer le curseur dans la zone de saisie dès que la page est chargée
    inputEcriture.focus();

    // Ajouter l'écouteur d'événement "keypress" sur la zone de saisie
    inputEcriture.addEventListener("keypress", onKeyPress);
  
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
          total += 1;
          afficherScore(score);
        }
  
        i++;
        if (listeProposition[i] === undefined) 
        {
          let fin = `Le jeu est fini ! ${total} entrées exactes sur 10 propositions totales`;
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
  


    // Gestion de l'événement change sur les boutons radios de choix de mot ou phrase.
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
    
  
    // Gestion du formulaire de partage de score
    let form = document.querySelector("form");
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      let scoreEmail = `${score} / 80`;
      gererFormulaire(scoreEmail);
    });
  }
  