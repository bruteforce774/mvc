import type { Model } from "../types.ts";

function updateView(model: Model): HTMLElement {
    const mainElement = document.createElement("div");
    
    const dieElement = document.createElement("div");
    dieElement.textContent = model.die.toString();
    
    const button = document.createElement("button");
    button.textContent = "Roll Die!";
    
    // Both elements go into mainElement
    mainElement.append(dieElement, button);

    return mainElement;
}

export { updateView }