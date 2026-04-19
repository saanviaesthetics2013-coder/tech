const palette = document.getElementById("palette");

document.addEventListener("keydown", e => {
  if (e.ctrlKey && e.key === "k") {
    palette.classList.toggle("hidden");
  }
});

document.getElementById("palette-input")?.addEventListener("keydown", e => {
  if (e.key === "Enter") {
    let val = e.target.value;

    if (val === "ai") openModule("ai");
    if (val === "game") openModule("game");
    if (val === "terminal") openModule("terminal");

    palette.classList.add("hidden");
  }
});
