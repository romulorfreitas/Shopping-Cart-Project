// const { fetchItem } = require("./helpers/fetchItem");
// const CACHE_KEY = 'CURRENCY_LIST';

const saveCartItems = (itemOnLocal) => {
  // const cartItems = document.querySelector('.cart__items');
  // console.log(cartItems);
  // const itemOnLocal = cartItems.innerHTML;
  // console.log(itemOnLocal);
  localStorage.setItem('cartItems', JSON.stringify(itemOnLocal));
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
