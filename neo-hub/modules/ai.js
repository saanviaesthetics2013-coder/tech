function ai() {
  return `
    <div id="chat"></div>
    <input id="msg">
    <button onclick="sendMsg()">Send</button>
  `;
}

function sendMsg() {
  let msg = document.getElementById("msg").value;
  let chat = document.getElementById("chat");

  chat.innerHTML += `<div class="msg-user">> ${msg}</div>`;

  let reply = "Analyzing input...";

  let i = 0;
  let aiMsg = document.createElement("div");
  aiMsg.className = "msg-ai";
  chat.appendChild(aiMsg);

  let interval = setInterval(() => {
    if (i < reply.length) {
      aiMsg.innerText += reply[i];
      i++;
    } else clearInterval(interval);
  }, 25);
}
