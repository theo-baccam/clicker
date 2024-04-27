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
    }

    bindClickerClick() {
        let clickerButton = document.getElementById("clickerButton");
        
        clickerButton.addEventListener("click", async () => {
            this.model.points++;
            this.model.pointsPerSecond++;
            await this.model.saveGameState();
            this.view.displayTotalPoints(this.model.points);
        });
    }

    pointsPerSecondsInterval() {
        setInterval(() => {
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
            buyButton.addEventListener("click", async () => {
                let elementPrice = (
                    element.DEFAULT_PRICE
                    * Math.pow(1.6, element.amount)
                );
                if (elementPrice <= this.model.points) {
                    this.model.points -= elementPrice;
                    element.amount++;
                    await this.model.saveGameState();
                    this.view.displayTotalPoints(this.model.points);
                    this.view.displayElementAmount(element);
                };
            });
        };
    }
}


export {Controller};