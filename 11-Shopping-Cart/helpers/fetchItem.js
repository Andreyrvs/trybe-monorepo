const API_URL_ITEM = 'https://api.mercadolibre.com/items/';

const fetchItem = async (item) => {
  // seu código aqui
  if (!item) return new Error('You must provide an url');

  const urlItem = `${API_URL_ITEM}${item}`;
  const promiseItem = await (await fetch(urlItem)).json();
 
  return promiseItem;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
