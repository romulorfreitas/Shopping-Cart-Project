require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const item = require('../mocks/item');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  // implemente seus testes aqui
  it('1.1 - Verifica se fetchProducts é uma função.', () => {
    expect(fetchProducts).toBeInstanceOf(Function);
  });
  it('1.2 - Verifica se ao executar a funcao fetchProducts com o parametro \'computador\' a fetch foi chamada.', () => {
    fetchProducts('computador');
    expect(fetch).toHaveBeenCalled();
  });
  it('1.3 Verifica se a função fetchProducts foi chamada com o endpoint correto', () => {
    fetchProducts('computador');
    const url = 'https://api.mercadolibre.com/sites/MLB/search?q=computador';
    expect(fetch).toHaveBeenCalledWith(url);
  })
  it('1.4 Verifica se o retorno da funcao fetchProducts com computador como argumento e igual ao objeto computadorSearch', async () => {
    const matchObj = await fetchProducts('computador');
    expect(matchObj).toEqual(computadorSearch);
  })
  it('1.5 Verifica se, ao chamar a função fetchProducts sem argumento, retorna um erro', async () => {
    expect(await fetchProducts(undefined)).toEqual(new Error('You must provide an url'));
  })
  // fail('Teste vazio');
});
