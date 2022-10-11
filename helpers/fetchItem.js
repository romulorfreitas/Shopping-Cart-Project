// const fetch = require('node-fetch');
const fetchItem = async (searchItem) => {
  // seu código aqui
  try {
    const url = `https://api.mercadolibre.com/items/${searchItem}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
