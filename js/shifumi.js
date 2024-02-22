const choix = ["pierre", "papier", "ciseaux", "puit", "jul"];

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
    document.getElementById("resultat-text").innerText = "Égalite 🤝";
  } else if (
    (choixjoueur === "pierre" && choixordinateur === "ciseaux") ||
    (choixjoueur === "papier" && choixordinateur === "pierre") ||
    (choixjoueur === "ciseaux" && choixordinateur === "papier")
  ) {
    document.getElementById("resultat-text").innerText = "Joueur 👤 a gagné !";
  } else if (
    (choixjoueur === "puit" && choixordinateur === "ciseaux") ||
    (choixjoueur === "puit" && choixordinateur === "pierre")
  ) {
    document.getElementById("resultat-text").innerText =
      "Joueur 👤 a gagné (en trichant) !";
  } else if (choixjoueur === "puit" && choixordinateur === "papier") {
    document.getElementById("resultat-text").innerText =
      "Joueur 👤 a perdu (en trichant, la honte) !";
  } else if (choixjoueur === "jul" && choixordinateur === "jul")
  {
    document.getElementById("resultat-text").innerText =
      "On m'appelle l'ovni  🛸👽";
  }
   else {
    document.getElementById("resultat-text").innerText =
      "Ordinateur 🤖 a gagné ! ";
  }
  document.querySelector(".result").style.display = "block";
}
