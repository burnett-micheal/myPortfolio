const Color = Object.freeze({
  gradient: (context, startX, startY, endX, endY, colors) => {
    const gradient = context.createLinearGradient(startX, startY, endX, endY);
    const inc = 1 / colors.length;
    for (let cIndex = 0; cIndex < colors.length; cIndex++) gradient.addColorStop(cIndex * inc, colors[cIndex]);
    return gradient;
  },

  rgba: (red, green, blue, alpha) => `rgba(${red},${green},${blue},${alpha})`,
});

export default Color;