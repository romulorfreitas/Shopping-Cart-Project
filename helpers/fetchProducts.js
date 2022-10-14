// const fetch = require('node-fetch');

const fetchProducts = async (searchProducts) => {
  // seu código aqui
  try {
    const url = `https://api.mercadolibre.com/sites/MLB/search?q=${searchProducts}`;
    const request = await fetch(url);
    const data = await request.json();
    // console.log(data);
    return data;
  } catch (error) {
    return error;
  }
};
// console.log(fetchProducts('computador'));

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}