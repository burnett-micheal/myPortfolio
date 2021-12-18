import { Normal } from "../../Helpers/CanvasHelpers/canvasHelpers";

const updateParticle = (particle, minX, minY, maxX, maxY) => {
  const p = particle;

  p.position.x += (p.direction.x * p.force); // May Need A Variation Upon This To Make Movements Smaller
  p.position.y += (p.direction.y * p.force);

  p.normalToMaxY = Normal.valueToNormal(p.position.y, { start: p.minY, end: maxY });
};

const updateParticles = (particles, minX, minY, maxX, maxY) => particles.forEach(particle => updateParticle(particle, minX, minY, maxX, maxY));

export default updateParticles;