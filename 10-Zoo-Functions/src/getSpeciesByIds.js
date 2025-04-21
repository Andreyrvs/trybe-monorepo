const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  // seu código aqui
  return ids.map((id) => data.species.find((especie) => id === especie.id));
}

module.exports = getSpeciesByIds;
