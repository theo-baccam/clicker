class View {
    displayTotalPoints(points) {
        let totalPoints = document.getElementById("totalPoints");

        if (points % 1 === 0) {
            totalPoints.innerHTML = `${points}$`;
        } else {
            totalPoints.innerHTML = `${points.toFixed(2)}$`;
        };
    }

    displayPointsPerSecond(pointsPerSecondValue) {
        let pointsPerSecond = document.getElementById("pointsPerSecond");

        pointsPerSecond.innerHTML = `${pointsPerSecondValue}$ per sec.`;
    }

    displayClickerDown() {
        let clickerButton = document.getElementById("clickerButton");
        clickerButton.src = "assets/shovel2.png"
    }

    displayClickerUp() {
        let clickerButton = document.getElementById("clickerButton");
        clickerButton.src = "assets/shovel1.png"
    }

    updateAmountText(amount) {
        let amountText = document.getElementById("amount");
        if (amount === null) {
            amountText.innerHTML = "";
            return;
        };

        amountText.innerHTML = `Amount: ${amount}`;
    }

    updatePriceText(string) {
        let priceText = document.getElementById("price");
        priceText.innerHTML = string;
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
        elementDiv.appendChild(elementButtonsDiv);

        let elementBuyButton = document.createElement("img");
        elementBuyButton.className = "elementButton";
        elementBuyButton.id = `${element.name}BuyButton`;
        elementBuyButton.src = "assets/buy.png";
        elementButtonsDiv.appendChild(elementBuyButton);

        let elementSellButton = document.createElement("img");
        elementSellButton.className = "elementButton";
        elementSellButton.id = `${element.name}SellButton`;
        elementSellButton.src = "assets/sell.png";
        elementButtonsDiv.appendChild(elementSellButton);

        let elementUpgradeButton = document.createElement("img");
        elementUpgradeButton.className = "elementButton";
        elementUpgradeButton.id = `${element.name}UpgradeButton`;
        elementUpgradeButton.src = "assets/upgrade.png";
        elementButtonsDiv.appendChild(elementUpgradeButton);
    }

    displayElementSprite(element) {
        let elementSprites = document.getElementsByClassName(`
            ${element.name}Sprite
        `);
        while (elementSprites[0]) {
            elementSprites[0].remove();
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