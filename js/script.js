document.getElementById("themeSwitch").addEventListener("change", function () {
  img = document.getElementById("gameImage");
  github = document.getElementById("github");
  document.body.classList.toggle("dark-theme", this.checked);

  if (document.body.classList.contains("dark-theme")) {
    github.src = "/assets/img/github2.png";
    img.src = "/assets/img/easteregg.png";
    img.id = "gameImage";
    img.onclick = function() {
        choisirOption('jul');
    };
  } else {
    img.src = "/assets/img/rock.png";
    github.src = "/assets/img/github.png";

    img.onclick = function() {
      choisirOption('puit');
    };
  }
});

let customDivs = document.querySelectorAll(".one", ".logo", ".easteregg");
customDivs.forEach(function (div) {
  div.addEventListener("click", function () {
    if (document.getElementById("themeSwitch").checked) {
      div.classList.toggle("dark-theme");
    }
  });
});
