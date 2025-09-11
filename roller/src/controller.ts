import { model } from "./model.ts";
import { updateView } from "./view.ts";

function rollDie(): void {
    model.die = Math.floor(Math.random() * 6) + 1;
    updateView();
}

export { rollDie };