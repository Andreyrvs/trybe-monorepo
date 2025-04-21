const data = require('../data/zoo_data');
// Pesquisa as especies
function getEspeciesById(id) {
  return data.species.find((especie) => especie.id === id);
}
// Monta obj com dados do funcionario
function createObj(employee) {
  const defaut = { id: '', fullName: '', species: [], locations: [] };

  defaut.id = employee.id;
  defaut.fullName = `${employee.firstName} ${employee.lastName}`;

  employee.responsibleFor.forEach((idSpecie) => {
    const especieEncontrada = getEspeciesById(idSpecie);
    defaut.species.push(especieEncontrada.name);
    defaut.locations.push(especieEncontrada.location);
  });
  return defaut;
}

function getEmployee({ name, id }) {
  if (id !== undefined) {
    return data.employees.find((funcionario) => funcionario.id === id);
  }
  return data.employees.find((funcionario) => funcionario.firstName === name
  || funcionario.lastName === name);
}

function getEmployeesCoverage(param) {
  // seu código aqui
  if (param === undefined) {
    return data.employees.map((achaEmployee) => createObj(achaEmployee));
  }
  const saveEmployee = getEmployee(param);
  if (saveEmployee === undefined) {
    throw new Error('Informações inválidas');
  }

  return createObj(saveEmployee);
}

// console.log(getEmployeesCoverage({ id: '4b40a139-d4dc-4f09-822d-ec25e819a5ad' }));
// console.log(getEmployeesCoverage());
// console.log(getEmployee({ name: 'Spry' }));

// {
//   "id": "4b40a139-d4dc-4f09-822d-ec25e819a5ad", // id da pessoa
//   "fullName": "Sharonda Spry", // nome completo: firstName + lastName
//   "species": [ "otters", "frogs" ], // espécies as quais a pessoa é responsável
//   "locations": [ "SE", "SW" ], // Um array contendo todas as localizações das espécies
// }

module.exports = getEmployeesCoverage;
