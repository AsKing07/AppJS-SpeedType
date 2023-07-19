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
function genererMotsAleatoires(maximum) 
{
  const motsAleatoires = [];


  const motsProposes = [
    "Voiture",
    "Maison",
    "Chien",
    "Chat",
    "Ordinateur",
    "Livre",
    "Jardin",
    "Musique",
    "Voyage",
    "Cuisine",
    "Montagne",
    "Plage",
    "Film",
    "Sport",
    "Amour",
    "Famille",
    "Travail",
    "Etude",
    "Nature",
    "Art",
    "Portail",
    "Limite",
    "Football",
    "Bonheur",
    "Rêve",
    "Aventure",
    "Liberté",
    "Sourire",
    "Amitié",
    "Nature",
    "Sagesse",
    "Patience",
    "Créativité",
    "Connaissance",
    "Joie",
    "Bienveillance",
    "Harmonie",
    "Optimisme",
    "Tolérance",
    "Temps",
    "Empathie",
    "Curiosité",
    "Partage",
    "Générosité",
    "Gratitude",
    "Confiance",
    "Respect",
    "Silence",
    "Méditation",
    "Sommeil",
    "Équipe",
    "Rêve",
    "Gourmandise",
    "Tranquillité",
    "Réussite",
    "Défi",
    "Succès",
    "Entraide",
    "Bien-être",
    "Équilibre"
  ];//Liste de mots possibles
  
  
  const motsCopie = [...motsProposes]; // Créer une copie de la liste originale

   // Sélectionner de manière aléatoire les mots et les ajouter à la liste aléatoire
  while (motsAleatoires.length < maximum && motsCopie.length > 0) 
  {
    const indexAleatoire = Math.floor(Math.random() * motsCopie.length);
    const motAleatoire = motsCopie.splice(indexAleatoire, 1)[0];
    motsAleatoires.push(motAleatoire);
  }
   return motsAleatoires;
}






 // Fonction pour générer une liste aléatoire de phrases
function genererPhrasesAleatoires(maximum) 
{
  const phrasesAleatoires = [];

  const phrasesProposees = [
    "C'est une belle journée.",
    "Je suis heureux.",
    "Vive la vie.",
    "Quel temps magnifique !",
    "J'adore voyager.",
    "La musique me fait du bien.",
    "J'aime cuisiner.",
    "Le jardin est un endroit paisible.",
    "Les animaux sont adorables.",
    "La lecture est enrichissante.",
    "Je suis passionné par l'art.",
    "Le sport me motive.",
    "La famille est importante.",
    "Je travaille dur pour réussir.",
    "Je suis en train d'étudier pour mon examen.",
    "La nature est magnifique.",
    "J'aime regarder des films.",
    "L'amour est essentiel.",
    "La montagne est impressionnante.",
    "La plage est relaxante.",
    "La vie est pleine de surprises.",
    "La patience est une vertu.",
    "Le sourire est contagieux.",
    "Le rire est la meilleure thérapie.",
    "La simplicité rend heureux.",
    "La gentillesse est une force.",
    "Le respect est fondamental.",
    "La créativité nourrit l'âme.",
    "La persévérance mène au succès.",
    "La sagesse s'acquiert avec l'expérience.",
    "L'espoir donne des ailes.",
    "La liberté est précieuse.",
    "Le courage permet de surmonter les obstacles.",
    "L'amitié est un trésor.",
    "La curiosité ouvre de nouvelles portes.",
    "Le silence est parfois réparateur.",
    "L'effort est récompensé.",
    "Le partage crée des liens.",
    "La générosité illumine le monde.",
    "La gratitude transforme notre regard.",
    "Le respect de la nature est essentiel.",
    "L'amour est le moteur de la vie.",
    "Le calme apaise l'esprit.",
    "La confiance en soi est libératrice.",
    "Le savoir est une arme puissante.",
    "La joie est contagieuse.",
    "La bienveillance embellit les relations.",
    "Le voyage élargit les horizons.",
    "La découverte est une aventure.",
    "La gourmandise est un plaisir.",
    "Le sommeil est réparateur.",
    "La méditation apaise l'âme.",
    "L'optimisme ouvre des portes.",
    "La persévérance conduit au succès.",
    "Le respect des autres est primordial.",
    "L'empathie renforce les liens.",
    "La tolérance favorise l'harmonie.",
    "Le temps guérit les blessures.",
    "La patience porte ses fruits.",
    "Le travail en équipe est enrichissant.",
    "La réussite est le fruit de l'effort.",
    "Le rêve donne des ailes.",
    "La créativité est une source d'épanouissement."
  ]; // Liste des phrases proposées
 
 
  const phrasesCopie = [...phrasesProposees]; // Créer une copie de la liste originale

   // Sélectionner de manière aléatoire les phrases et les ajouter à la liste aléatoire
  while (phrasesAleatoires.length < maximum && phrasesCopie.length > 0) 
  {
    const indexAleatoire = Math.floor(Math.random() * phrasesCopie.length);
    const phraseAleatoire = phrasesCopie.splice(indexAleatoire, 1)[0];
    phrasesAleatoires.push(phraseAleatoire);
  }
   return phrasesAleatoires;
}