const data = require('../data/zoo_data');

function isManager(id) {
  // seu código aqui
  return data.employees.some((funcionario) => funcionario.managers.includes(id));
}

function getRelatedEmployees(managerId) {
  // seu código aqui

  if (!isManager(managerId)) {
    throw Error('O id inserido não é de uma pessoa colaboradora gerente!');
  } else {
    const gerenciados = data.employees.filter((gerente) => gerente.managers.includes(managerId));
    const funcionarios = gerenciados.map((funcionario) =>
      `${funcionario.firstName} ${funcionario.lastName}`);
    return funcionarios;
  }
}

module.exports = { isManager, getRelatedEmployees };
