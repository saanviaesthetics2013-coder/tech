function terminal() {
  return `
    <div id="term"></div>
    <input id="cmd">
  `;
}

document.addEventListener("keydown", e => {
  if (e.key === "Enter") {
    let cmd = document.getElementById("cmd")?.value;
    let term = document.getElementById("term");

    if (!cmd) return;

    term.innerHTML += `<div>> ${cmd}</div>`;

    switch(cmd) {
      case "ai":
        openModule("ai");
        term.innerHTML += "<div>Launching AI...</div>";
        break;
      case "game":
        openModule("game");
        break;
      case "help":
        term.innerHTML += "<div>Commands: ai, game, clear</div>";
        break;
      case "clear":
        term.innerHTML = "";
        break;
      default:
        term.innerHTML += "<div>Command not found</div>";
    }
  }
});
