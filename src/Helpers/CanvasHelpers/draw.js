const Draw = Object.freeze({
  circle: (context, color, centerX, centerY, radius) => {
    context.beginPath();
    context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
    context.fillStyle = color;
    context.fill();
  },

  rectangle: (context, color, startX, startY, width, height) => {
    context.fillStyle = color;
    context.fillRect(startX, startY, width, height);
  },

  polygon: (context, color, vertices) => {
    context.beginPath();
    context.moveTo(vertices[0].x, vertices[0].y);
    for (let vIndex = 1; vIndex < vertices.length; vIndex++) {
      const vertice = vertices[vIndex];
      context.lineTo(vertice.x, vertice.y);
    }
    context.closePath();
    context.fillStyle = color;
    context.fill();
  },

  line: (context, color, startX, startY, endX, endY) => {
    context.beginPath();
    context.moveTo(startX, startY);
    context.lineTo(endX, endY);
    context.strokeStyle = color;
    context.stroke();
  },
});

export default Draw;