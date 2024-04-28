class View {
    displayTotalPoints(points) {
        let totalPoints = document.getElementById("totalPoints");

        if (points % 1 === 0) {
            totalPoints.innerHTML = `${points} points`;
        } else {
            totalPoints.innerHTML = `${points.toFixed(2)} points`;
        };
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
        elementDisplayDiv.innerHTML = `
            ${element.name} ${element.amount} ${element.clickValueUpgrades}
        `;
        elementDiv.appendChild(elementDisplayDiv);

        for (let i = 0; i < element.amount; i++) {
            let elementSprite = document.createElement("img");
            elementSprite.className = `elementSprite ${element.name}Sprite`;
            elementSprite.src = element.spritePath;
            elementDisplayDiv.appendChild(elementSprite);
        };

        let elementButtonsDiv = document.createElement("div");
        elementButtonsDiv.className = "elementButtonsDiv";
        elementButtonsDiv.id = `${element.name}ButtonsDiv`;
        const width = elementDisplayDiv.offsetHeight / 3;
        elementButtonsDiv.style.width = `${width}px`;
        elementDiv.appendChild(elementButtonsDiv);

        let elementBuyButton = document.createElement("button");
        elementBuyButton.className = "elementButton"
        elementBuyButton.id = `${element.name}BuyButton`
        elementButtonsDiv.appendChild(elementBuyButton);

        let elementSellButton = document.createElement("button");
        elementSellButton.className = "elementButton"
        elementSellButton.id = `${element.name}SellButton`
        elementButtonsDiv.appendChild(elementSellButton);

        let elementUpgradeButton = document.createElement("button");
        elementUpgradeButton.className = "elementButton"
        elementUpgradeButton.id = `${element.name}UpgradeButton`
        elementButtonsDiv.appendChild(elementUpgradeButton);
    }

    displayElementText(element) {
        let elementDisplayDiv = (
            document.getElementById(`${element.name}DisplayDiv`)
        );
        elementDisplayDiv.innerHTML = `
            ${element.name} ${element.amount} ${element.clickValueUpgrades}
        `;
    }

    displayElementSprite(element) {
        let elementSprites = document.getElementsByClassName(`
            ${element.name}Sprite
        `);
        for (let i = 0; i < elementSprites.length; i++) {
            let elementSprite = elementSprite[i];
            elementSprite.remove()
        };

        let elementDisplayDiv = document.getElementById(`${element.name}DisplayDiv`);
        for (let i = 0; i < element.amount; i++) {
            let elementSprite = document.createElement("img");
            elementSprite.className = `elementSprite ${element.name}Sprite`;
            elementSprite.src = element.spritePath;
            elementDisplayDiv.appendChild(elementSprite);
        };
    }
}


export {View};