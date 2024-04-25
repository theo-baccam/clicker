import {Element} from "./Element.js";


class Model {
    constructor() {
        console.log("Initializing Model")

        this.points;

        this.DEFAULT_CLICK_VALUE;
        this.clickValueUpgrades;

        this.DEFAULT_BOOST_CHANCE;
        this.boostChanceUpgrades;

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

        this.DEFAULT_CLICK_VALUE = Number(localStorage.getItem("DEFAULT_CLICK_VALUE"));
        this.clickValueUpgrades = Number(localStorage.getItem("clickValueUpgrades"));

        this.DEFAULT_BOOST_CHANCE = Number(localStorage.getItem("DEFAULT_BOOST_CHANCE"));
        this.boostChanceUpgrades = Number(localStorage.getItem("boostChanceUpgrades"));

        this.elements = [];
        let elementJson = JSON.parse(localStorage.getItem("elements"));
        for (let i = 0; i < elementJson.length; i++) {
            let elementObject = elementJson[i];
            this.elements.push(
                new Element(
                    elementObject["name"],
                    elementObject["DEFAULT_PRICE"],
                    elementObject["amount"],
                    elementObject["DEFAULT_CLICK_RATE"],
                    elementObject["clickRateUpgades"],
                    elementObject["DEFAULT_CLICK_VALUE"],
                    elementObject["clickValueUpgrades"],
                    elementObject["spritePath"]
                )
            )
        };
    }

    isNewGame() {
        console.log("Checking if new game");
        let modelVariables = [
            "points",
            "DEFAULT_CLICK_VALUE",
            "clickValueUpgrades",
            "DEFAULT_BOOST_CHANCE",
            "boostChanceUpgrades",
            "elements",
        ];

        for (let i = 0; i < modelVariables.length; i++) {
            if (localStorage.getItem(modelVariables[i]) === null) {
                console.log(`${modelVariables[i]} is null`);
                return true;
            };
        };

        return false;
    }

    newGameState() {
        console.log("Creating new game save");
        this.points = 0;

        this.DEFAULT_CLICK_VALUE = 1;
        this.clickValueUpgrades = 0;

        this.DEFAULT_BOOST_CHANCE = 1;
        this.boostChanceUpgrades = 0;

        this.elements = [
            new Element("grandma", 10, 0, 1, 0, 1, 0, "grandma.png"),
        ];

        this.saveGameState();
    }

    saveGameState() {
        console.log("Saving game state");
        localStorage.setItem("points", this.points);

        localStorage.setItem("DEFAULT_CLICK_VALUE", this.DEFAULT_CLICK_VALUE);
        localStorage.setItem("clickValueUpgrades", this.clickValueUpgrades);

        localStorage.setItem("DEFAULT_BOOST_CHANCE", this.DEFAULT_BOOST_CHANCE);
        localStorage.setItem("boostChanceUpgrades", this.clickValueUpgrades);

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
            this.DEFAULT_CLICK_VALUE,
            this.clickValueUpgrades,
            this.DEFAULT_BOOST_CHANCE,
            this.boostChanceUpgrades,
            this.elements
        );
    }
}


export {Model};