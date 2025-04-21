const data = require('../data/zoo_data');

function countEntrants(entrants) {
  // seu código aqui
  return entrants.reduce((acc, cliente) => {
    if (cliente.age < 18) {
      acc.child += 1;
    }
    if (cliente.age >= 18 && cliente.age < 50) {
      acc.adult += 1;
    }
    if (cliente.age >= 50) {
      acc.senior += 1;
    }
    return acc;
  }, {
    child: 0,
    adult: 0,
    senior: 0,
  });
}

function calculateEntry(entrants) {
  // seu código aqui
  if (entrants === undefined || Object.keys(entrants).length === 0) {
    return 0;
  }
  const quantidade = countEntrants(entrants);

  const { child, adult, senior } = data.prices;
  const result = quantidade.child * child + quantidade.adult * adult + quantidade.senior * senior;
  return result;
}

module.exports = { calculateEntry, countEntrants };
