class View {
    displayTotalPoints(points) {
        let totalPoints = document.getElementById("totalPoints");

        totalPoints.innerHTML = `${points} points`;
    }

    displayPointsPerSecond(pointsPerSecondValue) {
        let pointsPerSecond = document.getElementById("pointsPerSecond");

        pointsPerSecond.innerHTML = `${pointsPerSecondValue} points/second`
    }

    displayElement(element) {
        let elementsSide = document.getElementById("elementsSide");

        let elementDiv = document.createElement("div");
        elementDiv.className = "elementDiv";
        elementDiv.id = `${element.name}Div`;
        elementsSide.appendChild(elementDiv);

        let elementDisplayDiv = document.createElement("div");
        elementDisplayDiv.className = "elementDisplayDiv";
        elementDisplayDiv.id = `${element.name}DisplayDiv`;
        elementDisplayDiv.innerHTML = `${element.name} ${element.amount}`;
        elementDiv.appendChild(elementDisplayDiv);

        let elementButtonsDiv = document.createElement("div");
        elementButtonsDiv.className = "elementButtonDiv";
        elementButtonsDiv.id = `${element.name}ButtonsDiv`;
        const width = elementDisplayDiv.offsetHeight / 3;
        elementButtonsDiv.style.width = `${width}px`;
        elementDiv.appendChild(elementButtonsDiv);

        let elementBuyButton = document.createElement("button");
        elementBuyButton.className = "elementButton"
        elementButtonsDiv.appendChild(elementBuyButton);

        let elementSellButton = document.createElement("button");
        elementSellButton.className = "elementButton"
        elementButtonsDiv.appendChild(elementSellButton);

        let elementUpgradeButton = document.createElement("button");
        elementUpgradeButton.className = "elementButton"
        elementButtonsDiv.appendChild(elementUpgradeButton);
    }
}


export {View};