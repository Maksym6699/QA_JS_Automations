const car1 = {
  brand: 'Toyota',
  model: 'Rav4',
  year: 2025,
};

const car2 = {
  brand: 'Mazda',
  model: 'CX-5',
  owner: 2026,
};

const car3 = {
  ...car1,
  ...car2,
};

console.log(car3);
