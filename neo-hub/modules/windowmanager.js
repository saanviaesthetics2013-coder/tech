let z = 1;

function createWindow(title, content) {
  let win = document.createElement("div");
  win.className = "window";
  win.style.top = "100px";
  win.style.left = "100px";
  win.style.zIndex = z++;

  win.innerHTML = `
    <div class="title">${title}</div>
    <div class="content">${content}</div>
  `;

  document.body.appendChild(win);

  drag(win);

  win.onclick = () => win.style.zIndex = z++;
}

function drag(el) {
  let isDown = false;

  el.querySelector(".title").onmousedown = () => isDown = true;
  document.onmouseup = () => isDown = false;

  document.onmousemove = e => {
    if (isDown) {
      el.style.left = e.clientX + "px";
      el.style.top = e.clientY + "px";
    }
  };
}
