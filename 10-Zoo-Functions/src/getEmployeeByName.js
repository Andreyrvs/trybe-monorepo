const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  // seu código aqui

  let nomes = {};
  if (!employeeName) return nomes;

  nomes = data.employees.find((acha) => acha.firstName === employeeName
  || acha.lastName === employeeName);

  return nomes;
}

module.exports = getEmployeeByName;
