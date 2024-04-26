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
        this.bindClickerClick();
    }

    bindClickerClick() {
        let clickerButton = document.getElementById("clickerButton");
        
        clickerButton.addEventListener("click", async () => {
            this.model.points += 1;
            await this.model.saveGameState();
            this.view.displayTotalPoints(this.model.points);
        });
    }
}


export {Controller};