import {Element} from "./Element.js"


class Model {
    constructor() {
        console.log("Initializing Model")

        this.points;

        this.DEFAULT_CLICK_VALUE;
        this.clickValueUpgrades;

        this.DEFAULT_BOOST_CHANCE;
        this.boostChanceUpgrades;

        this.elements;
    }

    isNewGame() {
        console.log("Checking if new game")
        let modelVariables = [
            this.points,
            this.DEFAULT_CLICK_VALUE,
            this.clickValueUpgrades,
            this.DEFAULT_BOOST_CHANCE,
            this.boostChanceUpgrades,
            this.elements,
        ];

        for (let i = 0; i < modelVariables; i++) {
            if (localStorage.getItem(modelVariables[i]) === null) {
                console.log(`${modelVariables[i]} is null`)
                this.newGameState();
                return;
            };
        };
    }

    newGameState() {
        console.log("Creating new game save")
        this.points = 0;

        this.DEFAULT_CLICK_VALUE = 1;
        this.clickValueUpgrades = 0;

        this.DEFAULT_BOOST_CHANCE = 1;
        this.boostChanceUpgrades = 0;

        this.elements = []

        this.saveGameState();
    }

    saveGameState() {
        console.log("Saving game state")
        localStorage.setItem("points", this.points);

        localStorage.setItem("DEFAULT_CLICK_VALUE", this.DEFAULT_CLICK_VALUE);
        localStorage.setItem("clickValueUpgrades", this.clickValueUpgrades);

        localStorage.setItem("DEFAULT_BOOST_CHANCE", this.DEFAULT_BOOST_CHANCE);
        localStorage.setItem("boostChanceUpgrades", this.clickValueUpgrades);

        localStorage.setItem("elements", this.elements)
    }
}