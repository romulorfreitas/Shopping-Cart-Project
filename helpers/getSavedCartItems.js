// const getSavedCartItems = () => {
//   // seu código aqui
//   localStorage.getItem('cartItem');
// };
const getSavedCartItems = () => localStorage.getItem('cartItems');

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}
