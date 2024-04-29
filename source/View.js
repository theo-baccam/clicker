// View class that handles the display of the game
class View {
    // Display the total points on the screen
    displayTotalPoints(points) {
        let totalPoints = document.getElementById("totalPoints");

        // If points is a whole number, display without decimal places
        if (points % 1 === 0) {
            totalPoints.innerHTML = `${points}$`;
        } else {
            // If points is a decimal number, display with 2 decimal places
            totalPoints.innerHTML = `${points.toFixed(2)}$`;
        };
    }

    // Display the points per second on the screen
    displayPointsPerSecond(pointsPerSecondValue) {
        let pointsPerSecond = document.getElementById("pointsPerSecond");

        pointsPerSecond.innerHTML = `${pointsPerSecondValue}$ per sec.`;
    }

    // Display the clicker button in the down state
    displayClickerDown() {
        let clickerButton = document.getElementById("clickerButton");
        clickerButton.src = "assets/shovel2.png"
    }

    // Display the clicker button in the up state
    displayClickerUp() {
        let clickerButton = document.getElementById("clickerButton");
        clickerButton.src = "assets/shovel1.png"
    }

    // Update the amount text on the screen
    updateAmountText(amount) {
        let amountText = document.getElementById("amount");
        if (amount === null) {
            amountText.innerHTML = "";
            return;
        };

        amountText.innerHTML = `Amount: ${amount}`;
    }

    // Update the upgrades text on the screen
    updateUpgradesText(element) {
        let upgradesText = document.getElementById("upgrades")
        if (element === null) {
            upgradesText.innerHTML = "";
            return;
        };

        upgradesText.innerHTML = `
            Click Value: 
            ${element.getClickValue()} 
            (${element.clickValueUpgrades})
        `
    }

    // Update the price text on the screen
    updatePriceText(string) {
        let priceText = document.getElementById("price");
        priceText.innerHTML = string;
    }

    // Display an element on the screen
    displayElement(element) {
        let elementsSide = document.getElementById("elementsSide");

        // Create a div for the element
        let elementDiv = document.createElement("div");
        elementDiv.className = "elementDiv";
        elementDiv.id = `${element.name}Div`;
        elementsSide.appendChild(elementDiv);

        // Create a div for the element display
        let elementDisplayDiv = document.createElement("div");
        elementDisplayDiv.className = "elementDisplayDiv";
        elementDisplayDiv.id = `${element.name}DisplayDiv`;
        elementDiv.appendChild(elementDisplayDiv);

        // Create the element sprites
        for (let i = 0; i < element.amount; i++) {
            let elementSprite = document.createElement("img");
            elementSprite.className = `elementSprite ${element.name}Sprite`;
            elementSprite.src = element.spritePath;
            elementDisplayDiv.appendChild(elementSprite);
        };

        // Create a div for the element buttons
        let elementButtonsDiv = document.createElement("div");
        elementButtonsDiv.className = "elementButtonsDiv";
        elementButtonsDiv.id = `${element.name}ButtonsDiv`;
        elementDiv.appendChild(elementButtonsDiv);

        // Create the buy button for the element
        let elementBuyButton = document.createElement("img");
        elementBuyButton.className = "elementButton";
        elementBuyButton.id = `${element.name}BuyButton`;
        elementBuyButton.src = "assets/buy.png";
        elementButtonsDiv.appendChild(elementBuyButton);

        // Create the sell button for the element
        let elementSellButton = document.createElement("img");
        elementSellButton.className = "elementButton";
        elementSellButton.id = `${element.name}SellButton`;
        elementSellButton.src = "assets/sell.png";
        elementButtonsDiv.appendChild(elementSellButton);

        // Create the upgrade button for the element
        let elementUpgradeButton = document.createElement("img");
        elementUpgradeButton.className = "elementButton";
        elementUpgradeButton.id = `${element.name}UpgradeButton`;
        elementUpgradeButton.src = "assets/upgrade.png";
        elementButtonsDiv.appendChild(elementUpgradeButton);
    }

    // Display the sprite for an element
    displayElementSprite(element) {
        let elementSprites = document.getElementsByClassName(`
            ${element.name}Sprite
        `);
        // Remove existing sprites
        while (elementSprites[0]) {
            elementSprites[0].remove();
        };

        // Create new sprites
        let elementDisplayDiv = document.getElementById(`${element.name}DisplayDiv`);
        for (let i = 0; i < element.amount; i++) {
            let elementSprite = document.createElement("img");
            elementSprite.className = `elementSprite ${element.name}Sprite`;
            elementSprite.src = element.spritePath;
            elementDisplayDiv.appendChild(elementSprite);
        };
    }
}

// Export the View class
export {View};