// Je stock tout mes icone menu
const tabs = document.querySelectorAll('.tab')
// Je stock tout mon content
const tabContents = document.querySelectorAll(".tab-content")

const cookieSucc = document.getElementById('cookiesucces')
const grandmaSucc = document.getElementById('logograndma')
const succMuscl = document.getElementById('musclesucces')
const succFour = document.getElementById('ovensucces')


// Récupère le nombre de clics sauvegardé localement (s'il existe)
let clicks = localStorage.getItem("clicks");

// Récupère les stats par click (s'il existe)
let perClicks = localStorage.getItem("perclicks");
let perClicksPrice = localStorage.getItem("perclicksprice");
let goldCook = localStorage.getItem("goldcook");
let grandMa = localStorage.getItem("grandma");

//Pour les stats a la seconde
let clickCount = 0;
let timeElapsed = 0;
let clickRate = 0;
const imgCookie = document.getElementById('main-cookie');

// Récupère les stats par click (s'il existe)
let perSeconds = localStorage.getItem("perseconds");
let perSecondsPrice = localStorage.getItem("persecondsprice");
let giveCook = false;

if (perSeconds >= 1){
  launchAutomatiqueCookie()
}

// STOCKAGE DES DONNEES :
// Vérifie si le navigateur prend en charge le stockage local
if (typeof(Storage) !== "undefined") {

    if (clicks !== null) {
      // Met à jour le nombre de clics avec la valeur stockée localement
      document.getElementById("clicks").textContent = clicks;
    } else {
      localStorage.setItem("clicks", 1);
      console.log("clicks pas trouvé, Départ a 0 !")
      location.reload();
    }

    //Initialise la donnée perClicks
    if (perClicks !== null) {
      // Met à jour le nombre de perclicks avec la valeur stockée localement
      document.getElementById("perClicks").textContent = perClicks;
      console.log("perClicks trouvé !")
    } else {
      // Initialise le nombre de perclicks à 1 s'il n'existe pas encore
      localStorage.setItem("perclicks", 1);
      console.log("perClicks pas trouvé, Départ a 1 !")
    }

    //Initialise la donnée perClicksPrice
    if (perClicksPrice !== null) {
      // Met à jour le nombre de perClicksPrice avec la valeur stockée localement
      document.getElementById("perClicksPrice").textContent = perClicksPrice;
      console.log("perClicksPrice trouvé !")
    } else {
      // Initialise le nombre de perclicksprice à 25 s'il n'existe pas encore
      localStorage.setItem("perclicksprice", 25);
      console.log("perClicksPrice pas trouvé, Départ a 25 !")
    }

    //Initialise la donnée perSeconds
    if (perSeconds !== null) {
      // Met à jour le nombre de perClicksPrice avec la valeur stockée localement
      document.getElementById("perSeconds").textContent = perSeconds;
      console.log("perSeconds trouvé !")
    } else {
      // Initialise le nombre de perSeconds à 0 s'il n'existe pas encore
      localStorage.setItem("perseconds", 0);
      console.log("perSeconds pas trouvé, Départ a 0 !")
    }

    //Initialise la donnée perSeconds
    if (perSecondsPrice !== null) {
      // Met à jour le nombre de perSecondsPrice avec la valeur stockée localement
      document.getElementById("perSecondsPrice").textContent = perSecondsPrice;
      console.log("perSecondsPrice trouvé !")
    } else {
      // Initialise le nombre de perSecondsPrice à 30 s'il n'existe pas encore
      localStorage.setItem("persecondsprice", 30);
      console.log("perSecondsPrice pas trouvé, Départ a 30 !")
    }

    //Initialise la donnée goldCook
    if (goldCook !== null){
      console.log("goldCook trouvé !")
    } else {
      // Initialise le nombre de goldCook à 0 s'il n'existe pas encore
      localStorage.setItem("goldcook", 0)
      console.log("goldcook pas trouvé, Départ a 0")
    }
    if (goldCook == 1){
      goldSucces()
    }

      //Initialise la donnée goldCook
      if (grandMa !== null){
        console.log("grandMa trouvé !")
      } else {
        // Initialise le nombre de goldCook à 0 s'il n'existe pas encore
        localStorage.setItem("grandma", 0)
        console.log("grandMa pas trouvé, Départ a 0")
      }
      if (perSeconds >= 15){
        grandmaSucces()
      }

} else {
  // Le navigateur ne prend pas en charge le stockage local
  document.getElementById("clicks").textContent = "Désolé, votre navigateur ne prend pas en charge le stockage local.";
}

// Fonction appelée lorsque le joueur clique sur le bouton
function onClick() {
  // Récupère le nombre de clics actuel + boost
  let clicks = parseInt(document.getElementById("clicks").textContent);
  let perClicks = parseInt(document.getElementById("perClicks").textContent);
  
  // Incrémente le nombre de clics
  clicks += perClicks;  // Affiche le nouveau nombre de clics

  document.getElementById("clicks").textContent = clicks;
  // Stocke le nouveau nombre de clics localement
  localStorage.setItem("clicks", clicks);
}

function launchAutomatiqueCookie(){
  if (giveCook === false){
    setInterval(function(){
      let perSeconds = localStorage.getItem("perseconds");
      let clicks = parseInt(document.getElementById("clicks").textContent);
        clicks += +perSeconds;

      document.getElementById("clicks").textContent = clicks;
      localStorage.setItem("clicks", clicks);
    }, 1000)
    giveCook = true
  }
}

function cpcUp(){
  let clicks = parseInt(document.getElementById("clicks").textContent);
  
  //Ici on vérifie si le joueurs possède une quantité de cookie (clicks) supérieur ou égal au prix d'achat de l'amélioration(perClicksPrice).
  if (clicks >= perClicksPrice) {
    //Si oui :
    //On récup la valeur actuelle de l'amélioration(perClicks).
    let perClicks = parseInt(document.getElementById("perClicks").textContent);

      //on ajoute +1 a notre amélioration(perClicks)
      perClicks++;
      //On met a jour sur l'HTML la nouvelle valeur de l'amélioration(onglet du milieu)
      document.getElementById("perClicks").textContent = perClicks;

      //On déduit le prix d'achat du nombre de cookie du joueurs.
      clicks -= perClicksPrice;

      //On augmente le prix d'achat par 1.2% et on arrondit
      perClicksPrice = perClicksPrice * 1.2;
      perClicksPrice = Math.round(perClicksPrice);

    //On met a jours l'HTML avec les nouvelles valeurs (clicks = nombre de cookie / perClicksPrice = prix de l'amélio.)
    document.getElementById("clicks").textContent = clicks;
    document.getElementById("perClicksPrice").textContent = perClicksPrice;

    //Puis on met a jours les données du localStorage avec les nouvelles valeurs.
    localStorage.setItem("clicks", clicks);
    localStorage.setItem("perclicks", perClicks);
    localStorage.setItem("perclicksprice", perClicksPrice);

    //Si le joueurs n'a pas assez de cookie alors on affiche un message d'erreur
  } else {
    alert("Not Enough Cookies!");

  }
}

function secUp(){
  let clicks = parseInt(document.getElementById("clicks").textContent);

  if(clicks >= perSecondsPrice) {
    let perSeconds = parseInt(document.getElementById("perSeconds").textContent);
    perSeconds++;
    document.getElementById('perSeconds').textContent = perSeconds;

    clicks -= perSecondsPrice;
    perSecondsPrice = perSecondsPrice * 1.2;
    perSecondsPrice = Math.round(perSecondsPrice)
  document.getElementById('perSecondsPrice').textContent = perSecondsPrice;
  document.getElementById("clicks").textContent = clicks;

  localStorage.setItem("clicks", clicks);
  localStorage.setItem("persecondsprice", perSecondsPrice)
  localStorage.setItem("perseconds", perSeconds);
  launchAutomatiqueCookie()

  if(perSeconds >= 15){
    grandmaSucces()
  }
} else {
    alert("Not Enough Cookies!");
  }
}



setInterval(function() {
  timeElapsed += 1;
  if (timeElapsed === 10) {
    clickRate = clickCount / 10;
    sessionStorage.setItem('clickRate', clickRate);
    clickCount = 0;
    timeElapsed = 0;

    console.log(clickRate)
    if (clickRate > 1 && clickRate < 3){
      console.log("JE SUIS PLUTOT BON")
      imgCookie.src = "assets/main-cookie-chocolat.png"
    } else if (clickRate >= 3){
      console.log("JE SUIS SUPER BON")
      imgCookie.src = "assets/main-cookie-gold.png"
      localStorage.setItem("goldcook", 1)
      goldSucces()
    } else if (clickRate < 1){
      console.log("JE JOUE PAS")
      imgCookie.src = "assets/cookie.png"
    }
  }
}, 1000);

document.getElementById('main-cookie').addEventListener('click', function() {
  clickCount += 1;
});






//Ici j'affiche une alerte au click des succès pour afficher une petite description (Jolie fenêtre plus tard)
grandmaSucc.addEventListener('click', function() {
  alert("Grand-mère te cuisine 15 cookies par seconde ! Woah !");
})
cookieSucc.addEventListener('click', function() {
  alert("Ceci est un succès secret !");
})
succMuscl.addEventListener('click', function() {
  alert("tu cuisines 10 cookies par fournée !");
})
succFour.addEventListener('click', function() {
  alert("Tu cuisines 40 cookie par fournée ! quel talent !");
})

//On récup les valeurs, puis on vérifie si le succès a déjà été atteint alors on affiche
function goldSucces(){
  let goldCook = localStorage.getItem("goldcook")

  if (goldCook == 1){
    console.log("J'ai le succes goldcook")
    cookieSucc.style.backgroundColor = '#BF8211';
  }
}

//On récup les valeurs, puis on vérifie si l'amélioration est sup ou égal a 15, si oui on affiche le succes
function grandmaSucces(){
  let grandMa = localStorage.getItem("grandma");
  let perSeconds = localStorage.getItem("perseconds");

  if (perSeconds >= 15){
    console.log("J'ai le succes grandma")
    grandmaSucc.style.backgroundColor = '#BF8211';
  }
}

function tabsAnimation(num){
  //On retirer la class de la tab a retirer (tab + content)
  tabs.forEach((tab, index) => {
    tab.classList.remove("active-tab")
      tabContents[index].classList.remove("active-tab-content")
  })

  // On ajoute la class pour montrer tab + content
  tabs[num].classList.add("active-tab")
  tabContents[num].classList.add("active-tab-content")
}
  
const modeSombreToggle = document.querySelector('.checkbox');
modeSombreToggle.addEventListener('click', () => {
    document.body.classList.toggle('body-sombre');
});


console.log("ALORS ON ESSAYE DE TRICHER PETIT COCHON ?")
