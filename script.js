// Esse tipo de comentário que estão antes de todas as funções são chamados de JSdoc,
// experimente passar o mouse sobre o nome das funções e verá que elas possuem descrições! 
// Fique a vontade para modificar o código já escrito e criar suas próprias funções!

const item = document.querySelector('.items');
const cartItems = document.querySelector('.cart__items');
// const itemAdd = document.querySelector('.item__add');
let storage = [];
// console.log(cartItems2);
// const totalprice = [];

/**
 * Função responsável por criar e retornar o elemento de imagem do produto.
 * @param {string} imageSource - URL da imagem.
 * @returns {Element} Elemento de imagem do produto.
 */
const createProductImageElement = (imageSource) => {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
};

/**
 * Função responsável por criar e retornar qualquer elemento.
 * @param {string} element - Nome do elemento a ser criado.
 * @param {string} className - Classe do elemento.
 * @param {string} innerText - Texto do elemento.
 * @returns {Element} Elemento criado.
 */
const createCustomElement = (element, className, innerText) => {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
};

/**
 * Função responsável por criar e retornar o elemento do produto.
 * @param {Object} product - Objeto do produto. 
 * @param {string} product.id - ID do produto.
 * @param {string} product.title - Título do produto.
 * @param {string} product.thumbnail - URL da imagem do produto.
 * @returns {Element} Elemento de produto.
 */
const createProductItemElement = ({ id, title, thumbnail }) => {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item_id', id));
  section.appendChild(createCustomElement('span', 'item__title', title));
  section.appendChild(createProductImageElement(thumbnail));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));

  return section;
};

const cartItemClickListener = (a, obj) => {
  const objToArray = JSON.parse(getSavedCartItems());
  storage = objToArray.filter((e) => e.id !== obj.id);
  saveCartItems(storage);
  // console.log(a.target);
  a.target.remove();
};

const createCartItemElement = ({ id, title, price }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `ID: ${id} | TITLE: ${title} | PRICE: $${price}`;
  li.addEventListener('click', (e) => {
    const item2 = { id, title, price };
    cartItemClickListener(e, item2);
  });
  const getObj = { id, title, price };
  storage.push(getObj);
  saveCartItems(storage);
  return li;
};

async function handleClickEvent(e) {
  const productInfo = await fetchItem(e);
  // storage.push(productInfo);
  saveCartItems(storage);
  cartItems.appendChild(createCartItemElement(productInfo));
}

const itemToCart = () => {
  const buttom = document.querySelectorAll('.item');
  // console.log(buttom);
  buttom.forEach((e) => {
    // const itemAdd = document.querySelector('.item__add');
    // console.log(itemAdd);
    const getLastChild = e.lastChild;
    const id = e.firstChild;
    // console.log(id);
    // console.log(buttom);
    getLastChild.addEventListener('click', () => {
      handleClickEvent(id.innerHTML);
      // console.log(target);
    });
  });

  // item.addEventListener('click', (event) => {
  //   const eventTarget = event.target.parentNode.firstChild.innerHTML;
  //   handleClickEvent(eventTarget);
  // });
};

const searchProduct = async () => {
  const data = await fetchProducts('computador');
  // console.log(data.results);
  data.results.forEach((e) => {
    item.appendChild(createProductItemElement(e));
  });
  itemToCart();
};

/**
 * Função que recupera o ID do produto passado como parâmetro.
 * @param {Element} product - Elemento do produto.
 * @returns {string} ID do produto.
 */
/**
 * Função responsável por criar e retornar um item do carrinho.
 * @param {Object} product - Objeto do produto.
 * @param {string} product.id - ID do produto.
 * @param {string} product.title - Título do produto.
 * @param {string} product.price - Preço do produto.
 * @returns {Element} Elemento de um item do carrinho.
 */

const getFromLocal = () => {
  const objToArray = JSON.parse(getSavedCartItems());
  objToArray.forEach((e) => cartItems.appendChild(createCartItemElement(e)));
  // console.log(bcb);
};

const clearCart = () => {
  const cartItemCLeaned = document.querySelector('.cart__items');
  const emptyCart = document.querySelector('.empty-cart');
  emptyCart.addEventListener('click', () => {
    const objToArray = JSON.parse(getSavedCartItems());
    cartItemCLeaned.innerHTML = '';
    storage = objToArray.splice(0, objToArray.lenght);
    saveCartItems([]);
  });
};

window.onload = () => {
  searchProduct();
  clearCart();
  if (localStorage.cartItems) {
    getFromLocal();
  }
};
