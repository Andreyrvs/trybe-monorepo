const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const objEspecie = data.species
    .find((nomeAnimal) => nomeAnimal.name === animal);

  return objEspecie.residents.every((resident) => resident.age > age);
}

module.exports = getAnimalsOlderThan;
