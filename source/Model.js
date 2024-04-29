import {Element} from "./Element.js";

// Model class that handles the game state
class Model {
    constructor() {
        console.log("Initializing Model")

        // Initialize points and points per second
        this.points;
        this.pointsPerSecond = 0;

        // Initialize elements array
        this.elements;

        // Load game state from local storage
        this.loadGameState()
    }

    // Load game state from local storage
    loadGameState() {
        console.log("Attempting to load save");
        if (this.isNewGame()) {
            // If it's a new game, initialize a new game state
            this.newGameState();
            return;
        };

        // Load points from local storage
        this.points = Number(localStorage.getItem("points"));

        // Load elements from local storage
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

    // Check if it's a new game
    isNewGame() {
        console.log("Checking if new game");

        // If points is null in local storage, it's a new game
        if (localStorage.getItem("points") === null) {
            return true;
        };

        return false;
    }

    // Initialize a new game state
    newGameState() {
        console.log("Creating new game save");
        this.points = 0;

        // Initialize default boost chance and boost chance upgrades
        this.DEFAULT_BOOST_CHANCE = 1;
        this.boostChanceUpgrades = 0;

        // Initialize elements
        this.elements = [
            new Element("pickaxe", 10, 0, 1, 0, "assets/pickaxe.png"),
            new Element("drill", 110, 0, 11, 0, "assets/drill.png"),
            new Element("excavator", 1200, 0, 120, 0, "assets/excavator.png"),
            new Element("borer", 13000, 0, 1300, 0, "assets/borer.png"),
        ];

        // Save the new game state to local storage
        this.saveGameState();
    }

    // Save game state to local storage
    saveGameState() {
        console.log("Saving game state");
        localStorage.setItem("points", this.points);

        // Convert elements to a format that can be stored in local storage
        let elementsArray = []
        for (let i = 0; i < this.elements.length; i++) {
            let element = this.elements[i];
            let elementObject = {
                "name": element.name,
                "DEFAULT_PRICE": element.DEFAULT_PRICE,
                "amount": element.amount,
                "DEFAULT_CLICK_VALUE": element.DEFAULT_CLICK_VALUE,
                "clickValueUpgrades": element.clickValueUpgrades,
                "spritePath": element.spritePath
            };
            elementsArray.push(elementObject);
        };

        // Save elements to local storage
        localStorage.setItem("elements", JSON.stringify(elementsArray));
    }

    // Log the current game state to the console
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

// Export the Model class
export {Model};