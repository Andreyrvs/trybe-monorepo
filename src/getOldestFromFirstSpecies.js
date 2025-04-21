const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  // seu código aqui
  const employee = data.employees.find((funcionario) => funcionario.id === id);
  const specie = data.species.find((animal) => animal.id === employee.responsibleFor[0]);

  const maisVelho = specie.residents.sort((a, b) => b.age - a.age)[0];
  return Object.values(maisVelho);
}

module.exports = getOldestFromFirstSpecies;
