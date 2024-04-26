import {Element} from "./Element.js";


class Model {
    constructor() {
        console.log("Initializing Model")

        this.points;
        this.pointsPerSecond = 0;

        this.elements;

        this.loadGameState()
    }

    loadGameState() {
        console.log("Attempting to load save");
        if (this.isNewGame()) {
            this.newGameState();
            return;
        };

        this.points = Number(localStorage.getItem("points"));

        this.elements = [];
        let elementJson = JSON.parse(localStorage.getItem("elements"));
        for (let i = 0; i < elementJson.length; i++) {
            let elementObject = elementJson[i];
            this.elements.push(
                new Element(
                    elementObject["name"],
                    elementObject["DEFAULT_PRICE"],
                    elementObject["amount"],
                    elementObject["DEFAULT_CLICK_VALUE"],
                    elementObject["clickValueUpgrades"],
                    elementObject["spritePath"]
                )
            )
        };
    }

    isNewGame() {
        console.log("Checking if new game");

        if (localStorage.getItem("points") === null) {
            return true;
        };

        return false;
    }

    newGameState() {
        console.log("Creating new game save");
        this.points = 0;

        this.DEFAULT_BOOST_CHANCE = 1;
        this.boostChanceUpgrades = 0;

        this.elements = [
            new Element("grandma", 10, 0, 1, 0, "grandma.png"),
        ];

        this.saveGameState();
    }

    saveGameState() {
        console.log("Saving game state");
        localStorage.setItem("points", this.points);

        let elementsArray = []

        for (let i = 0; i < this.elements.length; i++) {
            let element = this.elements[i];
            let elementObject = {
                "name": element.name,
                "DEFAULT_PRICE": element.DEFAULT_PRICE,
                "amount": element.amount,
                "DEFAULT_CLICK_RATE": element.DEFAULT_CLICK_RATE,
                "clickRateUpgrades": element.clickRateUpgrades,
                "DEFAULT_CLICK_VALUE": element.DEFAULT_CLICK_VALUE,
                "clickValueUpgrades": element.clickValueUpgrades,
                "spritePath": element.spritePath
            };
            elementsArray.push(elementObject);
        };

        localStorage.setItem("elements", JSON.stringify(elementsArray));
    }

    logGameState() {
        console.log(
            this.points,
            this.clickValueUpgrades,
            this.DEFAULT_BOOST_CHANCE,
            this.boostChanceUpgrades,
            this.elements
        );
    }
}


export {Model};