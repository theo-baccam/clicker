// Initialisation des variables
let points = 0;
let clickValue = 1;
let autoClickValue = 0;
let autoClickInterval;

// Vérifier s'il y a des données stockées dans localStorage
if (localStorage.getItem("points")) {
    points = parseInt(localStorage.getItem("points"));
    clickValue = parseInt(localStorage.getItem("clickValue"));
    autoClickValue = parseInt(localStorage.getItem("autoClickValue"));
}

// Mise à jour de l'affichage
function updateDisplay() {
    document.getElementById("points").textContent = points;
    document.getElementById("clickValue").textContent = clickValue;
    document.getElementById("autoClickValue").textContent = autoClickValue;
}

// Gestion du clic
document.getElementById("clickButton").addEventListener("click", function() {
    points += clickValue;
    updateDisplay();
});

// Achat d'un élément
document.getElementById("buyItem").addEventListener("click", function() {
    if (points >= 10) {
        points -= 10;
        clickValue += 1;
        updateDisplay();
    }
});

// Achat d'un bonus
document.getElementById("buyBonus").addEventListener("click", function() {
    if (points >= 50) {
        points -= 50;
        autoClickValue += 1;
        if (!autoClickInterval) {
            autoClickInterval = setInterval(function() {
                points += autoClickValue;
                updateDisplay();
            }, 1000);
        }
        updateDisplay();
    }
});

// Stocker les données dans localStorage
function saveGame() {
    localStorage.setItem("points", points);
    localStorage.setItem("clickValue", clickValue);
    localStorage.setItem("autoClickValue", autoClickValue);
}

// Sauvegarder régulièrement
setInterval(saveGame, 30000);

// Initialiser l'affichage
updateDisplay();
