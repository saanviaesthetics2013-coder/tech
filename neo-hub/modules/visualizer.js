function visualizer() {
  return `<canvas id="viz"></canvas>`;
}

navigator.mediaDevices.getUserMedia({audio:true}).then(stream => {
  const audioCtx = new AudioContext();
  const source = audioCtx.createMediaStreamSource(stream);
  const analyser = audioCtx.createAnalyser();

  source.connect(analyser);

  const canvas = document.getElementById("viz");
  const ctx = canvas.getContext("2d");

  function draw() {
    requestAnimationFrame(draw);

    let data = new Uint8Array(analyser.frequencyBinCount);
    analyser.getByteFrequencyData(data);

    ctx.clearRect(0,0,canvas.width,canvas.height);

    data.forEach((v,i)=>{
      ctx.fillRect(i*2, canvas.height, 1, -v);
    });
  }

  draw();
});
