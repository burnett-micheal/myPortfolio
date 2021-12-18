const Normal = Object.freeze({
  normalToValue: (normal, range) => range.start + (range.end - range.start) * normal,

  valueToNormal: (value, range) => 1 - ((range.end - value) / (range.end - range.start)),

  range: (start, end) => ({ start, end }),

});

/* 
  const range = MultiNormal.range([0, 0.2, 0.4, 0.6, 0.8, 1], [0, 20, 40, 60, 80, 100]);
  const value = MultiNormal.normalToValue(0.99, range); // Should Be 99
  const normal = MultiNormal.valueToNormal(99, range); // Should Be 0.99
  console.log("VALUE: " + value);
  console.log("NORMAL: " + normal);
*/

const MultiNormal = Object.freeze({
  normalToValue: (normal, range) => {
    let i;
    for (i = 0; i < range.length; i++) if (range[i].normal < normal) break;
    const start = range[i];
    const end = range[i + 1];
    const n = Normal.valueToNormal(normal, { start: start.normal, end: end.normal });
    return Normal.normalToValue(n, { start: start.value, end: end.value });
  },

  valueToNormal: (value, range) => {
    let i;
    for (i = 1; i < range.length; i++) {
      const min = range[i - 1].value < range[i].value ? range[i - 1].value : range[i].value;
      const max = range[i - 1].value > range[i].value ? range[i - 1].value : range[i].value;
      if (value > min && value < max) break;
    }
    const start = range[i - 1];
    const end = range[i];
    const n = Normal.valueToNormal(value, { start: start.value, end: end.value });
    return Normal.normalToValue(n, { start: start.normal, end: end.normal });
  },

  range: (normals, values) => {
    if (normals.length !== values.length) throw new Error("Normal.js -> Normal.range -> normals and values length must match");
    if (normals[0] !== 0 || normals[normals.length - 1] !== 1) throw new Error("Normal.js -> Normal.range -> normals array must start with 0 and end with 1");
    const range = [];
    let prevNormal = -1;
    for (let i = 0; i < normals.length; i++) {
      range.push({ normal: normals[i], value: values[i] });
      if (!(typeof values[i] === 'number' && isFinite(values[i]))) throw new Error("Normal.js -> Normal.range -> values array must only include numbers");
      if (normals[i] <= prevNormal) {
        throw new Error("Normal.js -> Normal.range -> normals array must be in least to greatest order");
      } else {
        prevNormal = normals[i];
      }
    }
    return range;
  },
});

export { Normal, MultiNormal };