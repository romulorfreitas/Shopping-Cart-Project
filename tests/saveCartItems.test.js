const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');
const empty = '';
// const itemOnLocal = cartItems.innerHTML;
localStorageSimulator('setItem');

describe('3 - Teste a função saveCartItems', () => {
  it('Verifica se ao executar saveCartItems com um cartItem como argumento, o método localStorage.setItem é chamado', () => {

    saveCartItems();
    expect(localStorage.setItem).toHaveBeenCalled();
  })

  it('Verifica se ao executar saveCartItems com um cartItem como argumento, o método localStorage.setItem é chamado com dois parâmetros, sendo o primeiro a chave cartItem e o segundo sendo o valor passado como argumento para saveCartItems', () => {

    saveCartItems('');
    expect(localStorage.setItem).toHaveBeenCalledWith('cartItems', JSON.stringify(empty));
  });
  // fail('Teste vazio');
});
