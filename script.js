let points = 0;
let clickRate = 1;
let clickValue = 1;
let cps = 0;

document.getElementById("clickButton").addEventListener("click", function() {
    points += clickValue;
    updatePoints();
});

document.getElementById("buyClickRate").addEventListener("click", function() {
    if (points >= 20) {
        points -= 20;
        clickRate++;
        updatePoints();
    }
});

document.getElementById("buyClickValue").addEventListener("click", function() {
    if (points >= 30) {
        points -= 30;
        clickValue++;
        updatePoints();
    }
});

function updatePoints() {
    document.getElementById("points").innerText = points;
    cps = clickRate * clickValue;
    document.getElementById("cps").innerText = cps;
}

setInterval(function() {
    points += cps;
    updatePoints();
}, 1000);
