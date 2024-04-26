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
}


export {View};