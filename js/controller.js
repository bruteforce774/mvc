import { model } from "./model.js";
import { updateView } from "./view.js";

function rollDie() {
    model.die = Math.floor(Math.random() * 6) + 1;
    updateView();
}

export { rollDie };