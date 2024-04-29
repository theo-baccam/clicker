import {Model} from "./Model.js";
import {View} from "./View.js";

// Controller class that handles the game logic
class Controller {
    constructor() {
        // Initialize model and view
        this.model = new Model();
        this.view = new View();

        // Start the game
        this.initialize();
    }

    // Initialize the game
    initialize() {
        // Display initial points and points per second
        this.view.displayTotalPoints(this.model.points);
        this.view.displayPointsPerSecond(this.model.pointsPerSecond)

        // Bind clicker button and start points per second interval
        this.bindClickerClick();
        this.pointsPerSecondsInterval();

        // Display elements and bind buttons
        this.displayElements();
        this.bindBuyButtons();
        this.bindSellButtons();
        this.bindUpgradeButtons();
    }

    // Bind clicker button to increase points
    bindClickerClick() {
        let clickerButton = document.getElementById("clickerButton");

        // On button press, increase points and points per second
        clickerButton.addEventListener("mousedown", async () => {
            this.view.displayClickerDown();
            this.model.points++;
            this.model.pointsPerSecond++;
            await this.model.saveGameState();
            this.view.displayTotalPoints(this.model.points);
        });

        // On button release, display clicker up
        clickerButton.addEventListener("mouseup", () => {
            this.view.displayClickerUp();
        });
    }

    // Interval to increase points per second
    pointsPerSecondsInterval() {
        setInterval(async () => {
                for (let i = 0; i < this.model.elements.length; i++) {
                    let element = this.model.elements[i];
                    if (element.amount <= 0) {
                        break;
                    };
                    this.model.points += element.getClickValue();
                    await this.model.saveGameState();
                    this.model.pointsPerSecond += element.getClickValue();
                };
                this.view.displayTotalPoints(this.model.points);
                this.view.displayPointsPerSecond(this.model.pointsPerSecond);
                this.model.pointsPerSecond = 0;
            },
            1000
        )
    }

    // Display game elements
    displayElements() {
        for (let i = 0; i < this.model.elements.length; i++) {
            let element = this.model.elements[i];
            this.view.displayElement(element);
        }
    }

    // Bind buy buttons to purchase elements
    bindBuyButtons() {
        for (let i = 0; i < this.model.elements.length; i++) {
            let element = this.model.elements[i];
            let buyButton = document.getElementById(`${element.name}BuyButton`);

            // On button hover, display element details
            buyButton.addEventListener("pointerenter", () => {
                this.view.updateAmountText(element.amount);
                this.view.updateUpgradesText(element);
                this.view.updatePriceText(`-${element.getBuyPrice().toFixed(2)}$`);
            });

            // On button click, purchase element if enough points
            buyButton.addEventListener("click", async () => {
                if (element.getBuyPrice() > this.model.points) {
                    return;
                };

                this.model.points -= element.getBuyPrice();
                element.amount++;
                await this.model.saveGameState();
                this.view.displayTotalPoints(this.model.points);
                this.view.displayElementSprite(element);
                this.view.updateAmountText(element.amount);
                this.view.updateUpgradesText(element);
                this.view.updatePriceText(`-${element.getBuyPrice().toFixed(2)}$`);
            });

            // On button unhover, clear element details
            buyButton.addEventListener("pointerleave", () => {
                this.view.updateAmountText(null);
                this.view.updateUpgradesText(null);
                this.view.updatePriceText("");
            });
        };
    }

    // Bind sell buttons to sell elements
    bindSellButtons() {
        for (let i = 0; i < this.model.elements.length; i++) {
            let element = this.model.elements[i];
            let sellButton = document.getElementById(`${element.name}SellButton`);

            // On button hover, display element details
            sellButton.addEventListener("pointerenter", () => {
                this.view.updateAmountText(element.amount);
                this.view.updateUpgradesText(element);
                this.view.updatePriceText(`+${element.getSellPrice().toFixed(2)}$`);
            });

            // On button click, sell element
            sellButton.addEventListener("click", async () => {
                this.model.points += element.getSellPrice();
                element.amount--;
                await this.model.saveGameState();
                this.view.displayTotalPoints(this.model.points);
                this.view.displayElementSprite(element);
                this.view.updateAmountText(element.amount);
                this.view.updateUpgradesText(element);
                this.view.updatePriceText(`+${element.getSellPrice().toFixed(2)}$`);
            });

            // On button unhover, clear element details
            sellButton.addEventListener("pointerleave", () => {
                this.view.updateAmountText(null);
                this.view.updateUpgradesText(null);
                this.view.updatePriceText("");
            });
        };
    }

    // Bind upgrade buttons to upgrade elements
    bindUpgradeButtons() {
        for (let i = 0; i < this.model.elements.length; i++) {
            let element = this.model.elements[i];
            let upgradeButtons = document.getElementById(
                `${element.name}UpgradeButton`
            );

            // On button hover, display element details
            upgradeButtons.addEventListener("pointerenter", () => {
                this.view.updateAmountText(element.amount);
                this.view.updateUpgradesText(element);
                this.view.updatePriceText(`-${element.getUpgradePrice().toFixed(2)}$`);
            });

            // On button click, upgrade element if enough points
            upgradeButtons.addEventListener("click", async () => {
                if (element.getUpgradePrice() > this.model.points) {
                    return;
                };

                this.model.points -= element.getUpgradePrice();
                element.clickValueUpgrades++;
                await this.model.saveGameState();
                this.view.displayTotalPoints(this.model.points);
                this.view.displayElementSprite(element);
                this.view.updateAmountText(element.amount);
                this.view.updateUpgradesText(element);
                this.view.updatePriceText(`-${element.getUpgradePrice().toFixed(2)}$`);
            });

            // On button unhover, clear element details
            upgradeButtons.addEventListener("pointerleave", () => {
                this.view.updateAmountText(null);
                this.view.updateUpgradesText(null);
                this.view.updatePriceText("");
            });
        };
    }
}

// Export Controller class
export {Controller};