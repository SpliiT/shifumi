// Définition des variables et constantes
const choix = ["pierre", "papier", "ciseaux", "puit", "jul"];
let scoreJoueur = 0; // Initialisation du score du joueur
let scoreOrdinateur = 0; // Initialisation du score de l'ordinateur
let nombreVictoiresNecessaires = 3; // Nombre de victoires nécessaires pour gagner

// Fonction pour changer le mode de jeu
function changerModeJeu() {
  const selectMode = document.getElementById("mode");
  nombreVictoiresNecessaires = parseInt(selectMode.value); // Mettre à jour le nombre de victoires nécessaires
  réinitialiserScores(); // Réinitialiser les scores
}

// Fonction pour réinitialiser les scores
function réinitialiserScores() {
  scoreJoueur = 0;
  scoreOrdinateur = 0;
  document.getElementById(
    "score"
  ).innerText = `Joueur ${scoreJoueur} - ${scoreOrdinateur} Ordinateur`;
  document.getElementById("score").style.display = "none"; // Masquer la section du score
}

// Fonction pour que l'ordinateur fasse un choix aléatoire
function PrendreChoixOrdinateur(choixjoueur) {
  const randomIndex = Math.floor(Math.random() * 3);

  if (document.body.classList.contains("dark-theme") && choixjoueur === "jul") {
    return "jul";
  } else {
    return choix[randomIndex];
  }
}

// Fonction pour comparer les choix du joueur et de l'ordinateur et déterminer le gagnant
function choisirOption(choixjoueur) {
  const choixordinateur = PrendreChoixOrdinateur(choixjoueur);

  // Affichage des choix du joueur et de l'ordinateur
  document.getElementById(
    "joueur"
  ).innerHTML = `<h3 style="margin-top: 30px">Joueur 👤</h3><img src="assets/img/${choixjoueur}j.png">`;
  document.getElementById(
    "ordinateur"
  ).innerHTML = `<h3 style="margin-top: 30px">Ordinateur 🤖</h3><img src="assets/img/${choixordinateur}o.png">`;

  // Logique pour déterminer le résultat du jeu
  if (
    (choixjoueur === "papier" && choixordinateur === "papier") ||
    (choixjoueur === "pierre" && choixordinateur === "pierre") ||
    (choixjoueur === "ciseaux" && choixordinateur === "ciseaux")
  ) {
    document.getElementById("resultat-text").innerText = "Égalité 🤝";
  } else if (
    (choixjoueur === "pierre" && choixordinateur === "ciseaux") ||
    (choixjoueur === "papier" && choixordinateur === "pierre") ||
    (choixjoueur === "ciseaux" && choixordinateur === "papier")
  ) {
    document.getElementById("resultat-text").innerText = "Joueur 👤 a gagné !";
    scoreJoueur++;
  } else if (
    (choixjoueur === "puit" && choixordinateur === "ciseaux") ||
    (choixjoueur === "puit" && choixordinateur === "pierre")
  ) {
    document.getElementById("resultat-text").innerText =
      "Joueur 👤 a gagné (en trichant) !";
    scoreJoueur++;
  } else if (choixjoueur === "puit" && choixordinateur === "papier") {
    document.getElementById("resultat-text").innerText =
      "Joueur 👤 a perdu (en trichant, la honte) !";
    scoreOrdinateur++;
  } else if (choixjoueur === "jul" && choixordinateur === "jul") {
    document.getElementById("resultat-text").innerText =
      "On m'appelle l'ovni 🛸👽";
  } else {
    document.getElementById("resultat-text").innerText =
      "Ordinateur 🤖 a gagné ! ";
    scoreOrdinateur++;
  }

  document.getElementById(
    "score"
  ).innerHTML = `Joueur ${scoreJoueur} - ${scoreOrdinateur} Ordinateur`;

  if (document.getElementById("score").style.display === "none") {
    document.getElementById("score").style.display = "block";
  }

  // Vérifier s'il y a un gagnant et afficher un message approprié
  if (scoreJoueur === nombreVictoiresNecessaires) {
    afficherMessageVictoireJoueur(``);
    réinitialiserScores();
  } else if (scoreOrdinateur === nombreVictoiresNecessaires) {
    afficherMessageVictoireOrdi(``);
    réinitialiserScores();
  }
}

// Fonction pour afficher un message de victoire pour le joueur
function afficherMessageVictoireJoueur(message) {
  const resultatContainer = document.getElementById("resultat-text");
  resultatContainer.innerText = message;

  const imageElement = document.createElement("img");
  imageElement.src = "assets/img/winjoueur.png";
  imageElement.style.width = "300px"; // Ajuster la largeur de l'image

  resultatContainer.appendChild(imageElement);
}

// Fonction pour afficher un message de victoire pour l'ordinateur
function afficherMessageVictoireOrdi(message) {
  const resultatContainer = document.getElementById("resultat-text");
  resultatContainer.innerText = message;

  const imageElement = document.createElement("img");
  imageElement.src = "assets/img/winordi.png";
  imageElement.style.width = "300px"; // Ajuster la largeur de l'image

  resultatContainer.appendChild(imageElement);
}
