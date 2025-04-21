const cartOl = document.querySelector('.cart__items');
const limparCarrinho = document.querySelector('.empty-cart');
const items = document.querySelector('.items');

function createProductImageElement(imageSource) {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
}

function createCustomElement(element, className, innerText) {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
}

// ====== Requisito 01 ======
function createProductItemElement({ id: sku, title: name, thumbnail: image }, callback) {
  const section = document.createElement('section');
  section.className = 'item';
  section.id = sku

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));
  section.addEventListener('click', callback);
  return section;
}

function getSkuFromProductItem(item) {
  return item.querySelector('span.item__sku').innerText;
}

// ===== Requisito 05 ======
function somaPrice() {
  const dataPrice = document.querySelectorAll('.cart__item');
  const valorTotal = Array.from(dataPrice)
  .reduce((acumulador, item) => acumulador + Number(item.getAttribute('data-price')), 0);
  const cart = document.querySelector('.total-price');
  cart.innerHTML = `Total: ${valorTotal}`;
}

// ====== Requisito 03 =====
function cartItemClickListener(event) {
  // coloque seu código aqui
  if (event.target.className !== 'cart__items') {
    event.target.remove();
    somaPrice();
  }
}

cartOl.addEventListener('click', cartItemClickListener);

// ===== Requisito 02 =====
function createCartItemElement({ id: sku, title: name, price: salePrice }) {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  // li.addEventListener('click', cartItemClickListener);
  li.setAttribute('data-price', salePrice);
  return li;
}

// ===== Requisito 02 - criar o carrinho e  Colocar em local storage =====
function addItemCart(event) {
  if (event.target.className === 'item__add') {
    return fetchItem(event.currentTarget.id)
    .then(({ id, title, price }) => {
        cartOl.appendChild(createCartItemElement({ id, title, price }));
        saveCartItems(cartOl.innerHTML);
        somaPrice();
      });
  }
}

// ===== Requisito 07 =====

function addLoad() {
  const p = createCustomElement('p', 'loading', 'carregando...');
  items.appendChild(p);
}

function removeLoad() {
  const load = document.querySelector('.loading');
  load.remove();
}

// ===== Requisito 01 - Lista os items no HTML =====
function showItem() {
fetchProducts('computador').then((resposta) => {
  resposta.results.forEach(({ id, title, thumbnail }) => {
    const elementoHTML = createProductItemElement({ id, title, thumbnail }, addItemCart);
    items.appendChild(elementoHTML);
  });
  removeLoad();
});
}

// ===== Requisito 04 Pega items do local storage e Cria as Li's =====
function recriaCart() {
  cartOl.innerHTML = getSavedCartItems();
}

limparCarrinho.addEventListener('click', () => {
  cartOl.innerHTML = '';
  localStorage.removeItem('cartItems');
});

window.onload = () => {
  addLoad();
  showItem();
  recriaCart();
  somaPrice();
};
