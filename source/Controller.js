import {Model} from "./Model.js";
import {View} from "./View.js";


class Controller {
    constructor() {
        this.model = new Model();
        this.view = new View();

        this.initialize();
    }

    initialize() {
        this.view.displayTotalPoints(this.model.points);
        this.view.displayPointsPerSecond(this.model.pointsPerSecond)
        this.bindClickerClick();
        this.pointsPerSecondsInterval();

        this.displayElements();
        this.bindBuyButtons();
        this.bindSellButtons();
        this.bindUpgradeButtons();
    }

    bindClickerClick() {
        let clickerButton = document.getElementById("clickerButton");
        
        clickerButton.addEventListener("mousedown", async () => {
            this.view.displayClickerDown();
            this.model.points++;
            this.model.pointsPerSecond++;
            await this.model.saveGameState();
            this.view.displayTotalPoints(this.model.points);
        });

        clickerButton.addEventListener("mouseup", () => {
            this.view.displayClickerUp();
        });
    }

    pointsPerSecondsInterval() {
        setInterval(async () => {
            for (let i = 0; i < this.model.elements.length; i++) {
                let element = this.model.elements[i];
                if (element.amount <= 0) {
                    break;
                };
                let addedPoints = (
                    element.DEFAULT_CLICK_VALUE
                    * (element.clickValueUpgrades + 1)
                    * element.amount
                ); 
                this.model.points += addedPoints;
                await this.model.saveGameState();
                this.model.pointsPerSecond += addedPoints;
            };
            this.view.displayTotalPoints(this.model.points);
            this.view.displayPointsPerSecond(this.model.pointsPerSecond);
            this.model.pointsPerSecond = 0;
        },
        1000
        )
    }

    displayElements() {
        for (let i = 0; i < this.model.elements.length; i++) {
            let element = this.model.elements[i];
            this.view.displayElement(element);
        }
    }

    bindBuyButtons() {
        for (let i = 0; i < this.model.elements.length; i++) {
            let element = this.model.elements[i];
            let buyButton = document.getElementById(`${element.name}BuyButton`);
            let elementPrice = (
                element.DEFAULT_PRICE
                * Math.pow(1.6, element.amount)
            );
            buyButton.addEventListener("pointerenter", () => {
                this.view.updatePriceText(`-${elementPrice.toFixed(2)}$`);
            });
            buyButton.addEventListener("click", async () => {
                if (elementPrice > this.model.points) {
                    return;
                };

                this.model.points -= elementPrice;
                element.amount++;
                await this.model.saveGameState();
                this.view.displayTotalPoints(this.model.points);
                this.view.displayElementSprite(element);
                let newPrice = (
                    element.DEFAULT_PRICE
                    * Math.pow(1.6, element.amount)
                );
                this.view.updatePriceText(`-${newPrice.toFixed(2)}$`)
            });
            buyButton.addEventListener("pointerleave", () => {
                this.view.updatePriceText("");
            });
        };
    }

    bindSellButtons() {
        for (let i = 0; i < this.model.elements.length; i++) {
            let element = this.model.elements[i];
            let sellButton = document.getElementById(`${element.name}SellButton`);
            let elementSellPrice = (
                element.DEFAULT_PRICE
                * Math.pow(1.6, element.amount - 1)
                / 2
            );
            if (element.amount <= 0) {
                elementSellPrice = 0
            };
            sellButton.addEventListener("pointerenter", () => {
                this.view.updatePriceText(`+${elementSellPrice.toFixed(2)}$`);
            });
            sellButton.addEventListener("click", async () => {
                if (element.amount <= 0) {
                    return;
                }
                this.model.points += elementSellPrice;
                element.amount--;
                await this.model.saveGameState();
                this.view.displayTotalPoints(this.model.points);
                this.view.displayElementSprite(element);
                let newPrice = (
                    element.DEFAULT_PRICE
                    * Math.pow(1.6, element.amount - 1)
                    / 2
                );
                if (element.amount <= 0) {
                    newPrice = 0
                };
                this.view.updatePriceText(`+${newPrice.toFixed(2)}$`);
            });
            sellButton.addEventListener("pointerleave", () => {
                this.view.updatePriceText("");
            });
        };
    }

    bindUpgradeButtons() {
        for (let i = 0; i < this.model.elements.length; i++) {
            let element = this.model.elements[i];
            let upgradeButtons = document.getElementById(
                `${element.name}UpgradeButton`
            );
            let elementUpgradePrice = (
                element.DEFAULT_PRICE
                * Math.pow(3.2, element.clickValueUpgrades)
            );
            upgradeButtons.addEventListener("pointerenter", () => {
                this.view.updatePriceText(`-${elementUpgradePrice.toFixed(2)}$`);
            });
            upgradeButtons.addEventListener("click", async () => {
                if (elementUpgradePrice > this.model.points) {
                    return;
                };

                this.model.points -= elementUpgradePrice;
                element.clickValueUpgrades++;
                await this.model.saveGameState();
                this.view.displayTotalPoints(this.model.points);
                this.view.displayElementSprite(element);
                let newPrice = (
                    element.DEFAULT_PRICE
                    * Math.pow(3.2, element.clickValueUpgrades)
                );
                this.view.updatePriceText(`-${newPrice.toFixed(2)}$`);
            });
            upgradeButtons.addEventListener("pointerleave", () => {
                this.view.updatePriceText("");
            });
        };
    }
}


export {Controller};