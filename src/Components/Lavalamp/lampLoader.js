import updateParticles from "./updateParticles";
import { Color, Draw, Normal, MultiNormal, Random, Vector2 } from "../../Helpers/CanvasHelpers/canvasHelpers";
let activeCanvas = null;

class Particle {
  constructor(position, direction, force, minY, color) {
    this.position = position;
    this.direction = direction;
    this.force = force;
    this.normalToMaxY = 0;
    this.minY = minY;
    this.color = color;
  }
}

const makeParticle = (minX, minY, maxX, maxY, particles) => {
  const position = { x: Random.int(minX, maxX), y: maxY + 200 };
  const endPosition = { x: Random.int(minX, maxX), y: 0 };
  const direction = Vector2.direction(position, endPosition);
  const force = Random.int(3, 5);
  const color = { red: Random.int(1, 10), green: Random.int(1, 10), blue: Random.int(1, 255) };
  const particle = new Particle(position, direction, force, Random.int(minY - maxY * 2, minY), color);
  particles.push(particle);
}

class LampLoader {
  constructor(canvas, container) {
    this.particles = [];
    const maxWidth = container.clientWidth;
    const maxHeight = container.clientHeight;
    canvas.width = maxWidth;
    canvas.height = maxHeight;
    this.activeCanvas = false;
    if (!activeCanvas) { activeCanvas = canvas; this.activeCanvas = true; }
    this.animate(container, canvas, maxWidth, maxHeight);
  }

  animate = async (container, canvas, maxWidth, maxHeight) => {
    if (maxWidth !== container.clientWidth || maxHeight !== container.clientHeight) {
      maxWidth = container.clientWidth;
      maxHeight = container.clientHeight;
      canvas.width = maxWidth;
      canvas.height = maxHeight;
    }

    const updateActiveCanvas = () => {
      Draw.rectangle(ctx, "white", 0, 0, canvas.width, canvas.height); // Background
      Draw.rectangle(ctx, "#888888", canvas.width - 1, 0, canvas.width, canvas.height); // Right Border
      Draw.rectangle(ctx, "#888888", 0, 0, 1, canvas.height); // Left Border

      updateParticles(this.particles, 0, 0, maxWidth, maxHeight);

      // Do Your Coloring Stuff Here
      const particles = this.particles;
      const removeParticles = [];
      particles.forEach(particle => {
        if (particle.normalToMaxY < 0 || particle.position.y < 0 - 100) {
          removeParticles.push(particle);
        } else {
          const opacity = Normal.normalToValue(1 - particle.normalToMaxY, { start: 1, end: 25 }) / 100;
          const radius = Normal.normalToValue(particle.normalToMaxY, { start: 0, end: 50 });
          const color = particle.color;
          Draw.circle(ctx, Color.rgba(color.red, color.green, color.blue, opacity), particle.position.x, particle.position.y, radius);
        }
      });

      removeParticles.forEach(particle => {
        const index = particles.indexOf(particle);
        if (index > -1) particles.splice(index, 1);
      });
      if (Random.int(0, 1000) > 900) makeParticle(0, 0, maxWidth, maxHeight, this.particles);
    };

    const ctx = canvas.getContext("2d");
    if (this.activeCanvas) {
      updateActiveCanvas();
    } else {
      ctx.drawImage(activeCanvas, 0, 0);
    }


    requestAnimationFrame(() => this.animate(container, canvas, maxWidth, maxHeight));
  }
}

export default LampLoader;