class AudioVisualizer {
  constructor(audio, canvas, container, backgroundColor){
    const ctx = new AudioContext();
    const src = ctx.createMediaElementSource(audio);
    const analyzer = ctx.createAnalyser();
    src.connect(analyzer);
    src.connect(ctx.destination);
    
    const audioData = {audio, ctx, src, analyzer};

    this.animate(container, canvas, audioData, container.clientWidth, container.clientHeight);
    this.backgroundColor = backgroundColor; 
  }

  getBarHeights = (audioData, barCount, maxHeight) => {
    const freqData = new Uint8Array(audioData.analyzer.frequencyBinCount);
    audioData.analyzer.getByteFrequencyData(freqData);

    const barHeights = [];
    const inc = Math.floor((freqData.length/4) / barCount);

    const average = (start, end, array) => {
      let total = 0;
      let count = (end - start) + 1;
      for(let i = start; i < end; i++) {
        if(array[i] === 0){count--;}else{total+=array[i];}
      }
      return total / count;
    }

    for(let bar = 0; bar < barCount; bar++){
      const start = bar * inc;
      const end = start + inc;
      barHeights.push(maxHeight*(average(start, end, freqData)/255));
    }

    return barHeights;
  }

  animate = async (container, canvas, audioData, maxWidth, maxHeight) => {
    const barCount = 50; // 50 seems to be the best
    const spacer = 2;

    maxWidth = container.clientWidth;
    maxHeight = container.clientHeight;
    canvas.width = maxWidth;
    canvas.height = maxHeight;

    const barHeights = this.getBarHeights(audioData, barCount, maxHeight);
    const barWidth = (maxWidth - (spacer * (barCount-1)))/barCount;

    const ctx = canvas.getContext("2d");
    ctx.fillStyle = this.backgroundColor;
    ctx.fillRect(0,0,canvas.width,canvas.height);
    
    for(let i = 0; i < barCount; i++){
      const barHeight = barHeights[i];
      const opacity = barHeight/maxHeight * 5;
      const sColor = {r: 17, g: 167, b: 151};
      const eColor = {r: 201, g: 221, b: 148};
      const incColor = {r: (eColor.r-sColor.r)/barCount, g: (eColor.g-sColor.g)/barCount, b: (eColor.b-sColor.b)/barCount};
      
      const color = {r: sColor.r + (incColor.r * i), g: sColor.g + (incColor.g * i), b: sColor.b + (incColor.b * i)};
      ctx.fillStyle = `RGBA(${color.r},${color.g},${color.b},${opacity})`;
      ctx.fillRect(Math.floor(i * (barWidth + spacer)),maxHeight-barHeight,barWidth,barHeight);
    }
    requestAnimationFrame(()=>this.animate(container, canvas, audioData, maxWidth, maxHeight));

  }
}

export default AudioVisualizer;