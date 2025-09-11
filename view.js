function updateView() {
    let html = `
    ${die}<br />
    <button onclick="rollDie()">Roll Die!</button>
    `;

    document.getElementById("app").innerHTML = html;
}

updateView();