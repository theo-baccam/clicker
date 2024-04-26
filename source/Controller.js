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
    }

    bindClickerClick() {
        let clickerButton = document.getElementById("clickerButton");
        
        clickerButton.addEventListener("click", async () => {
            this.model.points += 1;
            this.model.pointsPerSecond += 1;
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
}


export {Controller};