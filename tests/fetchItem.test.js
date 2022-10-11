require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
  // implemente seus testes aqui
  it('1.1 - Verifica se fetchItem é uma função.', () => {
    expect(fetchItem).toBeInstanceOf(Function);
  });
  it('1.2 - Verifica se ao executar a funcao fetchItem com o parametro \'MLB1615760527\' a fetch foi chamada.', () => {
    fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalled();
  });
  it('1.3 Verifica se a função fetchItem foi chamada com o endpoint correto', () => {
    fetchItem('MLB1615760527');
    const url = 'https://api.mercadolibre.com/items/MLB1615760527';
    expect(fetch).toHaveBeenCalledWith(url);
  })
  it('1.4 Verifica se o retorno da funcao fetchItem com computador como argumento e igual ao objeto computadorSearch', async () => {
    const matchObj2 = await fetchItem('MLB1615760527');
    expect(matchObj2).toEqual(item);
  })
  it('1.5 Verifica se, ao chamar a função fetchItem sem argumento, retorna um erro', async () => {
    expect(await fetchItem(undefined)).toEqual(new Error('You must provide an url'));
  })
  // fail('Teste vazio');
});  
