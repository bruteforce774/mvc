// src/view.ts - Fixed version
import { model } from "./model.ts";
import { rollDie } from "./controller.ts";

export function updateView() {
    const app: HTMLElement | null = document.getElementById("app");
    if (!app) return; // Fix: null check
    
    app.replaceChildren();
    const dieDisplay = document.createElement("div");
    const roller = document.createElement("button");
    dieDisplay.textContent = model.die.toString(); // Fix: convert number to string
    roller.textContent = "Roll Die!";
    app.append(dieDisplay, roller);
    roller.addEventListener("click", rollDie);

    /* let html = `
    ${die}<br />
    <button onclick="rollDie()">Roll Die!</button>
    `;

    document.getElementById("app").innerHTML = html; */
}