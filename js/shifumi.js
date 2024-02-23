const choix = ["pierre", "papier", "ciseaux", "puit", "jul"];
let scoreJoueur = 0;
let scoreOrdinateur = 0;
let nombreVictoiresNecessaires = 3;

function changerModeJeu() {
  const selectMode = document.getElementById("mode");
  nombreVictoiresNecessaires = parseInt(selectMode.value);
  réinitialiserScores();
}

function réinitialiserScores() {
  scoreJoueur = 0;
  scoreOrdinateur = 0;
  document.getElementById("score").innerText = `Joueur ${scoreJoueur} - ${scoreOrdinateur} Ordinateur`;
  document.getElementById("score").style.display = "none"; // Masquer la section du score
}

function PrendreChoixOrdinateur(choixjoueur) {
  const randomIndex = Math.floor(Math.random() * 3);

  if (
    document.body.classList.contains("dark-theme") &&
    choixjoueur === "jul"
  ) {
    return "jul";
  } else {
    return choix[randomIndex];
  }
}

function choisirOption(choixjoueur) {
  const choixordinateur = PrendreChoixOrdinateur(choixjoueur);
  document.getElementById(
    "joueur"
  ).innerHTML = `<h3 style="margin-top: 30px">Joueur 👤</h3><img src="assets/img/${choixjoueur}j.png">`;
  document.getElementById(
    "ordinateur"
  ).innerHTML = `<h3 style="margin-top: 30px">Ordinateur 🤖</h3><img src="assets/img/${choixordinateur}o.png">`;

  if (choixjoueur === "papier" && choixordinateur === "papier" || choixjoueur === "pierre" && choixordinateur === "pierre" || choixjoueur === "ciseaux" && choixordinateur === "ciseaux") {
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

  document.getElementById("score").innerHTML = `Joueur ${scoreJoueur} - ${scoreOrdinateur} Ordinateur<br>`;

  if (document.getElementById("score").style.display === "none") {
    document.getElementById("score").style.display = "block";
  }

  if (scoreJoueur === nombreVictoiresNecessaires) {
    afficherMessageVictoireJoueur(``);
    réinitialiserScores();
} else if (scoreOrdinateur === nombreVictoiresNecessaires) {
    afficherMessageVictoireOrdi(``);
    réinitialiserScores();
}

function afficherMessageVictoireJoueur(message) {
    const resultatContainer = document.getElementById("resultat-text");
    resultatContainer.innerText = message;

    const imageElement = document.createElement("img");
    imageElement.src = "assets/img/winjoueur.png"; 
    imageElement.style.width = "300px"; // 

    resultatContainer.appendChild(imageElement);
}
}
function afficherMessageVictoireOrdi(message) {
  const resultatContainer = document.getElementById("resultat-text");
  resultatContainer.innerText = message;

  const imageElement = document.createElement("img");
  imageElement.src = "assets/img/winordi.png"; 
  imageElement.style.width = "300px"; // 

  resultatContainer.appendChild(imageElement);
}