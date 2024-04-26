class View {
    constructor() {
    }

    displayTotalPoints(points) {
        let totalPoints = document.getElementById("totalPoints")

        totalPoints.innerHTML = `${points} points`
    }
}


export {View};