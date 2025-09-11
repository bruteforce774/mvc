import { updateView } from "./pure/view.ts";
import { model } from "./model.ts";

function render() {
    const app = document.getElementById("app");
    const element = updateView(model);
    app?.replaceChildren(element);
}

export { render };