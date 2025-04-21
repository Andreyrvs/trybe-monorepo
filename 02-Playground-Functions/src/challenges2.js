// Desafio 10
function techList(tech, name) {
  // seu código aqui
  let yourName = name;
  let newArray = [];
  tech.sort();
  for (let key of tech) {
    let meuObjeto = {
      tech: key,
      name: yourName,
    };
    newArray.push(meuObjeto);
  }
  if (newArray.length === 0) {
    return 'Vazio!';
  }
  return newArray;
}
// ## Desafio 10

// 01 function que recebe um array [] de nomes tech como parametro.
// 02 function recebe 2° parametro chamado `name` com um nome
// 03 para cada tecnologia do array crie um objeto -
// {
//   tech: "NomeTech",
//   name: name
// }
// 04 esse objeto deve ser inseridos em uma nova lista em ordem crescente apartir de tech.
// 05 A saida da function deve ser uma lista de objetos ordenada pelo tech
// 06 Se o arraay estiver vazio deve retornar 'Vazio!'

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
