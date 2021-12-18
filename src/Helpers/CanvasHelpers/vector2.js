const Vector2 = Object.freeze({
  v2: (x, y) => ({ x, y }),

  add: (v2, _v2) => ({ x: v2.x + _v2.x, y: v2.y + _v2.y }),

  subtract: (v2, _v2) => ({ x: v2.x - _v2.x, y: v2.y - _v2.y }),

  multiply: (v2, mult) => ({ x: v2.x * mult, y: v2.y * mult }),

  divide: (v2, div) => ({ x: v2.x / div, y: v2.y / div }),

  dotProduct: (v2, _v2) => v2.x * _v2.x + v2.y * _v2.y,

  length: (v2) => Math.sqrt(v2.x * v2.x + v2.y * v2.y),

  normalize: (v2) => {
    const total = Math.abs(v2.x) + Math.abs(v2.y);
    return { x: v2.x / total, y: v2.y / total };
  },

  average: (arrOfV2) => {
    let total = { x: 0, y: 0 };
    for (let i = 0; i < arrOfV2.length; i++) {
      total.x += arrOfV2[i].x;
      total.y += arrOfV2[i].y;
    }
    return { x: total.x / arrOfV2.length, y: total.y / arrOfV2.length };
  },

  distance: (v2, _v2) => Math.pow(Math.pow(v2.x - _v2.x, 2) + Math.pow(v2.y - _v2.y, 2), 0.5),

  rotatePoint: (originV2, pointV2, rotation) => {
    rotation = rotation * 0.0174533; // Converting Degrees To Radians
    const x = Math.cos(rotation) * (pointV2.x - originV2.x) - Math.sin(rotation) * (pointV2.y - originV2.y) + originV2.x;
    const y = Math.sin(rotation) * (pointV2.x - originV2.x) + Math.cos(rotation) * (pointV2.y - originV2.y) + originV2.y;
    return ({ x, y });
  },

  direction: (startV2, endV2) => {
    const subtracted = { x: endV2.x - startV2.x, y: endV2.y - startV2.y };
    const total = Math.abs(subtracted.x) + Math.abs(subtracted.y);
    const normalized = { x: subtracted.x / total, y: subtracted.y / total };
    return normalized;
  },
});

export default Vector2;