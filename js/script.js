document.getElementById("themeSwitch").addEventListener("change", function () {
  img = document.getElementById("gameImage"); // Sélection de l'élément image du jeu
  github = document.getElementById("github"); // Sélection de l'élément github
  document.body.classList.toggle("dark-theme", this.checked); // Basculement du thème sombre

  if (document.body.classList.contains("dark-theme")) {
    // Si le thème sombre est activé
    github.src = "/assets/img/github2.png"; // Changement de l'image github
    img.src = "/assets/img/easteregg.png"; // Changement de l'image du jeu
    img.id = "gameImage"; // Modification de l'ID de l'image
    img.onclick = function () {
      choisirOption("jul"); // Appel de la fonction choisirOption avec l'option 'jul'
    };
  } else {
    // Si le thème sombre n'est pas activé
    img.src = "/assets/img/rock.png"; // Changement de l'image du jeu
    github.src = "/assets/img/github.png"; // Changement de l'image github

    img.onclick = function () {
      choisirOption("puit"); // Appel de la fonction choisirOption avec l'option 'puit'
    };
  }
});

let customDivs = document.querySelectorAll(".one", ".logo", ".easteregg"); // Sélection de certains éléments div personnalisés
customDivs.forEach(function (div) {
  div.addEventListener("click", function () {
    if (document.getElementById("themeSwitch").checked) {
      // Si le thème sombre est activé
      div.classList.toggle("dark-theme"); // Basculement du thème sombre pour l'élément div
    }
  });
});
