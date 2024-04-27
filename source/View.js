class View {
    constructor() {
    }

    displayTotalPoints(points) {
        let totalPoints = document.getElementById("totalPoints");
        totalPoints.innerHTML = `${points} points`;
    }

    displayPointsPerSecond(pointsPerSecondValue) {
        let pointsPerSecond = document.getElementById("pointsPerSecond");
        pointsPerSecond.innerHTML = `${pointsPerSecondValue} points/second`;
    }

    displayElement(element) {
        let elementDiv = document.createElement("div");
        elementDiv.className = "elementDiv";

        // Add the element's image
        let elementImage = document.createElement("img");
        elementImage.src = element.spritePath;
        elementImage.style.width = "100px"; // Adjust size as needed
        elementImage.style.height = "auto";
        elementDiv.appendChild(elementImage);

        // Add the element's name
        elementDiv.innerHTML += ` ${element.name}`;

        let elementsSide = document.getElementById("elementsSide");
        elementsSide.appendChild(elementDiv);
    }
}

export {View};
