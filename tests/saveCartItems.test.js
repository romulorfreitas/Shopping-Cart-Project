const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');
const empty = '';
localStorageSimulator('setItem');

describe('3 - Teste a função saveCartItems', () => {
  it('Verifica se ao executar saveCartItems com um cartItem como argumento, o método localStorage.setItem é chamado', () => {
    saveCartItems();
    expect(localStorage.setItem).toHaveBeenCalled();
  })

  it('Verifica se ao executar saveCartItems com um cartItem como argumento, o método localStorage.setItem é chamado com dois parâmetros, sendo o primeiro a chave cartItem e o segundo sendo o valor passado como argumento para saveCartItems', () => {
    saveCartItems(empty);
    expect(localStorage.setItem).toHaveBeenCalledWith('cartItems', empty);
  });
  // fail('Teste vazio');
});
