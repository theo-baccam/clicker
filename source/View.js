class View {
    constructor() {
    }

    displayTotalPoints(points) {
        let totalPoints = document.getElementById("totalPoints");

        totalPoints.innerHTML = `${points} points`;
    }

    displayPointsPerSecond(pointsPerSecondValue) {
        let pointsPerSecond = document.getElementById("pointsPerSecond");

        pointsPerSecond.innerHTML = `${pointsPerSecondValue} points/second`
    }

    displayElement(element) {
        let elementDiv = document.createElement("div")
        elementDiv.className = "elementDiv"
        elementDiv.innerHTML = element.name

        let elementsSide = document.getElementById("elementsSide")
        elementsSide.appendChild(elementDiv)
    }
}


export {View};