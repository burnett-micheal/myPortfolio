const Random = Object.freeze({
  int: (min, max) => Math.ceil(min + (Math.random() * (max - min))),
});

export default Random;