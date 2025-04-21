const data = require('../data/zoo_data');

function countAnimals(animal) {
  // seu código aqui
  if (!animal) {
    const objEspecies = data.species.reduce((accEspecies, especieAtual) => {
      const objAcumulador = accEspecies;
      objAcumulador[especieAtual.name] = especieAtual.residents.length;
      return objAcumulador;
    }, {});
    return objEspecies;
  }
  const especieEncontrada = data.species.find((especie) => especie.name === animal.specie);

  if (!animal.sex) {
    return especieEncontrada.residents.length;
  }
  return especieEncontrada.residents.reduce((acc, animalAtual) => {
    const saveSex = animal.sex;
    return saveSex === animalAtual.sex ? acc + 1 : acc;
  }, 0);
}

module.exports = countAnimals;
