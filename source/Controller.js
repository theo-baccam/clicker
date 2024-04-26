import {Model} from "./Model.js";
import {View} from "./View.js";


class Controller {
    constructor() {
        this.model = new Model();
        this.view = new View();

        this.pointsPerSecond = 0;

        this.initialize();
    }

    initialize() {
        this.view.displayTotalPoints(this.model.points);
        this.view.displayPointsPerSecond(this.pointsPerSecond)
        this.bindClickerClick();
        this.pointsPerSecondsInterval();
    }

    bindClickerClick() {
        let clickerButton = document.getElementById("clickerButton");
        
        clickerButton.addEventListener("click", async () => {
            this.model.points += 1;
            this.pointsPerSecond += 1;
            await this.model.saveGameState();
            this.view.displayTotalPoints(this.model.points);
        });
    }

    pointsPerSecondsInterval() {
        setInterval(() => {
            this.view.displayPointsPerSecond(this.pointsPerSecond);
            this.pointsPerSecond = 0;
        },
        1000
        )
    }
}


export {Controller};