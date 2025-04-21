const API_URL = 'https://api.mercadolibre.com/sites/MLB/search?q=';

const fetchProducts = async (param) => {
  // seu código aqui
  if (!param) return new Error('You must provide an url');

  const url = `${API_URL}${param}`;
  const promise = await (await fetch(url)).json();

  return promise;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
