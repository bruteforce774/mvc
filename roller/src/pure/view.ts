import type { Model } from "../types.ts"

function updateView(model: Model): HTMLElement {
    const mainElement = document.createElement("div");
    const dieElement = document.createElement("div");
    dieElement.textContent = model.die.toString();
    const button = document.createElement("button");
    button.textContent = "Roll Die!";
    dieElement.append(button);
    mainElement.append(dieElement);

    return mainElement;
}

export { updateView };