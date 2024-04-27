import { Element } from "./Element.js";

class Model {
    constructor() {
        console.log("Initializing Model");
        this.points = 0;
        this.pointsPerSecond = 0;
        this.elements = [];
        this.loadGameState();
    }

    loadGameState() {
        console.log("Attempting to load save");
        if (this.isNewGame()) {
            this.newGameState();
            return;
        }

        // Load game state from localStorage
        this.points = Number(localStorage.getItem("points")) || 0;
        let elementsJson = JSON.parse(localStorage.getItem("elements")) || [];

        if (elementsJson) {
            this.elements = elementsJson.map(elementData => new Element(
                elementData.name,
                elementData.DEFAULT_PRICE,
                elementData.amount,
                elementData.DEFAULT_CLICK_RATE,
                elementData.clickRateUpgrades,
                elementData.DEFAULT_CLICK_VALUE,
                elementData.clickValueUpgrades,
                elementData.spritePath
            ));
        }
    }

    isNewGame() {
        console.log("Checking if new game");
        return localStorage.getItem("points") === null;
    }

    newGameState() {
        console.log("Creating new game save");
        this.points = 0;

        // Initialize elements, including the new submarine element
        this.elements = [
            new Element(
                "Wild Submarine",
                100, // Default price
                0, // Initial amount
                2, // Default click rate
                0, // Click rate upgrades
                10, // Default click value
                0, // Click value upgrades
                "source/wildsubmarine.png" // Path to submarine image
            )
            // Add other elements here as needed
        ];

        this.saveGameState();
    }

    saveGameState() {
        console.log("Saving game state");
        localStorage.setItem("points", this.points);

        const elementsArray = this.elements.map(element => ({
            name: element.name,
            DEFAULT_PRICE: element.DEFAULT_PRICE,
            amount: element.amount,
            DEFAULT_CLICK_RATE: element.DEFAULT_CLICK_RATE,
            clickRateUpgrades: element.clickRateUpgrades,
            DEFAULT_CLICK_VALUE: element.DEFAULT_CLICK_VALUE,
            clickValueUpgrades: element.clickValueUpgrades,
            spritePath: element.spritePath
        }));

        localStorage.setItem("elements", JSON.stringify(elementsArray));
    }

    // Add missing methods
    incrementPointsBySecond() {
        this.points += this.pointsPerSecond;
        this.saveGameState();
    }

    incrementPoints() {
        this.points += 1;
        this.saveGameState();
    }
}

export { Model };
