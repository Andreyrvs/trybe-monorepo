/*
  A função average recebe um array (tamanho variável) e retorna a média dos valores recebidos.
  Caso a função receba algum valor não númerico ou um array vazio,
  o valor undefined deve ser retornado.
  Todos os resultados devem ser arredondados para valores inteiros. Ex: 4,6 vira 5; 1,3 vira 1.

  Parâmetros:
    - Um array. Exemplos: [1, 2]; [1, 2, 3, 4, 5]; [1, 2, '3']; [];
  Comportamento:
    - average([2, 2]) // Retorno: 2;
    - average([1, 1]) // Retorno: 1;
    - average([1, '2']) // Retorno: undefined;
*/

const average = (arrayParam) => {
  if (arrayParam.length === 0) {
    return undefined;
  }

  let media = 0;

  for (let index = 0; index < arrayParam.length; index += 1) {
    media += arrayParam[index];
    if (typeof arrayParam[index] !== 'number') {
      return undefined;
    }
  }
  const resultado = Math.round(media / arrayParam.length);
  // console.log(resultado);
  return resultado;
};
console.log(average([]));
// console.log(average([3, 4, 5]));
// console.log(average([0, 0, 0, 0, 0, 0, 0]));
// console.log(average([1, 2, 3]));
// console.log(average([0, 0, 0, 0, 0, 0, 1]));
// console.log(average([47, 63, 122]));

// console.log(average([-11, 2, 5]));
// console.log(average(['-11', -5, 2]));

module.exports = average;
