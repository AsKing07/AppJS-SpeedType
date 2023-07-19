 /*********************************************************************************
 * 
 * Ce fichier contient toutes les constantes nécessaires au fonctionnement du jeu.
 * En particulier les listes de mots et de phrases proposés à l'utilisateur
 * 
 *********************************************************************************/
 // Déclaration des tableaux contenant les listes des mots proposés à l'utilisateur
const listeMots = genererMotsAleatoires(10);
const listePhrases = genererPhrasesAleatoires(10);
 // Fonction pour générer une liste aléatoire de mots
function genererMotsAleatoires(maximum) {
  const motsAleatoires = [];
  const motsProposes = ["Voiture", "Maison", "Chien", "Chat", "Ordinateur", "Livre", "Jardin", "Musique", "Voyage", "Cuisine", "Montagne", "Plage", "Film", "Sport", "Amour", "Famille", "Travail", "Etude", "Nature", "Art","Portail","Limite", "Football"]; // Liste des mots proposés
  const motsCopie = [...motsProposes]; // Créer une copie de la liste originale
   // Sélectionner de manière aléatoire les mots et les ajouter à la liste aléatoire
  while (motsAleatoires.length < maximum && motsCopie.length > 0) {
    const indexAleatoire = Math.floor(Math.random() * motsCopie.length);
    const motAleatoire = motsCopie.splice(indexAleatoire, 1)[0];
    motsAleatoires.push(motAleatoire);
  }
   return motsAleatoires;
}
 // Fonction pour générer une liste aléatoire de phrases
function genererPhrasesAleatoires(maximum) {
  const phrasesAleatoires = [];
  const phrasesProposees = ["C'est une belle journée.", "Je suis heureux.", "Vive la vie.", "Quel temps magnifique !", "J'adore voyager.", "La musique me fait du bien.", "J'aime cuisiner.", "Le jardin est un endroit paisible.", "Les animaux sont adorables.", "La lecture est enrichissante.", "Je suis passionné par l'art.", "Le sport me motive.", "La famille est importante.", "Je travaille dur pour réussir.", "Je suis en train d'étudier pour mon examen.", "La nature est magnifique.", "J'aime regarder des films.", "L'amour est essentiel.", "La montagne est impressionnante.", "La plage est relaxante."]; // Liste des phrases proposées
  const phrasesCopie = [...phrasesProposees]; // Créer une copie de la liste originale
   // Sélectionner de manière aléatoire les phrases et les ajouter à la liste aléatoire
  while (phrasesAleatoires.length < maximum && phrasesCopie.length > 0) {
    const indexAleatoire = Math.floor(Math.random() * phrasesCopie.length);
    const phraseAleatoire = phrasesCopie.splice(indexAleatoire, 1)[0];
    phrasesAleatoires.push(phraseAleatoire);
  }
   return phrasesAleatoires;
}