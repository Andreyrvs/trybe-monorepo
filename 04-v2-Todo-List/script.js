const getInputTextoTarefa = document.getElementById('texto-tarefa');
const getBtnCriaTarefa = document.getElementById('criar-tarefa');
const getOlListaTarefas = document.querySelector('#lista-tarefas');

function setTextInOL() {
  const listaTarefas = document.createElement('li');
  listaTarefas.innerHTML = getInputTextoTarefa.value;
  listaTarefas.id = 'tarefas-content';
  getOlListaTarefas.appendChild(listaTarefas);
  getInputTextoTarefa.value = '';
}

// ========== Coloca texto de input na Ol ========== //
getBtnCriaTarefa.addEventListener('click', () => {
  if (getInputTextoTarefa.value !== '') {
    setTextInOL();
  }
});

// ========== Ao precionar "Enter" Coloca texto de input na Ol ========== //
getInputTextoTarefa.addEventListener('keyup', (event) => {
  if (event.key === 'Enter') {
    setTextInOL();
  }
});

// ========== Seleciona as tarefas ========== //
getOlListaTarefas.addEventListener('click', (event) => {
  const bgColor = document.querySelector('.bgColor');
  if (bgColor) {
    bgColor.classList.remove('bgColor');
  } event.target.classList.add('bgColor');
});

// ========== Marca tarefas completas ========== //
getOlListaTarefas.addEventListener('dblclick', (event) => {
  if (event.target.classList.contains('completed')) {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
});

// ========== Cria os botoẽs ========== //
function generateButtons(textBtn, id) {
  const btnContainer = document.querySelector('.btn-container');
  const buttons = document.createElement('button');
  buttons.innerText = textBtn;
  buttons.id = id;
  buttons.className = 'w3-border w3-round w3-hover-deep-orange';
  buttons.style.marginRight = '20px';
  buttons.style.userSelect = 'none';
  btnContainer.appendChild(buttons);
}

// ========== Simbolos Unicode  ========== //
const cross = '\u2716';
const arrowUp = '\u25B2';
const arrowDown = '\u25BC';

generateButtons(cross, 'remover-selecionado');
generateButtons(arrowUp, 'mover-cima');
generateButtons(arrowDown, 'mover-baixo');
generateButtons('Limpar Lista', 'apaga-tudo');
generateButtons('Remover finalizados', 'remover-finalizados');
generateButtons('Salvar Tarefas', 'salvar-tarefas');

// ========== Apaga a lista  ========== //
const getBtnApagaTudo = document.querySelector('#apaga-tudo');

getBtnApagaTudo.addEventListener('click', () => {
  getOlListaTarefas.innerHTML = '';
});

// ========== Apaga tarefas seliconadas  ========== //
const getBtnRemoverFinalizados = document.getElementById('remover-finalizados');

getBtnRemoverFinalizados.addEventListener('click', () => {
  const getClassCompleted = document.querySelectorAll('.completed');
  for (let index = 0; index < getClassCompleted.length; index += 1) {
    getOlListaTarefas.removeChild(getClassCompleted[index]);
  }
});

// ========== Salva tarefas em localStorage  ========== //
function addLiToLocalStorage() {
  localStorage.setItem('lista', getOlListaTarefas.innerHTML);
}

const getBtnSalvarTarefas = document.querySelector('#salvar-tarefas');

getBtnSalvarTarefas.addEventListener('click', addLiToLocalStorage);

// ========== Pega tarefas em localStorage  ========== //
function getLiToLocalStorage() {
  getOlListaTarefas.innerHTML = localStorage.getItem('lista');
}

/**
 * O requisito 13 foi consultado esse repositorio.
 * Pessoa Estudando [Lucas Flores]
 * https://github.com/tryber/sd-017-project-todo-list/pull/108
 */

// ========== Verifica a tarefa selecionada ========== //
function executeUp(liV) {
  const selectedLi = liV;
  if (selectedLi.classList.contains('bgColor') === true) {
    if (getOlListaTarefas.firstElementChild === selectedLi) {
      alert('Já é o primeiro da lista');
    } else {
      selectedLi.parentElement.insertBefore(selectedLi, selectedLi.previousElementSibling);
    }
  }
}

// ========== Mover-cima  ========== //
function moveUp() {
  const selectedLi = document.querySelector('.bgColor');
  if (selectedLi === null) {
    alert('Nada selecionado');
  } else {
    executeUp(selectedLi);
  }
}

// ========== Move itens da lista com botão de seta Para cima ========== //
const getBtnMoverCima = document.querySelector('#mover-cima');

getBtnMoverCima.addEventListener('click', moveUp);

// ========== Verifica a tarefa selecionada ========== //
function executeDown(liVV) {
  const selectLi = liVV;
  const nextLi = selectLi.nextElementSibling;
  if (getOlListaTarefas.lastElementChild === selectLi) {
    alert('Já é o ultimo da lista!');
  } else {
    getOlListaTarefas.insertBefore(selectLi, nextLi.nextElementSibling);
  }
}

// ========== Mover-baixo  ========== //
function moveDown() {
  const selectLi = document.querySelector('.bgColor');
  if (selectLi === null) {
    alert('Nada selecionado!');
  } else {
    executeDown(selectLi);
  }
}

// ========== Move itens da lista com botão de seta Para baixo ========== //
const getBtnMoverBaixo = document.querySelector('#mover-baixo');

getBtnMoverBaixo.addEventListener('click', moveDown);

/**
 * Fim do consulta ao repositorio da
 * Pessoa estudante [Lucas Flores]
 * https://github.com/tryber/sd-017-project-todo-list/pull/108
 */

// ========== Remove Selecionado  ========== //
const getBtnRemoverSelecionado = document.getElementById('remover-selecionado');

getBtnRemoverSelecionado.addEventListener('click', () => {
  const getClassbgColor = document.querySelector('.bgColor');
  getOlListaTarefas.removeChild(getClassbgColor);
});

// ========== Carrega as tarefas do localStore ao carregar a pagina ========== //
window.onload = () => {
  getLiToLocalStorage();
};
