import { model } from "./model.js";
import { rollDie } from "./controller.js";

export function updateView() {
    const app = document.getElementById("app");
    app.replaceChildren();
    const dieDisplay = document.createElement("div");
    const roller = document.createElement("button");
    dieDisplay.textContent = model.die;
    roller.textContent = "Roll Die!";
    app.append(dieDisplay, roller);
    roller.addEventListener("click", rollDie);

    /* let html = `
    ${die}<br />
    <button onclick="rollDie()">Roll Die!</button>
    `;

    document.getElementById("app").innerHTML = html; */
}