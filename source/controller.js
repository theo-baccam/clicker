import { Model } from "./Model.js";
import { View } from "./View.js";

class Controller {
    constructor() {
        this.model = new Model();
        this.view = new View();

        this.initialize();
    }

    /**
     * Initialize the game state and view components.
     */
    initialize() {
        // Display initial points and points per second
        this.view.displayTotalPoints(this.model.points);
        this.view.displayPointsPerSecond(this.model.pointsPerSecond);

        // Bind click event on the clicker button
        this.bindClickerClick();

        // Update points per second regularly
        this.updatePointsPerSecondInterval();

        // Display game elements in the shop
        this.displayElements();
    }

    /**
     * Bind click event on the clicker button.
     */
    bindClickerClick() {
        const clickerButton = document.getElementById("clickerButton");

        clickerButton.addEventListener("click", () => {
            // Increment points and points per second
            this.model.incrementPoints();
            this.view.displayTotalPoints(this.model.points);

            // Save game state after each click
            this.model.saveGameState();
        });
    }

    /**
     * Regularly update the points per second.
     */
    updatePointsPerSecondInterval() {
        setInterval(() => {
            // Increment points based on points per second
            this.model.incrementPointsBySecond();
            
            // Update view components
            this.view.displayTotalPoints(this.model.points);
            this.view.displayPointsPerSecond(this.model.pointsPerSecond);
            
            // Save game state
            this.model.saveGameState();
        }, 1000); // Update every second
    }

    /**
     * Display game elements in the shop.
     */
    displayElements() {
        this.model.elements.forEach(element => {
            this.view.displayElement(element);
        });
    }
}

export { Controller };
